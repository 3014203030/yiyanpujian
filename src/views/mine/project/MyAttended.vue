<template>
  <div>
    <h3 class="basic-title">已参与项目</h3>
<!--    <project-list :project-list="projectList"></project-list>-->
    <project-table :project-list="projectList"></project-table>
  </div>
</template>

<script>
  // import ProjectList from "@/components/project/ProjectList";
  import ProjectTable from "@/components/project/ProjectTable";

  export default {
    name: "MyAttended",
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
          type: '3b',
          value: this.$store.state.userInfo.username
          // value: this.$store.state.userId
          // value: 'pu_e45434f6-bc8b-42a0-9c26-9a5e84d7dbaf'
        });
        console.log('----------参与中项目-------------');
        console.log(res)
        this.projectList = res.data;
      }
    },
    activated() {
      this.initProjectInfo();
    }
  }
</script>

<style>

</style>
