<template>
  <div>
    <div class="basic-container gray-background">
      <div class="user-login-logout flex">
        <div class="left flex-auto" style="font-size: .9rem">您好，欢迎登陆本网站！</div>
        <sign-in-sign-up></sign-in-sign-up>
        <!--  以后可能要添加  -->
      </div>
    </div>
  </div>
</template>

<script>
  import SignInSignUp from "@/components/header/SignInSignUp";

  export default {
    name: "AccountHeader",
    components: {
      SignInSignUp
    }
  }
</script>

<style lang="scss">
</style>
