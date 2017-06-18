<template>
  <div id="app">
    <progress-bar></progress-bar>
    <add-quote-box></add-quote-box>
    <quotes aQuote="probando..."></quotes>
    <p class="footer">
      click on a quote to delete it.
    </p>
  </div>
</template>

<script>
  import Quotes from './components/Quotes.vue'
  import AddQuoteBox from './components/AddQuoteBox.vue'
  import ProgressBar from './components/ProgressBar.vue'
  export default {
    components: {
      Quotes,
      AddQuoteBox,
      ProgressBar
    }
  }

</script>

<style scoped>
  .footer {
    font-weight: bold;
    text-align: center;
    color: red;
    background-color: darkgrey;
    padding: 10px;
  }

</style>