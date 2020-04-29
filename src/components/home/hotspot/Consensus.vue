<template>
  <div class="consensus-box fill-up flex-column">
    <h3 class="title" style="color:rgb(122, 200, 204);padding: 1rem;"><i class="el-icon-notebook-2"></i> 指南共识</h3>
    <div class="main-article-box" @click="hrefClick(mainArticle.uuid)">
      <el-image class="flex-shrink-0"
                style="width: 100%;"
                :src="mainArticle.picURL | fullPicUrl"
                fit="cover"></el-image>
      <div class="main-article-text flex-auto">
        <h3 class="main-article-title ellipsis center">{{ mainArticle.title }}</h3>
        <div class="post-meta">
          <p>{{ typeof(mainArticle.label) !== "string" ? '' : mainArticle.label.replace("[","").replace("]","").replace("'","").replace("'","") }} | {{ mainArticle.part }}</p>
        </div>
        <p class="main-article-content ellipsis left">{{ mainArticle.fullContent }}</p>
      </div>
    </div>
    <el-scrollbar style="height:100%;padding:0 1rem 0 1rem">
      <ul class="widget_list">
        <li v-for="item in articlesList">
          <img style="height:50px;margin: 0 10px 0 0;" :src="item.picURL | fullPicUrl" alt="loading" />
          <div class="post_info">
            <a class="widget_list_title" href="#" @click.stop.self="hrefClick(item.uuid)">{{ item.title }}</a>
            <div class="post-meta">
              <span class="updated">{{typeof(item.label) !== "string" ? '' : item.label.replace("[","").replace("]","").replace("'","").replace("'","")}}</span> | <a style="text-decoration: none" rel="tag">{{item.part}}</a> </div>
          </div>
        </li>
      </ul>
    </el-scrollbar>
  </div>
</template>

<script>
  export default {
    name: "Consensus",
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
          value: '指南共识',
          ifPrepara: false,
          page: 1
        });
        console.log('---------指南共识--------');
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
  .consensus-box {
    height: 820px;
    border-top: 6px solid #54d0e2;
    text-align: left;
    background-color: #fff;
    color: #3e3e3e;

    .main-article-box {
      border-bottom: 1px solid rgba(0,0,0,.1);
      &:hover {
        cursor: pointer;
      }

      .main-article-text {
        padding: 1rem;
        align-self: stretch;
        .main-article-title {
          text-align: left;
          padding: 0;
          color: #7ac8cc;
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
        }
      }
    }

    li {
      margin-left: 1rem;
      font-size: .8rem;
      line-height: 1.5;

      a {
        color: #3e3e3e;
      }
    }

    .el-scrollbar__thumb {
      background-color: rgba(255, 255, 255, .4);
    }

    .el-scrollbar__thumb:hover {
      background-color: rgba(255, 255, 255, .7);
    }
  }
</style>
<style scoped>
  .post-meta {
    margin: 0 0 5px;
    color: rgba(0,0,0,.5);
    font-size: 12px;
  }
  .post-meta p {
    line-height: 1.7rem;
    word-break: break-word;
    word-wrap: break-word;
  }
  .main-article-content {
    font-size: 0.9rem;
    color: rgba(0, 0, 0, .6);
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
</style>
