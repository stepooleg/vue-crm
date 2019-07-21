import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import user from './user'
import fixer from './fixer'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError (state, error) {
      state.error = error
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {

  },
  modules: {
    auth,
    user,
    fixer
  },
  getters: {
    error: state => state.error
  }
})
