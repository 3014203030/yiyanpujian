<template>
  <div class="project-list-box">
    <div class="table-label flex">
      <div class="project-id">项目ID</div>
      <div class="project-name flex-auto">项目名称</div>
      <div class="project-end-time">截止时间</div>
      <div class="project-process">当前进程</div>
    </div>
    <el-collapse v-model="activeName">
      <el-collapse-item v-for="(item, index) in projectList" :name="index">
        <template slot="title">
          <div class="project-brief-msg flex">
            <div class="project-id">{{ item.projectID }}</div>
            <div class="project-name flex-auto">{{ item.name }}</div>
            <div class="project-end-time">{{ item.endTime | dateFormat('yyyy-MM-dd') }}</div>
            <div class="project-process">{{ item.process }}期</div>
          </div>
        </template>
        <div class="project-extend-box">
          <el-card>
            <div class="flex">
              <el-form :model="item" class="extend-form" label-width="80px" inline>
                <el-form-item label="项目id">
                  <span>{{ item.projectID }}</span>
                </el-form-item>
                <el-form-item label="项目简介">
                  <span>{{ item.introduce }}</span>
                </el-form-item>
                <el-form-item v-if="item.projectaccount" label="项目账户">
                  <span>{{ item.projectaccount }}</span>
                </el-form-item>
                <el-form-item v-if="item.projectmoney" label="项目余额">
                  <span>{{ item.projectmoney }}</span>
                </el-form-item>
                <el-form-item label="创建用户">
                  <span class="ellipsis">{{ item.createuser }}</span>
                </el-form-item>
                <el-form-item label="公司信息">
                  <span>{{ item.company }}</span>
                </el-form-item>
              </el-form>
              <el-tooltip class="item" effect="dark" content="点击查看详情" placement="left">
                <el-button type="primary" icon="el-icon-paperclip" circle @click="projectClick(item.projectID)"></el-button>
              </el-tooltip>
            </div>
          </el-card>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  export default {
    name: "ProjectList",
    props: {
      projectList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        activeName: []
      }
    },
    methods: {
      projectClick(id) {
        this.$router.push({ name: 'ProjectInfo', query: { projectId: id } });
      },
      // projectClick(index) {
      //   this.$emit('project-click', index);
      // }
    },
    deactivated() {
      this.activeName = []
    }
  }
</script>

<style lang="scss">
  .project-list-box {
    .project-id {
      width: 100px;
      padding: 0 10px;
    }

    .project-name {
      padding: 0 10px;
      /*width: 300px;*/
    }

    .project-end-time {
      padding: 0 10px;
      width: 120px;
    }

    .project-process {
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
      }
    }
  }
</style>
