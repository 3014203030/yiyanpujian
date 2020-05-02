<template>
  <div class="flex">
    <el-button icon="el-icon-arrow-left" circle @click="$emit('back')"></el-button>
    <company-manager v-if="option === 1" class="flex-auto center" @step-two-finish="$emit('step-two-finish')"></company-manager>
    <company-business v-if="option === 2" class="flex-auto center" @step-two-finish="$emit('step-two-finish')"></company-business>
    <team-account v-if="option === 3" class="flex-auto center" @step-two-finish="$emit('step-two-finish')"></team-account>
    <personal-account v-if="option === 4" class="flex-auto center" @step-two-finish="$emit('step-two-finish')"></personal-account>
  </div>
</template>

<script>
  import CompanyManager from "@/views/v3/newLogin/CompanyManager";
  import TeamAccount from "@/views/v3/newLogin/TeamAccount";
  import PersonalAccount from "@/views/v3/newLogin/PersonalAccount";
  import CompanyBusiness from "@/views/v3/newLogin/CompanyBusiness";

  export default {
    name: "StepTwo",
    components: {
      CompanyManager,
      TeamAccount,
      PersonalAccount,
      CompanyBusiness
    },
    props: {
      option: Number
    },
  }
</script>

<style>

</style>
