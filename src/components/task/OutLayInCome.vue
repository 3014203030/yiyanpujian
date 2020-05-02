<template>
  <div class="outlay-income">
    <i v-if="ifShow" class="el-icon-top"></i>
    <i v-else class="el-icon-bottom"></i>
  </div>
</template>

<script>
  export default {
    name: "OutLayInCome",
    props: {
      ifShow: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="scss">
  .outlay-income {
    .el-icon-top {
      font-size: 1.5rem;
      color: #67C23A;
    }

    .el-icon-bottom {
      font-size: 1.5rem;
      color: #f56c6c;
    }
  }
</style>
