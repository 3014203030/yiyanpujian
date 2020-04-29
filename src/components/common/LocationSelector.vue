<template>
  <div class="flex location-style">
    <div style="padding-right: .5rem">
      <el-select v-model="province" placeholder="请选择省" @change="province = $event">
<!--        <el-option label="上海" value="shanghai"></el-option>-->
<!--        <el-option label="北京" value="beijing"></el-option>-->
        <el-option v-for="(value, key) in provinceOptions" :label="value" :value="key"></el-option>
      </el-select>
    </div>
    <div style="padding-right: .5rem">
      <el-select v-model="city" placeholder="请选择市" @change="city = $event">
        <el-option v-for="(value, key) in cityOptions" :label="value" :value="key"></el-option>
      </el-select>
    </div>
    <div>
      <el-select v-model="area" placeholder="请选择区" @change="selectorChange">
        <el-option v-for="(value, key) in areaOptions" :label="value" :value="key"></el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
  import chinaAreaData from 'china-area-data/v4/data'

  export default {
    name: "LocationSelector",
    data() {
      return {
        province: '',
        city: '',
        area: '',
      }
    },
    computed: {
      provinceOptions() {
        return chinaAreaData["86"]
      },
      cityOptions() {
        return chinaAreaData[this.province]
      },
      areaOptions() {
        return chinaAreaData[this.city]
      },
      location() {
        return chinaAreaData["86"][this.province] + chinaAreaData[this.province][this.city] + chinaAreaData[this.city][this.area]
      }
    },
    methods: {
      selectorChange() {
        this.$emit('val-change', this.location);
      }
    }
  }
</script>

<style lang="scss">

</style>
