import Vue from 'vue'
import App from './App'
import request from './utils/request'
import fly from './utils/http'
import store from './store'
Vue.prototype.$request = request
Vue.prototype.$http = fly

Vue.prototype.$store=store

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  App,
  store
})

app.$mount()
