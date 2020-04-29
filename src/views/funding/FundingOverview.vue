<template>
  <div>
    <el-card shadow="hover">
      <div class="flex-column">
        <div class="flex" style="padding-bottom: 20px">
          <h3 class="basic-title-no-bottom flex-auto">账户总览</h3>
          <el-tooltip effect="dark" content="经费说明(暂未添加)" placement="left">
            <el-button type="text"><i class="el-icon-info"></i> 帮助</el-button>
          </el-tooltip>
        </div>
        <div class="">
          <account-board title="当前账户余额" tip="当前账户余额" :amount="accountAmount" height="200px">
            <el-button size="mini" type="primary" plain @click="$router.push({name: 'FundingRecord'})">查看交易流水
            </el-button>
            <div style="width: 20px"></div>
            <el-badge :value="itemCount" class="item">
              <el-select v-model="currentProject" clearable placeholder="待办事务" size="mini" @change="projectSelect">
                <el-option
                  v-for="item in tableData"
                  :key="item"
                  :label="item"
                  :value="item">
                </el-option>
              </el-select>
            </el-badge>
          </account-board>
        </div>
        <div style="height: 1.5rem"></div>
        <company-manager-salary @update-info="updateInfo" title="团队资金发放" :list="managerList"></company-manager-salary>
        <div style="height: 1.5rem"></div>
        <company-manager-salary @update-info="updateInfo" title="个人资金发放" :list="userList"></company-manager-salary>
        <div style="height: 1.5rem"></div>
        <salary-box :salaryListUser="salaryListUser" :salaryListManager="salaryListManager" ></salary-box>
      </div>
    </el-card>
  </div>
</template>

<script>
  import AccountBoard from "@/components/account/AccountBoard";
  import Confirm from "@/components/task/Confirm";
  import InputAndConfirm from "@/components/task/InputAndConfirm";
  import SalaryBox from "@/views/funding/SalaryBox";
  import CompanyManagerSalary from "@/views/funding/CompanyManagerSalary";
  import axios from "axios";

  export default {
    name: "FundingOverview",
    components: {
      AccountBoard,
      Confirm,
      InputAndConfirm,
      SalaryBox,
      CompanyManagerSalary
    },
    data() {
      return {
        managerList: [],
        userList: [],
        tableData: [],
        ifShow: false,
        accountAmount: 0,
        currentProject: '',
        salaryListUser: [],
        salaryListManager: []
      }
    },
    computed: {
      // 我瞎写的，我已经把js语法忘光了
      // 我是要面试java后台的，整天搞这个是会找不着工作的
      itemCount() {
        return this.tableData.length;
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
      async projectWaitProject() {
        let res = await this.$http.projectWaitProject({
          createuser: this.$store.state.userInfo.username
        });
        console.log(res);
        this.tableData = res.data.ProjectID;
      },
      async projectSelect(id) {
        let res = await this.$http.projectLookUser({
          projectID: id
        });
        let res2 = await this.$http.projectLookUserGuan({
          projectID: id
        });
        console.log(res);
        console.log(res2);
        this.salaryListUser = res.data;
        this.salaryListManager = res2.data;
      },
      updateInfo() {
        this.initCompanyMoney();
        this.projectWaitProject();
        console.log('update');
      },
      async initCompanyMoney() {
        let res = await this.$http.searchOneCompany({
          username: this.$store.state.userInfo.username
        });
        console.log(res);
        this.accountAmount = res.data.money
      },
      // 仿佛自己是个弱智
      async initUserAndManagerList() {
        let res = await axios.post('/api/doctor/user/serachList3', {
          // 前端并不知道，也不想知道这个为什么拼错
          // 而且为什么这里又用2和3表示用户和管理员
          username: this.$store.state.userInfo.username
        });
        console.log(res.data.data);
        this.managerList = res.data.data;
        let res2 = await axios.post('/api/doctor/user/serachList2', {
          username: this.$store.state.userInfo.username
        });
        console.log(res2.data.data);
        this.userList = res2.data.data;
      }
    },
    activated() {
      this.initUserAndManagerList();
      this.projectWaitProject();
      this.initCompanyMoney();
    }
  }
</script>

<style lang="scss">
  .funding-badge {
    padding-bottom: 1.5rem;

    .item {
      margin: 0 10px;
    }
  }
</style>
