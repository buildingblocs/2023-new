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
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue'),
      },
      {
        path: '/competitions',
        name: 'Competitions',
        component: () => import('@/views/Competitions.vue'),
      },
      {
        path: '/team',
        name: 'Team',
        component: () => import('@/views/Team.vue'),
      },
      {
        path: '/events',
        name: 'Events',
        component: () => import('@/views/Events.vue'),
      },
      {
        path: '/partners',
        name: 'Partners',
        component: () => import('@/views/Partners.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
