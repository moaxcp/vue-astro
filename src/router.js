import Vue from 'vue'
import Router from 'vue-router'
import ComponentGuides from '@/views/ComponentGuides'
import ExampleGuides from "@/views/ExampleGuides"
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
      path: '/components',
      name: 'components',
      component: ComponentGuides
    },
    {
      path: '/examples',
      name: 'examples',
      component: ExampleGuides
    }
  ]
})

export default router