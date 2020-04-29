<template>
  <el-table
    @expand-change="expandChange"
    :data="projectList"
    style="width: 100%"
    class="project-table"
    :row-key="getRowKeys"
    :expand-row-keys="expands">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-card :body-style="{ padding: '0px' }">
          <el-form :model="props.row" class="extend-form" label-width="80px" inline>
            <el-form-item label="项目id">
              <span>{{ props.row.projectID }}</span>
            </el-form-item>
            <el-form-item label="项目简介">
              <span>{{ props.row.introduce }}</span>
            </el-form-item>
            <el-form-item v-if="props.row.projectaccount" label="项目账户">
              <span>{{ props.row.projectaccount }}</span>
            </el-form-item>
            <el-form-item v-if="props.row.projectmoney" label="项目余额">
              <span>{{ props.row.projectmoney }}</span>
            </el-form-item>
            <el-form-item label="创建用户">
              <span class="ellipsis">{{ props.row.createuser }}</span>
            </el-form-item>
            <el-form-item label="公司信息">
              <span>{{ props.row.company }}</span>
            </el-form-item>
          </el-form>
          <div class="project-process-info-box">
            <el-steps direction="vertical" :active="elStepActive" finish-status="success">
              <el-step v-for="(item, index) in projectProcessInfo">
                <div slot="title" class="flex">
                  <div class="flex-auto">{{ item.process }}期</div>
                  <div>{{ item.endTime | dateFormat('yyyy-MM-dd') }}</div>
                </div>
                <div slot="description" class="project-process-info-content">
                  <div class="flex flex-end">
                    <div class="flex-auto">
                      <div>基本介绍：<span>{{item.introduce}}</span></div>
                      <div>公司信息：<span>{{item.company}}</span></div>
                      <div>创建者：<span>{{item.createuser}}</span></div>
                      <div>数据：<span>{{item.data}}</span></div>
                    </div>
                    <div>
                      <el-button :type="index === elStepActive ? 'info' : 'success'"
                                 plain
                                 @click="processClick(item.projectID, index + 1)">查看详情</el-button>
                    </div>
                  </div>
                  <div class="divider"></div>
                </div>
              </el-step>
            </el-steps>
<!--            <div class="center" v-if="elStepNewProcess">-->
<!--              <el-button type="info"-->
<!--                         v-if="elStepNewProcess"-->
<!--                         plain-->
<!--                         @click="newProcessClick(projectProcessInfo[0].projectID, elStepActive + 1)"><i class="el-icon-plus"></i>发起新一期</el-button>-->
<!--            </div>-->
            <div class="center" v-if="$store.state.role === 'manager'">
              <el-button type="info"
                         plain
                         @click="newProcessClick(projectProcessInfo[0].projectID, elStepActive + 1)"><i class="el-icon-plus"></i>发起新一期</el-button>
            </div>
          </div>
        </el-card>
      </template>
    </el-table-column>
    <el-table-column
      label="项目ID"
      prop="projectID"
      width="120">
    </el-table-column>
    <el-table-column
      label="项目名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="发布时间"
      prop="endtime"
      align="center"
      width="120">
      <template slot-scope="scope">
        {{ scope.row.endtime | dateFormat('yyyy-MM-dd') }}
<!-- 后端返回的就是endtime和beginTime，= = -->
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
      label="进程状态"
      prop="ifWork"
      align="center"
      width="100">
      <template slot-scope="scope">
        <pass-or-not :if-show="scope.row.ifWork === 1"></pass-or-not>
      </template>
    </el-table-column>
    <el-table-column
      v-if="$store.state.role === 'company'"
      label="项目结项"
      prop="label"
      align="center"
      width="100">
      <template slot-scope="scope">
        <el-button v-if="scope.row.label === 0" type="danger" plain size="mini" @click="editClick(scope.row)">结项</el-button>
        <el-tag v-else type="success" size="medium">已结项</el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  import PassOrNot from "@/components/task/PassOrNot";

  export default {
    name: "ProjectTable",
    components: {
      PassOrNot
    },
    props: {
      projectList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    computed: {
      elStepActive() {
        return this.projectProcessInfo[this.projectProcessInfo.length - 1].ifWork === 1? this.projectProcessInfo.length : this.projectProcessInfo.length - 1;
      },
      elStepNewProcess() {
        return this.$store.state.role === 'manager' && this.projectProcessInfo[this.projectProcessInfo.length - 1].ifWork === 1;
      },
    },
    data() {
      return {
        expands: [],
        getRowKeys(row) {
          return row.projectID;
        },
        projectSelectID: '',
        projectProcessInfo: []
      }
    },
    methods: {
      editClick(row) {
        this.$confirm('此操作将结束本次项目, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.projectFinished(row);
          this.$router.push({name: 'FundingOverview'})
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });
        });
      },
      async projectFinished(row) {
        let res = await this.$http.projectAllFinished({
          projectID: row.projectID
        });
        if (res.code === this.$http.SUCC_CODE) {
          this.$message.success("操作成功!");
          this.$emit("refresh")
        } else {
          this.$message.error("操作失败" + res.msg);
        }
      },
      processClick(projectId, process) {
        console.log(projectId, process)
        this.$router.push({ name: 'TaskInfo', query: { projectId: projectId, process: process, timeStamp: new Date().getTime()} });
      },
      newProcessClick(projectId, process) {
        console.log(projectId, process)
        this.$router.push({ name: 'AddTask', query: {process: process, projectId: projectId } }).catch(err => {})
      },
      async expandChange(row) {
        if (row.projectID === this.expands[0]) {
          this.expands = [];
        } else {
          this.expands = [];
          if (row.projectID !== this.projectSelectID) {
            await this.getProjectProcessById(row.projectID);
            this.projectSelectID = row.projectID;
          }
          this.expands.push(row.projectID);
        }
      },
      async getProjectProcessById(id) {
        let res = await this.$http.projectSearch({
          type: '1b',
          value: id
        });
        console.log('---------项目详情-----------');
        console.log(res);
        this.projectProcessInfo = res.data
        // this.periodList = res.data;
      }
    }
  }
</script>

<style lang="scss">
  .project-table {
    .extend-form {
      padding: 2rem;
      font-size: 0;

      label {
        width: 90px;
        color: #99a9bf;
      }

      .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
        max-width: 50%;
      }
    }

    .project-process-info-box {
      padding: 0 2rem 2rem;

      /*.project-process-name {*/
      /*  padding-right: 3rem;*/
      /*}*/

      .project-process-info-content {
        height: 150px;
      }

      .el-step__description {
        padding-right: 0;
      }
    }
  }

</style>
