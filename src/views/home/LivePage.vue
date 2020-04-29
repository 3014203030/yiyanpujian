<template>
  <div class="basic-container">
    <div class="live-video-box flex flex-start">
      <div class="live-video-content">
        <div class="live-video-msg left">
          <h3 class="basic-title">{{ liveInfo.title }}</h3>
          <div class="secondary-text flex">
            <p class="flex-auto">文章来源：{{ liveInfo.source }}</p>
            <div class="flex">
              <p>提交时间：{{ liveInfo.writeTime | dateFormat('yyyy-MM-dd') }}</p>
              <span class="tab"></span>
              <p>创建时间：{{ liveInfo.creatTime | dateFormat('yyyy-MM-dd') }}</p>
            </div>
          </div>
          <div class="article-link">
            <el-link type="primary" :href="liveInfo.sourceURL">{{ liveInfo.sourceURL }}</el-link>
          </div>
          <div class="flex">
            <div class="secondary-text flex-auto flex">
              <p>浏览量：{{ liveInfo.views }}</p>
              <p><span class="tab"></span></p>
              <p>点赞量：{{ liveInfo.likes }}</p>
              <p><span class="tab"></span></p>
              <p>下载量：{{ liveInfo.download }}</p>
              <p><span class="tab"></span></p>
              <p>收藏量：{{ liveInfo.berecord }}</p>
            </div>
            <div class="flex">
              <el-tag effect="dark">{{ liveInfo.label }}</el-tag>
              <span class="tab"></span>
              <el-tag type="success" effect="dark">{{ liveInfo.part }}</el-tag>
            </div>
          </div>
          <div class="divider"></div>
        </div>
        <my-video-player :sources-src="sourcesSrc"></my-video-player>
      </div>
      <div class="live-video-list flex-auto flex-column">
        <h4 class="more-live">更多视频</h4>
<!--        <div class="divider"></div>-->
        <el-scrollbar style="height:100%">
          <div v-for="(item, index) in liveList" class="live-video-card">
            <live-card-side :live-info="item"></live-card-side>
          </div>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
  import LiveCardSide from "@/components/home/live/LiveCardSide";
  import MyVideoPlayer from "@/components/common/MyVideoPlayer";

  export default {
    name: "LivePage",
    components: {
      LiveCardSide,
      MyVideoPlayer
    },
    data() {
      return {
        videoId: '',
        sourcesSrc: '',
        liveInfo: {},
        liveList: []
      }
    },
    methods: {
      async initVideoInfo() {
        let res = await this.$http.searchVideoID({
          videoId: this.videoId
        });
        console.log('-------------videoInfo-----------');
        console.log(res);
        this.liveInfo = res.data;
        this.sourcesSrc = res.data.videoURL;
      },
      async getSideLiveList() {
        let res = await this.$http.searchList({});
        console.log('------video-------');
        console.log(res);
        this.liveList = res.data;
      }
    },
    watch: {
      $route: {
        // 监听路由变化，因为keep-alive或者其他原因，这里会一直监听，所以判断是否是undefined，来搜索
        handler() {
          this.videoId = this.$route.query.videoId;
          if (this.videoId) {
            this.initVideoInfo();
          }
        },
        // deep: true,
        immediate: true
      }
    },
    activated() {
      this.videoId = this.$route.query.videoId;
      this.initVideoInfo();
      this.getSideLiveList();
    }
  }
</script>

<style lang="scss">
  .live-video-box {
    padding: 3rem 0;

    .live-video-content {
      width: 70%;
      min-width: 70%;
      padding-right: 40px;
    }

    .live-video-msg {
      padding-bottom: 1rem;

      .article-link {
        padding-bottom: .5rem;
      }

      .secondary-text {
        font-size: .9rem;
        color: rgba(0, 0, 0, .5);
        padding-bottom: .5rem;
      }

      .tab {
        width: 15px;
      }

      .live-video-agency {
        color: rgba(0, 0, 0, .6);
        font-size: 1rem;
        padding-top: .5rem;
      }

      .live-video-anchor {
        color: rgba(0, 0, 0, .6);
        font-size: 1rem;
        padding-top: .5rem;
      }
    }

    .live-video-list {
      height: 600px;

      .more-live {
        text-align: right;
        color: rgba(0, 0, 0, .5);
        padding-bottom: .5rem;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
      }
    }

    .live-video-card {
      padding: .5rem 0;
    }
  }
</style>
