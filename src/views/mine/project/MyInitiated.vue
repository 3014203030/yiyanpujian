<template>
  <div>
    <h3 class="basic-title">已发起项目</h3>
    <div class="my-initiated-content">
      <div class="add-project-button">
        <el-button icon="el-icon-plus" @click="addProjectClick" type="primary">新增项目</el-button>
      </div>
      <div class="divider"></div>
<!--      <project-list :project-list="projectList"></project-list>-->
      <project-table :project-list="projectList" @refresh="refresh"></project-table>
    </div>
  </div>
</template>

<script>
  // import ProjectList from "@/components/project/ProjectList";
  import ProjectTable from "@/components/project/ProjectTable";

  export default {
    name: "MyInitiated",
    data() {
      return {
        projectList: []
      }
    },
    components: {
      // ProjectList,
      ProjectTable
    },
    methods: {
      async initProjectInfo() {
        let res = await this.$http.projectSearch({
          type: '2b',
          value: this.$store.state.userInfo.username
          // value: this.$store.state.userId
          // value: 'gong_ccd2d926-0a73-4c61-b9b2-f51b48b0d2ef'
        });
        console.log('------查询公司发起的所有项目------');
        console.log(res);
        this.projectList = res.data;
      },
      addProjectClick() {
        this.$router.push({name: 'AddProject'})
      },
      seeProjectInfo(projectID) {
        this.$router.push({ name: 'ProjectInfo', query: { projectID: projectID } }).catch(err => {})
      },
      refresh() {
        this.initProjectInfo();
      }
    },
    activated() {
      this.initProjectInfo();
    }
  }
</script>

<style lang="scss">
  .my-initiated-content {
    padding-top: 1rem;
  }

  .add-project-button {
    text-align: right;
  }
</style>
