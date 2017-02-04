<template>
  <div id="">
    <common-header></common-header>
    <div class="container">
      <transition name="component-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <!--<div class="">-->
      <!--<button class="btn btn-default">Enter</button>-->
    <!--</div>-->
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
  @import "assets/style/transitions.scss";
</style>
