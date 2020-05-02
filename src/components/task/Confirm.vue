<template>
  <div class="outlay-income">
    <i v-if="ifShow" class="el-icon-check"></i>
    <i v-else class="el-icon-thumb"></i>
  </div>
</template>

<script>
  export default {
    name: "Confirm",
    props: {
      ifShow: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss">
  .outlay-income {
    .el-icon-check {
      font-size: 1.5rem;
      color: #67C23A;
    }

    .el-icon-thumb {
      font-size: 1.5rem;
      color: #f56c6c;
      cursor: pointer;
    }
  }
</style>
