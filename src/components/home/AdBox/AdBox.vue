<template>
  <div class="category-box">
    <div class="entry-thumbnails-17codesign">
      <h3 class="entry-title-17codesign">{{title}}</h3>
      <span class="description-17codesign"><p>{{desc}}</p></span>
      <div class="group-17codesign">
        <img class="lazyloaded"
             :src="img"
        />
      </div>
    </div>
    <a class="u-permalink" href="#"></a>
  </div>
</template>

<script>
  export default {
    name: "AdBox",
    props: {
      title: {
        type: String,
        default: '广告标题'
      },
      desc: {
        type: String,
        default: '点击查看详情>>'
      },
      img: {
        type: String,
        default: 'http://img1.dxycdn.com/2020/0417/088/3408242042617900513-12.jpg'
      }
    }
  }
</script>

<style scoped>
  /*! CSS Used from: https://cao.ylit.cc/wp-content/themes/ripro/assets/css/app.css?ver=6.6.1 ; media=all */
  @media all {
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

    h3 {
      color: #555;
      font-weight: 700;
      line-height: 1.2;
      margin: 0 0 15px;
    }

    p {
      margin: 0 0 15px;
    }

    img {
      display: block;
      height: auto;
      max-width: 100%;
      vertical-align: middle;
    }

    .u-permalink {
      bottom: 0;
      left: 0;
      outline: none;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 50;
    }

    .lazyloaded {
      opacity: 1;
      transition: opacity 0.3s cubic-bezier(0.77, 0, 0.175, 1);
    }

    .category-box {
      position: relative;
      overflow: hidden;
      border-radius: 4px;
    }

    .category-box:hover {
      opacity: 0.8;
      -webkit-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      transition: all 0.3s ease;
    }

    .entry-thumbnails-17codesign {
      background: #fff;
      margin: 0;
      padding: 20px;
      border-radius: 4px;
      border: 1px solid #d7ebff;
      box-shadow: 0 4px 12px 0 rgba(52, 73, 94, 0.1);
      margin: 10px 0;
    }

    .entry-thumbnails-17codesign:before {
      content: "";
      position: absolute;
      width: 4px;
      height: 24px;
      top: 20px;
      left: 0;
      background: linear-gradient(to right, #54d0e2, #7ebbb4);
      box-shadow: 8px 0px 12px 0 rgba(33, 167, 156, 0.6);;
      border-radius: 2px;
    }

    .entry-title-17codesign {
      text-align: left;
      font-size: 18px;
      font-weight: 600;
      color: #34495f;
      margin-bottom: 4px;
    }

    .group-17codesign {
      display: flex;
      justify-content: flex-end;
    }

    .thumbnail-17codesign {
      width: 34px;
      height: 34px;
      margin-right: 10px;
      border-radius: 50%;
      background: #eaeaea;
    }

    .group-17codesign span {
      line-height: 34px;
    }

    .thumbnail-17codesign img {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      border: 2px solid #fff;
      box-shadow: 0 1px 12px rgba(51, 51, 51, 0.1);
    }

    .description-17codesign {
      text-align: left;
      width: 100%;
      display: inline-block;
      font-size: 12px;
      line-height: 24px;
      color: #6b798e;
    }
  }
</style>
