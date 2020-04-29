<template>
  <el-form ref="userForm"
           :model="userForm"
           label-width="120px"
           :rules="userRules">
    <el-form-item label="用户名" required prop="username">
      <el-input v-model="userForm.username" clearable @blur="checkUserName"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" required>
      <el-input v-model="userForm.email" disabled></el-input>
    </el-form-item>
    <el-form-item label="密码" required prop="password">
      <el-input v-model="userForm.password" type="password" clearable></el-input>
    </el-form-item>
    <el-form-item label="地区" required prop="local">
      <location-selector @val-change="userForm.local = $event"></location-selector>
    </el-form-item>
<!--    <el-form-item label="所属公司">-->
<!--      <item-selector @val-change="userForm.company = $event"></item-selector>-->
<!--    </el-form-item>-->
<!--    <el-form-item label="所属单位" required prop="unit">-->
<!--      <el-input v-model="userForm.unit" clearable></el-input>-->
<!--    </el-form-item>-->
    <el-form-item label="所属公司" required prop="company">
      <el-input v-model="userForm.company" clearable></el-input>
    </el-form-item>
    <el-form-item label="所属团队" prop="unit">
      <el-input v-model="userForm.unit" clearable></el-input>
    </el-form-item>
    <el-form-item label="科室" required prop="part">
      <el-input v-model="userForm.part" clearable></el-input>
    </el-form-item>
    <el-form-item label="真实姓名" required prop="name">
      <el-input v-model="userForm.name" clearable></el-input>
    </el-form-item>
    <el-form-item label="身份证号" required prop="actureID">
      <el-input v-model="userForm.actureID" clearable></el-input>
    </el-form-item>
    <el-form-item label="手机号" required prop="phone">
      <el-input v-model="userForm.phone" clearable></el-input>
    </el-form-item>
    <el-form-item label="注册地址" required prop="address">
      <el-input v-model="userForm.address" clearable></el-input>
    </el-form-item>
    <el-form-item label="银行卡号" required prop="bankID">
      <el-input v-model="userForm.bankID" clearable></el-input>
    </el-form-item>
    <el-form-item label="是否是医生" style="text-align: left">
      <el-switch v-model="userForm.ifDOC"></el-switch>
    </el-form-item>
    <el-form-item label="行医资格证号码">
      <el-input v-model="userForm.docID" clearable :disabled="!userForm.ifDOC"></el-input>
    </el-form-item>
    <el-form-item label="行医资格证照片">
      <el-input v-model="userForm.docIDurl" clearable :disabled="!userForm.ifDOC"></el-input>
    </el-form-item>
    <el-form-item label="注册类型" required prop="type">
      <el-select v-model="userForm.type" placeholder="请选择注册类型" style="width: 100%">
        <el-option label="普通用户" value="0"></el-option>
        <el-option label="公司用户" value="3"></el-option>
        <el-option label="项目管理人" value="7"></el-option>
      </el-select>
    </el-form-item>
    <el-button type="primary" @click="submitForm('userForm')">下一步</el-button>
  </el-form>
</template>

<script>
  import LocationSelector from "@/components/common/LocationSelector";
  import ItemSelector from "@/components/common/ItemSelector";

  export default {
    name: "StepTwo",
    components: {
      LocationSelector,
      ItemSelector
    },
    props: {
      option: String
    },
    data() {
      return {
        userForm: {
          username: '',
          email: '',  // 这个用上一步的
          password: '',
          local: '',
          company: '',
          region: '',
          unit: '',
          part: '',
          name: '',
          actureID: '',
          phone: '',
          address: '',
          bankID: '',
          ifDOC: false,
          docID: '',
          docIDurl: '',
          type: ''
        },
        userRules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          local: [
            { required: true, message: '请输入地址', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请输入社区', trigger: 'blur' }
          ],
          part: [
            { required: true, message: '请输入科室', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入真实姓名', trigger: 'blur' }
          ],
          actureID: [
            { required: true, message: '请输入身份证号', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入手机号', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '请输入地址', trigger: 'blur' }
          ],
          bankID: [
            { required: true, message: '请输入银行卡号', trigger: 'blur' }
          ],
          type: [
            { required: true, message: '请输入注册类型', trigger: 'change' }
          ]
          // 其他表单验证
        }
      }
    },
    watch: {
      option: {
        handler(newVal) {
          this.userForm.email = newVal;
        },
        immediate: true
      }
    },
    methods: {
      async checkUserName() {
        let res = await this.$http.getCheckUser({
          username: this.userForm.username
        });
        if (res.code !== this.$http.SUCC_CODE) {
          this.$message.error(res.msg);
        } else {
          this.$message.success('用户名可用')
        }
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.startSignUp();
            // this.step2Next();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      async startSignUp() {
        let res = await this.$http.register(this.userForm);
        if (res.code === this.$http.SUCC_CODE) {
          this.$message.success('注册成功，正在审核');
          this.$emit('step-two-finished', true);
        } else {
          this.$message.error(res.msg)
        }
      }
    }
  }
</script>

<style>

</style>
