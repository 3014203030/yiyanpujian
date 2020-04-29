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
          <img src="~@/assets/img/logo.png" alt="logo">
        </div>
        <div class="nav-bar flex-auto flex">
          <div class="basic-item active">
            <p class="zh-name ellipsis">网站管理</p>
            <p class="en-name ellipsis">WEBMANAGER</p>
          </div>
        </div>
      </div>
    </div>
    <div class="basic-container" style="background-color: white">
      <div class="account-content">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="username"
            label="用户名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="email"
            label="邮箱"
            width="180">
          </el-table-column>
          <el-table-column
            prop="authorID"
            label="用户编号">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            width="180">
          </el-table-column>
          <el-table-column
            prop="type"
            label="用户类型"
            width="180">
          </el-table-column>
          <el-table-column
            label="操作"
            width="180">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
  import SignInSignUp from "@/components/header/SignInSignUp";

  export default {
    name: "WebManager",
    components: {
      SignInSignUp
    },
    data() {
      return {
        tableData: [
          {}
        ]
      }
    },
    methods: {
      handleDelete(index, row) {

      }
    }
  }
</script>

<style lang="scss">
  .account-content {
    padding: 2rem 0;
    text-align: left;
  }

  .logo {
    align-self: start;

    img {
      display: block;
      width: 163px;
      height: 68px;
      object-fit: fill;
    }
  }

  .nav-bar {
    padding: 1.5rem 2rem;
  }

  .basic-item {
    padding: .3rem 1rem;
    border-right: 1px solid rgba(255, 255, 255, .5);
    text-decoration: none;
    font-weight: 100;
    /*color: var(--color-background-gray);*/
    color: rgba(255, 255, 255, .6);
    transition: color .1s ease;

    &.active {
      color: white;
    }

    .zh-name {
      font-size: 1.1rem;
      padding-bottom: .2rem;
    }

    .en-name {
      font-size: .5rem;
    }
  }
</style>
