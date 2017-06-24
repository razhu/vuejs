import Vue from 'vue'
import Vuex from 'vuex'

import stocks from './modules/stocks'

Vue.use(Vuex)


//state, getters, mutations, actions
export default new Vuex.Store({
    modules: {
        stocks
    }
})