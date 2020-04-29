<template>
  <el-carousel :interval="5000" indicator-position="none" height="500px">
    <el-carousel-item v-for="(item, index) in carousel" :key="index">
      <div class="carousel-text flex">
        <div class="flex-auto">
          <a class="basic-link" href="#" @click.stop.self="hrefClick(item.uuid)">{{ item.title }}</a>
        </div>
        <div class="carousel-index">
          <span>{{ index + 1 }}</span> / {{ carousel.length }}
        </div>
      </div>
      <el-image :src="item.picURL | fullPicUrl" style="width: 100%; height: 100%" fit="cover"></el-image>
<!--scoped      <el-image :src="item.picURL | fullPicUrl" style="width: 100%; height: 100%" fit="cover"></el-image>-->
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {
    name: "Recommend",
    data() {
      return {
        carousel: []
      }
    },
    methods: {
      hrefClick(uuid) {
        let routes = this.$router.resolve({ name: 'Article', query: { uuid: uuid } });
        window.open(routes.href, '_blank');
      },
      async initRecommendInfo() {
        let res = await this.$http.articleSearch({
          type: '1',
          value: '',
          ifPrepara: false,
          page: 1
        });
        console.log('----------推荐-------------');
        console.log(res);
        this.carousel = res.data
      }
    },
    created() {
      this.initRecommendInfo();
    }
  }
</script>

<style>
  .carousel-text {
    position: absolute;
    z-index: 9999;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .6);
    padding: 20px;
    font-weight: normal;
    color: white;
    text-align: left;
  }

  .carousel-index {
    color: rgba(255, 255, 255, .6);
    font-size: .7rem;
  }

  .carousel-text .basic-link {
    color: white;
    font-size: 16px !important;
    font-weight: 500;
  }

  .carousel-index span {
    color: white;
    font-size: 1rem;
  }
</style>
<style scoped>

</style>
