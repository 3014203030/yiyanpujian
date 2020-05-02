<template>
  <el-select
    v-model="value"
    multiple
    filterable
    remote
    reserve-keyword
    placeholder="请选择用户"
    :remote-method="remoteMethod"
    :loading="loading">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "ItemSelectorList",
    data() {
      return {
        options: [],
        value: {},
        loading: false,
      }
    },
    methods: {
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          axios.post('/api/doctor/user/serachList3', {
            username: this.$store.state.username
          }).then(res => {

          }).catch( err => {

          });
          this.loading = false;
        } else {
          this.options = [];
        }
      }
    }
  }
</script>

<style>

</style>
