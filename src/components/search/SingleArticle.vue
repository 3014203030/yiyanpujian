<template>
  <div @click="articleClick">
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <div class="article-content left">
        <h3 class="article-title basic-title">{{ articleInfo.title }}</h3>
        <p class="ellipsis abs">{{ articleInfo.fullContent }}</p>
        <!--      <div class="flex secondary-text">-->
        <!--        <p class="flex-auto">{{ articleInfo.source }}</p>-->
        <!--        <p>{{ articleInfo.writeTime }}</p>-->
        <!--      </div>-->
        <div class="flex">
          <div class="tags flex-auto">
            <el-tag>{{ articleInfo.label }}</el-tag>
            <el-tag type="success">{{ articleInfo.part }}</el-tag>
          </div>
          <div class="flex secondary-text">
            <p>点赞量：{{ articleInfo.likes }}</p>
            <p>浏览量：{{ articleInfo.views }}</p>
            <p>下载量：{{ articleInfo.download }}</p>
            <p>收藏量：{{ articleInfo.berecord }}</p>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "SingleArticle",
    props: {
      articleInfo: Object
    },
    methods: {
      articleClick() {
        this.$emit('article-click', this.articleInfo.uuid)
      }
    }
  }
</script>

<style lang="scss">

  .article-content {
    padding: 1rem 1.5rem;

    .article-title {
      /*margin-bottom: .5rem;*/
    }

    .abs {
      color: rgba(0, 0, 0, .6);
      padding-top: .5rem;
    }

    .secondary-text {
      padding-top: .5rem;
      font-size: .9rem;
      color: rgba(0, 0, 0, .5);

      p {
        padding-right: 2rem;
      }
    }

    .tags {
      padding-top: 1rem;
    }
  }

  .el-tag + .el-tag {
    margin-left: 1rem;
  }
</style>
