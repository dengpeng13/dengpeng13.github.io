import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'


import "@/styles/index.scss"

Vue.config.productionTip = false


import Vant from "vant";

Vue.use(Vant);

import VueResource from "vue-resource";
Vue.use(VueResource)


import {axios} from "@/utils";
Vue.prototype.$axios = axios;     //this.$axios   挂载到原型对象


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
