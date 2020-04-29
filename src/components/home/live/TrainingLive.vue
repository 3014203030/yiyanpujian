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
          <AdPostList />
        </el-col>
        <el-col :xs="24" :sm="12">
          <AdPostList />
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
