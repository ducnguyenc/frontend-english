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

import Vocabulary from './components/Vocabulary.vue'

const routes = [
  { path: '/vocabulary', component: Vocabulary },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
