import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: ''
  },
  getters: {
  },
  mutations: {
    setTitle(state, title){
      state.title = title
    }
  },
  actions: {
  },
  modules: {
  }
})
