import Vue from 'vue'
import App from './App.vue'
import Vuerouter from 'vue-router'
import store from './store/store'
import {routes} from './routes'

Vue.use(Vuerouter)

const router = new Vuerouter(
  {
    mode:'history',
    routes
  }
)


new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
