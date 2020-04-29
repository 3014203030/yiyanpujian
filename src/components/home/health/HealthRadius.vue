<template>
  <div class="health-radius fill-up flex-column">
    <span class="title">健康半径</span>
    <el-scrollbar style="height:100%">
      <health-radius-item class="border-bottom" v-for="(item, index) in doctorList" :info="item" @click="doctorClick(index)" :key="index"></health-radius-item>
    </el-scrollbar>
  </div>
</template>

<script>
  import HealthRadiusItem from "@/components/home/health/HealthRadiusItem";

  export default {
    name: "HealthRadius",
    components: {
      HealthRadiusItem
    },
    data() {
      return {
        doctorList: []
      }
    },
    methods: {
      doctorClick(index) {
        console.log(index);
      },
      async initHealthRadius(area) {
        // let local = this.$store.state.userInfo.area === '' ? '北京市市辖区东城区': this.$store.state.userInfo.area;
        let local = area;
        let res = await this.$http.getHealthy({
          // local: this.$store.state.userId
          local: local
        });
        console.log('---------医达人------------');
        console.log(res);
        this.doctorList = res.data;
      }
    },
    activated() {
      if (this.$store.state.userInfo.area !== '') {
        this.initHealthRadius(this.$store.state.userInfo.area);
      } else {
        this.initHealthRadius('北京市市辖区海淀区');
      }
    }
  }
</script>

<style lang="scss">
  .health-radius {
    box-shadow: var(--box-shadow);
    background-color: #fff;
    text-align: left;
    color: #3e3e3e;
    border-radius: 4px;

    .health-warning {
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: .8rem;
      color: rgba(255, 255, 255, .8);
    }

    .title {
      padding-bottom: 1rem;
    }

    .border-bottom {
      border-bottom: 1px solid rgba(255, 255, 255, .2);
    }

    .el-scrollbar__thumb {
      background-color: rgba(255, 255, 255, .4);
    }

    .el-scrollbar__thumb:hover {
      background-color: rgba(255, 255, 255, .7);
    }
  }
</style>
<style scoped>
  .title {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background: var(--color-background);
    padding: 15px 20px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: 1.2px;
    text-transform: uppercase;
  }
</style>
