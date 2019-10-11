import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '',
    component: Layout,
    redirect: '/index',
    meta: {
      title: '主页',
      icon: 'iconfont'
    },
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('@/views/home')
      }
    ]
  }
]

const router = new Router({
  mode: 'history',
  routes: constantRoutes
})

export default router
