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
  import axios from "axios";

  export default {
    name: "CompanyInputAndConfirmManager",
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
            this.managerSalary(this.salary);
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
      async managerSalary(salary) {
        console.log('打钱');
        let res = await this.$http.projectFeaAddManager({
          mount: salary,
          source: this.$store.state.userInfo.username,
          go: this.row
        });
        console.log(res);
        if (res.code === this.$http.SUCC_CODE) {
          this.$message.success("操作成功")
        } else {
          this.$message.error(res.msg);
        }
        this.$emit('update-info')
      },
      async initManagerList() {
        let res = await axios.post('/api/doctor/user/serachList3', {
          username: this.$store.state.userInfo.username
        });
        console.log(res.data.data);
        this.salaryListManager = res.data.data;
      },
      async userSalary(salary) {
        console.log('打钱', salary);
        let res = await this.$http.recordingAdd({
          money: salary,
          username: this.row,
          sourcename: this.$store.state.userInfo.username
        });
        console.log(res);
        if (res.code === this.$http.SUCC_CODE) {
          this.$message.success("操作成功")
        } else {
          this.$message.error(res.msg);
        }
      }
    }
  }
</script>

<style scoped>

</style>
