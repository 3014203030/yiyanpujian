<template>
  <div class="health-radius-item-box flex">
    <el-avatar :size="80" :src="info.pic" @error="true" fit="cover" class="flex-shrink-0">
      <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
    </el-avatar>
    <div class="health-radius-item-content">
      <p>{{info.area}} - {{info.region}}</p>
      <p>微信群：{{info.wechatQun}}</p>
      <div class="content-highlight flex">
        <div class="data-item">
          <p><span>{{info.online}}</span></p>
          <p class="ellipsis">微信在线人数</p>
        </div>
        <div class="data-item">
          <p><span>{{info.active}}</span></p>
          <p class="ellipsis">活跃度</p>
        </div>
        <div class="data-item">
          <p><span>{{info.result}}</span></p>
          <p class="ellipsis">现场考核结果</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HealthRadiusItem",
    props: {
      info: Object
    }
  }
</script>

<style lang="scss">
  .health-radius-item-box {
    padding: 1rem 0;

    .health-radius-item-content {
      font-size: .9rem;
      padding-left: 1rem;

      p {
        padding-bottom: .2rem;
      }

      .content-highlight {
        padding-top: .5rem;
        font-size: .7rem;

        span {
          font-size: 1.1rem;
          font-weight: bold;
          color: var(--color-text-highlight);
        }

        .data-item {
          text-align: center;
          padding: 0 .5rem;
          border-left: 1px solid rgba(255, 255, 255, .4);
        }
      }
    }
  }
</style>
