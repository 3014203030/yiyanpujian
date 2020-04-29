<template>
  <el-card :body-style="{ padding: '.5rem 1rem 1rem' }" v-if="articleOptions" shadow="hover">
    <div>
      <div v-for="(value, key) in articleOptions" class="flex single-filter">
        <div class="filter-name right ellipsis">{{value.name}} ></div>
        <div class="filter-check-all">
          <el-checkbox :indeterminate="value.isIndeterminate" v-model="value.checkAll" @change="handleCheckAllChange($event, key)">全选</el-checkbox>
        </div>
        <el-checkbox-group v-model="value.checked" @change="handleCheckedCitiesChange($event, key)">
          <el-checkbox v-for="item in value.options" :label="item" :key="item">{{item}}</el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
  </el-card>
</template>

<script>
  export default {
    name: "ListFilter",
    props: {
      articleOptions: {
        type: Object,
        default: null
      }
    },
    methods: {
      handleCheckAllChange(val, key) {
        this.articleOptions[key].checked = val ? this.articleOptions[key].options: [];
        this.articleOptions[key].isIndeterminate = false;
        this.bubbleChecked()
      },
      handleCheckedCitiesChange(val, key) {
        let checkedCount = val.length;
        this.articleOptions[key].checkAll = checkedCount === this.articleOptions[key].options.length;
        this.articleOptions[key].isIndeterminate = checkedCount > 0 && checkedCount < this.articleOptions[key].options.length;
        this.bubbleChecked()
      },
      bubbleChecked() {
        this.$emit('checked-change', this.articleOptions);
      }
    }
  }
</script>

<style lang="scss">

  .single-filter {
    padding: .7rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, .1);

    .filter-name {
      font-size: .7rem;
      color: rgba(0, 0, 0, .5);
      width: 80px;
      margin-right: 1.5rem;
    }

    .filter-check-all {
      padding-right: 1rem;
      border-right: 1px solid var(--color-background);
      margin-right: 1rem;
    }
  }
</style>
