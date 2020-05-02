<template>
  <el-card shadow="hover">
    <div class="account-board flex-column" :style="{height : height}">
      <div class="flex">
        <p class="flex-auto account-board-title">{{title}}</p>
        <el-tooltip effect="dark" :content="tip" placement="top">
          <p class="account-board-tips"><i class="el-icon-info"></i> 帮助</p>
        </el-tooltip>
      </div>
      <div class="flex-auto flex flex-center-center">
        <p class="account-board-amount">￥{{ amount | moneyFormat}}</p>
      </div>
      <div class="flex-reverse">
        <slot></slot>
      </div>
    </div>
  </el-card>
</template>

<script>
  export default {
    name: "AccountBoard",
    props: {
      title: String,
      tip: String,
      height: {
        type: String,
        default: '250px'
      },
      amount: {
        type: Number,
        default: 0
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
    data() {
      return {
        amount0: 0
      }
    },
    computed: {
      // amount() {
      //   return this.amountProp
      // }
    },
    watch: {
      amount: {
        handler(val, old) {
          this.amount0 = val;
        }
      }
    }
  }
</script>

<style lang="scss">
  .account-board {
    font-size: .9rem;

    .account-board-title {
    }

    .account-board-tips {
      color: rgba(0, 0, 0, .3);
    }

    .account-board-amount {
      font-size: 1.6rem;
    }
  }
</style>
