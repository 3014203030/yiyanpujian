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
      <el-collapse-item v-for="(item, index) in projectList" :name="index">
        <template slot="title">
          <div class="project-brief-msg flex" @click="collapseItemClick">
            <div class="project-period">{{ index }}期</div>
            <div class="project-data flex-auto">{{ item.data }}</div>
            <div class="project-end-time">{{ item.endTime | dateFormat('yyyy-MM-dd') }}</div>
            <div class="project-if-work">
              <el-tag v-if="item.ifWork === 1" type="success">已完成</el-tag>
              <el-tag v-else type="danger">未完成</el-tag>
            </div>
          </div>
        </template>
        <div class="project-extend-box">
<!--          <el-form :model="item" class="extend-form" label-width="80px" inline>-->
<!--            <el-form-item label="项目id">-->
<!--              <span>{{ item.projectID }}</span>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="项目简介">-->
<!--              <span>{{ item.introduce }}</span>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="项目数据">-->
<!--              <span>{{ item.data }}</span>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="数据链接">-->
<!--              <span><a :href="item.dataURL" class="project-data-link">{{ item.dataURL }}</a></span>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="公司信息">-->
<!--              <span>{{ item.company }}</span>-->
<!--            </el-form-item>-->
<!--          </el-form>-->
          <el-card :body-style="{background: item.ifWork === 1? '#f0f9eb': '#fef0f0'}">
            <div class="flex">

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
    name: "Project",
    data() {
      return {
        activeName: [],
        projectID: '',
        projectList: [
          {
            projectID: "1", //
            name: "博哥", //
            data: "qwqwqwq",
            dataURL: "www.ddd.com",
            introduce: "qwqwqqwq",
            createuser: "博格",
            acceptuser: "伯格",
            endTime: "2020-02-29 16:17:59", //
            ifWork: 1,
            projectaccount: "qqq",
            projectmoney: "qqq",
            userdataURL: "qqq",
            process: "0", //
            userType: "qq",
            company: "yingting",
            actor: "甲"
          },
          {
            projectID: "1", //
            name: "博哥", //
            data: "qwqwqwq",
            dataURL: "www.ddd.com",
            introduce: "qwqwqqwq",
            createuser: "博格",
            acceptuser: "伯格",
            endTime: "2020-02-29 16:17:59", //
            ifWork: 1,
            projectaccount: "qqq",
            projectmoney: "qqq",
            userdataURL: "qqq",
            process: "0", //
            userType: "qq",
            company: "yingting",
            actor: "甲"
          },
          {
            projectID: "1", //
            name: "博哥", //
            data: "qwqwqwq",
            dataURL: "www.ddd.com",
            introduce: "qwqwqqwq",
            createuser: "博格",
            acceptuser: "伯格",
            endTime: "2020-02-29 16:17:59", //
            ifWork: 1,
            projectaccount: "qqq",
            projectmoney: "qqq",
            userdataURL: "qqq",
            process: "0", //
            userType: "qq",
            company: "yingting",
            actor: "甲"
          },
          {
            projectID: "1", //
            name: "博哥", //
            data: "qwqwqwq",
            dataURL: "www.ddd.com",
            introduce: "qwqwqqwq",
            createuser: "博格",
            acceptuser: "伯格",
            endTime: "2020-02-29 16:17:59", //
            ifWork: 0,
            projectaccount: "qqq",
            projectmoney: "qqq",
            userdataURL: "qqq",
            process: "0", //
            userType: "qq",
            company: "yingting",
            actor: "甲"
          },
          {
            projectID: "1", //
            name: "博哥", //
            data: "qwqwqwq",
            dataURL: "www.ddd.com",
            introduce: "qwqwqqwq",
            createuser: "博格",
            acceptuser: "伯格",
            endTime: "2020-02-29 16:17:59", //
            ifWork: 0,
            projectaccount: "qqq",
            projectmoney: "qqq",
            userdataURL: "qqq",
            process: "0", //
            userType: "qq",
            company: "yingting",
            actor: "甲"
          }
        ]
      }
    },
    computed: {
      ifShow() {
        return true
        // return this.$store.state.role === 'manager';
      }
    },
    methods: {
      collapseItemClick() {
        console.log('aa')
      },
      async getProjectMsg(id) {
        let res = await this.$http.projectSearch({
          type: '1b',
          value: id
        });
        console.log('---------项目详情-----------');
        console.log(res);
        // this.projectList = res.data;
      },
      async handleClick(val) {
        await this.$router.push({ name: 'TaskInfo', query: { text: val } })
      }
    },
    activated() {
      this.projectID = this.$route.query.projectId;
      if (this.projectID) {
        this.getProjectMsg(this.projectID);
      }
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
      }
    }
  }
</style>
