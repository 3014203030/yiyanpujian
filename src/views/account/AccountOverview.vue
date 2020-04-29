<template>
  <div>
    <el-card shadow="hover">
      <div class="flex" style="padding-bottom: 20px">
        <h3 class="basic-title-no-bottom flex-auto">账户总览</h3>
        <el-tooltip effect="dark" content="经费说明(暂未添加)" placement="left">
          <!--            <el-link type="info"><i class="el-icon-info"></i> 帮助</el-link>-->
          <el-button type="text"><i class="el-icon-info"></i> 帮助</el-button>
        </el-tooltip>
      </div>
      <div class="flex">
        <div style="width: 30%; padding-right: 20px">
          <account-board title="可提现金额" tip="提现通过云账户进行" :amount="amountAvailable" height="120px">
          </account-board>
        </div>
        <div style="width: 70%">
          <withdraw title="选择提现金额" tip="提现通过云账户进行" height="120px" :moneyAmount="amountAvailable" @update-all="updateAll"></withdraw>
        </div>
      </div>
      <div style="padding-top: 20px">
        <el-row :gutter="20">
          <el-col :span="6">
            <account-board title="文章收入" tip="文章收入：0.02元 / 条" :amount="articleIncome">
              <el-button size="mini" type="primary" plain @click="$router.push({name: 'AccountRecord', query: {type: '0'}})">查看交易流水</el-button>
            </account-board>
          </el-col>
          <el-col :span="6">
            <account-board title="项目收入" tip="项目收入由项目发起方商定" :amount="projectIncome">
              <el-button disabled size="mini" type="primary" plain @click="$router.push({name: 'AccountRecord'})">查看交易流水</el-button>
            </account-board>
          </el-col>
          <el-col :span="6">
            <account-board title="培训直播" tip="敬请期待" :amount="trainingIncome">
              <el-button disabled size="mini" type="primary" plain @click="$router.push({name: 'AccountRecord'})">查看交易流水</el-button>
            </account-board>
          </el-col>
          <el-col :span="6">
            <account-board title="健康半径" tip="敬请期待" :amount="healthIncome">
              <el-button size="mini" type="primary" plain @click="$router.push({name: 'AccountRecord', query: {type: '1'}})">查看交易流水</el-button>
            </account-board>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
  import AccountBoard from "@/components/account/AccountBoard";
  import Withdraw from "@/components/account/Withdraw";

  export default {
    name: "AccountOverview",
    components: {
      AccountBoard,
      Withdraw
    },
    data() {
      return {
        // moneyAmount: 0,
        healthIncome: 0,
        articleIncome: 0,
        projectIncome: 0,
        trainingIncome: 0,
        amountAvailable: 0
      }
    },
    computed: {
      // allMoney() {
      //   return this.healthIncome + this.articleIncome + this.projectIncome + this.trainingIncome;
      // }
    },
    methods: {
      updateAll() {
        console.log('updateAll');
        this.searchList4();
      },
      async searchList4() {
        let res = await this.$http.userSearchList4({
          authorID: this.$store.state.userId
        });
        console.log(res);
        this.healthIncome = res.data.healthIncome;
        this.articleIncome = res.data.articleIncome;
        this.projectIncome = res.data.projectIncome;
        this.trainingIncome = res.data.trainingIncome;
        this.amountAvailable = res.data.amountAvailable;
      }
    },
    activated() {
      this.searchList4();
    }
  }
</script>

<style lang="scss">
</style>
