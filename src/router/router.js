import Vue from 'vue'
// import VueRouter from 'vueRouter'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Container from '../Container'

const routes = [
    { path: '/', component: Container },
    
  ]


const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
  })
export default router