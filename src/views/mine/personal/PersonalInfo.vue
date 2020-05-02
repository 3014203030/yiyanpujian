<template>
  <div>
    <h3 class="basic-title">我的信息</h3>
    <el-card shadow="hover">
      <div class="my-id-number">身份识别码：<span>{{personalInfo.authorID}}</span></div>
    </el-card>
    <div class="flex flex-start">
      <el-form label-position="left" inline class="demo-table-expand">
        <el-form-item class="form-item" label="用户名">
          <span>{{ personalInfo.username }}</span>
        </el-form-item>
        <el-form-item label="待改待审核">
          <span>{{ personalInfo.modify }}</span>
        </el-form-item>
        <el-form-item label="邮箱">
          <span>{{ personalInfo.email }}</span>
        </el-form-item>
        <el-form-item label="地区">
          <span>{{ personalInfo.local }}</span>
        </el-form-item>
        <el-form-item label="社区">
          <span>{{ personalInfo.region }}</span>
        </el-form-item>
        <el-form-item label="所属单位">
          <span>{{ personalInfo.unit }}</span>
        </el-form-item>
        <el-form-item label="科室">
          <span>{{ personalInfo.part }}</span>
        </el-form-item>
        <el-form-item label="点赞记录">
          <span>{{ personalInfo.like }}</span>
        </el-form-item>
        <el-form-item label="下载记录">
          <span>{{ personalInfo.download }}</span>
        </el-form-item>
        <el-form-item label="收藏记录">
          <span>{{ personalInfo.record }}</span>
        </el-form-item>
        <el-form-item label="浏览记录">
          <span>{{ personalInfo.view }}</span>
        </el-form-item>
        <el-form-item label="提现待审核">
          <span>{{ personalInfo.getMoney }}</span>
        </el-form-item>
        <el-form-item label="提现记录">
          <span>{{ personalInfo.getmoneyrecord }}</span>
        </el-form-item>
        <el-form-item label="提现状态">
          <span>{{ personalInfo.state }}</span>
        </el-form-item>
        <el-form-item label="注册类型">
          <span>{{ personalInfo.money }}</span>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PersonalInfo",
    components: {
    },
    data() {
      return {
        personalInfo: {}
      }
    },
    methods: {
      async editSave(value) {
        console.log(value);
        // 修改后的信息
        let res = await this.$http.userModify(value);
        this.$message.success("修改成功");
      },
      async initPersonalInfo() {
        let res = await this.$http.getUser({
          username: this.$store.state.userInfo.username
        });
        console.log('-------------用户信息----------');
        console.log(res);
        this.personalInfo = res.data;
      }
    },
    activated() {
      this.initPersonalInfo();
    }
  }
</script>

<style>
  .basic-title {
    margin-bottom: 1.5rem;
  }

  .demo-table-expand {
    padding: 2rem;
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .my-id-number {
    text-align: center;
    font-size: .9rem;
    color: rgba(0, 0, 0, .5);
  }

  .my-id-number span {
    font-size: 1.5rem;
    /*font-weight: bold;*/
    color: var(--color-background-deep);
  }
</style>
