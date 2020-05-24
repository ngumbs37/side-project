import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import navBar from '@/components/navBar.vue'
import inventoryCard from '@/components/inventoryCard.vue'

Vue.component('nav-bar', navBar)
Vue.component('inventory-card', inventoryCard)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
