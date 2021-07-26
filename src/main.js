import Vue from 'vue'
import Vuex from 'vuex'
import storeConfig from '@/store'
import App from './App.vue'
// eslint-disable-next-line no-unused-vars
import { RuxToggle } from "@astrouxds/rux-toggle";
Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store(storeConfig)

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
