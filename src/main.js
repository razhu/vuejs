import Vue from 'vue'
import App from './App.vue'
import Vuerouter from 'vue-router'

import {routes} from './routes'

Vue.use(Vuerouter)

const router = new Vuerouter(
  {
    mode:'history',
    routes
  }
)


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
