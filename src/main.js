import Vue from 'vue'
import App from './App.vue'

//create an event bus
export const eventBus = new Vue()
new Vue({
  el: '#app',
  render: h => h(App)
})
