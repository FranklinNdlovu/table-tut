import { createStore } from 'vuex'
import dataManager from '@/utilities/dataManager'
export default createStore({
  state: {
    users: [],
  },
  getters: {
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    }
  },
  actions: {
    getUsers({ commit }) {
      dataManager.getUser().then((response) => {
        commit('setUsers', response.data)
      });

    }
  },
  modules: {
  }
})
