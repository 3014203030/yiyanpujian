<template>
  <div>
    <div class="basic-container gray-background">
      <div class="user-login-logout flex">
        <div class="left flex-auto" style="font-size: .9rem">您好，欢迎登陆本网站！</div>
        <sign-in-sign-up></sign-in-sign-up>
        <!--  以后可能要添加  -->
      </div>
    </div>
    <div class="basic-container green-background">
      <div class="flex">
        <div class="logo">
          <img src="~@/assets/img/logo.png" alt="logo">
        </div>
        <div class="nav-bar flex-auto flex">
          <div class="basic-item active">
            <p class="zh-name ellipsis">经费管理</p>
            <p class="en-name ellipsis">EXPENSEMANAGER</p>
          </div>
        </div>
      </div>
    </div>
    <div class="basic-container" style="background-color: white">
      <div class="expense-manager-box">
        <h3 class="basic-title">经费审核</h3>
        <div style="height: 1rem"></div>
        <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
          <el-tab-pane label="资金审核" name="0">
            <div>
              <el-table
                :data="tableManagerDate"
                style="width: 100%">
                <el-table-column
                  label="交易编号"
                  prop="number">
                </el-table-column>
                <el-table-column
                  label="用户ID"
                  prop="go"
                  width="180">
                </el-table-column>
                <el-table-column
                  label="备注"
                  prop="record">
                </el-table-column>
                <el-table-column
                  label="交易金额"
                  prop="mount"
                  width="180">
                </el-table-column>
                <el-table-column
                  label="审批"
                  align="center"
                  width="100">
                  <template slot-scope="scope">
                    <el-button type="danger" plain size="mini" @click="editClick(scope.row, 1)">通过</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="用户提现审核" name="1">
            <div>
              <el-table
                :data="tableUserDate"
                style="width: 100%">
                <el-table-column
                  label="交易编号"
                  prop="number">
                </el-table-column>
                <el-table-column
                  label="用户ID"
                  prop="go"
                  width="180">
                </el-table-column>
                <el-table-column
                  label="备注"
                  prop="record">
                </el-table-column>
                <el-table-column
                  label="交易金额"
                  prop="mount"
                  width="180">
                </el-table-column>
                <el-table-column
                  label="审批"
                  align="center"
                  width="100">
                  <template slot-scope="scope">
                    <el-button type="danger" plain size="mini" @click="editClick(scope.row, 0)">通过</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  import OutLayInCome from "@/components/task/OutLayInCome";
  import PassOrNot from "@/components/task/PassOrNot";
  import SignInSignUp from "@/components/header/SignInSignUp";
  import ApplyPassButton from "@/components/expense/ApplyPassButton";

  export default {
    name: "ExpenseManager",
    components: {
      OutLayInCome,
      PassOrNot,
      SignInSignUp,
      ApplyPassButton
    },
    data() {
      return {
        activeName: 0,
        tableManagerDate: [],
        tableUserDate: []
      }
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
      },
      editClick(row, type) {
        this.$confirm('此操作将不可逆, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          if (type === 1) {
            this.projectFeaVerifyUser(row)
          } else {
            this.userFeaVerifyUser(row)
          }

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });
        });
      },
      // 是的你没看错，请求的时候是一个url，要根据type来确定是用户还是管理员，
      // 审核的时候又是两个不同的url了
      async getUserUnVerify() {
        let res = await this.$http.userFeaSearchUnverify({
          testUser: this.$store.state.userInfo.username,
          type: "0",
          testResult: ''
        });
        console.log(res);
        this.tableUserDate = res.data;
      },
      async getManagerUnVerify() {
        let res = await this.$http.userFeaSearchUnverify({
          testUser: this.$store.state.userInfo.username,
          type: "3",
          // 审核结果？？？？，不是要返回待审核的列表吗？我参数就要先传一个审核结果？
          // 还没审核呢就让我传个审核结果，这不就是要实习先要有工作经验，有工作经验需要实习？？？？
          testResult: ''
        });
        console.log(res);
        this.tableManagerDate = res.data;
      },
      async userFeaVerifyUser(row) {
        // 后台有时候会分两部分，有时候又不是两部分
        let res = await this.$http.userFeaVerifyUser({
          test: '1',
          number: row.number,
          testRecord: '测试',
          testTime: new Date()
        });
        console.log(res);
        if (res.code === this.$http.SUCC_CODE) {
          this.$message.success("操作成功")
        } else {
          this.$message.error(res.msg)
        }
        // 更新
        this.getUserUnVerify();
      },
      async projectFeaVerifyUser(row) {
        // 感觉我像个智障
        let res = await this.$http.projectFeaVerifyUser({
          test: '1',
          number: row.number,
          testRecord: '测试',
          testTime: new Date()
        });
        console.log(res);
        if (res.code === this.$http.SUCC_CODE) {
          this.$message.success("操作成功")
        } else {
          this.$message.error(res.msg)
        }
        // 更新
        this.getManagerUnVerify();
      },
      updateInfo() {
        this.getUserUnVerify();
        this.getManagerUnVerify();
      }
    },
    activated() {
      this.getUserUnVerify();
      this.getManagerUnVerify();
    }
  }
</script>

<style lang="scss">
  .expense-manager-box {
    padding: 4rem 0;
    text-align: left;
  }

  .logo {
    align-self: start;

    img {
      display: block;
      width: 163px;
      height: 68px;
      object-fit: fill;
    }
  }

  .nav-bar {
    padding: 1.5rem 2rem;
  }

  .basic-item {
    padding: .3rem 1rem;
    border-right: 1px solid rgba(255, 255, 255, .5);
    text-decoration: none;
    font-weight: 100;
    /*color: var(--color-background-gray);*/
    color: rgba(255, 255, 255, .6);
    transition: color .1s ease;

    &.active {
      color: white;
    }

    .zh-name {
      font-size: 1.1rem;
      padding-bottom: .2rem;
    }

    .en-name {
      font-size: .5rem;
    }
  }
</style>
