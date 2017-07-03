<template>
   <div>
    <ul>
       <app-server v-for="server in servers" :server="server"></app-server>
    </ul>
   </div>
</template>

<script>
    import AppServer from './Server.vue'
    export default {
        data(){
            return {
                servers: [
                    {id: 1, name: 'server1', status: 'down'},
                    {id: 2, name: 'server2', status: 'unknown'},
                    {id: 3, name: 'server3', status: 'smooth'},
                    {id: 4, name: 'server4', status: 'down'},
                    {id: 5, name: 'server5', status: 'unknown'},
                ]
            }
        },
        components: {
            AppServer
        }
    }
</script>
<style>
    
</style>