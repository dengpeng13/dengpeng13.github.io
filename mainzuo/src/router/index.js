import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);


import Guide from "@/views/Guide.vue"


const routes = [

  {
    path: '/guide',
    name: 'guide',
    component: Guide
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/Main.vue'),
    children: [
      {
        path: "",
        redirect: { name: 'movie' }
      },
      {
        path: 'movie',
        name: 'movie',
        component: () => import("@/views/Movie.vue")
      },
      {
        path: 'cinema',
        name: 'cinema',
        component: () => import("@/views/Cinema.vue")
      },
      {
        path: 'zixu',
        name: 'zixu',
        component: () => import("@/views/Zixu.vue")
      },

      {
        path: 'mine',
        name: 'mine',
        component: () => import("@/views/Mine.vue")
      },

      {
        path: '*',
        redirect: { name: 'movie' },

      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("@/views/Login.vue")
  },
  {
    path: '/yinxiang',
    name: 'yinxiang',
    component: () => import("@/views/Yinxiang.vue")
  },
  {
    path: '/search',
    name: 'search',
    component: () => import("@/views/Search.vue")
  },
  {
    path: '/city',
    name: 'city',
    component: () => import("@/views/City.vue")
  },
  {
    path: '/set',
    name: 'set',
    component: () => import("@/views/Set.vue")
  },
  {
    path: 'pinrun',
    name: 'pinrun',
    component: () => import("@/views/Pinrun.vue")
  },
  {
    path: 'goumai',
    name: 'goumai',
    component: () => import("@/views/Goumai.vue")
  },

  {
    path: '/film',
    name: 'film',
    component: () => import("@/views/Film.vue")
  },
  {
    path: '/cars',
    name: 'cars',
    component: () => import("@/views/Cars.vue")
  },


  {
    path: '/user',
    name: 'user',
    component: () => import("@/views/User.vue")
  },

  {
    path: '*',
    redirect: { name: 'guide' }
  }
]


const router = new VueRouter({
  routes
})


export default router