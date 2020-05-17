import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    token: '',
    username: '用户',
    ID: '',
    nickName:'',
  },

  mutations: {
    getToken (state, data) {
      state.token = data
    },
    setUsername (state, data) {
      state.username = data
    },
    setID (state, data) {
      state.ID = data
    },
    setNickName (state, data) {
      state.nickName = data
    }
  }
})

export default store
