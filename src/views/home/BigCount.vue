<template>
  <div class="big-integer green-background flex">
    <p class="flex-auto left"><span>61,028</span> <br>注册人数</p>
    <p class="flex-auto left"><span>328,096</span> <br>在线人数</p>
  </div>
</template>

<script>
  export default {
    name: "BigCount"
  }
</script>

<style lang="scss">
  .big-integer {
    p {
      font-size: .8rem;
      color: rgba(255, 255, 255, .7);
    }
    span {
      color: var(--color-text-highlight);
      font-size: 1.5rem;
      font-weight: bold;
    }

    padding: .75rem 2rem;
    margin-bottom: 20px;

    //scoped
    box-shadow: var(--box-shadow);
    border-radius: 4px;
  }
</style>
