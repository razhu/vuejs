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
                    {name: "coca cola", price: 12},
                    {name: "pepsi", price: 22},
                    {name: "google", price: 312},
                    {name: "samsung", price: 1222},
                ]
            }
        },
        components: {
            Stock
        }
    }
</script>