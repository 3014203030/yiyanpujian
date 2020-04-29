<template>
  <!-- 已经和初衷背道而驰，变成了WH式写法，嘻嘻 -->
  <div class="flex">
    <el-tooltip class="item" effect="dark" content="填入发放金额" placement="top-start">
      <el-input-number v-model="salary" :step="100" :min="0"></el-input-number>
    </el-tooltip>
    <div style="width: 20px"></div>
    <el-tooltip class="item" effect="dark" content="点击确认发放" placement="top-start">
      <div @click="btnClick">
        <confirm :if-show="false"></confirm>
      </div>
    </el-tooltip>
  </div>
</template>

<script>
  import Confirm from "@/components/task/Confirm";

  export default {
    name: "InputAndConfirmGroup",
    components: {
      Confirm
    },
    props: {
      row: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        salary: 0
      }
    },
    methods: {
      btnClick() {
        if (this.salary > 0) {
          this.$confirm('此操作将不可逆, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            console.log('打钱操作前端不背锅');
            this.userSalary(this.salary);
          }).catch((e) => {
            console.log(e);
            this.$message({
              type: 'info',
              message: '已取消操作'
            });
          });
        } else {
          this.$message.warning("请选择金额")
        }
      },
      async userSalary(salary) {
        console.log('打钱', salary);
        let res = await this.$http.unit2unit({
          money: salary,
          username: this.row,
          sourcename: this.$store.state.userInfo.username
        });
        console.log(res);
        if (res.code === this.$http.SUCC_CODE) {
          this.$message.success("操作成功")
        } else {
          if (res.msg) {
            this.$message.error(res.msg);
          }
        }
        this.$emit('refresh')
        console.log('refresh')
      }
    }
  }
</script>

<style scoped>

</style>
