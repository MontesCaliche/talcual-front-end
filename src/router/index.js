import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/signUp',
      name: 'SignUp',
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/reports',
      name: 'Reports',
      component: () => import('../views/Reports.vue')
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('../views/Products.vue')
    },
  ]
});

router.beforeEach((to, from, next) => {
  const rutaProtegida = to.matched.some(record => record.meta.requireAuth);

  if(rutaProtegida && localStorage.getItem('token')===null){
    next({name: 'Login'})
  }else{
    next()
  }

})

export default router;


