import Vue from 'vue'
import Vuex from 'vuex'

//Tienda de Datos (dataSpotify)
import datos from '@/modules/dataSpotify'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    datos,
  }
})
