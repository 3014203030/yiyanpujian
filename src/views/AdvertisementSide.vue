<template>
  <div class="flex flex-auto">
    <el-image :src="imageUrl" style="width: 100%; height: 92px;" fit="cover"></el-image>
  </div>
</template>

<script>
  export default {
    name: "AdvertisementSide",
    props: {
      imageUrl: {
        type: String,
        default: 'https://www.mindray.com/images/common/solution_1.jpg'
      }
    }
  }
</script>

<style scoped>

</style>
