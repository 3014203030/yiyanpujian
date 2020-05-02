<template>
<!-- 注册 -->
  <div class="sign-up-content">
    <h3>用户注册</h3>
    <div class="divider"></div>
    <div class="steps-content">
      <el-steps :active="active" finish-status="success" align-center>
        <el-step title="邮箱验证"></el-step>
        <el-step title="完善基本信息"></el-step>
        <el-step title="注册成功"></el-step>
      </el-steps>
    </div>
    <div class="form-content">
      <step-one v-if="active === 0" @step-one-finished="step1Next"></step-one>
      <step-two v-if="active === 1" :option="email" @step-two-finished="step2Next"></step-two>
      <div v-if="active === 2">
        <el-link type="info" @click="$router.push({name: 'Login'})">注册完成，去登录</el-link>
        <el-link> / </el-link>
        <el-link type="info" @click="$router.push({name: 'Home'})">回到首页</el-link>
      </div>
    </div>
  </div>
</template>

<script>
  import StepOne from "@/components/header/signup/StepOne";
  import StepTwo from "@/components/header/signup/StepTwo";

  export default {
    name: "SignUp",
    components: {
      StepOne,
      StepTwo
    },
    data() {
      return {
        active: 0,
        email: '',
      }
    },
    methods: {
      step1Next(email) {
        this.email = email;
        this.active = 1;
      },
      async step2Next(ifSuccess) {
        this.active = 2;
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
    width: 500px;
    margin: 0 auto;
  }

  .location-style .el-form-item {
    margin: 0;
  }
</style>
