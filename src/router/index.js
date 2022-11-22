import { createRouter, createWebHashHistory } from 'vue-router'

const index = () => import('@/views/index.vue')

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: index,
  },
	{
	  path: '/login',
	  component:  import('@/views/login/login.vue'),
	},
	{
	  path: '/edit',
	  component:  import('@/views/edit.vue'),
	},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router