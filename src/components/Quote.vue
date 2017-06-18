<template>
    <div>
        <h3>Enter quote below</h3>
        <input type="text" name="" value="" v-model="quote">
        <button type="" @click="addQuote">Add quote</button>
        <hr>
        <ul>
            <li v-for="quote in quotes">{{quote}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                quote: '',
                quotes: []
            }
        },
        methods: {
            addQuote() {
                this.quotes.push(this.quote)
            }
        }
    }

</script>
<style scoped>
    input {
        width: 300px;
        height: 50px
    }
</style>