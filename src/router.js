import Vue from 'vue'
import Router from 'vue-router'
import ButtonGuide from '@/components/ButtonGuide'
import SwitchGuide from '@/components/SwitchGuide'
import Welcome from '@/views/Welcome'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/button',
      name: 'button',
      component: ButtonGuide
    },
    {
      path: '/switch',
      name: 'switch',
      component: SwitchGuide
    }
  ]
})

export default router