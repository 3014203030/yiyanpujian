<template>
  <div class="basic-container">
    <div class="team-account-check-box">
      <el-tabs v-model="activeName" type="border-card">
        <el-tab-pane label="待审核个人用户" name="0">
          <div>
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="username"
                label="用户名">
              </el-table-column>
              <el-table-column
                prop="name"
                label="真实姓名">
              </el-table-column>
              <el-table-column
                prop="actureID"
                label="身份证号">
              </el-table-column>
              <el-table-column
                prop="bankID"
                label="银行卡号">
              </el-table-column>
              <el-table-column
                prop="area"
                label="推广地区">
              </el-table-column>
              <el-table-column
                prop="phone"
                label="银行卡预留手机号">
              </el-table-column>
              <el-table-column
                prop="unit"
                label="上级账户">
              </el-table-column>
              <el-table-column
                label="操作"
                width="100">
                <template slot-scope="scope">
                  <el-button @click="checkClick(scope.row)" type="text" size="small">通过</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="待审核团队用户" name="1">
          <div>
            <el-table
              :data="tableData2"
              border
              style="width: 100%">
              <el-table-column
                prop="username"
                label="用户名">
              </el-table-column>
              <el-table-column
                prop="name"
                label="负责人姓名">
              </el-table-column>
              <el-table-column
                prop="company"
                label="公司名称">
              </el-table-column>
              <el-table-column
                prop="productName"
                label="产品名称">
              </el-table-column>
              <el-table-column
                prop="phone"
                label="负责人手机号">
              </el-table-column>
              <el-table-column
                prop="unit"
                label="上级账户">
              </el-table-column>
              <el-table-column
                label="操作"
                width="100">
                <template slot-scope="scope">
                  <el-button @click="handleClick2(scope.row)" type="text" size="small">查看</el-button>
                  <el-button @click="checkClick(scope.row)" type="text" size="small">通过</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "TeamAccountCheck",
    data() {
      return {
        activeName: 0,
        tableData: [],
        tableData2: []
      }
    },
    methods: {
      // handleClick(row) {
      //   window.open(row.data);
      // },
      handleClick2(row) {
        window.open(row.dataURL);
      },
      async checkClick(row) {
        try {
          let res = await axios.post('/api/doctor/user/verify2', {
            testResult: '1',
            authorID: row.authorID
          });
          console.log(res);
          if (res.data.code === 20000) {
            this.$message.success('操作成功')
          } else {
            this.$message.error(res.data.msg)
          }
        } catch (e) {
          this.$message.error(e.response.status + ' ' + e.response.statusText)
        }
        this.getUnCheckList();
      },
      async getUnCheckList() {
        try {
          let res = await axios.post('/api/doctor/user/searchUnverify', {
            username: this.$store.state.userInfo.username
          });
          console.log('公司或者团队用户查询待审核普通用户接口');
          console.log(res);
          if (res.data.code === 20000) {
            this.tableData = res.data.data
          } else {
            this.$message.error(res.data.msg);
          }

          let res2 = await axios.post('/api/doctor/user/searchUnverify1', {
            username: this.$store.state.userInfo.username
          });
          console.log('公司或者团队用户查询待审核业务用户接口');
          console.log(res2);
          if (res2.data.code === 20000) {
            this.tableData2 = res2.data.data
          } else {
            this.$message.error(res2.data.msg);
          }
        } catch (e) {
          this.$message.error(e.response.status + ' ' + e.response.statusText)
        }
      }
    },
    activated() {
      this.getUnCheckList();
    }
  }
</script>

<style lang="scss">
  .team-account-check-box {
    padding-top: 3rem;
    text-align: left;
  }
</style>
