<template>
  <div class="uposts">
    <div class="codesign-list visible lazyloaded"
         style="background-image: url(&quot;https://s1.ax1x.com/2020/04/28/J4huTO.jpg&quot;);">
      <h4 class="codeisgn-h4"><i class="el-icon-s-order"></i> <a href="https://cao.ylit.cc/%e6%a0%b7%e6%9c%ba">标题
        &gt;</a></h4>
      <span class="codesign-esc"><p>这里是广告的类型</p></span>
      <div class="codesign-cover"></div>
    </div>
    <div class="hentry"><h2 class="title"><span class="post-num num-1">1</span><a
      href="#" title="广告标题1">广告标题1</a></h2>
      <div class="meta"><span>热度(6.71K)</span></div>
    </div>
    <div class="hentry"><h2 class="title"><span class="post-num num-2">2</span><a
      href="#" title="广告标题2">广告标题2</a></h2>
      <div class="meta"><span>热度(4.75K)</span></div>
    </div>
    <div class="hentry"><h2 class="title"><span class="post-num num-3">3</span><a
      href="#" title="广告标题3">广告标题3</a></h2>
      <div class="meta"><span>热度(2.77K)</span></div>
    </div>
    <div class="hentry"><h2 class="title"><span class="post-num num-4">4</span><a
      href="#" title="广告标题4">广告标题4</a></h2>
      <div class="meta"><span>热度(2.42K)</span></div>
    </div>
    <div class="hentry"><h2 class="title"><span class="post-num num-5">5</span><a
      href="#" title="广告标题5">广告标题5</a></h2>
      <div class="meta"><span>热度(1.97K)</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AdPostList",
    props: {
      adList: {
        type: Array,
        default: []
      }
    },
  }
</script>

<style scoped>
  @media all{
    a{background-color:transparent;-webkit-text-decoration-skip:objects;}
    ::-webkit-scrollbar{width:10px;height:10px;background-color:#F5F5F5;}
    ::-webkit-scrollbar-track{background-color:#e0e0e0;}
    ::-webkit-scrollbar-thumb{-webkit-box-shadow:inset 0 0 10px rgba(0,0,0,.3);background-color:#34495e;}
    *,*:before,*:after{box-sizing:inherit;}
    a{color:#34495e;text-decoration:none;-webkit-transition:all 0.3s ease;-moz-transition:all 0.3s ease;-o-transition:all 0.3s ease;transition:all 0.3s ease;}
    a:hover{opacity:.8;}
    h2,h4{color:#555;font-weight:700;line-height:1.2;margin:0 0 15px;}
    p{margin:0 0 15px;}
    .lazyloaded{opacity:1;transition:opacity 0.3s cubic-bezier(0.77,0,0.175,1);}
    .uposts{position:relative;display:block;background-color:#fff;margin-bottom:20px;box-shadow:0 1px 2px 0 rgba(0,0,0,.02);border-radius:4px;padding:20px;}
    .uposts .codesign-list{height:90px;background:rgba(51, 51, 51, 0.8);border-radius:4px 4px 0 0;padding:24px;margin:-20px -20px 22px -20px;position:relative;background-size:100%;background-position:center center;}
    .uposts h4.codeisgn-h4{margin-bottom:0;text-align:center;color:#fff;position:relative;z-index:1;}
    .uposts .codeisgn-h4 a{color:#fff;}
    .uposts span.codesign-esc{text-align:center;line-height:38px;color:rgba(255, 255, 255, 0.6);position:relative;z-index:1;display:block;}
    .uposts .codesign-cover{position:absolute;left:0;right:0;top:0;bottom:0;background:#0000008c;border-radius:4px 4px 0 0;z-index:0;}
    .uposts .hentry{margin-bottom:8px;position:relative;display:inline-block;width:100%;text-align:left}
    .uposts .hentry .title{font-size:15px;font-weight:normal;line-height:1.5;margin:0;padding-right:40px;-webkit-line-clamp:1;-webkit-box-orient:vertical;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
    .uposts .hentry .post-num{background-color:#999;color:#fff;display:inline-block;font-size:14px;width:18px;height:18px;line-height:18px;margin:0 8px 0 0;text-align:center;border-radius:4px;}
    .uposts .post-num.num-1{background-color:#F44336;}
    .uposts .post-num.num-2{background-color:#4CAF50;}
    .uposts .post-num.num-3{background-color:#FFC107;}
    .uposts .post-num.num-4{background-color:#00BCD4;}
    .uposts .post-num.num-5{background-color:#2196F3;}
    .uposts .meta{position:absolute;position:absolute;top:0;right:0;color:#999;font-size:13px;}
  }
  /*! CSS Used from: https://cao.ylit.cc/wp-content/themes/ripro/assets/css/external.css?ver=6.6.1 ; media=all */
  @media all{
    .fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}
    .fa-circle-o:before{content:"\f10c";}
  }
</style>
