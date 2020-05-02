<template>
  <el-form ref="emailForm"
           :model="emailForm"
           label-width="80px"
           :rules="emailRules">
    <el-form-item label="邮箱" required prop="email">
      <el-input v-model="emailForm.email" clearable></el-input>
    </el-form-item>
    <el-form-item label="验证码" required prop="verificationCode">
      <div class="flex">
        <el-input v-model="emailForm.verificationCode" clearable></el-input>
        <div style="margin-left: 1rem">
          <el-tooltip class="item" effect="dark" content="点击获取验证码" placement="right">
            <el-button type="primary" @click="checkCodeBtnClick">获取验证码</el-button>
          </el-tooltip>
        </div>
      </div>
    </el-form-item>
    <el-button type="primary" @click="submitForm('emailForm')">下一步</el-button>
  </el-form>
</template>

<script>
  export default {
    name: "StepOne",
    data() {
      let verificationCodePass = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入验证码'))
        }
        if (value !== this.verificationCodeValue) {
          return callback(new Error('验证码错误'))
        }
        return callback()
      };
      return {
        verificationCodeValue: '',
        emailForm: {
          email: '',
          verificationCode: ''
        },
        emailRules: {
          email: [
            { required: true, message: '请输入邮箱', trigger: 'blur' }
          ],
          verificationCode: [
            { validator: verificationCodePass, trigger: 'blur' }
          ]
        },
      }
    },
    methods: {
      checkCodeBtnClick() {
        this.$refs['emailForm'].validateField('email', (errMsg) => {
          if (errMsg) {
            console.log(errMsg);
          } else {
            this.getCheckCode();
          }
        })
      },
      async getCheckCode() {
        let res = await this.$http.getCheckCode({
          email: this.emailForm.email
        });
        if (res.code === this.$http.SUCC_CODE) {
          this.verificationCodeValue = res.data;
        } else {
          this.$message.error(res.msg);
        }
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$emit('step-one-finished', this.emailForm.email);
            // this.step1Next();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style>

</style>
