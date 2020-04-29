<template>
  <div>
    <div class="flex jasonhide">
      <div class="logo">
        <img src="~@/assets/img/logo.png" alt="logo" @click="$router.push({name: 'Home'})">
      </div>
      <div class="nav-bar flex-auto flex">
        <div class="basic-item"
             @click="homeClick"
             :class="activeIndex === -1 ? 'active' : ''">
          <p class="zh-name ellipsis">首页</p>
          <p class="en-name ellipsis">HOME</p>
        </div>
        <div class="basic-item"
             v-for="(item, index) in routerList"
             @click="itemClick(index)"
             :class="activeIndex === index ? 'active' : ''"
             :key="index">
          <p class="zh-name ellipsis">{{item.name}}</p>
          <p class="en-name ellipsis">{{item.nameEN}}</p>
        </div>
      </div>
      <div class="nav-bar-input">
        <el-tooltip content="按下回车搜索" placement="bottom" effect="light">
          <el-input v-model="input" placeholder="技术/咨询/话题" suffix-icon="el-icon-search" clearable
                    @keyup.enter.native="inputEnter"></el-input>
        </el-tooltip>
      </div>
    </div>
    <div id="hd" class="clearfix">
      <a href="index.html" class="hd-logo fl">
        <img src="~@/assets/img/logo.png" />
      </a>
      <div class="hd-nav fl flex">
        <ul class="clearfix">
          <li class="on"
              @click="homeClick"
              :class="activeIndex === -1 ? 'active' : ''">
            <h3><a>首页</a></h3>

          </li>
          <li class="on"
               v-for="(item, index) in routerList"
               @click="itemClick(index)"
               :class="activeIndex === index ? 'active' : ''"
               :key="index">
            <h3><a>{{item.name}}</a></h3>

          </li>
        </ul>
        <div class="nav-bar-input">
          <el-tooltip content="按下回车搜索" placement="bottom" effect="light">
            <el-input v-model="input" placeholder="技术/咨询/话题" suffix-icon="el-icon-search" clearable
                      @keyup.enter.native="inputEnter"></el-input>
          </el-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    data() {
      return {
        activeIndex: -1,
        routerList: [
          {
            name: '医疗',
            nameEN: 'TREATMENT',
            path: 'Medical'
          },
          {
            name: '咨询',
            nameEN: 'INFORMATION',
            path: 'Information'
          },
          {
            name: '健康知识',
            nameEN: 'KNOWLEDGE',
            path: 'Knowledge'
          }
        ],
        input: ''
      }
    },
    methods: {
      homeClick() {
        this.activeIndex = -1;
        this.$router.push({name: 'Home'}).catch(err => {
          // 可不管，路由重复问题
        })
      },
      itemClick(index) {
        this.activeIndex = index;
        this.articleSearch(this.routerList[index].name)
      },
      inputEnter() {
        this.activeIndex = -2;
        this.articleSearch(this.input)
      },
      articleSearch(text) {
        console.log(text);
        this.$router.push({name: 'Search', query: {text: text}}).catch(err => {
          // 可不管，路由重复问题
        })
      }
    }
  }
</script>

<style lang="scss">
  .logo {
    align-self: start;

    img {
      display: block;
      width: 163px;
      height: 68px;
      object-fit: fill;
    }
  }

  .nav-bar {
    padding: 1.5rem 2rem;
  }

  .basic-item {
    padding: .3rem 1rem;
    border-right: 1px solid rgba(255, 255, 255, .5);
    text-decoration: none;
    font-weight: 100;
    /*color: var(--color-background-gray);*/
    color: rgba(255, 255, 255, .6);
    transition: color .1s ease;

    &.active {
      color: white;
    }

    .zh-name {
      font-size: 1.5rem;
      padding-bottom: .2rem;
    }

    .en-name {
      font-size: .5rem;
    }
  }

  .nav-bar-input {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 7px 10px;
    color: #fff;
    font-weight: 600;
    -webkit-appearance: none;
    text-align: right;
    position: absolute;
    right: 0;
    .el-input {

    }

    input.el-input__inner {

    }

    .el-input__icon {
      color: var(--color-background);
    }
  }
</style>
<style scoped>
  .jasonhide {
    display: none;
  }
  h3{
    font-weight:500;
    font-size: 18px;
  }
  a{
    font-size: 20px !important;
    cursor: pointer;
  }
  ul{list-style:none;}
  .fl{float:left;}
  .fr{float:right;}
  div{box-sizing:border-box;}
  #hd{height:68px;position:relative;z-index:11;}
  .hd-logo{height:100%;line-height:48px;padding-left:40px;}
  .hd-logo img{vertical-align:middle;max-height:80%;}
  .hd-nav{padding-left:9.3%;}
  .hd-nav ul li{
    float:left;
    padding:0 20px;
  }
  .hd-nav ul li:hover {
    background-color: #e9f6f5;
  }
  .hd-nav ul li:hover h3 a {
    color: #3e3e3e;
  }
  .hd-nav ul li h3 a{display:block;line-height:68px;padding:0 10px;font-size:16px;color:#fff;position:relative;overflow:hidden;}
  .hd-nav ul li h3 a::after{display:block;content:"";width:100%;height:2px;position:absolute;bottom:0;left:0;}
  .hd-nav ul li .sub-inner a{float:left;line-height:24px;display:inline-block;margin:5px 40px;}
  .hd-bar h3{float:left;font-size:14px;line-height:20px;border-right:1px solid #fff;margin:24px 0 0;padding-right:49px;color:#fff;}
  .hd-bar .hd-user .photo img{width:100%;height:100%;}
  .hd-bar .hd-user .dropdown ul li a{display:block;line-height:48px;color:rgba(255,255,255,.5);border-bottom:1px solid rgba(255,255,255,.3);}
  .hd-bar .hd-user .dropdown ul li a:hover{color:#fff;transition:.4s ease;}

  .search-wrapper .input-holder {
    overflow: hidden;
    height: 70px;
    background: rgba(255,255,255,0);
    border-radius:6px;
    position: relative;
    width:70px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  .search-wrapper.active .input-holder {
    border-radius: 50px;
    width:450px;
    background: rgba(0,0,0,0.5);
    -webkit-transition: all .5s cubic-bezier(0.000, 0.105, 0.035, 1.570);
    -moz-transition: all .5s cubic-bezier(0.000, 0.105, 0.035, 1.570);
    transition: all .5s cubic-bezier(0.000, 0.105, 0.035, 1.570);
  }

  .search-wrapper .input-holder .search-input {
    width:100%;
    height: 50px;
    padding:0px 70px 0 20px;
    opacity: 0;
    position: absolute;
    top:0px;
    left:0px;
    background: transparent;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border:none;
    outline:none;
    font-family:"Open Sans", Arial, Verdana;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color:#FFF;
    -webkit-transform: translate(0, 60px);
    -moz-transform: translate(0, 60px);
    transform: translate(0, 60px);
    -webkit-transition: all .3s cubic-bezier(0.000, 0.105, 0.035, 1.570);
    -moz-transition: all .3s cubic-bezier(0.000, 0.105, 0.035, 1.570);
    transition: all .3s cubic-bezier(0.000, 0.105, 0.035, 1.570);

    -webkit-transition-delay: 0.3s;
    -moz-transition-delay: 0.3s;
    transition-delay: 0.3s;
  }
  .search-wrapper.active .input-holder .search-input {
    opacity: 1;
    -webkit-transform: translate(0, 10px);
    -moz-transform: translate(0, 10px);
    transform: translate(0, 10px);
  }

  .search-wrapper .input-holder .search-icon {
    width:70px;
    height:70px;
    border:none;
    border-radius:6px;
    background: #FFF;
    padding:0px;
    outline:none;
    position: relative;
    z-index: 2;
    float:right;
    cursor: pointer;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  .search-wrapper.active .input-holder .search-icon {
    width: 50px;
    height:50px;
    margin: 10px;
    border-radius: 30px;
  }
  .search-wrapper .input-holder .search-icon span {
    width:22px;
    height:22px;
    display: inline-block;
    vertical-align: middle;
    position:relative;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition: all .4s cubic-bezier(0.650, -0.600, 0.240, 1.650);
    -moz-transition: all .4s cubic-bezier(0.650, -0.600, 0.240, 1.650);
    transition: all .4s cubic-bezier(0.650, -0.600, 0.240, 1.650);

  }
  .search-wrapper.active .input-holder .search-icon span {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  .search-wrapper .input-holder .search-icon span::before, .search-wrapper .input-holder .search-icon span::after {
    position: absolute;
    content:'';
  }
  .search-wrapper .input-holder .search-icon span::before {
    width: 4px;
    height: 11px;
    left: 9px;
    top: 18px;
    border-radius: 2px;
    background: #974BE0;
  }
  .search-wrapper .input-holder .search-icon span::after {
    width: 14px;
    height: 14px;
    left: 0px;
    top: 0px;
    border-radius: 16px;
    border: 4px solid #974BE0;
  }

  .search-wrapper .close {
    position: absolute;
    z-index: 1;
    top:24px;
    right:20px;
    width:25px;
    height:25px;
    cursor: pointer;
    -webkit-transform: rotate(-180deg);
    -moz-transform: rotate(-180deg);
    transform: rotate(-180deg);
    -webkit-transition: all .3s cubic-bezier(0.285, -0.450, 0.935, 0.110);
    -moz-transition: all .3s cubic-bezier(0.285, -0.450, 0.935, 0.110);
    transition: all .3s cubic-bezier(0.285, -0.450, 0.935, 0.110);
    -webkit-transition-delay: 0.2s;
    -moz-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }
  .search-wrapper.active .close {
    right:-50px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition: all .6s cubic-bezier(0.000, 0.105, 0.035, 1.570);
    -moz-transition: all .6s cubic-bezier(0.000, 0.105, 0.035, 1.570);
    transition: all .6s cubic-bezier(0.000, 0.105, 0.035, 1.570);
    -webkit-transition-delay: 0.5s;
    -moz-transition-delay: 0.5s;
    transition-delay: 0.5s;
  }
  .search-wrapper .close::before, .search-wrapper .close::after {
    position:absolute;
    content:'';
    background: #FFF;
    border-radius: 2px;
  }
  .search-wrapper .close::before {
    width: 5px;
    height: 25px;
    left: 10px;
    top: 0px;
  }
  .search-wrapper .close::after {
    width: 25px;
    height: 5px;
    left: 0px;
    top: 10px;
  }
  .search-wrapper .result-container {
    width: 100%;
    position: absolute;
    top:80px;
    left:0px;
    text-align: center;
    font-family: "Open Sans", Arial, Verdana;
    font-size: 14px;
    display:none;
    color:#B7B7B7;
  }

</style>
