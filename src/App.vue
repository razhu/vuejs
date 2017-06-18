<template>
  <div id="app">
    <button type="" @click="quoteType = 'quote'">Quote</button>
    <button type="" @click="quoteType = 'author'">Author</button>
    <button type="" @click="quoteType = 'new'">New</button>
    <br>
    {{quoteType}}
    <keep-alive>
    <component :is=quoteType></component>
    </keep-alive>
    
    <!--<quote>
      <h1>Quote title</h1>
      <p>Here goes the great quote...</p>
    </quote>--> 
  </div>
</template>

<script>
import Quote from './components/Quotes.vue'
import New from './components/New.vue'
import Author from './components/Author.vue'
export default {
  components:{
    Quote,
    New,
    Author
  },
  data(){
    return {
      quoteType: ''
    }
  }
}
</script>

<style>

</style>
