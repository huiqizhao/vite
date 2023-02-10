import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
/** modules */
import login from '@/router/modules/login'

const routes: RouteRecordRaw[] = [...login]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
