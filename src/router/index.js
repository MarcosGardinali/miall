import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login/Login.vue'
import Home from '../views/Home/Home.vue'
import Structure from '../Structure/Structure/Structure.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),  
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
        path: '/main',
        component: Structure,
        children:[
            {
                path: 'home',
                name: 'home',
                component: Home
              }
        ]
    }
  ]
})

export default router
