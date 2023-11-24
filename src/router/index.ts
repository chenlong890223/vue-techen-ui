import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '@/views/layout/layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'Home',
          meta: { title: '首页' },
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@/views/guide/Home.vue')
        },
        {
          path: '/breadcrumb',
          name: 'Breadcrumb',
          meta: { title: '面包屑' },
          component: () => import('@/views/components-demos/Breadcrumb.vue')
        },
        {
          path: '/avueCrudCamp',
          name: 'AvueCrudCamp',
          meta: { title: 'Avue Crud 组件' },
          component: () => import('@/views/components-demos/AvueCrudCamp.vue')
        },
        {
          path: '/naiveTable',
          name: 'NaiveTable',
          meta: { title: 'Naive UI Table组件' },
          component: () => import('@/views/components-demos/NaiveTable.vue')
        },
        {
          path: '/avueCrudWithTree',
          name: 'AvueCrudWithTree',
          meta: { title: 'Avue Crud tree 组件' },
          component: () => import('@/views/components-demos/AvueCrudWithTree.vue')
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
