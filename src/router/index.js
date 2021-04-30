import Vue from 'vue'
import VueRouter from 'vue-router'
import layoutChildren from "./layout.js";
const _import = require("./router.js");

Vue.use(VueRouter)




const routes = [
  {
    path: '/web/home',
    name: 'Home',
    component: _import('Home')

  },
  {
    path: '/web/login',
    component: _import('Account/Login')

  },
  {
    path: '/web/register',
    component: _import('Account/Register')
  },
  {
    path: '/web/repassword',
    component: _import('Account/Repassword')
  },
  {
    path: '/web/layout',
    name: 'Layout',
    component: _import('Layout/Layout'),
    children:layoutChildren,

  },
  {
    path: '/web/interval_contracts',
    component: _import('Interval/Interval_Contracts')
  },
  {
    path: '/web/notify/:id',
    component: _import('Notify/Notify')
  },
  {
    path: '/',
    redirect:'/web/home'
  },
  {
    path: '*',
    redirect:'/web/home'
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to,from,next)=>{
//
// })


export default router
