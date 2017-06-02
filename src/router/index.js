import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import App from '@/App'
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
      name: 'App',
      component: App,
      children: [
        {
          path: 'fpk'
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
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
