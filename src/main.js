import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// vue-video-player
import VideoPlayer from 'vue-video-player'

// font-awesome
import 'font-awesome/scss/font-awesome.scss'

require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');

import 'videojs-contrib-hls'  //单是 RTMP 的话不需要第三方库，如果是 HLS 的话需要引入videojs-contrib-hls，看具体情况而定。

Vue.use(VideoPlayer);

Vue.config.productionTip = false

import myElementUI from './elementUI'

myElementUI();

import HTTP from "@/networks/http";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

Vue.prototype.$http = HTTP;

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next();
});

// 过滤器设置
import { dateFormat } from "@/util/timeUtils";

Vue.filter('dateFormat', (date, fmt) => {
  return dateFormat(new Date(date), fmt)
});

Vue.filter('fullPicUrl', (uri) => {
  return HTTP.IMG_PREFIX + uri;
})
