<template>
  <div class="drop-down left flex">
    <div class="flex-auto">
      <slot></slot>
    </div>
    <div v-if="type === 'warning'">
      <i class="el-icon-warning"></i>{{ msg }}
    </div>
    <el-badge value="new" v-if="type === 'new'">
    </el-badge>
  </div>
</template>

<script>
  export default {
    name: "DropDown",
    props: {
      msg: String,
      type: String
    }
  }
</script>

<style>
  .drop-down {
    width: 230px;
  }

</style>
