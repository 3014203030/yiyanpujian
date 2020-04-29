<template>
  <div>
    <el-button v-if="flag" type="danger" plain size="mini" @click="editClick(row)">通过</el-button>
    <pass-or-not v-else :if-show="true"></pass-or-not>
  </div>
</template>

<script>
  import PassOrNot from "@/components/task/PassOrNot";

  export default {
    name: "ApplyPassButton",
    components: {
      PassOrNot
    },
    props: {
      flag: {
        type: Boolean,
        default: true
      },
      row: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      editClick(row) {
        this.$emit('update-info')
      }
    }
  }
</script>

<style scoped>

</style>
