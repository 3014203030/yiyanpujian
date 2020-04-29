<template>
  <el-card shadow="hover">
    <div class="withdraw-content flex-column" :style="{height : height}">
      <div class="flex">
        <p class="flex-auto withdraw-title">{{title}}</p>
        <el-tooltip effect="dark" :content="tip" placement="top">
          <p class="withdraw-tips"><i class="el-icon-info"></i> 帮助</p>
        </el-tooltip>
      </div>
      <div class="flex-auto flex flex-center-center">
        <p class="withdraw-amount">￥{{ selectedAmount | moneyFormat}}</p>
        <el-button type="success" size="mini" @click="withdrawConfirm">确认提现</el-button>
      </div>
      <div class="">
        <el-slider
          v-model="selectedAmount"
          :max="moneyAmount"
          :step="200"
          show-stops
          show-input>
        </el-slider>
      </div>
    </div>
  </el-card>
</template>

<script>
  export default {
    name: "Withdraw",
    props: {
      title: String,
      tip: String,
      height: {
        type: String,
        default: '250px'
      },
      moneyAmount: {
        type: Number,
        default: 0
      },
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
    data() {
      return {
        // moneyAmount: 4333,
        selectedAmount: 0
      }
    },
    methods: {
      async doWithdrawAction() {
        let res = await this.$http.userFeaAdd({
          // authorID: this.$store.state.userInfo.username,
          authorID: this.$store.state.userId,
          mount: this.selectedAmount + "",
          in: 1,
          out: 0,
          source: this.$store.state.userId,
          go: this.$store.state.userId,
          // applyID: this.$store.state.userId
          applyID: this.$store.state.userInfo.username
        });
        console.log(res);
        if (res.code === this.$http.SUCC_CODE) {
          this.$message.success("已发起申请")
        } else {
          this.$message.error(res.msg);
        }
      },
      withdrawConfirm() {
        if (this.selectedAmount < 1) {
          this.$message.warning("提现金额不可以为0");
          return
        }
        this.$msgbox({
          title: '消息',
          message: '此操作将不可撤回，提现金额为' + this.selectedAmount + '元',
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              this.doWithdrawAction();
              done();
              instance.confirmButtonLoading = false;
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: '操作完成'
          });
        });
        this.$emit('update-all');
      }
    }
  }
</script>

<style lang="scss">
  .withdraw-content {
    font-size: .9rem;

    .withdraw-title {
    }

    .withdraw-tips {
      color: rgba(0, 0, 0, .3);
    }

    .withdraw-amount {
      font-size: 1.2rem;
      padding-right: 2rem;
    }
  }
</style>
