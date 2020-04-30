<template>
  <div class="training-live">
    <h3 class="section-title">
      <span><i class="el-icon-video-camera"></i> <a href="#">培训视频</a></span>
    </h3>
    <div class="live-container">
      <el-row :gutter="20">
        <el-col :xs="12" :sm="8" :md="6" v-for="item in liveList.slice(0, 8)">
          <div class="single-live">
            <live-card :live-info="item"></live-card>
          </div>
        </el-col>
      </el-row>
    </div>
    <!--  控制分页8个一页，请求列表的逻辑在这里  -->
<!--    <el-pagination-->
<!--      disabled-->
<!--      style="padding-top: 2rem"-->
<!--      background-->
<!--      small-->
<!--      layout="prev, pager, next"-->
<!--      :total="1000">-->
<!--    </el-pagination>-->
<!--scoped    <div class="flex" style="padding-bottom: 1rem">-->
<!--      <advertisement-side image-url="http://img1.dxycdn.com/2020/0306/951/3400499376224315144-12.png"></advertisement-side>-->
<!--      <advertisement-side image-url="http://img1.dxycdn.com/2020/0317/179/3402550667637347974-12.png"></advertisement-side>-->
<!--      <advertisement-side image-url="http://img1.dxycdn.com/2020/0408/248/3406582566038968374-12.jpg"></advertisement-side>-->
<!--    </div>-->
    <h3 class="section-title" style="margin-top: 30px">
      <span><i class="el-icon-guide"></i> <a href="#">科普视频</a></span>
    </h3>
    <div class="live-container">
      <el-row :gutter="20">
        <el-col :span="6" v-for="item in liveList.slice(8, 16)">
          <div class="single-live">
            <live-card :live-info="item"></live-card>
          </div>
        </el-col>
      </el-row>
    </div>
<!--scoped    <div class="flex" style="padding-bottom: 1rem">-->
<!--      <advertisement-side image-url="http://img1.dxycdn.com/2020/0306/951/3400499376224315144-12.png"></advertisement-side>-->
<!--      <advertisement-side image-url="http://img1.dxycdn.com/2020/0317/179/3402550667637347974-12.png"></advertisement-side>-->
<!--      <advertisement-side image-url="http://img1.dxycdn.com/2020/0408/248/3406582566038968374-12.jpg"></advertisement-side>-->
<!--    </div>-->
    <h3 class="section-title" style="margin-top: 30px">
      <span><i class="el-icon-menu"></i> <a href="#">广告推广</a></span>
    </h3>
    <div class="live-container">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12">
          <AdPostList title="推荐阅读" desc="精选优质文章" img="https://s1.ax1x.com/2020/04/30/JbQQD1.jpg" :ad-list="adList_1" />
        </el-col>
        <el-col :xs="24" :sm="12">
          <AdPostList title="推荐观看" desc="精选优质视频" :ad-list="adList_2" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import AdvertisementSide from "@/views/AdvertisementSide";
  import LiveCard from "@/components/home/live/LiveCard";
  import Advertisement from "@/views/home/Advertisement";
  import AdPostList from "../Service/AdPostList";

  export default {
    name: "TrainingLive",
    components: {
      AdPostList,
      LiveCard,
      Advertisement,
      AdvertisementSide
    },
    data() {
      return {
        liveList: [
        ],
        adList_1: [
          {
            title: '一位上海老师的昭通帮扶生活',
            hot: 10.2,
            href: 'http://news.cctv.com/2020/04/30/ARTIq8F9akqNOgC8Ci88qC6s200430.shtml?spm=C94212.P4YnMod9m2uD.ENPMkWvfnaiV.5'
          },
          {
            title: '生态环境部：一季度地表水国控断面',
            hot: 9.9,
            href: 'http://news.cctv.com/2020/04/30/ARTIbfh9xXljQAaoDGl5rAeC200430.shtml?spm=C94212.P4YnMod9m2uD.ENPMkWvfnaiV.27'
          },
          {
            title: '探究石楼攻坚（讲述·特别报道）',
            hot: 9.7,
            href: 'http://news.cctv.com/2020/04/30/ARTIKDg2GHG422CaN9bj0i6k200430.shtml?spm=C94212.P4YnMod9m2uD.ENPMkWvfnaiV.37'
          },
          {
            title: '蛀牙有遗传性？医生：没有！',
            hot: 8.8,
            href: 'http://news.cctv.com/2020/04/30/ARTITbA1WIiRzSSOu2wJuYrr200430.shtml?spm=C94212.P4YnMod9m2uD.ENPMkWvfnaiV.48'
          },
          {
            title: '中央财政扶贫项目资金支出超790亿元',
            hot: 7.2,
            href: 'http://news.cctv.com/2020/04/30/ARTIwB8F9nD1QViAS5xUz5mk200430.shtml?spm=C94212.P4YnMod9m2uD.ENPMkWvfnaiV.59'
          }
        ],
        adList_2: [
          {
            title: '多地发放消费券 助力市场复苏',
            hot: 11.5,
            href: 'https://tv.cctv.com/2020/04/30/VIDEqmuhsb2L2IeKi0NBh8LN200430.shtml?spm=C28340.P9dhkRStLqPh.E8KuwdzHZQNM.2'
          },
          {
            title: '中国5G网络建设进入加速跑',
            hot: 10.9,
            href: 'https://tv.cctv.com/2020/04/30/VIDEo4OcoJoPFlVGD8FNsh0Y200430.shtml?spm=C28340.P9dhkRStLqPh.E8KuwdzHZQNM.3'
          },
          {
            title: '假期已至:旅行“四件套”你记住了吗？',
            hot: 9.3,
            href: 'https://tv.cctv.com/2020/04/29/VIDEsBysiDDldagzsALbXZcV200429.shtml?spm=C28340.P9dhkRStLqPh.E8KuwdzHZQNM.4'
          },
          {
            title: '万宁东山羊 跳出来的美味',
            hot: 8.9,
            href: 'https://tv.cctv.com/2020/04/29/VIDEJ58c4o3PITyHLm7lqULR200429.shtml?spm=C28340.P9dhkRStLqPh.E8KuwdzHZQNM.8'
          },
          {
            title: '“桃李子歌”童谣谶言',
            hot: 7.8,
            href: 'http://tv.cctv.com/2020/04/28/VIDExQauN7kdKI94E50JPvMo200428.shtml?spm=C28340.P9dhkRStLqPh.EHCkpQbDaJxj.7'
          }
        ]
      }
    },
    methods: {
      async initLiveInfo() {
        let res = await this.$http.searchList({});
        console.log('------video-------');
        console.log(res);
        this.liveList = res.data;
      }
    },
    activated() {
      this.initLiveInfo()
    }
  }
</script>

<style>
  .training-live {
    padding-bottom: 1em;
    background-color: #ecf0f5;
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .training-live h3 {
    text-align: left;
  }

  .single-live {
    padding: 10px 0;
    /* 上下间隔 */
  }
</style>
<style scoped>
  .section-title{font-size:18px;font-weight:500;letter-spacing:.2px;margin-bottom:40px;position:relative;text-align:left;}
  .section-title:before{background-color:#e6e6e6;content:"";height:1px;left:0;margin-top:-1px;position:absolute;top:50%;width:100%;}
  .section-title span{background-color:#f6f6f6;padding:4px 15px;position:relative;letter-spacing:2px;font-weight:600;background:#fff;border-radius:4px;}
  @media (max-width: 767px){
    .section-title{font-size:15px;margin-bottom:20px;}
  }
  .section-title i{
    color:var(--color-background);
  }
  a{background-color:transparent;text-decoration: none;color:var(--color-background);}
</style>
