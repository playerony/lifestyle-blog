import Vue from 'vue'
import { Plugin } from 'vue-fragment'

import App from '@service/App'
import router from '@service/router'
import apolloProvider from '@service/graphql'

import '@style/index.scss'

Vue.config.productionTip = false
Vue.use(Plugin)

new Vue({
  router,
  apolloProvider,
  components: { App },
  template: '<App />'
}).$mount('#root')
