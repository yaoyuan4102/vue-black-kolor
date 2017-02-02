<template>
  <div class="welcome">
    <img src="../assets/images/logo.jpg" class="img-responsive" alt="" width="450" height="522">
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .welcome {
    img {
      max-width: 100%;
      height: auto;
      margin: auto;
    }
  }
</style>
