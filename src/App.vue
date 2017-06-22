<template>
  <div class="container">
    <div class="row">
    <headers></headers>
      <h1>Routes</h1>
      <hr>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Headers from './components/Header.vue'
export default {
  components:{
    Headers
  }
}
</script>

<style>

</style>
