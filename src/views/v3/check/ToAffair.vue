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
            <p class="zh-name ellipsis">用户审核</p>
            <p class="en-name ellipsis">USERVERIFY</p>
          </div>
        </div>
      </div>
    </div>
    <team-account-check></team-account-check>
  </div>
</template>

<script>
  import SignInSignUp from "@/components/header/SignInSignUp";
  import TeamAccountCheck from "@/views/v3/check/TeamAccountCheck";
  export default {
    name: "ToAffair",
    components: {
      SignInSignUp,
      TeamAccountCheck
    }
  }
</script>

<style>
  .user-login-logout {
    padding: .3rem 0;
  }
</style>
