<template>
  <div>
    <h3 class="basic-title">管理中项目</h3>
    <project-table :project-list="projectList" @refresh="refresh"></project-table>
  </div>
</template>

<script>
  import ProjectTable from "@/components/project/ProjectTable";

  export default {
    name: "MyManaged",
    components: {
      // ProjectList,
      ProjectTable
    },
    data() {
      return {
        projectList: []
      }
    },
    methods: {
      async initProjectInfo() {
        let res = await this.$http.projectSearch({
          type: '5b',
          // value: this.$store.state.userId
          value: this.$store.state.userInfo.username
          // value: 'guan_8c4e951e-04f1-4ef2-b4b6-ce7085e08fd5'
        });
        console.log('------查询管理的所有项目------');
        console.log(res);
        this.projectList = res.data;
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
</style>
