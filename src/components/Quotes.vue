<template>
    <div>
        <quote v-for="(quote, index) in arrayQuotes" @click.native='deleteQuote(quote)' v-model='quoteNumber = index +1'>{{quote}} {{index+1}}</quote>
    </div>
</template>
<script>
    import Quote from './Quote.vue'
    import { eventBus } from '../main'
    export default {
        data() {
            return {
                numberQuotes: 10,
                arrayQuotes: [],
                quoteNumber: 0
            }
        },
        components: {
            Quote
        },
        methods: {
            deleteQuote(quote) {
                this.arrayQuotes.splice(this.arrayQuotes.indexOf(quote), 1)
            }
        },
        props: ['aQuote'],
        created() {
            eventBus.$on('emittedQuote', quoteToAdd => {
                this.arrayQuotes.push(quoteToAdd)
            })
            eventBus.$emit('quoteNumber', this.quoteNumber)

        }
    }

</script>
<style>

</style>