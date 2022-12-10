import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/components/Layouts/DashboardLayout.vue'
import store from '../store'

import NotFound from '../views/NotFound/featureNotFound.vue'


const routes = [
  {
    path: '/app/',
    name: 'Dashboard',
    component: Dashboard,
    children:[
      {
        path:'home',
        name:'Home',
        component:() => import('../views/Home')
      },
      {
        path:'users',
        name:'Users',
        component:() => import('../views/Users')
      },
      {
        path:'environments',
        name:'Environments',
        component:() => import('../views/Environments')
      },
      {
        path:'/:pathMatch(.*)*',
        component:NotFound
       }
    ]
  },
  {
    path: '/login',
    name: 'Login',
  
    component: () => import(/* webpackChunkName: "login" */ '../views/Auth/Login.vue')
  },
  {
    path:'/:pathMatch(.*)*',
    component:NotFound
   }
 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters['Login/getAccessToken']
  if (to.name !== 'Login' && !isLoggedIn) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router
