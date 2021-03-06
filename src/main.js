import Vue from 'vue'
import Vuex from 'vuex'
import storeConfig from '@/store'
import App from './App.vue'
import router from './router'
// eslint-disable-next-line no-unused-vars
import { RuxGlobalStatusBar } from "@astrouxds/rux-global-status-bar";
// eslint-disable-next-line no-unused-vars
import { RuxTree } from '@astrouxds/rux-tree'
// eslint-disable-next-line no-unused-vars
import { RuxTabs } from "@astrouxds/rux-tabs";
// eslint-disable-next-line no-unused-vars
import { RuxToggle } from "@astrouxds/rux-toggle";
// eslint-disable-next-line no-unused-vars
import { RuxButton } from "@astrouxds/rux-button";

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store(storeConfig)

new Vue({
  router,
  render: h => h(App),
  store,
}).$mount('#app')
