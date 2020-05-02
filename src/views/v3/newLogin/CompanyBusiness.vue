<template>
  <div class="team-account-out-box">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="用户名">
        <el-input v-model="form.username" clearable @blur="checkUserName"></el-input>
      </el-form-item>
      <el-form-item label="公司名称">
        <el-input v-model="form.companyName" clearable></el-input>
      </el-form-item>
      <el-form-item label="产品名称">
        <el-input v-model="form.productName" clearable></el-input>
      </el-form-item>
      <el-form-item label="产品规格">
        <el-input v-model="form.productSpecification" clearable></el-input>
      </el-form-item>
      <el-form-item label="产品生产厂家">
        <el-input v-model="form.productManufacturer" clearable></el-input>
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
      <el-form-item label="推广地区">
        <location-selector @val-change="form.promotionArea = $event"></location-selector>
      </el-form-item>
      <el-form-item label="上传相关文件" class="left">
        <el-upload
          ref="upload"
          action="#"
          list-type="fileList"
          :http-request="uploadFileHandler">
          <el-button size="small" type="success">点击选择文件</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="公司管理账户ID">
        <el-input v-model="form.managementUser" clearable></el-input>
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
  import axios from "axios";

  export default {
    name: "CompanyBusiness",
    components: {
      LocationSelector
    },
    data() {
      return {
        form: {
          username: '',
          companyName: '',
          productName: '',
          productSpecification: '',
          productManufacturer: '',
          personInCharge: '',
          phoneNumber: '',
          password: '',
          email: '',
          promotionArea: '',
          managementUser: ''
          // superiorAccountID: '',
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
        formData.append('file', this.file);
        formData.append('username', this.form.username);  // 用户名
        formData.append('name', this.form.personInCharge);  // 负责人真实姓名
        formData.append('company', this.form.companyName);  // 公司名称
        formData.append('password', this.form.password);  // 密码
        formData.append('productName', this.form.productName);  // 产品名称
        formData.append('productSize', this.form.productSpecification);  // 产品规格
        formData.append('productIndus', this.form.productManufacturer);  // 产品厂家
        formData.append('area', this.form.promotionArea);  // 推广地区
        formData.append('phone', this.form.phoneNumber);  // 负责人手机号
        formData.append('email', this.form.email);  // 邮箱
        formData.append('unit', '');  // 上级账户
        formData.append('managementUser', this.form.managementUser);  // 管理员？
        // 其他元素添加
        try {
          let res = await axios.post('/api/doctor/user/regis1', formData, {headers: {'Content-Type': 'multipart/form-data'}});
          console.log('39.96.65.14 /doctor/user/regis1')
          console.log(res);
          if (res.data.code === 20000) {
            this.$message.success('操作成功');
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

<style>
  .team-account-out-box {
    padding: 0 15%;
  }
</style>

