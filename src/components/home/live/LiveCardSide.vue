<template>
  <el-card :body-style="{ padding: '0px', cursor: 'pointer' }" shadow="hover">
    <div  @click="liveCardClick">
      <!--  防止中间4像素高白条  -->
      <div class="live-msg">
        <h4 class="live-title">{{ liveInfo.title }}</h4>
        <p class="live-duration">发布于：{{ liveInfo.writeTime | dateFormat('yyyy-MM-dd') }}</p>
        <!--        <p class="live-agency">{{ liveInfo.agency }}</p>-->
        <div class="live-anchor flex">
          <p class="flex-auto">{{ liveInfo.author }}</p>
          <p>浏览量：{{ liveInfo.views }}</p>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
  export default {
    name: "LiveCardSide",
    props: {
      liveInfo: {
        type: Object
      }
    },
    methods: {
      liveCardClick() {
        this.$router.push({ name: 'Live', query: { videoId: this.liveInfo.videoId } });
        // this.$emit('live-click')
      }
    }
  }
</script>

<style>
  .live-msg {
    padding: .5rem 1.2rem .8rem;
    text-align: left;
  }

  .live-msg .live-title {
    color: var(--color-background);
    line-height: 1.5;
    height: 3rem;
    overflow: hidden;
    margin-bottom: .5rem;
  }

  .live-msg .live-duration {
    color: rgba(0, 0, 0, .4);
    font-size: .7rem;
    padding-bottom: .5rem;
  }

  .live-msg .live-agency {
    color: rgba(0, 0, 0, .6);
    font-size: .8rem;
    padding-bottom: .5rem;
  }

  .live-msg .live-anchor {
    font-size: .8rem;
  }

  .live-msg .live-anchor p {
    margin-bottom: 0;
  }
</style>
