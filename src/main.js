import 'babel-polyfill'
import Vue from 'vue'
import 'common/stylus/index.styl'

import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
