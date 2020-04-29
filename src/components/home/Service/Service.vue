<template>
  <div class="pro_recommend">
    <ul>
      <li>
        <a href="#" class="goods-li-a">
          <img class="item-img" src="~@/assets/img/service/pic_p01.jpg">
          <div class="item-text">
            <strong>全家康健计划</strong>
            <p>120种疾病在线筛查<br>最快5分钟就诊</p>
            <span>查看详情</span>
          </div>
          <i class="i-p-new"></i>
        </a>
      </li>
      <li>
        <a href="#" class="goods-li-a">
          <img class="item-img" src="~@/assets/img/service/pic_p02.jpg">
          <div class="item-text">
            <strong>醇享人生个人高端医疗</strong>
            <p>XXXXXXXXXX<br>XXXXXXXXXXXXX</p>
            <span>查看详情</span>
          </div>

        </a>
      </li>
      <li>
        <a href="#" class="goods-li-a">
          <img class="item-img" src="~@/assets/img/service/pic_p03.jpg">
          <div class="item-text">
            <strong>儿童综合保障</strong>
            <p>XX+XX+XX+XX<br> XXXXXXXXXX</p>
            <span>查看详情</span>
          </div>
          <i class="i-p-free"></i>
        </a>
      </li>
      <li>
        <a href="#" class="goods-li-a">
          <img class="item-img" src="~@/assets/img/service/pic_p06.jpg">
          <div class="item-text">
            <strong>百万守护意外保障</strong>
            <p>XXXXXXXXXXX<br> XXXXXXXXXXXX</p>

            <span>查看详情</span>
          </div>

        </a>
      </li>
      <li>
        <a href="#" class="goods-li-a">
          <img class="item-img" src="~@/assets/img/service/pic_p04.jpg">
          <div class="item-text">
            <strong>免费领20万保险</strong>
            <p>日常出行的保护伞</p>
            <span>免费领取</span>
          </div>
          <i class="i-p-free"></i>

        </a>
      </li>
      <li>
        <a href="#" class="goods-li-a">
          <img class="item-img" src="~@/assets/img/service/pic_p05.jpg">
          <div class="item-text">
            <strong>中老年防癌</strong>
            <p>给父母更多的关爱</p>

            <span>查看详情</span>
          </div>

        </a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Service"
    }
</script>

<style scoped>
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #555;
  }

  .pro_recommend {
    border-radius: 4px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    margin-bottom: 40px;
  }

  .pro_recommend h2 {
    font-size: 20px;
    color: #555;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .pro_recommend ul {
    width: 100%;
    height: auto;
    overflow: hidden;
    background: #fff;
  }

  .pro_recommend ul li {
    float: left;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease 0s;
    width: 319px;
    height: 219px;
    border-right: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
  }

  .pro_recommend ul li:first-child {
    border: none;
    width: 279px;
    height: 440px;
    border-right: 1px solid #ebebeb;
  }

  .pro_recommend ul li:nth-child(2) {
    float: right;
    border: none;
    width: 280px;
    height: 440px;
  }

  .pro_recommend ul li a {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .pro_recommend ul li img {
    position: absolute;
    width: 180px;
    height: 180px;
    bottom: 0;
    right: -40px;
    transition: all 0.3s ease 0s;
    vertical-align: middle;
  }

  .pro_recommend ul li:first-child img {
    width: 240px;
    height: 240px;
  }

  .pro_recommend ul li:nth-child(2) img {
    width: 240px;
    height: 240px;
  }

  .pro_recommend ul li .item-text {
    position: absolute;
    top: 30px;
    left: 30px;
  }

  .pro_recommend ul li .item-text strong {
    display: block;
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 10px;
  }

  .pro_recommend ul li .item-text p {
    font-size: 14px;
    margin-bottom: 30px;
  }

  .pro_recommend ul li .item-text span {
    display: inline-block;
    height: 28px;
    line-height: 28px;
    border: 1px solid #fc6451;
    color: #fc6451;
    font-size: 14px;
    padding: 0 20px;
    border-radius: 2px;
    text-align: center;
    transition: all 0.3s ease 0s;
  }

  .pro_recommend ul li .i-p-hot {
    display: block;
    width: 60px;
    height: 60px;
    background: url(~@/assets/img/service/icon_bg.png) no-repeat 0 -280px;
    position: absolute;
    right: 0px;
    top: 0px;
  }

  .pro_recommend ul li .i-p-new {
    display: block;
    width: 60px;
    height: 60px;
    background: url(~@/assets/img/service/icon_bg.png) no-repeat -80px -280px;
    position: absolute;
    right: 0px;
    top: 0px;
  }

  .pro_recommend ul li .i-p-free {
    display: block;
    width: 60px;
    height: 60px;
    background: url(~@/assets/img/service/icon_bg.png) no-repeat -160px -280px;
    position: absolute;
    right: 0px;
    top: 0px;
  }

  .pro_recommend ul li a:hover .item-img {
    right: -20px;
  }
  .item-img{
    border-width: 0px;
  }
  .pro_recommend ul li a:hover .item-text span {
    background: #fc6451;
    border: 1px solid #fc6451;
    color: #fff;
  }
</style>
