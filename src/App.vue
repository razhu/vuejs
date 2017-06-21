<template>
<!-- Columns are always 50% wide, on mobile and desktop -->
<div class="container">
<div class="row">
  <div class="col-6">
  <h1>Title goes heres</h1>

    <result :counter="counter"></result>
    <counter @updated="counter+= $event"></counter>
    
  </div>
</div>
  </div>

</template>

<script>
  import Counter from './components/Counter.vue'
  import Result from './components/Result.vue'
export default {
  data(){
    return{
      counter:0
    }
  },
  components: {
    Counter,
    Result
  }
}
</script>

<style>

</style>
