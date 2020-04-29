<template>
  <div id="app">
    <el-scrollbar style="height:100%">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </el-scrollbar>
    <advertisement-float></advertisement-float>
    <advertisement-float :left="false"></advertisement-float>
  </div>
</template>

<script>
  import AdvertisementFloat from "@/views/AdvertisementFloat";

  export default {
    name: 'App',
    components: {
      AdvertisementFloat
    }
  }
</script>

<style lang="scss">
  @import "assets/css/theme.css";

  #app {
    text-align: center;
    width: 100%;
    height: 100%;
    position: relative;
  }
</style>
