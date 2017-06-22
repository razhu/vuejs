<template>
  <!-- Columns are always 50% wide, on mobile and desktop -->
  <div class="container">
    <div class="row">
      <div class="col-6">
        <my-header></my-header>
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<script>
  import Header from './components/Header.vue'
  export default {
    components: {
      myHeader: Header
    }
  }

</script>

<style>
  body {
    padding: 30px;
  }

</style>