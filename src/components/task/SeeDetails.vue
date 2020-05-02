<template>
  <div class="see-details" @click="seeClick">
    <i class="el-icon-view"></i>
  </div>
</template>

<script>
  export default {
    name: "SeeDetails",
    methods: {
      seeClick() {
        this.$emit('see-click')
      }
    }
  }
</script>

<style lang="scss">
  .see-details {
    .el-icon-view {
      font-size: 1.5rem;
      color: #67C23A;
      cursor: pointer;

      &:hover {
        /*color: #21A79C;*/
        /*font-weight: bold;*/
      }
    }
  }
</style>
