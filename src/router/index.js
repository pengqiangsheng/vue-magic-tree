import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/view/welcome/index')
  },
  {
    path: '/ele',
    component: () => import('@/view/ele/index'),
  },
  {
    path: '/iview',
    component: () => import('@/view/iview/index'),
  },
  {
    path: '/ztree',
    component: () => import('@/view/ztree/index'),
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
