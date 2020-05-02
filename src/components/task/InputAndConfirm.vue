<template>
  <div class="flex">
    <el-tooltip class="item" effect="dark" content="填入发放金额" placement="top-start">
      <el-input-number v-model="money" :step="100" :min="0" :disabled="ifShow"></el-input-number>
    </el-tooltip>
    <div style="width: 20px"></div>
    <el-tooltip class="item" effect="dark" content="点击确认发放" placement="top-start">
      <div @click="btnClick">
        <confirm :if-show="ifShow"></confirm>
      </div>
    </el-tooltip>
  </div>
</template>

<script>
  import Confirm from "@/components/task/Confirm";

  export default {
    name: "InputAndConfirm",
    components: {
      Confirm
    },
    props: {
      row: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        money: 0,
        ifShow: false
      }
    },
    methods: {
      btnClick() {
        if (!this.ifShow) {
          this.payMoney();
        }
      },
      payMoney() {
        this.$confirm('此操作将不可逆, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.fundingModify(this.money, this.row);
          this.$message({
            type: 'success',
            message: '操作成功!'
          });
          this.ifShow = true;
        }).catch((e) => {
          console.log(e);
          this.$message({
            type: 'info',
            message: '已取消操作'
          });
        });
      },
      async fundingModify(value, row) {
        console.log("----------------");
        console.log(row);
        let res = await this.$http.fundingModify({
          projectID: row.projectID,
          mount: value,
          in: 0,
          out: 1,
          source: this.$store.state.userId,
          go: row.acceptuser,
          applyID: this.$store.state.userId,
          type: 2
        });
        console.log('-------------pay------------');
        console.log(res);
      },
    }
  }
</script>

<style lang="scss">

</style>
