//import stock
import stocks from '../../data/stocks'

//state
const state = {
    stocks: []
}
//mutations
const mutations = {
    'SET_STOCKS': (state, stocks) => state.stocks = stocks
}
//actions. commit here
const actions = {
    initializeStocks: ({ commit }) => commit('SET_STOCKS', stocks)
}
//actions
const getters = {
    stocks: state => state.stocks
}

export default {
    state,
    mutations,
    getters,
    actions
}