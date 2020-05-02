<template>
  <div class="fill-up flex flex-center-center bg"
       :style="{backgroundImage: 'url(\'' + require('@/assets/img/loginBgM.jpg') + '\')'}">
    <el-card>
      <div class="sign-in-content">
        <h3>用户登录</h3>
        <div class="divider" style="margin-bottom: 2rem"></div>
        <el-form ref="loginForm"
                 :model="loginForm"
                 label-width="80px"
                 label-position="left"
                 :rules="rules">
          <el-form-item label="用户名" required prop="name">
            <el-input v-model="loginForm.name" clearable></el-input>
          </el-form-item>
          <el-form-item label="密码" required prop="password">
            <el-input v-model="loginForm.password" type="password" clearable></el-input>
          </el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">立即登录</el-button>
        </el-form>
        <div class="divider"></div>
        <el-link type="info" @click="$router.push({name: 'SignUp'})">还没有账号？去注册</el-link>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "SignInManager",
    data() {
      return {
        loginForm: {
          name: '',
          password: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.startLogin();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      async startLogin() {
        let res = await this.$http.login({
          username: this.loginForm.name,
          password: this.loginForm.password
        });
        if (res.code === this.$http.SUCC_CODE) {
          this.$message.success('登录成功');
          console.log('-----------登录----------');
          console.log(res.data);
          this.$store.commit('SET_USER_INFO', res.data);
          await this.$router.push({name: 'ExpenseManager'})
        } else {
          this.$message.error(res.msg)
        }
      }
    }
  }
</script>

<style>
  .sign-in-content {
    width: 400px;
    padding: 0 1rem;
  }

  .bg {
    background-size: cover;
    position: absolute;
  }
</style>
