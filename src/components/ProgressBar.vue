<template>
  <div class="outdiv"> 
      <div class="progress"></div>
      {{quoteNumberBar}}
  </div>
</template>
<script>

    import { eventBus } from '../main'
    export default {
        data(){
            return {
                quoteNumberBar: 0
            }
        }, 
        created(){
            eventBus.$on('quoteNumber', number =>{
                this.quoteNumberBar = number
            })
        }
    }
</script>
<style scoped>
div{
    width: 300px;
    border: 2px dotted blue;
}
 .progress{
     width: 80%;
     height: 20px;
     background-color: green;
 }
 .outdiv{
     margin: 30px auto;
 }
</style>
