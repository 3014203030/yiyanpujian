<template>
  <div>
    <h3 class="basic-title">交易明细</h3>
    <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort = "{prop: 'date', order: 'descending'}">
      <el-table-column
        prop="number"
        label="交易编号"
        width="300">
      </el-table-column>
      <el-table-column
        label=""
        width="30">
        <template slot-scope="scope">
          <out-lay-in-come :if-show="scope.row.in === 1"></out-lay-in-come>
        </template>
      </el-table-column>
      <el-table-column
        prop="mount"
        label="金额"
        sortable
        width="100">
      </el-table-column>
      <el-table-column
        prop="applyTime"
        label="交易时间"
        sortable
        width="180">
        <template slot-scope="scope">
          {{ scope.row.applyTime | dateFormat('yyyy-MM-dd') }}
        </template>
      </el-table-column>
      <el-table-column
        prop="go"
        label="资金去向">
      </el-table-column>
      <el-table-column
        prop="goaccount"
        label="去向账户"
        width="100">
      </el-table-column>
<!--      <el-table-column-->
<!--        prop="goaccount"-->
<!--        label="操作"-->
<!--        align="center"-->
<!--        width="100">-->
<!--        <template slot-scope="scope">-->
<!--          <el-button type="danger" plain size="mini" @click="callback(scope.row.number)">撤回</el-button>-->
<!--        </template>-->
<!--      </el-table-column>-->
    </el-table>
  </div>
</template>

<script>
  import OutLayInCome from "@/components/task/OutLayInCome";

  export default {
    name: "GroupSalaryManageRecord",
    components: {
      OutLayInCome
    },
    data() {
      return {
        tableData: []
      }
    },
    methods: {
      async initRecordInfo() {
        let res = await this.$http.searchUnit({
          username: this.$store.state.userInfo.username,
          type: '4'
        });
        console.log('-----------交易记录------------');
        console.log(res);
        this.tableData = res.data;
      }
    },
    activated() {
      this.initRecordInfo();
    }
  }
</script>

<style scoped>

</style>
