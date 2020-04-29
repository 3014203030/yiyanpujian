<template>
  <div class="flex checkbox-box">
    <div class="all-check-button">
      <el-button size="small" @click="allChecked" type="success" plain>{{ checkboxLabel }}</el-button>
    </div>
    <el-checkbox-group v-model="checkboxGroups" size="small" @change="checkboxChange">
      <el-checkbox-button v-for="each in checkboxOptions" :label="each" :key="each">{{each}}</el-checkbox-button>
    </el-checkbox-group>
  </div>
</template>

<script>
  export default {
    name: "Checkbox",
    props: {
      checkboxLabel: {
        type: String,
        default: ''
      },
      checkboxOptions : {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        checkboxGroups: []
      }
    },
    watch: {
      checkboxOptions: {
        handler(newVal) {
          this.checkboxGroups = newVal;
        },
        immediate: true
      }
    },
    methods: {
      allChecked() {
        if (this.checkboxGroups.length < this.checkboxOptions.length) {
          this.checkboxGroups = this.checkboxOptions.slice();
        } else {
          this.checkboxGroups = [];
        }
        this.$emit('check-box-change', this.checkboxGroups)
      },
      checkboxChange(val) {
        this.$emit('check-box-change', this.checkboxGroups)
      }
    }
  }
</script>

<style lang="scss">
  .checkbox-box {
    padding: .2rem 0;
  }

  .all-check-button {
    margin-right: 2rem;
    width: 100px;

    button {
      width: 100%;
    }
  }
</style>
