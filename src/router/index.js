import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LoginPage from '../views/LoginPage.vue'
import FormPage from '@/views/FormPage.vue'




const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {

    path: '/loginPage',
    name: 'LoginPage',
    component: LoginPage

  },

  {

    path: '/formPage',
    name: 'FormPage',
    component: FormPage

  }



  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
