import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let common = {
    state: {
      songInfo: {}
    },
    getters: {
        getSongInfo (state) {
           return state.songInfo
        }
    },
    mutations: {
        setSongInfo (state, data) {
            state.songInfo = data
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
