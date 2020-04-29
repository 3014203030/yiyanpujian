<template>
  <div class="advertisement-box">
    <el-collapse-transition>
      <div class="advertisement" v-show="ifShow">
        <el-image :src="imageUrl" style="width: 100%; height: 100%;" fit="cover"></el-image>
        <button class="close-btn" @click="ifShow = false"><i class="el-icon-close"></i></button>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
  export default {
    name: "Advertisement",
    props: {
      imageUrl: {
        type: String,
        default: 'https://www.mindray.com/images/common/solution_1.jpg'
      }
    },
    data() {
      return {
        ifShow: true
      }
    }
  }
</script>

<style>
  .advertisement {
    width: 100%;
    height: 110px;
    position: relative;
  }

  .close-btn {
    background: transparent;
    border: 0;
    outline: 0;
    color: rgba(255, 255, 255, .2);
    font-size: 2rem;
    position: absolute;
    right: 1rem;
    top: 1rem;
  }

  .close-btn:hover {
    color: rgba(255, 255, 255, .8);
  }
</style>
