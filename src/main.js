import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router/router.js'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';




import InfiniteLoading from 'vue-infinite-loading';

Vue.use(InfiniteLoading, { /* options */ });

Vue.config.productionTip = false 
Vue.use(axios)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
