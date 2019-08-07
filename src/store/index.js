import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let common = {
    state: {
      songInfo: {},
      userInfo: {}
    },
    getters: {
        getSongInfo (state) {
           return state.songInfo
        },
        getUserInfo (state) {
          return state.userInfo
        }
    },
    mutations: {
        setSongInfo (state, data) {
            state.songInfo = data
        },
        setUserInfo (state, data) {
            state.userInfo = data
        }
    },
    actions: {
    }
}

export default new Vuex.Store({
    modules: {
      common
    }
})
