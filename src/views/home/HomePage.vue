<template>
  <div class="homePage">
    <div class="basic-container">
      <div class="home-page-box">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24">
            <Partner/>
          </el-col>
          <el-col :xs="24" :sm="18">
            <el-row :gutter="12">
              <el-col :xs="24" :sm="24">
                <recommend class="recommend"/>
              </el-col>
              <el-col :xs="24" :sm="12">
                <consensus class="consensus"/>
              </el-col>
              <el-col :xs="24" :sm="12">
                <clinical class="clinical"/>
              </el-col>
              <el-col :xs="24" :sm="24">
                <ScrollAds class="scrollAds"/>
              </el-col>
            </el-row>
          </el-col>
          <el-col :xs="24" :sm="6">
            <big-count></big-count>
            <latest-news class="latest-news" style="height: 450px"/>
            <health-radius class="health-radius" style="height: 450px"/>
            <Login class="login"/>
          </el-col>
        </el-row>
      </div>
    </div>
    <!--scoped    <div class="basic-container flex" style="padding-top: 1rem">-->
    <!--      <advertisement-side image-url="http://img1.dxycdn.com/2020/0306/951/3400499376224315144-12.png"></advertisement-side>-->
    <!--      <advertisement-side image-url="http://img1.dxycdn.com/2020/0317/179/3402550667637347974-12.png"></advertisement-side>-->
    <!--      <advertisement-side image-url="http://img1.dxycdn.com/2020/0408/248/3406582566038968374-12.jpg"></advertisement-side>-->
    <!--    </div>-->
    <div style="height: 1rem"></div>
    <div class="basic-container gray-background">
      <training-live></training-live>
    </div>
    <!--    首页弹窗广告-->
    <el-dialog
      title=""
      :visible.sync="centerDialogVisible"
      width="60%"
      top="20vh"
      lock-scroll
      center>
      <el-image src="https://s1.ax1x.com/2020/04/28/JI3ui4.png"></el-image>
    </el-dialog>
  </div>
</template>

<script>
  import Advertisement from "@/views/home/Advertisement";
  import AdvertisementSide from "@/views/AdvertisementSide";
  import Recommend from "@/components/home/hotspot/Recommend";
  import LatestNews from "@/components/home/hotspot/LatestNews";
  import Consensus from "@/components/home/hotspot/Consensus";
  import Clinical from "@/components/home/hotspot/Clinical";

  import HealthRadius from "@/components/home/health/HealthRadius";
  import TrainingLive from "@/components/home/live/TrainingLive";
  import BigCount from "@/views/home/BigCount";
  import Login from "@/views/home/Login";
  import ScrollAds from "@/views/home/ScrollAds";
  import Service from "@/components/home/Service/Service";
  import Partner from "../../components/home/Partner/Partner";

  export default {
    name: "HomePage",
    components: {
      Recommend,
      LatestNews,
      Consensus,
      Clinical,
      HealthRadius,
      TrainingLive,
      Advertisement,
      AdvertisementSide,
      BigCount,
      Login,
      ScrollAds,
      Service,
      Partner
    },
    data() {
      return {
        centerDialogVisible: true
      };
    }
  }
</script>

<style>
  .home-page-box {
    padding: 20px 0;
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .w50 {
    width: 50%;
    height: 100%;
  }

  .left-top-box,
  .left-bottom-box {
    height: 250px;
  }

  .left-top-box {
    margin-bottom: 20px;
  }

  .right-box {
    height: 520px;
    margin-bottom: 24px;
  }
  .homePage .el-dialog__header {


  }
  .homePage .el-dialog__body {
    background: transparent;
  }
  .homePage .el-dialog {
    background: rgba(0,0,0,0);
  }
</style>
<style scoped>
  .recommend {
    height: 100%;
    margin-bottom: 24px;
    border-radius: 4px;
    box-shadow: var(--box-shadow);
  }

  .latest-news {
    margin-bottom: 24px;
    border-radius: 4px;
    box-shadow: var(--box-shadow);
  }

  .consensus {
    margin-bottom: 24px;
    border-radius: 4px;
    box-shadow: var(--box-shadow);
  }

  .clinical {
    margin-bottom: 24px;
    border-radius: 4px;
    box-shadow: var(--box-shadow);
  }

  .health-radius {
    margin: 0 0 24px;
  }
</style>
