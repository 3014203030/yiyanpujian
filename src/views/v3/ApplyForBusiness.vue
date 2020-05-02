<template>
  <el-card shadow="hover">
    <div>
      <h3 class="basic-title">业务申请</h3>
      <div style="padding: 1rem 4rem">
        <div style="height: 500px;">
          <el-steps v-if="applying" direction="vertical" :active="activeStep">
            <el-step title="开票内容">
              <div slot="description" style="padding-left: 1rem">
                <p style="padding: .5rem 0 .5rem">请输入开票内容</p>
                <el-input
                  @focus="activeStep = 0"
                  @input="activeStep = 1"
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 4}"
                  placeholder="请输入内容"
                  v-model="textarea">
                </el-input>
                <div class="divider"></div>
              </div>
            </el-step>
            <el-step title="业务金额">
              <div slot="description" style="padding-left: 1rem">
                <p style="padding: .5rem 0 .5rem">请输入业务金额</p>
                <div class="flex">
                  <el-input-number
                    @change="activeStep = 2"
                    @focus="activeStep = 1"
                    v-model="mount"
                    :step="10000"
                    :min="0"></el-input-number>
                  <p class="my-money">业务金额：<span>{{ mount | moneyFormat }}元</span></p>
                </div>
                <div class="divider"></div>
              </div>
            </el-step>
            <el-step title="业务合同附件">
              <div slot="description" style="padding-left: 1rem">
                <p style="padding: .5rem 0 .5rem">请上传业务合同附件</p>
                <el-upload
                  :limit="1"
                  ref="upload"
                  action="#"
                  list-type="fileList"
                  :http-request="uploadFileHandler">
                  <el-button size="small" type="success">点击选择文件</el-button>
                </el-upload>
                <div class="divider"></div>
              </div>
            </el-step>
            <el-step title="申请用户">
              <div slot="description" style="padding-left: 1rem">
                {{ '业务申请人：' + $store.state.userInfo.username }}
              </div>
            </el-step>
          </el-steps>
          <div v-else class="fill-up flex flex-center-center">
            <div class="feedback-msg center">
              <i class="el-icon-check"></i>
              <p>操作成功，请耐心等待审核</p>
            </div>
          </div>
        </div>
      </div>
      <div class="center">
        <el-button v-if="applying" type="success" @click="applyForBusiness">申请业务</el-button>
        <el-button v-else @click="$router.go(0)">继续申请</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
  import axios from "axios";

  export default {
    name: "ApplyForBusiness",
    data() {
      return {
        textarea: '',
        mount: 0,
        activeStep: 0,
        file: undefined,
        applying: true
      }
    },
    filters: {
      moneyFormat(num) {
        num = num.toString().replace(/\$|\,/g, '');
        if (isNaN(num))
          num = "0";
        // let sign = (num === (num = Math.abs(num)));
        num = Math.floor(num * 100 + 0.50000000001);
        let cents = num % 100;
        num = Math.floor(num / 100).toString();
        if (cents < 10)
          cents = "0" + cents;
        for (let i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
          num = num.substring(0, num.length - (4 * i + 3)) + ',' +
            num.substring(num.length - (4 * i + 3));
        return (num + '.' + cents);
      }
    },
    methods: {
      applySuccess() {
        // 没规划好
        // 勉强这样写吧
        this.applying = false;
      },
      uploadFileHandler(params) {
        console.log(params.file);
        this.file = params.file;
        this.activeStep = 3;
      },
      applyForBusiness() {
        if (this.textarea !== '' && this.mount > 0 && this.file) {
          this.applyForBusiness0();
        } else {
          this.$message.error('请完整填入信息')
        }
      },
      async applyForBusiness0() {
        try {
          let formData = new FormData();
          formData.append('data', this.file);
          formData.append('name', this.textarea);
          formData.append('mount', this.mount);
          formData.append('creatuser', this.$store.state.userInfo.username);
          let res = await axios.post('/api/doctor/project/apply', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
          console.log(res);
          if (res.data.code === 20000) {
            this.$message.success('操作成功');
            this.activeStep = 4;
            this.applySuccess();
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
  .my-money {
    margin-left: 1rem;
    border-left: 1px solid rgba(0, 0, 0, .7);
    padding-left: 1rem;
    color: rgba(0, 0, 0, .7);

    span {
      color: var(--color-background);
      font-size: 1.3rem;
      font-weight: bold;
    }
  }

  .feedback-msg {
    i {
      font-weight: bold;
      font-size: 6rem;
      color: #67C23A;
    }

    p {
      color: rgba(0, 0, 0, .8);
    }
  }
</style>
