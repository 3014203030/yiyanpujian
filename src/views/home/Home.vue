<template>
  <div class="home">
<!--    <advertisement-side></advertisement-side>-->
    <global-header class="sticky-container" />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <global-footer></global-footer>
  </div>
</template>

<script>
  import AdvertisementSide from "@/views/AdvertisementSide";
  import GlobalHeader from "@/views/global/GlobalHeader";
  import GlobalFooter from "@/views/global/GlobalFooter";

  export default {
    name: 'Home',
    components: {
      GlobalHeader,
      GlobalFooter,
      AdvertisementSide
    }
  }
</script>

<style>

</style>
