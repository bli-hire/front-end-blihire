import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Technology from '@/components/Technology'
import HRD from '@/components/HumanResource'

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
      path: '/fpk/Technology',
      name: 'Technology',
      component: Technology
    },
    {
      path: '/fpk/hrd',
      name: 'Hello',
      component: HRD
    }

  ]
})
