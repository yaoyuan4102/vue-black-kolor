<template>
  <div id="">
    <common-header></common-header>
    <div class="container">
      <welcome></welcome>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
  import { CommonHeader, CommonFooter } from './components/common/index';
  import Welcome from './components/Welcome.vue';

  export default {
    name: 'app',
    components: {
      Welcome,
      CommonHeader,
      CommonFooter
    }
  }
</script>

<style lang="scss">
  @import "assets/style/main.scss";
</style>
