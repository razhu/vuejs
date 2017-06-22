<template>
<div>
    <stock v-for="stock in stocks" :stock="stock"></stock>
</div>
</template>
<script>
import Stock from './Stock.vue'
    export default {
        data(){
            return {
                stocks: [
                    {id:1, name: "coca cola", price: 12},
                    {id:2, name: "pepsi", price: 22},
                    {id:3, name: "google", price: 312},
                    {id:4, name: "samsung", price: 1222},
                ]
            }
        },
        components: {
            Stock
        }
    }
</script>