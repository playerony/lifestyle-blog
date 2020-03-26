import Vue from 'vue'
import App from '@service/App.vue'

import '@style/index.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#root')
