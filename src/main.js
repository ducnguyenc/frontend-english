import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Vocabulary from './components/vocabulary/Vocabulary.vue'
import SinusIndex from './components/sinus/Index.vue'
import SinusCreate from './components/sinus/Create.vue'
import FlirtIndex from './components/flirt/Index.vue'
import FlirtTypeIndex from './components/flirt/type/Index.vue'
import FlirtCategoryIndex from './components/flirt/category/Index.vue'

const routes = [
  { path: '/vocabulary', component: Vocabulary },
  { path: '/sinus', component: SinusIndex },
  { path: '/sinus/create', component: SinusCreate },
  { path: '/flirt', component: FlirtIndex },
  { path: '/flirt/type', component: FlirtTypeIndex },
  { path: '/flirt/category', component: FlirtCategoryIndex },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
