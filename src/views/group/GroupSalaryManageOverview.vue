<template>
  <div>
    <el-card shadow="hover">
      <div class="flex-column">
        <div class="flex" style="padding-bottom: 20px">
          <h3 class="basic-title-no-bottom flex-auto">团队资金总览</h3>
          <el-tooltip effect="dark" content="经费说明(暂未添加)" placement="left">
            <el-button type="text"><i class="el-icon-info"></i> 帮助</el-button>
          </el-tooltip>
        </div>
        <div class="">
          <account-board title="当前账户余额" tip="当前账户余额" :amount="groupMoney" height="200px">
            <el-button size="mini" type="primary" plain @click="$router.push({name: 'FundingManageRecord'})">查看交易流水
            </el-button>
          </account-board>
        </div>
        <div style="height: 1.5rem"></div>
        <el-card shadow="hover">
          <h3 class="basic-title">团队资金往来</h3>
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
                <input-and-confirm-group :row="scope.row" @refresh="refresh"></input-and-confirm-group>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
        <div style="height: 1.5rem"></div>
        <el-card shadow="hover">
          <h3 class="basic-title">个人资金发放</h3>
          <el-table
            :data="salaryListUser"
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
                <input-and-confirm-manager :row="scope.row" @refresh="refresh"></input-and-confirm-manager>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
        <div class="divider"></div>
      </div>
    </el-card>
  </div>
</template>

<script>
  import axios from "axios";

  import InputAndConfirmManager from "@/views/group/InputAndConfirmManager";
  import InputAndConfirmGroup from "@/views/group/InputAndConfirmGroup";
  import AccountBoard from "@/components/account/AccountBoard";

  export default {
    name: "GroupSalaryManageOverview",
    components: {
      InputAndConfirmManager,
      InputAndConfirmGroup,
      AccountBoard
    },
    data() {
      return {
        groupMoney: 0,
        salaryListUser: [],
        salaryListManager: [],
      }
    },
    methods: {
      async initManagerSalary() {
        let res = await this.$http.searchOneCompany({
          username: this.$store.state.userInfo.username
        });
        this.groupMoney = res.data.money;
      },
      async initAcceptorList() {
        let res = await axios.post('/api/doctor/user/searchList6', {
          username: this.$store.state.userInfo.username
          // username: '267ad3e6-9db1-45fd-b2bc-b5d0281e8e1f'
        });
        console.log(res.data.data);
        this.salaryListUser = res.data.data;
      },
      async initGroupList() {
        let res = await axios.post('/api/doctor/user/searchList5', {
          username: this.$store.state.userInfo.username
          // username: '267ad3e6-9db1-45fd-b2bc-b5d0281e8e1f'
        });
        console.log(res.data.data);
        this.salaryListManager = res.data.data;
      },
      refresh() {
        console.log('refresh');
        this.initManagerSalary();
      }
    },
    activated() {
      this.initAcceptorList();
      this.initGroupList();
      this.initManagerSalary();
    }
  }
</script>

<style scoped>

</style>
