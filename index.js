import Vue from 'vue'

import App from '@service/App'
import router from '@service/router'
import apolloProvider from '@service/graphql'

import '@service/portal'
import '@style/index.scss'

Vue.config.productionTip = false

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

new Vue({
  router,
  apolloProvider,
  components: { App },
  template: '<App />'
}).$mount('#root')
