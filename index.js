import Vue from 'vue'

import App from '@service/App'
import router from '@service/router'
import apolloProvider from '@service/graphql'

import '@service/portal'
import '@style/index.scss'

Vue.config.productionTip = false

var originalSetItem = localStorage.setItem
localStorage.setItem = function() {
  document.createEvent('Event').initEvent('itemInserted', true, true)
  originalSetItem.apply(this, arguments)
}

new Vue({
  router,
  apolloProvider,
  components: { App },
  template: '<App />'
}).$mount('#root')
