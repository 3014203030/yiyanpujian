<template>
  <div>
    <h3 class="basic-title">我的文章</h3>
    <div class="add-article-button">
      <el-button icon="el-icon-plus" @click="addArticleClick">写文章</el-button>
    </div>
    <div>
      <div class="article-box" v-for="item in articlesList">
        <single-article :article-info="item" @article-click="articleClick"></single-article>
      </div>
    </div>
    <el-pagination
      style="padding: 1rem 0 2rem; text-align: center"
      background
      small
      layout="prev, pager, next"
      @current-change="handleCurrentChange"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
  import SingleArticle from "@/components/search/SingleArticle";

  export default {
    name: "MyArticles",
    components: {
      SingleArticle
    },
    data() {
      return {
        articlesList: [
          // {
          //   title: '如何正确诊断和处理蛛网膜下腔出血',
          //   source: '中国疾病预防与控制中心',
          //   writeTime: '2020-02-01',
          //   creatTime: '2019-12-29',
          //   sourceURL: 'https://www.baidu.com',
          //   fulltext: '这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容',
          //   picURL: '????晓不得是啥????',
          //   videoURL: '黑人问号',
          //   ifVideo: false,
          //   label: '标签1',
          //   part: '内科',
          //   like: 2522,
          //   view: 82377,
          //   download: 93714,
          //   berecord: 9527  // 迷惑行为，都什么缩写还是什么意思
          // }
        ],
      }
    },
    methods: {
      articleClick(uuid) {
        let routes = this.$router.resolve({ name: 'Article', query: { uuid: uuid } });
        window.open(routes.href, '_blank');
      },
      async getMyArticleByPage(page) {
        let res = await this.$http.articleSearch({
          page: page
        });
        console.log('------getMyArticle------');
        console.log(res);
        this.articlesList = res.data;
      },
      handleCurrentChange(targetPage) {
        this.getMyArticleByPage(targetPage);
      },
      addArticleClick() {
        this.$router.push({ name: 'AddArticle' })
      }
    },
    created() {
      this.getMyArticleByPage(1);
    }
  }
</script>

<style scoped>
  .article-box {
    padding: .5rem 0;
  }

  .add-article-button {
    padding: 1.5rem 0 .5rem 0;
  }

  .add-article-button button {
    width: 100%;
  }
</style>
