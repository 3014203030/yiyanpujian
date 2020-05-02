<template>
  <div class="pass-or-not">
    <i v-if="ifShow" class="el-icon-check"></i>
    <i v-else class="el-icon-close"></i>
  </div>
</template>

<script>
  export default {
    name: "PassOrNot",
    props: {
      ifShow: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss">
  .pass-or-not {
    .el-icon-check {
      font-size: 1.5rem;
      color: #67C23A;
    }

    .el-icon-close {
      font-size: 1.5rem;
      color: #f56c6c;
    }
  }
</style>
