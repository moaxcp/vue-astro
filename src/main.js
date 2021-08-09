import Vue from 'vue'
import Vuex from 'vuex'
import storeConfig from '@/store'
import App from './App.vue'
import router from './router'
import './assets/css/astro.css'
import './assets/css/astro-icons.css'
// eslint-disable-next-line no-unused-vars
import { RuxToggle } from "@astrouxds/rux-toggle";
// eslint-disable-next-line no-unused-vars
import { RuxButton } from "@astrouxds/rux-button/rux-button.js";

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store(storeConfig)

new Vue({
  router,
  render: h => h(App),
  store,
}).$mount('#app')
