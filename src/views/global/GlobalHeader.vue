<template>
  <div class="">
    <div class="basic-container gray-background">
      <div class="user-login-logout flex">
        <div class="left flex-auto" style="font-size: .9rem">您好，欢迎登陆本网站！</div>
        <sign-in-sign-up></sign-in-sign-up>
        <!--  以后可能要添加  -->
      </div>
    </div>
    <div class="basic-container green-background">
      <nav-bar></nav-bar>
    </div>
<!--scoped    <div class="basic-container flex" style="padding-top: 1rem">-->
<!--      <advertisement-side image-url="http://img1.dxycdn.com/2020/0306/951/3400499376224315144-12.png"></advertisement-side>-->
<!--      <advertisement-side image-url="http://img1.dxycdn.com/2020/0317/179/3402550667637347974-12.png"></advertisement-side>-->
<!--      <advertisement-side image-url="http://img1.dxycdn.com/2020/0408/248/3406582566038968374-12.jpg"></advertisement-side>-->
<!--    </div>-->
  </div>
</template>

<script>
  import AdvertisementSide from "@/views/AdvertisementSide";
  import SignInSignUp from "@/components/header/SignInSignUp";
  import NavBar from "@/components/header/NavBar";

  export default {
    name: "GlobalHeader",
    components: {
      SignInSignUp,
      NavBar,
      AdvertisementSide
    }
  }
</script>

<style>
  .user-login-logout {
    padding: .3rem 0;
  }
</style>
<style scoped>
</style>
