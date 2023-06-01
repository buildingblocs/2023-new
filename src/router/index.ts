// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
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
      {
        path: '/events/june',
        name: "June Conference",
        component: () => import('@/views/JuneConference.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.afterEach((to, from) => {
  const toPath = to.path
  const fromPath = from.path
  to.meta.transition = (toPath ===  '/' && fromPath === '/') ? 'slide-up' : ''
})

export default router
