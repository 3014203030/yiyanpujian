<template>
  <div>
    <h3 class="basic-title">项目支出</h3>
    <div class="divider"></div>
    <el-table
      :data="projectList"
      style="width: 100%"
      class="project-table">
      <el-table-column
        label="项目ID"
        prop="projectID"
        width="120">
      </el-table-column>
      <el-table-column
        label="任务名称"
        prop="name">
      </el-table-column>
      <el-table-column
        label="发布时间"
        prop="endTime"
        align="center"
        width="120">
        <template slot-scope="scope">
          {{ scope.row.endTime | dateFormat('yyyy-MM-dd') }}
        </template>
      </el-table-column>
      <el-table-column
        label="当前进程"
        prop="process"
        align="center"
        width="100">
        <template slot-scope="scope">
          {{ scope.row.process }}期
        </template>
      </el-table-column>
      <el-table-column
        label="是否进行中"
        prop="ifWork"
        align="center"
        width="100">
        <template slot-scope="scope">
          <pass-or-not :if-show="scope.row.ifWork === 1"></pass-or-not>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
        width="100">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import PassOrNot from "@/components/task/PassOrNot";

  export default {
    name: "OutLay",
    components: {
      PassOrNot
    },
    data() {
      return {
        projectList: []
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row)
      },
      async initInfo() {
        this.initProjectInfo();
      },
      async initOutLayInfo() {
        let res = await this.$http.fundingSearch({

        })
      },
      async initProjectInfo() {
        let res = await this.$http.projectSearch({
          type: '2b',
          // value: this.$store.state.userInfo.username
          value: this.$store.state.userId
          // value: 'gong_ccd2d926-0a73-4c61-b9b2-f51b48b0d2ef'
        });
        console.log('------查询公司发起的所有项目------');
        console.log(res);
        this.projectList = res.data;
      },
    },
    activated() {
      this.initInfo();
    }
  }
</script>

<style>

</style>
