<template>
  <div>
    <div class="basic-container jasonhide" style="background: rgb(33, 167, 156)">
      <div class="msg flex flex-center-center">
        <p>尊凯普健元康（天津）科技有限公司</p>
        <div style="height: 10px; width: 60px"></div>
        <div class="flex universities">
          <p style="color: rgba(255, 255, 255, .8)">合作院校：</p>
          <p>天津大学</p>
          <p>南开大学</p>
          <p>天津医科大学</p>
          <p>天津中医药大学</p>
        </div>
      </div>
    </div>

    <footer class="site-footer">
      <div class="container">
        <div class="footer-widget">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-3 widget--about">
              <div class="widget--content">
                <div class="footer--logo mb-20">
                  <img class="tap-logo" src="~@/assets/img/logo@black.png" alt="RiMini主题">
                </div>
                <p class="mb-10">尊凯普健元康（天津）有限公司  致力于****等，提供优质选择！</p>
              </div>
            </div>
            <!-- .col-md-2 end -->
            <div class="col-xs-12 col-sm-3 col-md-2 col-md-offset-1 widget--links">
              <div class="widget--title">
                <h5>合作院校</h5>
              </div>
              <div class="widget--content">
                <ul class="list-unstyled mb-0">
                  <li><a href="#">天津大学</a></li>
                  <li><a href="#">南开大学</a></li>
                  <li><a href="#">天津医科大学</a></li>
                  <li><a href="#">天津中医药大学</a></li>
                </ul>
              </div>
            </div>
            <!-- .col-md-2 end -->
            <div class="col-xs-12 col-sm-3 col-md-2 widget--links">
              <div class="widget--title">
                <h5>更多介绍</h5>
              </div>
              <div class="widget--content">
                <ul class="list-unstyled mb-0">
                  <li><a href="#">隐私协议</a></li>
                  <li><a href="#">权限说明</a></li>
                  <li><a href="#">账户中心</a></li>
                </ul>
              </div>
            </div>
            <!-- .col-md-2 end -->
            <div class="col-xs-12 col-sm-12 col-md-4 widget--newsletter">
              <div class="widget--title">
                <h5>快速搜索</h5>
              </div>
              <div class="widget--content">
                <form class="newsletter--form mb-30" action="" method="get">
                  <input type="text" class="form-control" name="s" placeholder="关键词">
                  <button type="submit"><i class="fa fa-arrow-right"></i></button>
                </form>
                <h6>客服邮箱：tju_dingjianxun@qq.com | 天津尊凯</h6>
              </div>
            </div>

          </div>
        </div>		</div>
      <div class="site-info">
        © 2020 Zunkai - Medal Studio &amp; Alone Jason Development. All rights reserved		    		    <a href="http://www.beian.miit.gov.cn" target="_blank" class="text">津ICP备20030001号-1<br></a>
      </div>
    </footer>
  </div>
</template>

<script>
  import AdvertisementSide from "@/views/AdvertisementSide";

  export default {
    name: "GlobalFooter",
    components: {
      AdvertisementSide
    }
  }
</script>

<style>
  .msg {
    padding: 2rem 0;
    color: white;
    font-size: .9rem;
  }

  .universities p {
    padding-right: .7rem
  }
</style>
<style scoped>
  .jasonhide {
    display: none;
  }
  @media all{
    .fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}
    .fa-arrow-right:before{content:"\f061";}
  }
  /*! CSS Used from: https://rimini.ylit.cc/wp-content/themes/rimini/assets/css/app.css?ver=5.3.2 ; media=all */
  @media all{
    footer{display:block;}
    a{background-color:transparent;-webkit-text-decoration-skip:objects;}
    img{border-style:none;}
    button,input{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0;}
    button,input{overflow:visible;}
    button{text-transform:none;}
    button,[type="submit"]{-webkit-appearance:button;}
    button::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0;}
    button:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText;}
    ::-webkit-scrollbar{width:10px;height:10px;background-color:#F5F5F5;}
    ::-webkit-scrollbar-track{background-color:#e0e0e0;}
    ::-webkit-scrollbar-thumb{-webkit-box-shadow:inset 0 0 10px rgba(0,0,0,.3);background-color:#525252;}
    .container{margin-left:auto;margin-right:auto;}
    @media (max-width: 575px){
      .container{max-width:460px;padding-left:10px;padding-right:10px;}
    }
    @media (min-width: 768px){
      .container{max-width:720px;padding-left:15px;padding-right:15px;}
    }
    @media (min-width: 992px){
      .container{max-width:960px;}
    }
    @media (min-width: 1230px){
      .container{max-width:1200px;}
    }
    .row{display:flex;flex-wrap:wrap;margin-left:-15px;margin-right:-15px;}
    .col-sm-3,.col-sm-6,.col-sm-12,.col-md-2,.col-md-3,.col-md-4{min-height:1px;padding-left:15px;padding-right:15px;position:relative;width:100%;}
    @media (min-width: 576px){
      .col-sm-3{flex:0 0 25%;max-width:25%;}
      .col-sm-6{flex:0 0 50%;max-width:50%;}
      .col-sm-12{flex:0 0 100%;max-width:100%;}
    }
    @media (min-width: 768px){
      .col-md-2{flex:0 0 16.666667%;max-width:16.666667%;}
      .col-md-3{flex:0 0 25%;max-width:25%;}
      .col-md-4{flex:0 0 33.333333%;max-width:33.333333%;}
    }
    *,*:before,*:after{box-sizing:inherit;}
    a{color:#34495e;text-decoration:none;transition:all 0.3s ease;}
    a:hover{opacity:.8;}
    h5,h6{color:#223C61;font-weight:700;line-height:1.2;margin:0 0 15px;}
    p{margin:0 0 15px;}
    img{display:block;height:auto;max-width:100%;vertical-align:middle;}
    ul{margin:0;padding-left:0;list-style:none;}
    input[type="text"]{border:0;border-radius:0;font-family:Lato,sans-serif;line-height:36px;margin-bottom:10px;padding:0 12px;transition:border-color cubic-bezier(0.77,0,0.175,1);width:100%;border:1px solid #f1f1f1;}
    button[type="submit"]{border:none;border-radius:4px;color:#fff;cursor:pointer;display:inline-block;font-family:Lato,sans-serif;font-size:11px;font-weight:900;letter-spacing:1px;line-height:1;outline:none;padding:12px 20px;text-align:center;text-transform:uppercase;background-color:#6e4ff6;}
    button[type="submit"]:hover{transition:all .3s ease-in-out;background-color:#502bf4;}
    .mb-0{margin-bottom:0!important;}
    .mb-10{margin-bottom:10px!important;}
    .mb-20{margin-bottom:20px!important;}
    .mb-30{margin-bottom:30px!important;}
    .site-footer{background-color:#e7e8ed;color:#ccc;padding:0;text-align:center;}
    .site-footer a{font-weight:500;}
    .site-footer .site-info{width:100%;font-size:13px;background:#192027;padding:20px;margin:0 auto;}
    .site-footer .site-info a{color:#ccc;}
    .footer-widget{padding-top:40px;padding-bottom:20px;text-align:left;border-bottom:1px solid #eee;}
    @media (max-width: 576px){
      .footer-widget{display:none;}
    }
    .footer-widget .widget--title h5{color:#8a8a8a;font-size:14px;font-weight:600;line-height:1;margin-bottom:25px;}
    .footer-widget .footer--logo{margin-bottom:44px;max-width:180px;}
    .footer-widget .widget--about p{font-size:14px;line-height:26px;margin-bottom:30px;color:#555;}
    .footer-widget .widget--links ul li a{font-size:14px;font-weight:500;line-height:24px;margin-bottom:9px;display:block;color:#555;}
    .footer-widget .widget--links ul li:last-of-type a{margin-bottom:0;}
    .footer-widget .widget--newsletter .newsletter--form{position:relative;}
    .footer-widget .widget--newsletter .form-control{background-color:#f5f5f5;border-radius:5px;border:1px solid #f6f6f6;font-size:14px;color:#aaaaaa;height:42px;}
    .footer-widget .widget--newsletter button{background-color:transparent;line-height:40px;color:#a5a5a5;font-size:12px;font-weight:600;position:absolute;top:2px;right:20px;cursor:pointer;border:none;height:auto;padding:0;transition:all .4s ease;}
    .footer-widget .widget--newsletter:hover button{-webkit-transform:translateX(7px);transform:translateX(7px);}
    .footer-widget .widget--newsletter h6{line-height:1;font-weight:500;text-transform:uppercase;font-size:12px;margin-bottom:24px;}
    .form-control{font-family:'Poppins',sans-serif;background-color:#f8f8f8;border:1px solid #eeeeee;font-size:14px;color:#aaaaaa;line-height:42px;margin-bottom:0;box-shadow:none;-moz-box-shadow:none;-webkit-box-shadow:none;padding:0 18px;border-radius:3px;}
    .form-control:focus{border-color:#64ddbb;box-shadow:none;-moz-box-shadow:none;-webkit-box-shadow:none;}
    .form-control::-webkit-input-placeholder{color:#aaaaaa;}
    .form-control:-moz-placeholder{color:#aaaaaa;}
    .form-control::-moz-placeholder{color:#aaaaaa;}
    .form-control:-ms-input-placeholder{color:#aaaaaa;}
    .list-unstyled{padding-left:0;list-style:none;margin:0;padding:0;}
  }
  /*! CSS Used from: Embedded */
  button[type="submit"]{background-color:#5b5b5b;}

</style>
