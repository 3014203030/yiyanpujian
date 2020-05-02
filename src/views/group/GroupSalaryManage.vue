<template>
  <div style="background-color: white">
    <!-- 已吐，我只是个业余的呀 -->
    <account-header></account-header>
    <div class="basic-container green-background">
      <div class="flex">
        <div class="logo">
          <img src="~@/assets/img/logo.png" alt="logo" @click="$router.push({name: 'Home'})">
        </div>
        <div class="nav-bar flex-auto flex">
          <div class="basic-item"
               v-for="item in routerList"
               @click="$router.push({name: item.path})" :class="$route.name === item.path ? 'active' : ''">
            <p class="zh-name ellipsis">{{item.name}}</p>
            <p class="en-name ellipsis">{{item.nameEN}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="basic-container">
      <div class="account-content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
  import AccountHeader from "@/views/global/AccountHeader";

  export default {
    name: "GroupSalaryManage",
    components: {
      AccountHeader
    },
    data() {
      return {
        routerList: [
          {
            name: '总览',
            nameEN: 'OVERVIEW',
            path: 'FundingManageOverview'
          },
          {
            name: '交易明细',
            nameEN: 'RECORDDETAIL',
            path: 'FundingManageRecord'
          }
        ],
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
