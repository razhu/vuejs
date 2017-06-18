<template>
  <div>
      <input type="" name="" value="" v-model='newQuote'>
  <button type="" @click='addQuote'>Add quote</button>
  </div>
</template>
<script>
    import {eventBus} from '../main'
    export default{
        data(){
            return {
                newQuote:'test'
            }
        },
        methods:{
            addQuote(){
                eventBus.$emit('emittedQuote', this.newQuote)
                this.newQuote = ''
            }
        }
    }
</script>
<style>

</style>
