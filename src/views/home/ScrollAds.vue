<template>
  <div class="et_pb_extra_module">
    <el-row :gutter="20">
      <el-col :xs="12" :sm="8">
        <AdBox img="http://img1.dxycdn.com/2019/0505/902/3343747965445052554-12.jpg" title="内部推荐专区" />
      </el-col>
      <el-col :xs="12" :sm="8">
        <AdBox img="http://img1.dxycdn.com/2020/0417/088/3408242042617900513-12.jpg" title="医院推广专区" />
      </el-col>
      <el-col :xs="12" :sm="8">
        <AdBox img="http://img.dxycdn.com/dq/201701/gg_20170116_151123_682.png" title="企业招聘专区" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
  //banners: [ 'http://img1.dxycdn.com/2019/1220/920/3386172806286305131-12.png', 'http://img1.dxycdn.com/2019/1216/345/3385430421189410482-12.png', 'http://img1.dxycdn.com/2020/0323/372/3403638771831864776-12.jpg' ],
  import AdBox from "../../components/home/AdBox/AdBox";
  export default {
    name: 'ScrollAds',
    components:{
      AdBox
    }
  }
</script>

<style scoped>
  .et_pb_extra_module {
    width: 100%;
    //border-top: 6px solid #54d0e2;
    border-radius: 3px;
  }
</style>
