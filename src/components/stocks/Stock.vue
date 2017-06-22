<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">{{stock.name}} {{stock.price}}</h3>
      </div>
      <div class="panel-body">
        <input type="" name="" value="" v-model="quantity">
        <button class="btn btn-success" type="" @click="buyStock" :disabled="quantity <= 0 || quantity%1 !==0">Buy</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    methods: {
      buyStock() {
        const theBuy = {
          idStock: this.stock.id,
          price: this.stock.price,
          quantity: this.quantity
        }
        this.quantity = 0
        console.log("theBuy ", theBuy);
      }
    }
  }
</script>