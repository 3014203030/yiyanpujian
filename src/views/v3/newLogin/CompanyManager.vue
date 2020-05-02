<template>
  <div class="company-manager-out-box">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="用户名">
        <el-input v-model="form.username" clearable @blur="checkUserName"></el-input>
      </el-form-item>
      <el-form-item label="公司/代理人名称">
        <el-input v-model="form.agentName" clearable></el-input>
      </el-form-item>
      <el-form-item label="负责人姓名">
        <el-input v-model="form.personInCharge" clearable></el-input>
      </el-form-item>
      <el-form-item label="负责人电话">
        <el-input v-model="form.phoneNumber" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password" clearable></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email" clearable></el-input>
      </el-form-item>
      <el-form-item label="管理级别">
        <el-radio-group v-model="form.managerLevel">
          <el-radio :label="1">全国代理</el-radio>
          <el-radio :label="2">省级代理</el-radio>
          <el-radio :label="3">市级代理</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="管理地区">
        <location-selector @val-change="form.managerLocation = $event"></location-selector>
      </el-form-item>
      <el-form-item label="上传证件" class="left">
        <el-upload
          ref="upload"
          action="#"
          list-type="picture"
          :http-request="uploadFileHandler">
          <el-button size="small" type="success">点击选择文件</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import LocationSelector from "@/components/common/LocationSelector";
  import axios from 'axios';

  export default {
    name: "CompanyManager",
    components: {
      LocationSelector
    },
    data() {
      return {
        form: {
          username: '',
          agentName: '',
          personInCharge: '',
          phoneNumber: '',
          password: '',
          email: '',
          managerLevel: '',
          managerLocation: ''
        },
        file: {}
      }
    },
    methods: {
      async checkUserName() {
        let res = await this.$http.getCheckUser({
          username: this.form.username
        });
        if (res.code !== this.$http.SUCC_CODE) {
          this.$message.error(res.msg);
        } else {
          this.$message.success('用户名可用')
        }
      },
      async onSubmit() {
        let formData = new FormData();
        formData.append('data', this.file);  // 文件
        formData.append('username', this.form.username);  // 用户名
        formData.append('name', this.form.personInCharge); // 负责人姓名
        formData.append('manageLevel', this.form.managerLevel);  // 管理级别
        formData.append('password', this.form.password);  // 密码
        formData.append('area', this.form.managerLocation);  // 管理地区
        formData.append('phone', this.form.phoneNumber);  // 负责人手机号
        formData.append('email', this.form.email);  // 邮箱
        formData.append('company', this.form.agentName);  // 公司名称
        // 其他元素添加
        console.log('/api/doctor/user/regis2');
        try {
          let res = await axios.post('/api/doctor/user/regis2', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
          console.log(res);
          if (res.data.code === 20000) {
            this.$emit('step-two-finish')
          } else {
            this.$message.error(res.data.msg)
          }
        } catch (e) {
          this.$message.error(e.response.status + ' ' + e.response.statusText)
        }
      },
      uploadFileHandler(params) {
        console.log(params.file);
        this.file = params.file
      }
    }
  }
</script>

<style lang="scss">
  .company-manager-out-box {
    padding: 0 15%;
  }
</style>
