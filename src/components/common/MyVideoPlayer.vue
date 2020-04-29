<template>
  <div class="my-custom-style-video-player">
<!--  把修改样式的代码放到了这里  -->
    <el-card :body-style="{ padding: '3px' }">
      <video-player class="video-player vjs-custom-skin"
                    ref="videoPlayer"
                    :playsinline="true"
                    :options="playerOptions"
                    @play="onPlayerPlay($event)"
                    @pause="onPlayerPause($event)">
      </video-player>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "MyVideoPlayer",
    props: {
      sourcesSrc: {
        type: String,
        default: 'http://39.96.65.14/doctorfile/upload/jww/mda-jigkfzeucn7ha1s6.mp4'
      },
      sourcesType: {
        type: String,
        default: 'video/mp4'
      },
      sourcesPoster: {
        type: String,
        default: ''
      }
    },
    computed: {
      playerOptions() {
        return {
          playbackRates: [0.5, 1.0, 1.5, 2.0], //播放速度
          autoplay: true, //如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            src: this.sourcesSrc/*'http://39.96.65.14/doctorfile/upload/jww/mda-jigkfzeucn7ha1s6.mp4'*/,  // 路径
            type: this.sourcesType/*'video/mp4'*/
          }/*, {
            src: 'http://39.96.65.14/doctorfile/upload/jww/mda-jigkfzeucn7ha1s6.mp4',  // 路径
            type: 'video/mp4'
          }, {
            withCredentials: false,
            type: "application/x-mpegURL", //播放类型，如果为rtmp配置为rtmp/mp4
            src: '' //直播流地址
          }*/],
          poster: this.sourcesPoster,  /*"poster.jpg",*/ //你的封面地址
          width: document.documentElement.clientWidth,
          notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false,
            fullscreenToggle: true //全屏按钮
          }
        }
      }
    },
    data() {
      return {
        // playerOptions: {
        //   playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        //   autoplay: true, //如果true,浏览器准备好时开始回放。
        //   muted: true, // 默认情况下将会消除任何音频。
        //   loop: false, // 导致视频一结束就重新开始。
        //   preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        //   language: 'zh-CN',
        //   aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        //   fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        //   sources: [{
        //     src: 'http://39.96.65.14/doctorfile/upload/jww/mda-jigkfzeucn7ha1s6.mp4',  // 路径
        //     type: 'video/mp4'
        //   }, {
        //     src: 'http://39.96.65.14/doctorfile/upload/jww/mda-jigkfzeucn7ha1s6.mp4',  // 路径
        //     type: 'video/mp4'
        //   }, {
        //     withCredentials: false,
        //     type: "application/x-mpegURL", //播放类型，如果为rtmp配置为rtmp/mp4
        //     src: '' //直播流地址
        //   }],
        //   poster: "poster.jpg", //你的封面地址
        //   width: document.documentElement.clientWidth,
        //   notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        //   controlBar: {
        //     timeDivider: true,
        //     durationDisplay: true,
        //     remainingTimeDisplay: false,
        //     fullscreenToggle: true //全屏按钮
        //   }
        // }
      }
    },
    methods: {
      onPlayerPlay() {
      },
      onPlayerPause() {
      }
    }
  }
</script>

<style lang="scss">
  .my-custom-style-video-player {
    .vjs-custom-skin > .video-js .vjs-big-play-button {
      outline: none;
      border: 0;
      width: 70px;
      border-radius: 50%;
      transition: background-color .1s ease-in-out;
    }

    .video-js:hover .vjs-big-play-button {
      background-color: rgba(0, 0, 0, .7);
    }
  }
</style>
