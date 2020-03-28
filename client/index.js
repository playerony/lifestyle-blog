import Vue from 'vue'

import App from '@service/App'
import router from '@service/router'

import '@style/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  components: { App },
  template: '<App />'
}).$mount('#root')
