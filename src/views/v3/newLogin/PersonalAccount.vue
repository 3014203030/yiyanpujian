<template>
  <div class="personal-account-out-box">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="用户名">
        <el-input v-model="form.username" clearable @blur="checkUserName"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="form.name" clearable></el-input>
      </el-form-item>
      <el-form-item label="身份证号码">
        <el-input v-model="form.IDCard" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password" clearable></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email" clearable></el-input>
      </el-form-item>
      <el-form-item label="银行卡号">
        <el-input v-model="form.bankCardNumber" @change="getBankBin(form.bankCardNumber)" clearable></el-input>
      </el-form-item>
      <el-form-item label="开户行">
        <div class="flex">
<!--          <el-input v-model="form.bank.branch" clearable></el-input>-->
          <el-select v-model="form.bank.branch" placeholder="请选择">
            <el-option
              :label="form.bank.branch"
              :value="form.bank.branch">
            </el-option>
          </el-select>
          <div style="width: 20px"></div>
          <el-input v-model="form.bank.subBranch" clearable placeholder="请输入支行(选填)"></el-input>
        </div>
      </el-form-item>
      <el-form-item label="推广地区">
        <location-selector @val-change="form.promotionArea = $event"></location-selector>
      </el-form-item>
      <el-form-item label="银行预留手机号">
        <el-input v-model="form.bankPhoneNumber" clearable></el-input>
      </el-form-item>
      <el-form-item label="上级账户ID">
        <el-input v-model="form.superiorAccountID" clearable></el-input>
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
  import BIN from 'bankcardinfo'

  export default {
    name: "PersonalAccount",
    components: {
      LocationSelector
    },
    data() {
      return {
        form: {
          username: '',
          name: '',
          IDCard: '',
          password: '',
          email: '',
          bankCardNumber: '',
          bank: {
            branch: '',
            subBranch: ''
          },
          promotionArea: '',
          bankPhoneNumber: '',
          superiorAccountID: ''
        },
        BIN: BIN
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
      getBankBin(number) {
        // 6227003320240034988
        this.BIN.getBankBin(number)
          .then(res => {
            console.log(res);
            this.form.bank.branch = res.bankName;
            // this.form.bank.subBranch = res.cardTypeName
          })
          .catch(err => {
            this.$message.error(err)
          })
      },
      async onSubmit() {
        try {
          // 其他元素添加
          let res = await axios.post('/api/doctor/user/regis', {
            username: this.form.username,  // 用户名
            name: this.form.name,  // 真实姓名
            actureID: this.form.IDCard,  // 身份证号
            password: this.form.password,  // 密码
            bankID: this.form.bankCardNumber,  // 银行卡号
            bank: this.form.bank.branch + this.form.bank.subBranch, // 开户银行
            area: this.form.promotionArea,  // 推广地区
            phone: this.form.bankPhoneNumber,  // 银行卡预留手机号
            email: this.form.email,  // 邮箱
            unit: this.form.superiorAccountID  // 上级账户
          });
          console.log(res);
          if (res.data.code === 20000) {
            this.$emit('step-two-finish')
          } else {
            this.$message.error(res.data.msg)
          }
        } catch (e) {
          this.$message.error(e.response.status + ' ' + e.response.statusText)
        }
      }
    }
  }
</script>

<style lang="scss">
  .personal-account-out-box {
    padding: 0 15%;
  }
</style>
