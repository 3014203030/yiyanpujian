<template>
  <div>
    <div class="flex">
      <h3 class="basic-title flex-auto">{{process}}期任务详情</h3>
      <el-button type="text" @click="$router.go(-1)"><i class="el-icon-back"></i>返回</el-button>
    </div>
    <el-table
      :data="userInfoByProcess"
      style="width: 100%">
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        prop="acceptuser"
        label="接受用户"
        width="180">
      </el-table-column>
      <el-table-column
        prop="userdataURL"
        label="用户数据">
        <template  slot-scope="scope">
<!--          <a class="basic-link" :href="scope.row.userdataURL" target="_blank" download="#" style="padding-bottom: 10px">-->
<!--            {{scope.row.userdataURL}}-->
<!--          </a>-->
          <el-link :href="scope.row.userdataURL" target="_blank" download="#">{{scope.row.userdataURL}}</el-link>
        </template>
      </el-table-column>
      <el-table-column
        v-if="$store.state.role === 'company' || $store.state.role === 'manager'"
        label="审核"
        width="150"
        align="center">
        <template slot-scope="scope">
          <el-button-group>
            <el-button size="mini"
                       :disabled="scope.row.ifRead === 1"
                       @click="handleEdit(scope.$index, scope.row)">合格</el-button>
            <el-button type="danger" size="mini" plain
                       :disabled="scope.row.ifRead === 1"
                       @click="taskReject(scope.$index, scope.row)">不合格</el-button>
          </el-button-group>
        </template>
      </el-table-column>
      <el-table-column
        prop="ifRead"
        label="是否完成"
        align="center"
        width="90">
        <template slot-scope="scope">
          <pass-or-not :if-show="scope.row.ifRead === 1"></pass-or-not>
        </template>
      </el-table-column>
      <el-table-column
        label="查看任务"
        align="center"
        width="90">
        <template slot-scope="scope">
          <see-details @see-click="taskClick(scope.row.process)"></see-details>
        </template>
      </el-table-column>
    </el-table>
    <div v-if="ifShow" class="add-task-button">
      <el-button type="success" plain class="el-icon-plus" @click="addTaskClick" :disabled="isDisabled">发起任务</el-button>
    </div>
    <div v-if="ifShow" class="add-task-button" >
      <el-button type="success" plain class="el-icon-plus" @click="finishProcess" :disabled="isDisabled">结束本期</el-button>
    </div>
  </div>
</template>

<script>
  import SeeDetails from "@/components/task/SeeDetails";
  import PassOrNot from "@/components/task/PassOrNot";

  export default {
    name: "TaskInfo",
    components: {
      SeeDetails,
      PassOrNot
    },
    data() {
      return {
        projectID: '',
        process: '',
        userInfoByProcess: []
      }
    },
    computed: {
      ifShow() {
        // return true
        return this.$store.state.role === 'manager';
      },
      isDisabled() {
        // if (this.userInfoByProcess[0]) {
        //   return this.userInfoByProcess[0]['ifWork'] === 1;
        // }
        // return false;
        return false;
      }
    },
    methods: {
      async taskReject(index, row) {
        console.log(row);
        let res = await this.$http.workCheck({
          uuid: row.uuid,
          ifRead: 0
        });
        console.log('------------taskReject-----------');
        console.log(res);
      },
      async taskPass(row) {
        let res = await this.$http.workCheck({
          uuid: row.uuid,
          ifRead: 1
        });
        console.log('----------taskFinished------------');
        console.log(res);
      },
      async payMoney(value, row) {
        let res = await this.$http.fundingModify({
          projectID: row.projectID,
          mount: value,
          in: 0,
          out: 1,
          source: this.$store.state.userId,
          go: row.acceptuser,
          applyID: this.$store.state.userId
        });
        console.log('-------------pay------------');
        console.log(res);
      },
      // taskFinished
      handleEdit(index, row) {
        console.log(index, row);
        this.$confirm('此操作将不可逆, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.taskPass(row);
          // this.payMoney(value, row);
          this.getUserInfoByProcess(this.projectID, this.process);
          this.$message({
            type: 'success',
            message: '操作成功!'
          });
          this.initRecordInfo();
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });
        });
        // this.$prompt('请输入报酬', '提示', {
        //   confirmButtonText: '确定',
        //   cancelButtonText: '取消',
        // }).then(({ value }) => {
        //   this.taskPass(row);
        //   this.payMoney(value, row);
        //   this.getUserInfoByProcess(this.projectID, this.process);
        // }).catch(() => {
        //   this.$message({
        //     type: 'info',
        //     message: '取消输入'
        //   });
        // });
      },
      taskClick(id) {
        if (this.$store.state.role === 'user') {
          this.$router.push({name: 'MyTask', query: {process: id}}).catch(err => {
          })
        } else {
          this.$message.info("只有接收用户可以查看具体信息")
        }
        // console.log(id)
      },
      addTaskClick() {
        this.$router.push({ name: 'AddTask', query: {process: this.process, projectId: this.projectID } }).catch(err => {})
      },
      async getUserInfoByProcess(projectID, process) {
        console.log(projectID, process);
        let res = await this.$http.projectSearch({
          type: "1" + process,
          value: projectID
        });
        console.log('---------期数对应用户--------');
        console.log(res);
        this.userInfoByProcess = res.data;
      },
      async finishProcess() {
        let res = await this.$http.projectFinish({
          projectID: this.projectID,
          process: this.process
        });
        console.log('----------res-----------');
        console.log(res);
        this.$router.push({ name: 'MyManaged' })
      },
      async initTaskListAll() {

      }
    },
    activated() {
      console.log('activated');
      this.projectID = this.$route.query.projectId;
      this.process = this.$route.query.process;
      if (this.projectID && this.process) {
        this.getUserInfoByProcess(this.projectID, this.process);
      }
    }
  }
</script>

<style lang="scss">
  .add-task-button {
    padding-top: 2rem;

    button {
      width: 100%;
    }
  }
</style>
