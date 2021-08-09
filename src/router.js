import Vue from 'vue'
import Router from 'vue-router'
import AstroComponents from '@/views/AstroComponents'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'button',
      component: AstroComponents
    }
  ]
})

export default router