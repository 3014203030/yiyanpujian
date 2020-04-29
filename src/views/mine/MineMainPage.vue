<template>
  <div style="background-color: white">
    <global-header></global-header>
    <div class="basic-container">
      <div class="mine-page-content left">
        <el-row :gutter="20">
          <el-col :span="5">
            <el-menu router :default-active="$route.path">
              <!--            <el-menu default-active="0-0">-->
              <!--              <el-submenu v-for="(item, index) in $router.options.routes"-->
              <el-submenu v-for="(item, index) in menuMapping"
                          :index="index + ''"
                          :key="index"
                          v-if="ifShow(item.roles)">
                <template slot="title">
                  <i :class="item.icon"></i>
                  <span>{{ item.name }}</span>
                </template>
                <el-menu-item v-for="(subItem, subIndex) in item.children"
                              :index="subItem.path"
                              :key="index + '-' + subIndex"
                              v-if="ifShow(subItem.roles)">
                  <span class="sub-title">{{ subItem.name }}</span>
                </el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
          <el-col :span="19">
            <div class="content-box">
              <keep-alive>
                <router-view></router-view>
              </keep-alive>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  import GlobalHeader from "@/views/global/GlobalHeader";
  import {MENU_MAPPING} from "@/views/mine/menuMapping";

  export default {
    name: "MineMainPage",
    components: {
      GlobalHeader
    },
    data() {
      return {
        menuMapping: MENU_MAPPING,
        role: ''
      }
    },
    computed: {
      ifShow() {
        return (roles) => {
          return roles.indexOf(this.role) !== -1
        }
      }
    },
    activated() {
      this.role = this.$store.state.role;
    }
  }
</script>

<style>
  .mine-page-content {
    padding: 2rem 0;
  }

  .content-box {
    padding: 1rem;
  }

  .sub-title {
    /*padding-left: 1rem;*/
  }

  .el-menu-item.is-active {
    background-color: #e9f6f5;
    border-right: 3px solid var(--color-background);
  }
</style>
