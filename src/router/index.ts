// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: "/ssef",
        name: 'SSEF',
        component: () => import('@/views/SSEF.vue')
      },
      {
        path: "/projects",
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue')
      },
      {
        path: "/projects/:id",
        name: "Project View",
        component: () => import('@/views/ProjectView.vue')
      },
      {
        path: "/students/:id",
        name: "Student Profile",
        component: () => import('@/views/StudentView.vue')
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
