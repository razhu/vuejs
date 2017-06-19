<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h1>Animations</h1>
        <hr>
        <!--<button type="" class="btn"></button>-->
        <button class="btn btn-primary" @click="show=!show"> Show alert </button>
        <br>
        <br>
        <transition name="fade">
                <div class="alert alert-info" v-if="show">This is some info</div>

        </transition>
                <transition 
                enter-active-class="animated bounce"
                leave-active-class="animated shake"
                >
                <div class="alert alert-info" v-if="show">This is some info</div>

        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      show: true
    }
  }
}

</script>

<style>
.fade-enter{
opacity: 0;}
.fade-enter-active{
transition: opacity 1s;}
.fade-leave{

}
.fade-leave-active{
  transition: opacity 1s;
  opacity: 0;
}
</style>
