import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import App from '@/App'
import Technology from '@/components/ceo/dashboard/Technology'
import HRD from '@/components/ceo/dashboard/HumanResource'
import Marketing from '@/components/ceo/dashboard/Marketing'
import TradePartnership from '@/components/ceo/dashboard/TradePartnership'
import Operation from '@/components/ceo/dashboard/Operation'
import BusinessDevelopment from '@/components/ceo/dashboard/BusinessDevelopment'
import Finance from '@/components/ceo/dashboard/Finance'
import ProjectManagement from '@/components/ceo/dashboard/ProjectManagement'
import ProductManagement from '@/components/ceo/dashboard/ProductManagement'
import Fpk from '@/components/Fpk'
import FpkDetail from '@/components/page-component/FpkDetail'
import Mpp from '@/components/Mpp'
import MppDetail from '@/components/page-component/MppDetail'
import CreateForm from '@/components/department/CreateForm'
import DepartmentDasboard from '@/components/department/Dashboard'
import DepartmentHistory from '@/components/department/History'
import HrdRequested from '@/components/hrd/Requested'
import HrdCandidates from '@/components/hrd/Candidates'
import HrdViewCV from '@/components/hrd/ViewCV'
import HrdViewDetailFpk from '@/components/hrd/ViewDetailFpk'
import HrdViewHiringProcess from '@/components/hrd/HiringProcess'
import NotFound from '@/components/page-component/NotFound'
import MppPending from '@/components/department/MppPending'
import MppAccepted from '@/components/department/MppAccepted'
import MppApply from '@/components/department/MppApply'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      component: NotFound
    },
    {
      path: '/',
      name: 'App',
      component: App
    },
    // CEO
    {
      path: '/ceo',
      component: App,
      props: {status: 'ceo'},
      children: [
        {
          path: '/ceo/fpk',
          component: Fpk
        },
        {
          path: '/ceo/fpk/detail/:id',
          component: FpkDetail
        },
        {
          path: '/ceo/fpk/human-resource',
          component: HRD,
          props: {content: 'fpk'}
        },
        {
          path: '/ceo/fpk/marketing',
          component: Marketing,
          props: {content: 'fpk'}
        },
        {
          path: '/ceo/fpk/trade-partnership',
          component: TradePartnership,
          props: {content: 'fpk'}
        },
        {
          path: '/ceo/fpk/operation',
          component: Operation,
          props: {content: 'fpk'}
        },
        {
          path: '/ceo/fpk/technology',
          component: Technology,
          props: {content: 'fpk'}
        },
        {
          path: '/ceo/fpk/business-development',
          component: BusinessDevelopment,
          props: {content: 'fpk'}
        },
        {
          path: '/ceo/fpk/finance',
          component: Finance,
          props: {content: 'fpk'}
        },
        {
          path: '/ceo/fpk/project-management',
          component: ProjectManagement,
          props: {content: 'fpk'}
        },
        {
          path: '/ceo/fpk/product-management',
          component: ProductManagement,
          props: {content: 'fpk'}
        },
        {
          path: '/ceo/mpp',
          component: Mpp
        },
        {
          path: '/ceo/mpp/detail/:id',
          component: MppDetail
        },
        {
          path: '/ceo/mpp/human-resource',
          component: HRD,
          props: {content: 'mpp'}
        },
        {
          path: '/ceo/mpp/marketing',
          component: Marketing,
          props: {content: 'mpp'}
        },
        {
          path: '/ceo/mpp/trade-partnership',
          component: TradePartnership,
          props: {content: 'mpp'}
        },
        {
          path: '/ceo/mpp/operation',
          component: Operation,
          props: {content: 'mpp'}
        },
        {
          path: '/ceo/mpp/technology',
          component: Technology,
          props: {content: 'mpp'}
        },
        {
          path: '/ceo/mpp/business-development',
          component: BusinessDevelopment,
          props: {content: 'mpp'}
        },
        {
          path: '/ceo/mpp/finance',
          component: Finance,
          props: {content: 'mpp'}
        },
        {
          path: '/ceo/mpp/project-management',
          component: ProjectManagement,
          props: {content: 'mpp'}
        },
        {
          path: '/ceo/mpp/product-management',
          component: ProductManagement,
          props: {content: 'mpp'}
        }
      ]
    },
    // Login
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    // Department
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
          path: '/department/fpk/detail/:id',
          component: FpkDetail
        },
        {
          path: '/department/fpk/history',
          component: DepartmentHistory,
          props: {content: 'fpk'}
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
        },
        {
          path: '/department/mpp/pending',
          component: MppPending
        },
        {
          path: '/department/mpp/accepted',
          component: MppAccepted
        },
        {
          path: '/department/mpp/apply',
          component: MppApply
        },
        {
          path: '/department/mpp/detail/:id',
          component: MppDetail
        }
      ]
    },
    // HRD
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
