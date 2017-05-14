import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Technology from '@/components/Technology'
import HRD from '@/components/HumanResource'
import Fpk from '@/components/Fpk'
import Mpp from '@/components/Mpp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/fpk',
      component: Fpk,
      children: [
        {
          path: 'technology',
          component: Technology
        },
        {
          path: 'hrd',
          component: HRD
        }
      ]
    },
    {
      path: '/mpp',
      component: Mpp,
      children: [

      ]
    }
  ]
})
