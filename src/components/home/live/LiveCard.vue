<template>
  <div>
    <el-card class="jasonhide" :body-style="{ padding: '0px', cursor: 'pointer' }" shadow="hover">
      <div @click="liveCardClick">
        <!--  防止中间4像素高白条  -->
        <el-image style="width: 100%; height: 150px" :src="liveInfo.pic" fit="cover" v-if="showPic"></el-image>
        <div class="live-msg">
          <h4 class="live-title">{{ liveInfo.title }}</h4>
          <p class="live-duration">发布于：{{ liveInfo.writeTime | dateFormat('yyyy-MM-dd') }}</p>
          <!--        <p class="live-agency">{{ liveInfo.agency }}</p>-->
          <div class="live-anchor flex">
            <p class="flex-auto">{{ liveInfo.author }}</p>
            <!--          <p>浏览量：{{ liveInfo.views }}</p>-->
            <p>浏览量：{{ 1000 + Math.ceil(Math.random()*1000) }}</p>
          </div>
        </div>
      </div>
    </el-card>
    <article
      class="post post-grid type-post status-publish format-standard has-post-thumbnail hentry category-45 tag-46 tag-48 tag-47"
      @click="liveCardClick"
      style="cursor:pointer;"
    >
      <div class="entry-media">
        <div class="placeholder" style="padding-bottom: 60%;">
          <a href="#" data-no-instant="">
            <el-image style="width: 100%; height: 150px;border-top-left-radius: 4px;border-top-right-radius: 4px"
                      :src="liveInfo.pic" fit="cover" v-if="showPic"></el-image>
          </a>
        </div>
        <div class="entry-format"><i class="el-icon-video-play"></i></div>
      </div>
      <div class="entry-wrapper">
        <header class="entry-header">
          <div class="entry-meta">
                  <span class="meta-category">
                    <a href="#" rel="category"><i class="dot"></i>医研视频</a>
                  </span>
          </div>
          <h2 class="entry-title"><a rel="bookmark">{{ liveInfo.title }}</a></h2></header>
        <div class="entry-footer">
          <ul class="post-meta-box">
            <li class="meta-date">
              <time><i class="el-icon-time"></i> {{ liveInfo.writeTime | dateFormat('yyyy-MM-dd') }}</time>
            </li>
            <li class="meta-price"><span><i class="el-icon-reading"></i> 浏览量：{{ 1000 + Math.ceil(Math.random()*1000) }}</span></li>
          </ul>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
  export default {
    name: "LiveCard",
    props: {
      liveInfo: {
        type: Object
      },
      showPic: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      liveCardClick() {
        this.$router.push({name: 'Live', query: {videoId: this.liveInfo.videoId}});
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
<style scoped>
  .jasonhide {
    display: none;
  }

  @media all {
    article, header {
      display: block;
    }

    a {
      background-color: transparent;
      -webkit-text-decoration-skip: objects;
    }

    img {
      border-style: none;
    }

    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      background-color: #F5F5F5;
    }

    ::-webkit-scrollbar-track {
      background-color: #e0e0e0;
    }

    ::-webkit-scrollbar-thumb {
      -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, .3);
      background-color: #34495e;
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }

    a {
      color: #34495e;
      text-decoration: none;
      -webkit-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      transition: all 0.3s ease;
    }

    a:hover {
      opacity: .8;
    }

    h2 {
      color: #555;
      font-weight: 700;
      line-height: 1.2;
      margin: 0 0 15px;
    }

    img {
      display: block;
      height: auto;
      max-width: 100%;
      vertical-align: middle;
    }

    ul {
      margin: 30px 0;
      padding-left: 30px;
    }

    .post-grid .entry-media {
      margin-bottom: 0;
      position: relative;
    }

    .post-grid .entry-media img {
      margin: 0 auto;
      width: 100%;
      border-radius: 4px 4px 0 0;
    }

    .entry-media {
      margin-bottom: 10px;
      position: relative;
    }

    .entry-media .placeholder {
      background-color: #ffffff;
      height: 0;
      overflow: hidden;
    }

    .entry-media img {
      margin: 0 auto;
      width: 100%;
      overflow: hidden;
    }

    .entry-media img:hover {
      opacity: 0.8;
      -webkit-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      transition: all 0.3s ease;
    }

    .entry-format {
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: 50%;
      color: #fff;
      font-size: 15px;
      height: 25px;
      left: 10px;
      line-height: 25px;
      position: absolute;
      text-align: center;
      top: 10px;
      width: 25px;
    }

    .entry-header {
      word-break: break-all;
    }

    .entry-header .entry-meta {
      align-items: center;
      color: #aaa;
      display: flex;
      flex-wrap: wrap;
      font-size: 11px;
      letter-spacing: .2px;
      margin-bottom: 5px;
      text-align: center;
    }

    .entry-header .entry-meta a {
      color: #aaa;
    }

    .entry-header .entry-meta .meta-category {
      display: flex;
      flex-wrap: wrap;
    }

    .entry-header .entry-meta .meta-category a {
      align-items: center;
      display: flex;
    }

    .entry-header .entry-meta .meta-category .dot {
      background-color: var(--accent-color);
      border-radius: 50%;
      height: 6px;
      margin-right: 5px;
      width: 6px;
      background-color: #fd721f;
    }

    .entry-header .entry-title {
      font-size: 15px;
      font-weight: 600;
      letter-spacing: -0.2px;
      margin-bottom: 0;
    }

    .post-grid .entry-header .entry-title {
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .entry-footer {
      display: block;
    }

    .post-grid .entry-wrapper {
      width: 100%;
    }

    .post-grid {
      margin-bottom: 30px;
      background-color: #FFF;
      border-radius: 4px;
      transition: box-shadow .3s cubic-bezier(.215, .61, .355, 1), transform .3s cubic-bezier(.215, .61, .355, 1), -webkit-box-shadow .3s cubic-bezier(.215, .61, .355, 1), -webkit-transform .3s cubic-bezier(.215, .61, .355, 1);
      transform: translate(0, 0);
      border: 1px solid #eee;
    }

    .post-grid:hover {
      -webkit-box-shadow: 0 34px 20px -24px rgba(136, 161, 206, 0.3);
      box-shadow: 0 34px 20px -24px rgba(136, 161, 206, 0.3);
      -webkit-transform: translateY(-5px);
      transform: translateY(-5px);
      -ms-transform: translateY(-5px);
    }

    @media (max-width: 575px) {
      .post-grid {
        margin-bottom: 20px;
      }
    }
    .post-grid .entry-wrapper {
      padding: 10px 10px 20px 10px;
    }

    @media (max-width: 575px) {
      .entry-header .entry-title {
        font-size: 14px;
        font-weight: 500;
        padding-bottom: 0;
        text-align: left;
      }
    }
    .entry-footer {
      display: block;
    }

    .entry-footer .post-meta-box {
      display: flex;
      padding: 5px 15px;
      font-size: 12px;
      align-items: center;
      justify-content: flex-end;
      border-top: 1px solid #ebeef5;
      color: #b4b4b4;
      margin: -15px;
      margin-top: 10px;
      list-style: none;
    }

    .entry-footer .post-meta-box li:nth-child(1) {
      flex: 1;
      padding: 0;
    }

    .entry-footer .post-meta-box .meta-date {
      color: #555;
      text-align: left
    }

    .entry-footer .post-meta-box .meta-price {
      margin-left: 8px;
      position: relative;
      display: inline-block;
      padding: 1px 6px;
      text-align: center;
      background-color: var(--color-background);
      color: #fff;
      border-radius: 2px;
      line-height: initial;
    }

    .post-grid .entry-header .entry-title {
      text-align: left;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      font-size: 15px;
      color: rgba(0, 0, 0, .8);
      height: 44px;
      line-height: 22px;
      white-space: unset;
      text-overflow: unset;
    }
  }

</style>
