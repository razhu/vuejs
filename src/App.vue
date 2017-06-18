<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h2>Built-in directives</h2>
        <p v-text="'some radom text'"></p>
      </div>
    </div>

        <div class="row">
      <div class="col-xs-12">
        <h2>Custom directives</h2>
        <!--<p v-highlight>mierda</p>-->
        <p v-highlight="'red'">mierda</p>
        <p v-local-highlight>carajo</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    directives:{
      'local-highlight':{
        bind(el, binding, vnode){
          el.style.backgroundColor = 'yellow'
        }
      }
    }
  }

</script>

<style>

</style>