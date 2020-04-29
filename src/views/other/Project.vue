<template>
  <div class="project-info-box">
    <div class="flex">
      <h3 class="basic-title flex-auto">项目详情</h3>
      <el-button type="text" @click="$router.go(-1)"><i class="el-icon-back"></i>返回</el-button>
    </div>
    <div class="table-label flex">
      <div class="project-period">期数</div>
      <div class="project-data flex-auto">项目数据</div>
      <div class="project-end-time">截止时间</div>
      <div class="project-if-work">当前进程</div>
    </div>
    <el-collapse v-model="activeName">
      <el-collapse-item v-for="(item, index) in periodList" :name="index">
        <template slot="title">
          <div class="project-brief-msg flex" @click.stop="collapseItemClickFirst($event, index)">
<!--          <div class="project-brief-msg flex">-->
            <div class="project-period">{{ item.process }}期</div>
            <div class="project-data flex-auto">{{ item.data }}</div>
            <div class="project-end-time">{{ item.endTime | dateFormat('yyyy-MM-dd') }}</div>
            <div class="project-if-work">
              <pass-or-not :if-show="item.ifWork === 1"></pass-or-not>
            </div>
          </div>
        </template>
        <div class="project-extend-box">
          <el-card>
            <div v-if="periodUserMapping[index]">
              <el-table
                :data="periodUserMapping[index]"
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
                </el-table-column>
                <el-table-column
                  prop="ifWork"
                  label="是否完成"
                  align="center"
                  width="90">
                  <template slot-scope="scope">
                    <pass-or-not :if-show="scope.row.ifWork === 1"></pass-or-not>
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
              <div v-for="subItem in periodUserMapping[index]">{{subItem.username}}</div>
            </div>
          </el-card>
        </div>
      </el-collapse-item>
    </el-collapse>
    <div v-if="ifShow" class="add-task-button">
      <el-button type="success" plain class="el-icon-plus" @click="addTaskClick">发起任务</el-button>
    </div>
  </div>
</template>

<script>
  import PassOrNot from "@/components/task/PassOrNot";
  import SeeDetails from "@/components/task/SeeDetails";

  export default {
    name: "Project",
    components: {
      PassOrNot,
      SeeDetails
    },
    data() {
      return {
        activeName: [],
        projectID: '',
        periodList: [],
        periodUserMapping: {}
      }
    },
    computed: {
      ifShow() {
        // return true
        return this.$store.state.role === 'manager';
      }
    },
    methods: {
      taskClick(id) {
        // console.log(id)
        this.$router.push({ name: 'MyTask', query: { process: id } }).catch(err => {})
      },
      // rowClick(row, column, event) {
      //   console.log(row, column, event)
      // }, 不知道为什么不能用

      addTaskClick() {
        this.$router.push({ name: 'AddTask', params: {  } }).catch(err => {})
      },
      collapseItemClickFirst($event, index) {
        if (this.periodUserMapping[index] === undefined) {
          this.getUserInfoByProcess(index).then(() => {
            // 实现请求完参数再展开的效果
            $event.target.parentElement.click();
          }).catch(() => {
            // 不这样的话，会出现第一次点开显示空白的样子
            // 可能是el组件渲染之后，即使更新数据也不会刷新，应该是bug
            $event.target.parentElement.click();
          });
        } else {
          $event.target.parentElement.click();
        }
      },
      async getUserInfoByProcess(index) {
        let res = await this.$http.projectSearch({
          type: "1" + index,
          value: this.projectID
        });
        console.log('---------期数对应用户--------');
        console.log(res);
        this.periodUserMapping[index] = res.data;
      },

      async getProjectMsg(id) {
        let res = await this.$http.projectSearch({
          type: '1b',
          value: id
        });
        console.log('---------项目详情-----------');
        console.log(res);
        this.periodList = res.data;
      }
    },
    activated() {
      this.projectID = this.$route.query.projectId;
      if (this.projectID) {
        this.getProjectMsg(this.projectID);
      }
    },
    deactivated() {
      this.periodUserMapping = {};
      this.activeName = []
      // 这里当用户退出又切换到这页时，清除掉现有数据
      // 包括换用户登录，新添任务
      // 因为数据库的设计问题，这里只能根据期数去再次查询
      // 单独写一个页面太费事了
      // 我只是一个业余爱好者而已对我要求太高了
    }
  }
</script>

<style lang="scss">
  .project-info-box {
    .project-period {
      width: 100px;
      padding: 0 10px;
    }

    .project-data {
      padding: 0 10px;
      /*width: 300px;*/
    }

    .project-end-time {
      padding: 0 10px;
      width: 120px;
    }

    .project-if-work {
      text-align: center;
      padding: 0 10px;
      width: 100px;
    }

    .table-label {
      width: 95%;
      padding: 10px 0;
      font-weight: bold;
      color: #909399;
      font-size: 14px;
      line-height: 23px;
    }

    .project-brief-msg {
      width: 95%;
      font-size: 1rem;
      color: var(--color-background);
    }

    .project-data-link {
      color: inherit;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    .project-extend-box {
      padding: 1rem;

      .extend-form {
        width: 90%;

        label {
          color: #99a9bf;
        }

        .el-form-item {
          margin-right: 0;
          margin-bottom: 0;
          width: 50%;
        }

        .el-icon-view {
          font-size: 1.5rem;
          color: #67C23A;
        }
      }
    }

    .add-task-button {
      padding-top: 2rem;

      button {
        width: 100%;
      }
    }
  }
</style>
