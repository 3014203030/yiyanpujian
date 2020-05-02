<template>
  <div class="sign-up-content">
    <h3>用户注册</h3>
    <div class="divider"></div>
    <div class="steps-content">
      <el-steps :active="active" finish-status="success" align-center>
        <el-step title="账户类型选择"></el-step>
        <el-step title="完善基本信息"></el-step>
        <el-step title="注册成功"></el-step>
      </el-steps>
    </div>
    <div class="form-content">
      <step-one v-if="active === 0" @item-click="step1Next"></step-one>
      <step-two v-if="active === 1" :option="userType" @back="active--" @step-two-finish="active++"></step-two>
      <div v-if="active === 2">
        <el-link type="info" @click="$router.push({name: 'Login'})">注册完成，去登录</el-link>
        <el-link> / </el-link>
        <el-link type="info" @click="$router.push({name: 'Home'})">回到首页</el-link>
      </div>
    </div>
  </div>
</template>

<script>
  import StepOne from "@/views/v3/newLogin/StepOne";
  import StepTwo from "@/views/v3/newLogin/StepTwo";
  export default {
    name: "SignUp",
    components: {
      StepOne,
      StepTwo
    },
    data() {
      return {
        active: 0,
        userType: 0
      }
    },
    methods: {
      step1Next(index) {
        console.log(index);
        this.userType = index;
        this.active = 1;
      }
    }
  }
</script>

<style>
  .sign-up-content {
    padding: 2rem;
  }

  .steps-content {
    padding-top: 3rem;
    padding-bottom: 4rem;
  }

  .form-content {
    width: 75%;
    margin: 0 auto;
  }

  .location-style .el-form-item {
    margin: 0;
  }
</style>
