<template>
  <!-- Columns are always 50% wide, on mobile and desktop -->
  <div class="container">
    <div class="row">
    <app-header></app-header>
    <servers></servers>
    <server-status></server-status>
    <app-footer></app-footer>
    </div>
  </div>

</template>

<script>
  import AppHeader from './components/shared/AppHeader.vue'
  import AppFooter from './components/shared/AppFooter.vue'
  import Servers from './components/Servers.vue'
  import ServerStatus from './components/ServerStatus.vue'
  export default {
    components: {
      AppHeader,
      AppFooter,
      Servers,
      ServerStatus,
    }
  }

</script>

<style>
</style>
