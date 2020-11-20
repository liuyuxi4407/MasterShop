import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const home = () => import('views/home/home')
const category = () => import('views/category/category')
const cart = () => import('views/cart/cart')
const my = () => import('views/my/my')



const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/my',
    component: my
  },
]

const router = new VueRouter({
  routes
})

export default router
