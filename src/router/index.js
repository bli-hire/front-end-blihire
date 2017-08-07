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
// import Fpk from '@/components/Fpk'
import FpkDetail from '@/components/page-component/FpkDetail'
// import Mpp from '@/components/Mpp'
import MppDetail from '@/components/page-component/MppDetail'
import CreateForm from '@/components/department/CreateForm'
import DepartmentDasboard from '@/components/department/Dashboard'
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
import CreateMppDashboard from '@/components/page-component/CreateMppDashboard'


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
          path: '/ceo/fpk'
          // component: Fpk
        },
        {
          path: '/ceo/fpk/detail/:id',
          component: FpkDetail
        },
        {
          path: '/ceo/fpk/human-resource',
          component: HRD,
          props: {content: 'fpk', param: 'pending', approve: 'CEO'}
        },
        {
          path: '/ceo/fpk/marketing',
          component: Marketing,
          props: {content: 'fpk', param: 'pending', approve: 'CEO'}
        },
        {
          path: '/ceo/fpk/trade-partnership',
          component: TradePartnership,
          props: {content: 'fpk', param: 'pending', approve: 'CEO'}
        },
        {
          path: '/ceo/fpk/operation',
          component: Operation,
          props: {content: 'fpk', param: 'pending', approve: 'CEO'}
        },
        {
          path: '/ceo/fpk/technology',
          component: Technology,
          props: {content: 'fpk', param: 'pending', approve: 'CEO'}
        },
        {
          path: '/ceo/fpk/business-development',
          component: BusinessDevelopment,
          props: {content: 'fpk', param: 'pending', approve: 'CEO'}
        },
        {
          path: '/ceo/fpk/finance',
          component: Finance,
          props: {content: 'fpk', param: 'pending', approve: 'CEO'}
        },
        {
          path: '/ceo/fpk/project-management',
          component: ProjectManagement,
          props: {content: 'fpk', param: 'pending', approve: 'CEO'}
        },
        {
          path: '/ceo/fpk/product-management',
          component: ProductManagement,
          props: {content: 'fpk', param: 'pending', approve: 'CEO'}
        },
        {
          path: '/ceo/mpp'
          // component: Mpp
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
          props: {content: 'mpp', status: 'active'}
        },
        {
          path: '/ceo/mpp/business-development',
          component: BusinessDevelopment,
          props: {content: 'mpp'}
        },
        {
          path: '/ceo/mpp/finance',
          component: Finance,
          props: {content: 'mpp', status: 'active'}
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
        },
        // Accepted, Published, Rejected
        {
          path: '/ceo/accepted/fpk/human-resource',
          component: HRD,
          props: {content: 'fpk', param: 'accepted', approve: 'CEO'}
        },
        {
          path: '/ceo/rejected/fpk/human-resource',
          component: HRD,
          props: {content: 'fpk', param: 'rejected', approve: 'CEO'}
        },
        {
          path: '/ceo/published/fpk/human-resource',
          component: HRD,
          props: {content: 'fpk', param: 'published', approve: 'HR'}
        },
        {
          path: '/ceo/accepted/mpp/human-resource',
          component: HRD,
          props: {department: 'HumanResource', content: 'mpp'}
        },
        {
          path: '/ceo/rejected/mpp/human-resource',
          component: HRD,
          props: {department: 'HumanResource', content: 'mpp'}
        },
        {
          path: '/ceo/published/mpp/human-resource',
          component: HRD,
          props: {department: 'HumanResource', content: 'mpp'}
        },
        // --------------
        {
          path: '/ceo/accepted/fpk/marketing',
          component: Marketing,
          props: {content: 'fpk', param: 'accepted', approve: 'CEO'}
        },
        {
          path: '/ceo/rejected/fpk/marketing',
          component: Marketing,
          props: {content: 'fpk', param: 'rejected', approve: 'CEO'}
        },
        {
          path: '/ceo/published/fpk/marketing',
          component: Marketing,
          props: {content: 'fpk', param: 'published', approve: 'HR'}
        },
        {
          path: '/ceo/accepted/mpp/marketing',
          component: Marketing,
          props: {department: 'Marketing', content: 'mpp'}
        },
        {
          path: '/ceo/rejected/mpp/marketing',
          component: Marketing,
          props: {department: 'Marketing', content: 'mpp'}
        },
        {
          path: '/ceo/published/mpp/marketing',
          component: Marketing,
          props: {department: 'Marketing', content: 'mpp'}
        },
        // --------------
        {
          path: '/ceo/accepted/fpk/trade-partnership',
          component: TradePartnership,
          props: {content: 'fpk', param: 'accepted', approve: 'CEO'}
        },
        {
          path: '/ceo/rejected/fpk/trade-partnership',
          component: TradePartnership,
          props: {content: 'fpk', param: 'rejected', approve: 'CEO'}
        },
        {
          path: '/ceo/published/fpk/trade-partnership',
          component: TradePartnership,
          props: {content: 'fpk', param: 'published', approve: 'HR'}
        },
        {
          path: '/ceo/accepted/mpp/trade-partnership',
          component: TradePartnership,
          props: {department: 'TradePartnership', content: 'mpp'}
        },
        {
          path: '/ceo/rejected/mpp/trade-partnership',
          component: TradePartnership,
          props: {department: 'TradePartnership', content: 'mpp'}
        },
        {
          path: '/ceo/published/mpp/trade-partnership',
          component: TradePartnership,
          props: {department: 'TradePartnership', content: 'mpp'}
        },
        // --------------
        {
          path: '/ceo/accepted/fpk/operation',
          component: Operation,
          props: {content: 'fpk', param: 'accepted', approve: 'CEO'}
        },
        {
          path: '/ceo/rejected/fpk/operation',
          component: Operation,
          props: {content: 'fpk', param: 'rejected', approve: 'CEO'}
        },
        {
          path: '/ceo/published/fpk/operation',
          component: Operation,
          props: {content: 'fpk', param: 'published', approve: 'HR'}
        },
        {
          path: '/ceo/accepted/mpp/operation',
          component: Operation,
          props: {department: 'Operation', content: 'mpp'}
        },
        {
          path: '/ceo/rejected/mpp/operation',
          component: Operation,
          props: {department: 'Operation', content: 'mpp'}
        },
        {
          path: '/ceo/published/mpp/operation',
          component: Operation,
          props: {department: 'Operation', content: 'mpp'}
        },
        // --------------
        {
          path: '/ceo/accepted/fpk/technology',
          component: Technology,
          props: {content: 'fpk', param: 'accepted', approve: 'CEO'}
        },
        {
          path: '/ceo/rejected/fpk/technology',
          component: Technology,
          props: {content: 'fpk', param: 'rejected', approve: 'CEO'}
        },
        {
          path: '/ceo/published/fpk/technology',
          component: Technology,
          props: {content: 'fpk', param: 'published', approve: 'HR'}
        },
        {
          path: '/ceo/accepted/mpp/technology',
          component: Technology,
          props: {department: 'Technology', content: 'mpp', status: 'accepted'}
        },
        {
          path: '/ceo/rejected/mpp/technology',
          component: Technology,
          props: {department: 'Technology', content: 'mpp', status: 'rejected'}
        },
        {
          path: '/ceo/published/mpp/technology',
          component: Technology,
          props: {department: 'Technology', content: 'mpp', status: 'published'}
        },
        // --------------
        {
          path: '/ceo/accepted/fpk/business-development',
          component: BusinessDevelopment,
          props: {content: 'fpk', param: 'accepted', approve: 'CEO'}
        },
        {
          path: '/ceo/rejected/fpk/business-development',
          component: BusinessDevelopment,
          props: {content: 'fpk', param: 'rejected', approve: 'CEO'}
        },
        {
          path: '/ceo/published/fpk/business-development',
          component: BusinessDevelopment,
          props: {content: 'fpk', param: 'published', approve: 'HR'}
        },
        {
          path: '/ceo/accepted/mpp/business-development',
          component: BusinessDevelopment,
          props: {department: 'BusinessDevelopment', content: 'mpp'}
        },
        {
          path: '/ceo/rejected/mpp/business-development',
          component: BusinessDevelopment,
          props: {department: 'BusinessDevelopment', content: 'mpp'}
        },
        {
          path: '/ceo/published/mpp/business-development',
          component: BusinessDevelopment,
          props: {department: 'BusinessDevelopment', content: 'mpp'}
        },
        // --------------
        {
          path: '/ceo/accepted/fpk/finance',
          component: Finance,
          props: {content: 'fpk', param: 'accepted', approve: 'CEO'}
        },
        {
          path: '/ceo/rejected/fpk/finance',
          component: Finance,
          props: {content: 'fpk', param: 'rejected', approve: 'CEO'}
        },
        {
          path: '/ceo/published/fpk/finance',
          component: Finance,
          props: {content: 'fpk', param: 'published', approve: 'HR'}
        },
        {
          path: '/ceo/accepted/mpp/finance',
          component: Finance,
          props: {department: 'Finance', content: 'mpp', status: 'accepted'}
        },
        {
          path: '/ceo/rejected/mpp/finance',
          component: Finance,
          props: {department: 'Finance', content: 'mpp', status: 'rejected'}
        },
        {
          path: '/ceo/published/mpp/finance',
          component: Finance,
          props: {department: 'Finance', content: 'mpp', status: 'published'}
        },
        // ------
        {
          path: '/ceo/accepted/fpk/project-management',
          component: ProjectManagement,
          props: {content: 'fpk', param: 'accepted', approve: 'CEO'}
        },
        {
          path: '/ceo/rejected/fpk/project-management',
          component: ProjectManagement,
          props: {content: 'fpk', param: 'rejected', approve: 'CEO'}
        },
        {
          path: '/ceo/published/fpk/project-management',
          component: ProjectManagement,
          props: {content: 'fpk', param: 'published', approve: 'HR'}
        },
        {
          path: '/ceo/accepted/mpp/project-management',
          component: ProjectManagement,
          props: {department: 'ProjectManagement', content: 'mpp'}
        },
        {
          path: '/ceo/rejected/mpp/project-management',
          component: ProjectManagement,
          props: {department: 'ProjectManagement', content: 'mpp'}
        },
        {
          path: '/ceo/published/mpp/project-management',
          component: ProjectManagement,
          props: {department: 'ProjectManagement', content: 'mpp'}
        },
        // -----
        {
          path: '/ceo/accepted/fpk/product-management',
          component: ProductManagement,
          props: {content: 'fpk', param: 'accepted', approve: 'CEO'}
        },
        {
          path: '/ceo/rejected/fpk/product-management',
          component: ProductManagement,
          props: {content: 'fpk', param: 'rejected', approve: 'CEO'}
        },
        {
          path: '/ceo/published/fpk/product-management',
          component: ProductManagement,
          props: {content: 'fpk', param: 'published', approve: 'HR'}
        },
        {
          path: '/ceo/accepted/mpp/product-management',
          component: ProductManagement,
          props: {department: 'ProductManagement', content: 'mpp'}
        },
        {
          path: '/ceo/rejected/mpp/product-management',
          component: ProductManagement,
          props: {department: 'ProductManagement', content: 'mpp'}
        },
        {
          path: '/ceo/published/mpp/product-management',
          component: ProductManagement,
          props: {department: 'ProductManagement', content: 'mpp'}
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
          path: '/department/fpk/process',
          component: DepartmentDasboard,
          props: {content: 'fpk'}
        },
        {
          path: '/department/fpk/process/accept',
          component: DepartmentDasboard,
          props: {content: 'fpk', processFpk: 'accept'}
        },
        {
          path: '/department/fpk/process/rejected',
          component: DepartmentDasboard,
          props: {content: 'fpk', processFpk: 'rejected'}
        },
        {
          path: '/department/fpk/process/ceo/waiting',
          component: DepartmentDasboard,
          props: {content: 'fpk', processFpk: 'waitingCeo'}
        },
        {
          path: '/department/fpk/process/ceo/accepted',
          component: DepartmentDasboard,
          props: {content: 'fpk', processFpk: 'acceptedCeo'}
        },
        {
          path: '/department/fpk/process/ceo/rejected',
          component: DepartmentDasboard,
          props: {content: 'fpk', processFpk: 'rejectedCeo'}
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
          path: '/department/fpk/dashboard',
          component: DepartmentDasboard,
          props: {content: 'fpk', param: 'pending', approve: 'DepartmentHead'}
        },
        {
          path: '/department/fpk/history',
          component: DepartmentDasboard,
          props: {content: 'fpk', param: 'history', approve: 'DepartmentHead'}
        },
        {
          path: '/department/fpk/pending',
          component: DepartmentDasboard,
          props: {content: 'fpk', param: 'pending', approve: 'DepartmentHead'}
        },
        {
          path: '/department/fpk/accepted',
          component: DepartmentDasboard,
          props: {content: 'fpk', param: 'accepted', approve: 'DepartmentHead'}
        },
        {
          path: '/department/fpk/rejected',
          component: DepartmentDasboard,
          props: {content: 'fpk', param: 'rejected', approve: 'DepartmentHead'}
        },
        {
          path: '/department/mpp'
        },
        {
          path: '/department/mpp/dashboard',
          component: DepartmentDasboard,
          props: {content: 'mpp', param: 'active'}
        },
        {
          path: '/department/mpp/create-new',
          component: CreateMppDashboard,
          props: {content: 'mpp'}
        },
        {
          path: '/department/mpp/create-new/detail',
          component: CreateForm,
          props: {content: 'mpp'}
        },
        {
          path: '/department/mpp/create-new/detail-edit',
          component: CreateForm,
          props: {content: 'mpp', edit: true}
        },
        {
          path: '/department/fpk/create-new/detail-edit',
          component: CreateForm,
          props: {content: 'fpk', edit: true}
        },
        {
          path: '/department/mpp/history',
          component: DepartmentDasboard,
          props: {content: 'mpp', param: 'history'}
        },
        {
          path: '/department/mpp/pending',
          component: DepartmentDasboard,
          props: {content: 'mpp', param: 'pending'}
        },
        {
          path: '/department/mpp/accepted',
          component: DepartmentDasboard,
          props: {content: 'mpp', param: 'accepted'}
        },
        {
          path: '/department/mpp/rejected',
          component: DepartmentDasboard,
          props: {content: 'mpp', param: 'rejected'}
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
