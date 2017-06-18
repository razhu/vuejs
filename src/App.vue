<template>
  <div class="container">
    <p>
      {{text | upperCase | to-lowercase}}
    </p>
    <p>
      <input type="" name="" value="" v-model="searchFruit">
    </p>
    <p>
      <ul>
        <li v-for="fruit in filterFruits">
          {{fruit}}
        </li>
      </ul>
    </p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      text: 'Hola carajo!',
      fruits: [
        'apple',
        'banana',
        'strawberry',
        'mango',
        'melon',
      ],
      searchFruit:""
    }
  },
  filters:{
    upperCase(value){
      return value.toUpperCase()
    }
  },
  computed:{
    filterFruits(){
      return this.fruits.filter(x => x.match(this.searchFruit))
    }
  }
}
</script>

<style>

</style>
