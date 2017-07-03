<template>
    <li @click="doSomething" class="myclass">{{server.name}}
    </li>
</template>

<script>
import {serverBus} from '../main'
    export default {
        props:['server'],
        methods:{
            doSomething(){
                serverBus.$emit('serverStatusEmit', this.server)
            }
        }
    }
</script>
<style>
    .myclass{
        cursor: pointer
    }
</style>