import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let api = axios.create({
  baseURL: 'https://api.chucknorris.io/jokes/random'
})

export default new Vuex.Store({
  state: {
    joke: {}
  },
  mutations: {
    setJoke(state, joke) {
      state.joke = joke
    }
  },
  actions: {
    async getJoke({ commit, dispatch }) {
      try {
        let res = await api.get('')
        commit('setJoke', res.data)
      } catch (error) {
        console.error(error);
      }
    }
  }
})
