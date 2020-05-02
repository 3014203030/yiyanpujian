<template>
  <div class="basic-container gray-background">
    <div class="article-filter">
      <checkbox :checkbox-options="checkboxOptions.label" checkbox-label="标签" @check-box-change="checkboxChange($event, 'label')"></checkbox>
      <checkbox :checkbox-options="checkboxOptions.part" checkbox-label="科室" @check-box-change="checkboxChange($event, 'part')"></checkbox>
<!--      <checkbox :checkbox-options="checkboxOptions.writeTime" checkbox-label="发表时间" @check-box-change="checkboxChange($event, 'writeTime')"></checkbox>-->
      <div class="time-select-box flex">
        <div class="time-select-button">
          <el-button size="small" type="success" plain>发表时间</el-button>
        </div>
        <el-date-picker
          size="small"
          v-model="example.writeTime"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="checkboxOptions.writeTime">
        </el-date-picker>
      </div>
    </div>
    <div class="divider"></div>
    <div class="article-list">
      <div class="article-box" v-for="item in articlesList">
        <single-article :article-info="item" @article-click="articleClick"></single-article>
      </div>
    </div>
    <el-pagination
      style="padding: 1rem 0 2rem"
      background
      small
      layout="prev, pager, next"
      @current-change="handleCurrentChange"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
  import ListFilter from "@/components/search/ListFilter";
  import SingleArticle from "@/components/search/SingleArticle";
  import Checkbox from "@/components/search/Checkbox";

  export default {
    name: "SearchResult",
    components: {
      ListFilter,
      SingleArticle,
      Checkbox
    },
    data() {
      return {
        targetText: '',
        // 这里建议有简略信息和详细信息两个
        articlesList: [],
        checkboxOptions: {
          label: [],
          part: [],
          writeTime: []
        },
        currentPage: 1,
        example: {
          writeTime: []
        }
      }
    },
    methods: {
      // 筛选点击
      checkboxChange(value, label) {
        this.example[label] = value;
        this.textSearch(this.targetText, this.example, this.currentPage)
      },

      // 翻页点击
      handleCurrentChange(val) {
        this.textSearch(this.targetText, this.example, val);
      },
      // 文章搜索
      async textSearch(text, example, page) {
        console.log(JSON.stringify(example));
        let res = await this.$http.articleSearch({
          type: '0',
          value: text,
          ifPrepara: true,
          preparaString: JSON.stringify(example),
          page: page
        });
        console.log('--------文章搜索----------');
        console.log(res);
        this.articlesList = res.data;
      },

      // 文章点击跳转
      articleClick(uuid) {
        // this.$router.push({ name: 'Article', query: { uuid: uuid } });
        let routes = this.$router.resolve({ name: 'Article', query: { uuid: uuid } });
        window.open(routes.href, '_blank');
      },
      // 初始筛选按钮和初始内容
      async initTextSearch(text) {
        // 筛选值
        let res = await this.$http.articleFilter({
          type: '0',
          value: text
        });
        console.log('------------筛选值-----------');
        console.log(res);
        this.checkboxOptions = res.data;
        // this.initFilterFields(res.data);
        this.example = { ...this.checkboxOptions };
        // 默认已选择所有

        let articles = await this.$http.articleSearch({
          type: '0',
          value: text,
          ifPrepara: false,
          page: 1
        });
        console.log('--------文章搜索--------');
        console.log(articles);
        this.articlesList = articles.data;
      }
    },
    watch: {
      $route: {
        // 监听路由变化，因为keep-alive或者其他原因，这里会一直监听，所以判断是否是undefined，来搜索
        handler() {
          this.targetText = this.$route.query.text;
          if (this.targetText) {
            this.initTextSearch(this.targetText);
          }
        },
        // deep: true,
        immediate: true
      }
    }
  }
</script>

<style lang="scss">
  .article-filter {
    padding-top: 2rem;
  }

  .article-box {
    padding: .5rem 0;
  }

  .time-select-box {
    padding: .2rem 0;
    text-align: left;

    .time-select-button {
      margin-right: 2rem;
      width: 100px;

      button {
        width: 100%;
      }
    }
  }
</style>
