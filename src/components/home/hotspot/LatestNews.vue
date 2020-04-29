<template>
  <div class="latest-news-box fill-up flex-column">
    <!--scoped    <h3 class="title"><i class="el-icon-link"></i> 最新资讯</h3>-->
    <span class="title">最新资讯</span>
    <!--scoped    <div class="main-article-box" @click="hrefClick(mainArticle.uuid)">-->
    <!--      <h3 class="main-article-title ellipsis center">{{ mainArticle.title }}</h3>-->
    <!--      <p class="main-article-content ellipsis left">{{ mainArticle.fullContent }}</p>-->
    <!--    </div>-->
    <!--    <div class="divider"></div>-->
    <el-scrollbar style="height:100%;padding:0 1rem">
      <ul class="widget_list">
        <li v-for="item in articlesList">
          <img style="height:50px;margin: 0 10px 0 0;" :src="item.picURL | fullPicUrl" alt="loading" />
          <div class="post_info">
            <a class="widget_list_title" href="#" @click.stop.self="hrefClick(item.uuid)">{{ item.title }}</a>
            <div class="post-meta">
              <span class="updated">{{item.label.replace("[","").replace("]","").replace("'","").replace("'","")}}</span> | <a style="text-decoration: none" rel="tag">{{item.part}}</a> </div>
          </div>
        </li>
      </ul>
    </el-scrollbar>
  </div>
</template>

<script>
  export default {
    name: "LatestNews",
    data() {
      return {
        articlesList: [],
        mainArticle: {
          picURL: "",
          fullContent: "",
          title: "",
          uuid: ""
        }
      }
    },
    methods: {
      hrefClick(uuid) {
        let routes = this.$router.resolve({ name: 'Article', query: { uuid: uuid } });
        window.open(routes.href, '_blank');
      },
      async initMsg() {
        let res = await this.$http.articleSearch({
          type: '2',
          value: '最新咨询',
          ifPrepara: false,
          page: 1
        });
        console.log('---------最新资讯--------');
        console.log(res);
        this.mainArticle = res.data.shift();
        this.articlesList = res.data;
      }
    },
    activated() {
      this.initMsg();
    }
  }
</script>

<style lang="scss">
  .latest-news-box {
    background-color: #fff;
    text-align: left;

    .main-article-box {
      padding-top: .8rem;

      &:hover {
        cursor: pointer;
      }

      .main-article-title {
        max-width: 80%;
        margin: 0 auto;
        padding-bottom: .5rem;
        font-weight: normal;
      }

      .main-article-content {
        font-size: 1rem;
        color: rgba(0, 0, 0, .6);
      }
    }

    li {
      margin-left: 1rem;
      font-size: .8rem;
      line-height: 1.5;

      a {
        color: rgba(0, 0, 0, .6);
      }
    }
  }
</style>
<style scoped>
  .title {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background: var(--color-background);
    padding: 15px 20px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: 1.2px;
    text-transform: uppercase;
  }
  .widget_list li {
    text-decoration: none;
    display: flex;
    border-bottom: 1px solid rgba(0,0,0,.1);
    margin: 0;
    padding: 15px 0px;
    font-size: 12px;
    line-height: 1.3em;
  }
  .widget_list_title {
    text-decoration: none;
    background-color: #fff;
    display: inline-block;
    padding: 3px 0;
    color: rgba(0,0,0,.75);
    font-size: 14px;
    font-weight: 600;
    height: 36px;

    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .post_info {
    height: 100%;
  }
  .post-meta {
    vertical-align: bottom;
    color: rgba(0,0,0,.5);
    bottom: 0;
  }
</style>
