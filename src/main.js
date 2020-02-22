import Vue from 'vue'
import App from './App.vue'
import routes from './routes'

import "./styles/index.css"

new Vue({
  el: '#app',
  router: routes,
  render: h => h(App)
})