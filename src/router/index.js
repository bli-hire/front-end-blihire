import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import App from '@/App'
import Technology from '@/components/Technology'
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
              path: 'human-resource',
              component: Technology
            },
            {
              path: 'marketing',
              component: Technology
            },
            {
              path: 'trade-partnership',
              component: Technology
            },
            {
              path: 'operation',
              component: Technology
            },
            {
              path: 'technology',
              component: Technology
            },
            {
              path: 'business-development',
              component: Technology
            },
            {
              path: 'finance',
              component: Technology
            },
            {
              path: 'project-management',
              component: Technology
            },
            {
              path: 'product-management',
              component: Technology
            }
          ]
        },
        {
          path: '/mpp',
          component: Mpp,
          children: [
            {
              path: 'human-resource',
              component: Technology
            },
            {
              path: 'marketing',
              component: Technology
            },
            {
              path: 'trade-partnership',
              component: Technology
            },
            {
              path: 'operation',
              component: Technology
            },
            {
              path: 'technology',
              component: Technology
            },
            {
              path: 'business-development',
              component: Technology
            },
            {
              path: 'finance',
              component: Technology
            },
            {
              path: 'project-management',
              component: Technology
            },
            {
              path: 'product-management',
              component: Technology
            }
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
