<template>
  <div>
    <div class="flex">
      <h3 class="basic-title flex-auto">任务列表</h3>
      <el-button type="text" @click="$router.go(-1)"><i class="el-icon-back"></i>返回</el-button>
    </div>
    <el-table
      :data="taskList"
      style="width: 100%">
      <el-table-column
        prop="user"
        label="用户"
        width="100">
      </el-table-column>
      <el-table-column
        prop="text"
        label="任务描述">
      </el-table-column>
      <el-table-column
        prop="time"
        label="开始时间"
        width="120">
      </el-table-column>
      <el-table-column
        prop="ifPass"
        label="当前进程"
        width="100">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "Task",
    data() {
      return {
        taskList: [
          {
            user: '胡英俊',
            time: '2010-04-01',
            text: '还没完成还没完成还没完成还没完成还没完成',
            ifPass: '未完成'
          }
        ]
      }
    },
    methods: {
      async getWorkMsg(id) {
        let res = await this.$http.taskSearch({
          type: '10',
          value: id
        });
        console.log('--------------work-------------');
        console.log(res)
      }
    },
    activated() {
      this.workID = this.$route.query.workID;
      if (this.workID) {
        this.getWorkMsg(this.workID);
      }
    }
  }
</script>

<style>

</style>
