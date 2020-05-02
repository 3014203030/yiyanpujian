<template>
  <div>
    <div class="basic-container gray-background">
      <div class="user-login-logout flex">
        <div class="left flex-auto" style="font-size: .9rem">您好，欢迎登陆本网站！</div>
        <sign-in-sign-up></sign-in-sign-up>
        <!--  以后可能要添加  -->
      </div>
    </div>
    <div class="basic-container green-background">
      <div class="flex">
        <div class="logo">
          <img src="~@/assets/img/logo.png" alt="logo" @click="$router.push({name: 'Home'})">
        </div>
        <div class="nav-bar flex-auto flex">
          <div class="basic-item active">
            <p class="zh-name ellipsis">站内消息</p>
            <p class="en-name ellipsis">WEBSITENEWS</p>
          </div>
        </div>
      </div>
    </div>
    <div class="basic-container" style="padding-top: 4rem">
      <el-card shadow="hover">
        <div class="left">
          <h3 class="basic-title">站内消息</h3>
          <div style="padding: 2rem 2rem 0">
            <el-collapse v-model="activeNames">
              <el-collapse-item v-for="(item, index) in messages" :name=index>
                <template slot="title">
                  <div class="flex sub-title">
                    <p>{{ index + 1 }}</p>
                    <p class="flex-auto pl"><span>{{ item.title }}</span></p>
                    <p class="pl">
                      发布时间：<span>{{ item.createtime | dateFormat('yyyy-MM-dd') }}</span>
                    </p>
                    <p class="pl">
                      消息来源：<span>{{ item.createuser }}</span>
                    </p>
                  </div>
                </template>
                <el-alert
                  :title="'消息编号：' + item.uuid"
                  type="info"
                  :description="item.detail"
                  show-icon
                  :closable="false">
                </el-alert>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import SignInSignUp from "@/components/header/SignInSignUp";

  export default {
    name: "NewTips",
    components: {
      SignInSignUp
    },
    data() {
      return {
        activeNames: [],
        messages: []
      }
    },
    methods: {
      async initNewTips() {
        let res = await axios.post('/api/doctor/message/get5Message');
        console.log(res);
        if (res.data.code === 20000) {
          this.messages = res.data.data;
        } else {
          this.$message.error(res.data.msg);
        }
      }
    },
    activated() {
      this.initNewTips();
    }
  }
</script>

<style lang="scss">
  .sub-title {
    width: 95%;
    color: rgba(0, 0, 0, .5);

    .pl {
      padding-left: 2rem;
    }

    p {
      display: inline-block;
    }

    i, span {
      font-size: 1rem;
      color: var(--color-background);
    }
  }
</style>
