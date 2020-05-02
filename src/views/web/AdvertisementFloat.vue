<template>
  <div class="ad-side" :style="left ? { left: '1rem' } : { right: '1rem' }">
    <el-collapse-transition>
      <div class="advertisement" v-show="ifShow">
        <el-card :body-style="{padding: '0px'}">
          <div class="flex">
            <el-image :src="imageUrl" style="width: 200px; height: 450px;" fit="cover"></el-image>
            <button class="ad-close-btn" @click="ifShow = false">广告<i class="el-icon-close"></i></button>
          </div>
        </el-card>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
  export default {
    name: "AdvertisementFloat",
    props: {
      imageUrl: {
        type: String,
        default: 'https://res.mindray.com/ProductPic/Index/2016-01-10/7936074e-1a74-48f1-8fe9-e448d47ce65c.jpg'
      },
      left: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        ifShow: true
      }
    }
  }
</script>

<style lang="scss">
  .ad-side {
    position: fixed;
    top: 10%;
    z-index: 9999;
  }

  .advertisement {
    width: 100%;
    height: 110px;
    position: relative;
  }

  .ad-close-btn {
    background: white;
    border: 0;
    outline: 0;
    color: rgba(0, 0, 0, .2);
    font-size: .9rem;
    position: absolute;
    right: 1rem;
    top: 1rem;
  }

  .ad-close-btn:hover {
    color: rgba(0, 0, 0, .8);
  }
</style>
