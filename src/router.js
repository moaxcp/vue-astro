import Vue from 'vue'
import Router from 'vue-router'
import ComponentGuides from '@/views/ComponentGuides'
import ExampleGuides from "@/views/ExampleGuides"
import Welcome from '@/views/Welcome'
import ButtonGuide from "@/views/guide/ButtonGuide";
import SwitchGuide from "@/views/guide/SwitchGuide";

Vue.use(Router)

const router = new Router({
  base: process.env.NODE_ENV === 'production'
    ? '/vue-astro/'
    : '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/components',
      name: 'Components',
      component: ComponentGuides,
      children: [
        {
          path: 'button',
          name: 'Button',
          component: ButtonGuide
        },
        {
          path: 'switch',
          name: 'Switch',
          component: SwitchGuide
        }
      ]
    },
    {
      path: '/examples',
      name: 'Examples',
      component: ExampleGuides
    }
  ]
})

export default router