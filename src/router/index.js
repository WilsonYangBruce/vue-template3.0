import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'home' },
    name: 'default'//默认打开home页面
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    alias: '/h'
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const flag = false
  if (flag) {
    console.log(to)
    console.log(from)
    console.log(next)
  }

  next()
})

export default router
