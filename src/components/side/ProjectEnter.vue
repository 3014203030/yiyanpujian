<template>
  <el-card :body-style="{ padding: '1rem' }" shadow="hover">
    <div class="left">
      <h3 class="basic-title">项目管理系统</h3>
      <el-row :gutter="10">
        <el-col :span="8" v-for="item in projectItems">
          <div style="margin-bottom: 10px">
            <el-card :body-style="{ padding: '.5rem' }" shadow="hover">
              <div class="sub-enter">
                <i :class="item.icon"></i>
                <p>{{item.name}}</p>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
  export default {
    name: "ProjectEnter",
    data() {
      return {
        projectItems: [
          { name: '立项', icon: 'el-icon-folder-add' },
          { name: '项目进程', icon: 'el-icon-paperclip' },
          { name: '结项', icon: 'el-icon-coordinate' },
          { name: '其他', icon: 'el-icon-more-outline' }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .sub-enter {
    text-align: center;

    i {
      color: rgba(0, 0, 0, .3);
      font-size: 1.75rem;
      padding-bottom: .4rem;
    }

    p {
      font-size: .8rem;
    }
  }
</style>
