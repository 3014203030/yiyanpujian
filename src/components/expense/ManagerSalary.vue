<template>
  <div>
    <el-card shadow="hover">
<!--      <h3 class="basic-title">团队资金发放：￥{{ salary | moneyFormat}}</h3>-->
      <h3 class="basic-title">团队资金发放</h3>
      <div style="height: 20px"></div>
      <el-table
        :data="salaryListManager"
        style="width: 100%">
        <el-table-column
          label="姓名">
          <template slot-scope="scope">
            {{scope.row}}
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          width="250">
          <template slot-scope="scope">
            <company-input-and-confirm-manager :row="scope.row"></company-input-and-confirm-manager>
          </template>
        </el-table-column>
      </el-table>
<!--      <div class="flex">-->
<!--        <div style="width: 70%">-->
<!--          <el-slider-->
<!--            v-model="salary"-->
<!--            :step="1000"-->
<!--            :max="maxMoney"-->
<!--            show-stops>-->
<!--          </el-slider>-->
<!--        </div>-->
<!--        <div class="flex-auto flex flex-center-center">-->
<!--          <el-tooltip class="item" effect="dark" content="填入发放金额" placement="top-start">-->
<!--            <el-input-number v-model="salary" :step="100" :min="0"></el-input-number>-->
<!--          </el-tooltip>-->
<!--          <div style="width: 20px"></div>-->
<!--          <el-tooltip class="item" effect="dark" content="点击确认发放" placement="top-start">-->
<!--            <div @click="btnClick">-->
<!--              <confirm :if-show="false"></confirm>-->
<!--            </div>-->
<!--          </el-tooltip>-->
<!--        </div>-->
<!--      </div>-->
    </el-card>
  </div>
</template>

<script>
  import Confirm from "@/components/task/Confirm";
  import InputAndConfirmManager from "@/views/group/InputAndConfirmManager";
  import axios from "axios";
  import CompanyInputAndConfirmManager from "@/views/funding/CompanyInputAndConfirmManager";

  export default {
    name: "ManagerSalary",
    components: {
      Confirm,
      InputAndConfirmManager,
      CompanyInputAndConfirmManager
    },
    props: {
      maxMoney: {
        type: Number,
        default: 20000
      }
    },
    data() {
      return {
        // salary: 0,
        // managerName: '',
        salaryListManager: []
      }
    },
    filters: {
      moneyFormat(num) {
        num = num.toString().replace(/\$|\,/g, '');
        if (isNaN(num))
          num = "0";
        // let sign = (num === (num = Math.abs(num)));
        num = Math.floor(num * 100 + 0.50000000001);
        let cents = num % 100;
        num = Math.floor(num / 100).toString();
        if (cents < 10)
          cents = "0" + cents;
        for (let i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
          num = num.substring(0, num.length - (4 * i + 3)) + ',' +
            num.substring(num.length - (4 * i + 3));
        return (num + '.' + cents);
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
      async managerSalary() {
        console.log('打钱');
        let res = await this.$http.projectFeaAddManager({
          mount: this.salary,
          source: this.$store.state.userInfo.username,
          go: this.managerName
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
      }
    },
    activated() {
      this.initManagerList();
    }
  }
</script>

<style>
</style>
