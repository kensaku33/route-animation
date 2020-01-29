import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Users from '@/views/Users.vue'
import Granfront from '@/views/Granfront.vue'
import Yodobashi from '@/views/Yodobashi.vue'


// routerを使う宣言
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/Users',
      component: Users,
    },
    {
      path: '/Granfront',
      component: Granfront,
    },
    {
      path: '/Yodobashi',
      component: Yodobashi,
    },
  ]
})