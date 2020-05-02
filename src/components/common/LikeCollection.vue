<template>
  <div>
    <div class="secondary-text flex">
      <p>
        <i class="el-icon-view el-icon--right"></i>
        <span>浏览量：{{ infoItems.views }}</span>
      </p>
      <span class="tab"></span>
      <p @click="itemClick('likes')">
        <i class="el-icon-s-opportunity el-icon--right" :class="infoItems.likes > info.likes ? 'el-icon--active': ''"></i>
        <span>点赞量：{{ infoItems.likes }}</span>
      </p>
      <span class="tab"></span>
      <p>
        <i class="el-icon-document-checked el-icon--right"></i>
        <span>下载量：{{ infoItems.download }}</span>
      </p>
      <span class="tab"></span>
      <p @click="itemClick('berecord')">
        <i class="el-icon-star-on el-icon--right" :class="infoItems.berecord > info.berecord ? 'el-icon--active': ''"></i>
        <span>收藏量：{{ infoItems.berecord }}</span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LikeCollection",
    props: {
      info: {
        type: Object,
        default() {
          return {
            views: Math.floor(Math.random()*1000),
            likes: Math.floor(Math.random()*1000),
            download: Math.floor(Math.random()*1000),
            berecord: Math.floor(Math.random()*1000)
          }
        }
      },
      uuid: String
    },
    watch: {
      info: {
        handler(newVal) {
          this.infoItems.views = newVal.views;
          this.infoItems.likes = newVal.likes;
          this.infoItems.download = newVal.download;
          this.infoItems.berecord = newVal.berecord;
        },
        immediate: true
      }
    },
    data() {
      return {
        infoItems: {
          views: 0,
          likes: 0,
          download: 0,
          berecord: 0
        }
      }
    },
    methods: {
      itemClick(field) {
        if (this.infoItems[field] > this.info[field]) this.infoItems[field]--;
        else this.infoItems[field]++;
      },
      async updateArticleData(type) {
        let res = await this.$http.updateArticleData({
          uuid: this.uuid,
          type: type
        })
      }
    },
    activated() {
      // this.infoItems.views = parseInt(this.info.views);
      // this.infoItems.likes = parseInt(this.info.likes);
      // this.infoItems.download = parseInt(this.info.download);
      // this.infoItems.berecord = parseInt(this.info.berecord);
    },
    deactivated() {
      // if (this.infoItems['likes'] > this.info['likes']) this.updateArticleData(2);
      // if (this.infoItems['berecord'] > this.info['berecord']) this.updateArticleData(3);
    }
  }
</script>

<style lang="scss">
  .el-icon--right {
    padding-right: 3px;
    font-size: 1rem;
    font-weight: bold;
  }

  .el-icon--active {
    color: var(--color-background);
  }

  .secondary-text {
    font-size: .9rem;
    color: rgba(0, 0, 0, .5);
    padding-bottom: .5rem;
  }

  .tab {
    display: inline-block;
    width: 15px;
  }
</style>
