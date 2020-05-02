<template>
  <el-card shadow="hover" class="my-card">
    <div class="flex left" @click="$emit('item-click')">
      <p><i class="my-icon" :class="icon"></i></p>
      <p class="flex-column">
        <span class="big-word">{{zhName}}</span>
        <span class="small-word">{{enName}}</span>
      </p>
    </div>
  </el-card>
</template>

<script>
  export default {
    name: "TypeCard",
    props: {
      zhName: String,
      enName: String,
      icon: String,
      path: String
    }
  }
</script>

<style>
  .my-card {
    cursor: pointer;
  }

  .my-icon {
    font-size: 2.5rem;
    color: var(--color-background);
    margin-right: .75rem;
  }

  .big-word {
    font-size: 1.2rem;
  }

  .small-word {
    color: rgba(0, 0, 0, .5);
    font-size: .8rem;
  }
</style>
