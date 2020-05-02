<template>
  <div class="my-task-box">
    <h3 class="basic-title">我的任务</h3>
    <div class="task-badge center">
      <el-badge :value="5" class="item" type="info">
        <el-button size="small" @click="getTaskInfo(0)">全部</el-button>
      </el-badge>
      <el-badge :value="4" class="item" type="success">
        <el-button size="small" @click="getTaskInfo(2)">已完成</el-button>
      </el-badge>
      <el-badge :value="1" class="item">
        <el-button size="small" @click="getTaskInfo(1)">新增</el-button>
      </el-badge>
    </div>
    <el-card shadow="hover">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <div>
              <div class="task-introduce">{{ props.row.introduce }}</div>
              <el-card v-if="props.row.ifFinish === 1" shadow="hover" :body-style="{ background: '#f0f9eb', border: '#e1f3d8', color: '#67C23A' }">
                任务已完成，等待审核中...
              </el-card>
              <el-card v-else shadow="hover">
                <div class="flex">
                  <div class="task-file-download-box flex-auto flex-stretch left flex-column">
                    <div>
                      <div class="item">
                        <span class="label">发布人</span>
                        <span>{{ props.row.publishName }}</span>
                      </div>
                      <div class="item">
                        <span class="label">发布时间</span>
                        <span>{{ props.row.publishTime | dateFormat('yyyy-MM-dd') }}</span>
                      </div>
                      <div class="item">
                        <span class="label">项目进程</span>
                        <span>{{ props.row.process }}</span>
                      </div>
                    </div>
                    <a :href="props.row.workfile" target="_blank" download="#" style="padding-bottom: 10px">
                      <el-button style="width: 100%" plain type="primary" size="small">获取任务说明文件</el-button>
                    </a>
                    <el-button size="small" type="primary" @click="workFileUpload(props.row)">确认上传</el-button>
                  </div>
                  <el-upload
                    class="upload-demo"
                    drag
                    ref="upload"
                    action="#"
                    :http-request="uploadFile"
                    multiple
                    :auto-upload="false"
                    :show-file-list="true"
                    :before-remove="beforeRemove">
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击选择文件</em></div>
                  </el-upload>
                </div>
              </el-card>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="任务ID"
          prop="workID"
          width="120">
        </el-table-column>
        <el-table-column
          label="任务名称"
          prop="name">
        </el-table-column>
        <el-table-column
          label="发布时间"
          prop="publishTime"
          align="center"
          width="120">
          <template slot-scope="scope">
            {{ scope.row.publishTime | dateFormat('yyyy-MM-dd') }}
          </template>
        </el-table-column>
        <el-table-column
          label="是否已读"
          prop="ifRead"
          align="center"
          width="100">
          <template slot-scope="scope">
            <pass-or-not :if-show="scope.row.ifRead === 1"></pass-or-not>
          </template>
        </el-table-column>
        <el-table-column
          label="是否完成"
          prop="ifFinish"
          align="center"
          width="100">
          <template slot-scope="scope">
            <pass-or-not :if-show="scope.row.ifFinish === 1"></pass-or-not>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
  import PassOrNot from "@/components/task/PassOrNot";

  export default {
    name: "MyTask",
    components: {
      PassOrNot
    },
    data() {
      return {
        fileList: [],
        showFileList: [],
        tableData: [],
        currentTask: {}
      }
    },
    methods: {
      fileChange(file, fileList) {
        this.fileList = file;
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      // 我不熟悉element的语法
      workFileUpload(row) {
        this.currentTask = row;
        this.$refs.upload.submit();
      },
      uploadFile(formObj) {
        console.log('这里是上传文件');
        console.log(formObj);
        console.log(this.currentTask);
        this.taskFinished(formObj, this.currentTask);
      },
      async taskFinished(formObj, row) {
        let config = {
          headers: { "Content-Type": "multipart/form-data" },
        };
        let formData = new FormData();
        formData.append('uuid', this.currentTask.uuid);
        formData.append('name', this.currentTask.name);
        formData.append('type', this.$store.state.userInfo.type);
        formData.append('file', formObj.file);

        let res = await this.$http.taskFinished(formData, config);
        console.log('------------taskFinished-----------');
        console.log(res);
        if (res.code === this.$http.SUCC_CODE) {
          this.$message.success("上传成功");
        } else {
          this.$message.error(res.msg);
        }
      },
      async getTaskInfo(type) {
        let res = await this.$http.taskSearch({
          type: '4' + type,
          value: JSON.stringify({
            acceptName: this.$store.state.userInfo.username,
            process: 'a'
          })
        });
        console.log('-----------用户id查任务------------');
        console.log(res);
        this.tableData = res.data;
      },
      async getTaskInfoByProjectId(type, process) {
        let res = await this.$http.taskSearch({
          type: '4' + type,
          value: JSON.stringify({
            acceptName: this.$store.state.userInfo.username,
            process: process
          })
        });
        console.log('-----------process查任务------------');
        console.log(res);
        this.tableData = res.data;
      }
    },
    activated() {
      this.process = this.$route.query.process;
      if (this.process) {
        this.getTaskInfoByProjectId(0, this.process);
      } else {
        this.getTaskInfo(0);
      }
    }
  }
</script>

<style lang="scss">
  .my-task-box {
    .task-badge {
      padding-bottom: 1.5rem;

      .item {
        margin: 0 10px;
      }
    }

    .task-introduce {
      padding-bottom: 1rem;
      line-height: 1.5;
    }

    .task-file-download-box {
      padding-right: 20px;

      .item {
        padding: 10px 0;

        .label {
          display: inline-block;
          width: 90px;
          color: #99a9bf;
        }
      }
    }


    /*.success-card {*/
    /*  background: #f0f9eb;*/
    /*  border: #67C23A;*/
    /*  color: #67C23A;*/
    /*}*/
  }
</style>
