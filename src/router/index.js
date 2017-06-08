import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import App from '@/App'
import Technology from '@/components/Technology'
import HRD from '@/components/HumanResource'
import Marketing from '@/components/Marketing'
import TradePartnership from '@/components/TradePartnership'
import Operation from '@/components/Operation'
import BusinessDevelopment from '@/components/BusinessDevelopment'
import Finance from '@/components/Finance'
import ProjectManagement from '@/components/ProjectManagement'
import ProductManagement from '@/components/ProductManagement'
import Fpk from '@/components/Fpk'
import Mpp from '@/components/Mpp'
import MppDetail from '@/components/page-component/MppDetail'

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
          path: '/fpk/detail',
          component: Fpk
        },
        {
          path: '/fpk/human-resource',
          component: HRD,
          props: {content: 'FPK'}
        },
        {
          path: '/fpk/marketing',
          component: Marketing
        },
        {
          path: '/fpk/trade-partnership',
          component: TradePartnership
        },
        {
          path: '/fpk/operation',
          component: Operation
        },
        {
          path: '/fpk/technology',
          component: Technology
        },
        {
          path: '/fpk/business-development',
          component: BusinessDevelopment
        },
        {
          path: '/fpk/finance',
          component: Finance
        },
        {
          path: '/fpk/project-management',
          component: ProjectManagement
        },
        {
          path: '/fpk/product-management',
          component: ProductManagement
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
          path: '/mpp/detail',
          component: MppDetail
        },
        {
          path: '/mpp/human-resource',
          component: HRD,
          props: {content: 'Mpp'}
        },
        {
          path: '/mpp/marketing',
          component: Marketing
        },
        {
          path: '/mpp/trade-partnership',
          component: TradePartnership
        },
        {
          path: '/mpp/operation',
          component: Operation
        },
        {
          path: '/mpp/technology',
          component: Technology
        },
        {
          path: '/mpp/business-development',
          component: BusinessDevelopment
        },
        {
          path: '/mpp/finance',
          component: Finance
        },
        {
          path: '/mpp/project-management',
          component: ProjectManagement
        },
        {
          path: '/mpp/product-management',
          component: ProductManagement
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
