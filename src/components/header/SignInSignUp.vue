<template>
  <div>
    <div v-if="$store.state.userInfo.username === ''">
      <el-link :underline="false" type="primary" @click="$router.push({name: 'Login'})"><i class="el-icon-user"></i> 登 录</el-link>
      <span style="padding: 0 .5rem"> | </span>
      <el-link :underline="false" type="primary" @click="$router.push({name: 'LoginManager'})"><i class="el-icon-user-solid"></i> 经费管理员登录</el-link>
      <span style="padding: 0 .5rem"> | </span>
      <el-link :underline="false" type="primary" @click="$router.push({name: 'SignUp'})"> 注 册</el-link>
    </div>
    <div v-else>
      <el-dropdown :hide-on-click="false" @command="handleCommand">
        <span class="el-dropdown-link">
          <el-link type="primary"><i class="el-icon-user"></i>{{ $store.state.userInfo.username }}</el-link>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="Mine" v-if="$store.state.role !== 'expenseManager'">
            <drop-down>我的主页</drop-down>
          </el-dropdown-item>
          <el-dropdown-item command="Account" v-if="$store.state.role === 'user'">
            <drop-down>我的报酬</drop-down>
          </el-dropdown-item>
          <el-dropdown-item command="Funding" v-if="$store.state.role === 'company'">
            <drop-down>我的资金</drop-down>
          </el-dropdown-item>
          <el-dropdown-item command="FundingManage" v-if="$store.state.role === 'manager'">
            <drop-down>团队资金管理</drop-down>
          </el-dropdown-item>
          <el-dropdown-item command="News" disabled>
            <drop-down type="new">站内信</drop-down>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!--      <el-link type="primary" @click="$router.push({name: 'Mine'})"><i class="el-icon-user"></i>{{ $store.state.userInfo.username }}</el-link>-->
      <span style="padding: 0 .5rem"> | </span>
      <el-link type="primary" @click="signOut"> 退 出</el-link>
    </div>
  </div>
</template>

<script>
  import DropDown from "@/components/header/DropDown";

  export default {
    name: "SignInSignUp",
    components: {
      DropDown
    },
    data() {
      return {

      }
    },
    methods: {
      signOut() {
        this.$store.commit('CLEAR_USER_INFO');
        this.$router.push({name: 'Home'})
      },
      handleCommand(command) {
        this.$router.push({name: command})
      }
    }
  }
</script>

<style scoped>
</style>
