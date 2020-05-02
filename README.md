# medicalresearchv2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 医研普建项目前端门户二开文档

## 文件替换

1. /views/home/BigCount.vue
2. /views/home/ArticlePage.vue
3. /src/views/global/GlobalFooter.vue
4. /src/views/global/GlobalHeader.vue
5. /src/components/header/NavBar.vue
6. src/components/home/health/HealthRadius.vue
7. /src/components/home/hotspot/
8. /components/home/Live/

## 文件复制

1. /components/home/Partner/
2. /components/home/Service/
3. /components/home/AdBox/
4. /assets/img（依据情况合并，复制，替换）
5. /src/views/AdvertisementSide.vue
6. /views/home/Login.vue
7. /views/home/ScrollAds.vue
8. /src/Global.js

## 文件修改

> theme.css

修改部分已用scoped关键字注释

```css
/*scoped --color-background-gray: rgb(246, 246, 246);*/
--color-background-gray: #ecf0f5;

/*scoped --box-shadow: rgba(0,0,0,.2) 0 1px 5px 0px;*/
--box-shadow: 0 1px 3px rgba(0,0,0,.1);
--max-width: 1280px;

/*scoped min-width: 1200px;*/
min-width: 760px;
background-color: var(--color-background-gray);

/*scoped padding: 0 7%;*/
padding: 0 4%;

.sticky-container {
  position: -webkit-sticky;
  /*position: fixed !important;*/
  position: sticky !important;
  width: 100%;
  top: 0;
  z-index: 99;
}
.fixed-container {
  position: fixed !important;
  z-index: 99;
}
```

## Main.js 引入

```html
import 'font-awesome/scss/font-awesome.scss'
```

## Npm包安装

```css
npm install font-awesome
$ npm i --save @fortawesome/fontawesome-svg-core
$ npm i --save @fortawesome/free-solid-svg-icons
$ npm i --save @fortawesome/vue-fontawesome
```

## 调整内容

1. 调整页面高度
2. 背景色调整
3. 网页移动端自适应
4. 主题色调整
5. 组件阴影
6. header优化
7. 搜索框优化
8. 轮播图优化
9. 登录按钮优化
10. 新增首页Login登录组件
11. 新增首页合作商组件
12. 新增首页弹窗广告
13. 首页广告组件封装
14. 文章详情页优化

## ES同步文档

1. 下载一个浏览器插件Sense
2. 修改es的地址39.96.65.14，端口号9200
3. 在白框中复制下述代码

    ```html
    DELETE article

    PUT /article
    {
      "mappings": {
          "article":{
                "properties": {
                    "uuid": {
                      "type": "keyword"
                   },
                   "title": {
                      "type": "text",
                      "analyzer": "ik_smart"
                   },
                   "author": {
                      "type": "text",
                      "analyzer": "ik_smart"
                   },
                   "authorID": {
                      "type": "keyword"
                   },
                   "source": {
                      "type": "keyword"
                   },
                   "sourceURL": {
                      "type": "keyword"
                   },
                   "fullContent": {
                      "type": "text",
                      "analyzer": "ik_smart"
                   },
                   "picURL": {
                      "type": "text"
                   },
                   "ifPic": {
                      "type": "keyword"
                   },
                   "writeTime": {
                      "type": "date"
                   },
                   "creatTime": {
                      "type": "date"
                   },
                   "videoURL": {
                      "type": "keyword"
                   },
                    "ifVideo": {
                      "type": "keyword"
                   },
                   "views": {
                      "type": "keyword"
                   },
                   "likes": {
                      "type": "keyword"
                   },
                   "download": {
                      "type": "keyword"
                   },
                   "label": {
                      "type": "text",
                      "analyzer": "ik_smart"
                   },
                   "part": {
                      "type": "keyword"
                   },
                   "berecord": {
                      "type": "keyword"
                   }
                }
          }
      }
    }
    ```

4. 依次点击绿色运行的箭头
5. 在本地跑一遍python代码

## 备注

> 设置淘宝Npm镜像

```html
npm config set registry https://registry.npm.taobao.org
npm config get registry
```
