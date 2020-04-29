<template>
    <el-autocomplete
    style="width: 100%"
    v-model="value"
    :fetch-suggestions="querySearchAsync"
    placeholder="请输入用户名"
    @select="handleSelect"
    @blur="inputBlur"
  ></el-autocomplete>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "ItemSelector",
    data() {
      return {
        loading: false,
        options: [],
        value: ''
      }
    },
    methods: {
      querySearchAsync(queryString, cb) {
        if (queryString !== '') {
          axios.post('/api/doctor/user/selectByName', {
            text: queryString
          }).then( res => {
            cb(res.data.data);
          }).catch( err => {
          })
        }
      },
      inputBlur() {
        this.$emit('val-change', this.value)
      },
      handleSelect(item) {
        this.value = item.value;
        this.$emit('val-change', item.value)
      }
    }
  }
</script>

<style lang="scss">

</style>
