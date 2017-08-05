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
import FpkDetail from '@/components/page-component/FpkDetail'
import Mpp from '@/components/Mpp'
import MppDetail from '@/components/page-component/MppDetail'
import CreateForm from '@/components/department/CreateForm'
import DepartmentDasboard from '@/components/department/Dashboard'
import DepartmentHistory from '@/components/department/History'
import HrdRequested from '@/components/hrd/Requested'
import HrdPublished from '@/components/hrd/Published'
import HrdCandidates from '@/components/hrd/Candidates'
import HrdViewCV from '@/components/hrd/ViewCV'
// import HrdViewDetailFpk from '@/components/hrd/ViewDetailFpk'
import HrdViewHiringProcess from '@/components/hrd/HiringProcess'
import NotFound from '@/components/page-component/NotFound'
import MppPending from '@/components/department/MppPending'
import MppAccepted from '@/components/department/MppAccepted'
import MppRejected from '@/components/department/MppRejected'
import FpkPending from '@/components/department/FpkPending'
import FpkAccepted from '@/components/department/FpkAccepted'
import FpkRejected from '@/components/department/FpkRejected'
import BankQuizDashboard from '@/components/hrd/BankQuizDashboard'

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
          path: '/ceo/fpk/detail',
          component: FpkDetail
        },
        {
          path: '/ceo/fpk/human-resource',
          component: HRD,
          props: {content: 'FPK'}
        },
        {
          path: '/ceo/fpk/marketing',
          component: Marketing
        },
        {
          path: '/ceo/fpk/trade-partnership',
          component: TradePartnership
        },
        {
          path: '/ceo/fpk/operation',
          component: Operation
        },
        {
          path: '/ceo/fpk/technology',
          component: Technology
        },
        {
          path: '/ceo/fpk/business-development',
          component: BusinessDevelopment
        },
        {
          path: '/ceo/fpk/finance',
          component: Finance
        },
        {
          path: '/ceo/fpk/project-management',
          component: ProjectManagement
        },
        {
          path: '/ceo/fpk/product-management',
          component: ProductManagement
        },
        {
          path: '/ceo/mpp',
          component: Mpp
        },
        {
          path: '/ceo/mpp/detail',
          component: MppDetail
        },
        {
          path: '/ceo/mpp/human-resource',
          component: HRD,
          props: {content: 'Mpp'}
        },
        {
          path: '/ceo/mpp/marketing',
          component: Marketing
        },
        {
          path: '/ceo/mpp/trade-partnership',
          component: TradePartnership
        },
        {
          path: '/ceo/mpp/operation',
          component: Operation
        },
        {
          path: '/ceo/mpp/technology',
          component: Technology
        },
        {
          path: '/ceo/mpp/business-development',
          component: BusinessDevelopment
        },
        {
          path: '/ceo/mpp/finance',
          component: Finance
        },
        {
          path: '/ceo/mpp/project-management',
          component: ProjectManagement
        },
        {
          path: '/ceo/mpp/product-management',
          component: ProductManagement
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
          path: '/department/fpk/pending',
          component: FpkPending,
          props: {content: 'fpk'}
        },
        {
          path: '/department/fpk/accepted',
          component: FpkAccepted,
          props: {content: 'fpk'}
        },
        {
          path: '/department/fpk/rejected',
          component: FpkRejected,
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
          component: MppPending,
          props: {content: 'mpp'}
        },
        {
          path: '/department/mpp/accepted',
          component: MppAccepted,
          props: {content: 'mpp'}
        },
        {
          path: '/department/mpp/rejected',
          component: MppRejected
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
          path: '/hrd/requested/fpk/human-resource',
          component: HrdRequested,
          props: {department: 'HumanResource', content: 'fpk'}
        },
        {
          path: '/hrd/requested/mpp/human-resource',
          component: HrdRequested,
          props: {department: 'HumanResource', content: 'mpp'}
        },
        {
          path: '/hrd/requested/fpk/marketing',
          component: HrdRequested,
          props: {department: 'Marketing', content: 'fpk'}
        },
        {
          path: '/hrd/requested/mpp/marketing',
          component: HrdRequested,
          props: {department: 'Marketing', content: 'mpp'}
        },
        {
          path: '/hrd/requested/fpk/trade-partnership',
          component: HrdRequested,
          props: {department: 'TradePartnership', content: 'fpk'}
        },
        {
          path: '/hrd/requested/mpp/trade-partnership',
          component: HrdRequested,
          props: {department: 'TradePartnership', content: 'mpp'}
        },
        {
          path: '/hrd/requested/fpk/operation',
          component: HrdRequested,
          props: {department: 'Operation', content: 'fpk'}
        },
        {
          path: '/hrd/requested/mpp/operation',
          component: HrdRequested,
          props: {department: 'Operation', content: 'mpp'}
        },
        {
          path: '/hrd/requested/fpk/technology',
          component: HrdRequested,
          props: {department: 'Technology', content: 'fpk'}
        },
        {
          path: '/hrd/requested/mpp/technology',
          component: HrdRequested,
          props: {department: 'Technology', content: 'mpp'}
        },
        {
          path: '/hrd/requested/fpk/business-development',
          component: HrdRequested,
          props: {department: 'BusinessDevelopment', content: 'fpk'}
        },
        {
          path: '/hrd/requested/mpp/business-development',
          component: HrdRequested,
          props: {department: 'BusinessDevelopment', content: 'mpp'}
        },
        {
          path: '/hrd/requested/fpk/finance',
          component: HrdRequested,
          props: {department: 'Finance', content: 'fpk'}
        },
        {
          path: '/hrd/requested/mpp/finance',
          component: HrdRequested,
          props: {department: 'Finance', content: 'mpp'}
        },
        {
          path: '/hrd/requested/fpk/project-management',
          component: HrdRequested,
          props: {department: 'ProjectManagement', content: 'fpk'}
        },
        {
          path: '/hrd/requested/mpp/project-management',
          component: HrdRequested,
          props: {department: 'ProjectManagement', content: 'mpp'}
        },
        {
          path: '/hrd/requested/fpk/product-management',
          component: HrdRequested,
          props: {department: 'ProductManagement', content: 'fpk'}
        },
        {
          path: '/hrd/requested/mpp/product-management',
          component: HrdRequested,
          props: {department: 'ProductManagement', content: 'mpp'}
        },
        {
          path: '/hrd/candidates/human-resource',
          component: HrdCandidates,
          props: {department: 'HumanResource'}
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
          path: '/hrd/fpk/pending',
          component: FpkPending,
          props: {content: 'fpk'}
        },
        {
          path: '/hrd/mpp/pending',
          component: MppPending,
          props: {content: 'mpp'}
        },
        {
          path: '/hrd/fpk/accepted',
          component: FpkAccepted,
          props: {content: 'fpk'}
        },
        {
          path: '/hrd/mpp/accepted',
          component: MppAccepted,
          props: {content: 'mpp'}
        },
        {
          path: '/hrd/fpk/rejected',
          component: FpkRejected,
          props: {content: 'fpk'}
        },
        {
          path: '/hrd/mpp/rejected',
          component: MppRejected,
          props: {content: 'mpp'}
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
          path: '/hrd/requested/fpk/detail/:id',
          component: FpkDetail
        },
        {
          path: '/hrd/requested/mpp/detail/:id',
          component: MppDetail
        },
        {
          path: '/hrd/published/fpk/human-resource',
          component: HrdPublished,
          props: {department: 'HumanResource', content: 'fpk'}
        },
        {
          path: '/hrd/published/mpp/human-resource',
          component: HrdPublished,
          props: {department: 'HumanResource', content: 'mpp'}
        },
        {
          path: '/hrd/published/fpk/marketing',
          component: HrdPublished,
          props: {department: 'Marketing', content: 'fpk'}
        },
        {
          path: '/hrd/published/mpp/marketing',
          component: HrdPublished,
          props: {department: 'Marketing', content: 'mpp'}
        },
        {
          path: '/hrd/published/fpk/trade-partnership',
          component: HrdPublished,
          props: {department: 'TradePartnership', content: 'fpk'}
        },
        {
          path: '/hrd/published/mpp/trade-partnership',
          component: HrdPublished,
          props: {department: 'TradePartnership', content: 'mpp'}
        },
        {
          path: '/hrd/published/fpk/operation',
          component: HrdPublished,
          props: {department: 'Operation', content: 'fpk'}
        },
        {
          path: '/hrd/published/mpp/operation',
          component: HrdPublished,
          props: {department: 'Operation', content: 'mpp'}
        },
        {
          path: '/hrd/published/fpk/technology',
          component: HrdPublished,
          props: {department: 'Technology', content: 'fpk'}
        },
        {
          path: '/hrd/published/mpp/technology',
          component: HrdPublished,
          props: {department: 'Technology', content: 'mpp'}
        },
        {
          path: '/hrd/published/fpk/business-development',
          component: HrdPublished,
          props: {department: 'BusinessDevelopment', content: 'fpk'}
        },
        {
          path: '/hrd/published/mpp/business-development',
          component: HrdPublished,
          props: {department: 'BusinessDevelopment', content: 'mpp'}
        },
        {
          path: '/hrd/published/fpk/finance',
          component: HrdPublished,
          props: {department: 'Finance', content: 'fpk'}
        },
        {
          path: '/hrd/published/mpp/finance',
          component: HrdPublished,
          props: {department: 'Finance', content: 'mpp'}
        },
        {
          path: '/hrd/published/fpk/project-management',
          component: HrdPublished,
          props: {department: 'ProjectManagement', content: 'fpk'}
        },
        {
          path: '/hrd/published/mpp/project-management',
          component: HrdPublished,
          props: {department: 'ProjectManagement', content: 'mpp'}
        },
        {
          path: '/hrd/published/fpk/product-management',
          component: HrdPublished,
          props: {department: 'ProductManagement', content: 'fpk'}
        },
        {
          path: '/hrd/published/mpp/product-management',
          component: HrdPublished,
          props: {department: 'ProductManagement', content: 'mpp'}
        },
        {
          path: '/hrd/bank/quiz',
          component: BankQuizDashboard,
          props: {content: 'quiz'}
        }
      ]
    }
  ]
})
