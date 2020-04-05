import Vue from 'vue'

import App from '@service/App'
import router from '@service/router'
import apolloProvider from '@service/graphql'

import '@style/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider,
  components: { App },
  template: '<App />'
}).$mount('#root')
