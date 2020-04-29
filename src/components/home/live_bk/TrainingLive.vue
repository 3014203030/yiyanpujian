<template>
  <div class="training-live">
    <h3><i class="el-icon-link"></i>培训视频</h3>
    <div class="live-container">
      <el-row :gutter="20">
        <el-col :span="6" v-for="item in liveList.slice(0, 8)">
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
    <div class="flex" style="padding-bottom: 1rem">
      <advertisement-side image-url="http://img1.dxycdn.com/2020/0306/951/3400499376224315144-12.png"></advertisement-side>
      <advertisement-side image-url="http://img1.dxycdn.com/2020/0317/179/3402550667637347974-12.png"></advertisement-side>
      <advertisement-side image-url="http://img1.dxycdn.com/2020/0408/248/3406582566038968374-12.jpg"></advertisement-side>
    </div>
    <div class="divider"></div>
    <h3><i class="el-icon-link"></i>科普视频</h3>
    <div class="live-container">
      <el-row :gutter="20">
        <el-col :span="6" v-for="item in liveList.slice(8, 16)">
          <div class="single-live">
            <live-card :live-info="item"></live-card>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="flex" style="padding-bottom: 1rem">
      <advertisement-side image-url="http://img1.dxycdn.com/2020/0306/951/3400499376224315144-12.png"></advertisement-side>
      <advertisement-side image-url="http://img1.dxycdn.com/2020/0317/179/3402550667637347974-12.png"></advertisement-side>
      <advertisement-side image-url="http://img1.dxycdn.com/2020/0408/248/3406582566038968374-12.jpg"></advertisement-side>
    </div>
    <div class="divider"></div>
    <h3><i class="el-icon-link"></i>广告视频</h3>
    <div class="live-container">
      <el-row :gutter="20">
        <el-col :span="6" v-for="item in liveList.slice(16, 24)">
          <div class="single-live">
            <live-card :live-info="item"></live-card>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import AdvertisementSide from "@/views/AdvertisementSide";
  import LiveCard from "@/components/home/live/LiveCard";
  import Advertisement from "@/views/home/Advertisement";

  export default {
    name: "TrainingLive",
    components: {
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
    padding: 2rem 0;
  }

  .training-live h3 {
    text-align: left;
  }

  .single-live {
    padding: 10px 0;
    /* 上下间隔 */
  }
</style>
