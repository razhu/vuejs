<template>
  <!-- Columns are always 50% wide, on mobile and desktop -->
  <div class="container">
    <div class="row">
      <server v-for="server in servers" :serverName="server.name" @click="showDescription">
      <sever-detail :serverDescription="server.description"></server-detail>
      </server>
    </div>
  </div>

</template>

<script>
  import Server from './components/Server.vue'
  import ServerDetail from './components/ServerDetail.vue'

  export default {
    components: {
      Server,
      ServerDetail
    }, 
    data(){
      return {
        servers: [
          {name: 'server 1', description: 'description 1'},
          {name: 'server 2', description: 'description 2'},
          {name: 'server 3', description: 'description 3'},
          {name: 'server 4', description: 'description 4'},
          {name: 'server 5', description: 'description 5'},
        ]
      }
    }
  }

</script>

<style>
  body {
    padding: 30px;
  }

</style>
