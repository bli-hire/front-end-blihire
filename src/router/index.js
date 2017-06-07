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
          path: '/fpk',
          component: Fpk
        },
        {
          path: '/fpk/human-resource',
          component: HRD
        },
        {
          path: '/fpk/marketing',
          component: Fpk
        },
        {
          path: '/fpk/trade-partnership',
          component: Technology
        },
        {
          path: '/fpk/operation',
          component: Technology
        },
        {
          path: '/fpk/technology',
          component: Technology
        },
        {
          path: '/fpk/business-development',
          component: Technology
        },
        {
          path: '/fpk/finance',
          component: Technology
        },
        {
          path: '/fpk/project-management',
          component: Technology
        },
        {
          path: '/fpk/product-management',
          component: Technology
        },
          // children: [
          //   {
          //     path: 'human-resource',
          //     component: HRD
          //   },
            // {
            //   path: 'marketing',
            //   component: Fpk
            // },
            // {
            //   path: 'trade-partnership',
            //   component: Technology
            // },
            // {
            //   path: 'operation',
            //   component: Technology
            // },
            // {
            //   path: 'technology',
            //   component: Technology
            // },
            // {
            //   path: 'business-development',
            //   component: Technology
            // },
            // {
            //   path: 'finance',
            //   component: Technology
            // },
            // {
            //   path: 'project-management',
            //   component: Technology
            // },
            // {
            //   path: 'product-management',
            //   component: Technology
            // }
          // ]
        // },
        {
          path: '/mpp',
          component: Mpp
        },
        {
          path: '/mpp/human-resource',
          component: HRD
        },
        {
          path: '/mpp/marketing',
          component: Technology
        },
        {
          path: '/mpp/trade-partnership',
          component: Technology
        },
        {
          path: '/mpp/operation',
          component: Technology
        },
        {
          path: '/mpp/technology',
          component: Technology
        },
        {
          path: '/mpp/business-development',
          component: Technology
        },
        {
          path: '/mpp/finance',
          component: Technology
        },
        {
          path: '/mpp/project-management',
          component: Technology
        },
        {
          path: '/mpp/product-management',
          component: Technology
        }
          // children: [
            // {
            //   path: 'human-resource',
            //   component: HRD
            // },
            // {
            //   path: 'marketing',
            //   component: Technology
            // },
            // {
            //   path: 'trade-partnership',
            //   component: Technology
            // },
            // {
            //   path: 'operation',
            //   component: Technology
            // },
            // {
            //   path: 'technology',
            //   component: Technology
            // },
            // {
            //   path: 'business-development',
            //   component: Technology
            // },
            // {
            //   path: 'finance',
            //   component: Technology
            // },
            // {
            //   path: 'project-management',
            //   component: Technology
            // },
            // {
            //   path: 'product-management',
            //   component: Technology
            // }
          // ]
        // }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
