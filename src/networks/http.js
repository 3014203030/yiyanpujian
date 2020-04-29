import axios from 'axios'
import store from '@/store'
import { Loading, Message } from "element-ui";

let instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '': '/api',
  timeout: 15000
});
// axios.defaults.timeout = 15000;
// // axios.defaults.baseURL = '/api';
// axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '': '/api';
// // axios.defaults.baseURL = '';

let loading;

function startLoading() {
  loading = Loading.service({
    lock: true,
    text: 'loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}

function endLoading() {
  loading.close()
}

// 拦截器

instance.interceptors.request.use(
  config => {
    startLoading();
    // 权限设置，有问题啊
    // config.headers.token = store.state.userInfo.token;
    return config
  },
  error => {
    Message.error('请求失败，请稍后再试');
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    endLoading();
    return Promise.resolve(response.data)
  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          console.log('请求错误');
          Message.error('请求错误');
          break;
        case 401:
          console.log('未授权');
          Message.error('未授权');
          break;
        case 403:
          console.log('拒绝访问');
          Message.error('拒绝访问');
          break;
        case 404:
          console.log('未找到该资源');
          Message.error('未找到该资源');
          break;
        case 405:
          console.log('请求方法未允许');
          Message.error('请求方法未允许');
          break;
        case 408:
          console.log('请求超时');
          Message.error('请求超时');
          break;
        case 500:
          console.log('服务器端出错');
          Message.error('服务器端出错');
          break;
        case 501:
          console.log('网络未实现');
          Message.error('网络未实现');
          break;
        case 503:
          console.log('服务不可用');
          Message.error('服务不可用');
          break;
        case 505:
          console.log('http版本不支持该请求');
          Message.error('http版本不支持该请求');
          break;
        default:
          console.log(`连接错误${error.response.status}`);
          Message.error(`连接错误${error.response.status}`);
      }
    } else {
      // 连接服务器失败
      console.log('连接服务器失败');
      Message.error('连接服务器失败' + error);
    }
    endLoading();
    return Promise.reject(error.response)
  }
);



// 以下内容待商榷，Promise.resolve()和reject()的后续问题
const HTTP = {};
HTTP.SUCC_CODE = 20000;
HTTP.IMG_PREFIX = 'http://39.96.65.14';

import { USER_API } from "@/networks/userApi";
import { ARTICLE_API } from "@/networks/articleApi";
import { PROJECT_API } from "@/networks/projectApi";
import { TASK_API } from "@/networks/taskApi";
import { FUNDING_API } from "@/networks/fundingApi";
import { FILE_API } from "@/networks/fileApi";
import { VIDEO_API } from "@/networks/videoApi";
import { COMMON_API } from "@/networks/commonApi";

let API_MAPPING = {};
Object.assign(API_MAPPING, USER_API, ARTICLE_API, PROJECT_API, TASK_API, FUNDING_API, FILE_API, VIDEO_API, COMMON_API);

for (let key in API_MAPPING) {
  let api = API_MAPPING[key];
  HTTP[key] = async (
    data,
    config = {}
  ) => {
    let response = {};
    if (api.method === 'post' || api.method === 'put' || api.method === 'patch') {
      try {
        response = await instance[api.method](api.url, data, config);
        // 第二次状态码
        // response = await checkCode(response);
      } catch (e) {
        response = Promise.reject(e)
      }
      return response
    } else if (api.method === 'get' || api.method === 'delete') {
      try {
        let params = data;
        response = await instance[api.method](api.url, params);
        // response = await checkCode(response);
      } catch (e) {
        response = Promise.reject(e)
      }
      return response
    } else {
      Message.error('请求失败，不支持的请求方式');
      return Promise.reject(response)
    }
  }
}

export default HTTP
