<template>
  <div id="">
    <common-header></common-header>
    <img src="./assets/logo.png">
    <hello></hello>
    <common-footer></common-footer>
  </div>
</template>

<script>
  import Hello from './components/Hello'
  import CommonHeader from './components/common/Header.vue';
  import CommonFooter from './components/common/Footer.vue';

  export default {
    name: 'app',
    components: {
      Hello,
      CommonHeader,
      CommonFooter
    }
  }
</script>

<style>

</style>
