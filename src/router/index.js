import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import App from '@/App'
// <<<<<<< HEAD
// // import Hello from '@/components/Hello'
// =======
// >>>>>>> 0340dea32d416246c3984daea58b73e96b8ee976
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
import CreateForm from '@/components/department/CreateForm'
import DepartmentDasboard from '@/components/department/Dashboard'
import HrdRequested from '@/components/hrd/Requested'
import HrdCandidates from '@/components/hrd/Candidates'
import HrdViewCV from '@/components/hrd/ViewCV'
import HrdViewDetailFpk from '@/components/hrd/ViewDetailFpk'
import HrdViewHiringProcess from '@/components/hrd/HiringProcess'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      props: {status: ''},
      children: [
        {
          path: '/fpk',
<<<<<<< HEAD
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
=======
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
>>>>>>> 0340dea32d416246c3984daea58b73e96b8ee976
        },
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
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/department',
      name: 'department',
      component: App,
      props: {status: 'department'},
      children: [
        {
          path: '/department/fpk'
        },
        {
          path: '/department/mpp'
        },
        {
          path: '/department/fpk/dashboard',
          component: DepartmentDasboard,
          props: {content: 'fpk'}
        },
        {
          path: '/department/fpk/create-new',
          component: CreateForm,
          props: {content: 'fpk'}
        },
        {
          path: '/department/fpk/history'
        },
        {
          path: '/department/mpp'
        },
        {
          path: '/department/mpp/dashboard',
          component: DepartmentDasboard,
          props: {content: 'mpp'}
        },
        {
          path: '/department/mpp/create-new',
          component: CreateForm,
          props: {content: 'mpp'}
        },
        {
          path: '/department/mpp/history'
        }
      ]
    },
    {
      path: '/hrd',
      name: 'hrd',
      component: App,
      props: {status: 'hrd'},
      children: [
        {
          path: '/hrd/fpk'
        },
        {
          path: '/hrd/mpp'
        },
        {
          path: '/hrd/fpk/dashboard',
          component: DepartmentDasboard,
          props: {content: 'fpk'}
        },
        {
          path: '/hrd/fpk/create-new',
          component: CreateForm,
          props: {content: 'fpk'}
        },
        {
          path: '/hrd/fpk/history'
        },
        {
          path: '/hrd/mpp'
        },
        {
          path: '/hrd/mpp/dashboard',
          component: DepartmentDasboard,
          props: {content: 'mpp'}
        },
        {
          path: '/hrd/mpp/create-new',
          component: CreateForm,
          props: {content: 'mpp'}
        },
        {
          path: '/hrd/mpp/history'
        },
        {
          path: '/hrd/requested/human-resource',
          component: HrdRequested,
          props: {department: 'human-resource'}
        },
        {
          path: '/hrd/requested/marketing'
        },
        {
          path: '/hrd/requested/trade-partnership'
        },
        {
          path: '/hrd/requested/operation'
        },
        {
          path: '/hrd/requested/technology'
        },
        {
          path: '/hrd/requested/business-development'
        },
        {
          path: '/hrd/requested/finance'
        },
        {
          path: '/hrd/requested/project-management'
        },
        {
          path: '/hrd/requested/product-management'
        },
        {
          path: '/hrd/candidates/human-resource',
          component: HrdCandidates,
          props: {department: 'human-resource'}
        },
        {
          path: '/hrd/candidates/marketing'
        },
        {
          path: '/hrd/candidates/trade-partnership'
        },
        {
          path: '/hrd/candidates/operation'
        },
        {
          path: '/hrd/candidates/technology'
        },
        {
          path: '/hrd/candidates/business-development'
        },
        {
          path: '/hrd/candidates/finance'
        },
        {
          path: '/hrd/candidates/project-management'
        },
        {
          path: '/hrd/candidates/product-management'
        },
        {
          path: '/hrd/candidates/view-cv',
          component: HrdViewCV
        },
        {
          path: '/hrd/candidates/hiring-process',
          component: HrdViewHiringProcess
        },
        {
          path: '/hrd/requested/view-detail',
          component: HrdViewDetailFpk
        }
      ]
    }
  ]
})
