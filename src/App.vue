<template>
  <div class="container">
    <p>
      {{text | upperCase | to-lowercase}}
    </p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      text: 'Hola carajo!'
    }
  },
  filters:{
    upperCase(value){
      return value.toUpperCase()
    }
  }
}
</script>

<style>

</style>
