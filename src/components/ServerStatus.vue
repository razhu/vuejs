<template>
    <div>
       <p v-if="!server">Choose a server</p>
       <p v-else>{{server.status}}
        <button type="" @click="updateStatus">Update status</button>

       </p>
    </div>
</template>
<script>
    import {serverBus} from '../main'
    export default {
        data(){
           return {
                server: null
           }
        },
        created(){
            serverBus.$on('serverStatusEmit', (result)=>{
                this.server = result
            })
        },
        methods:{
            updateStatus(){
                this.server.status ="normal"
            }
        }
    }
</script>
<style>
    
</style>