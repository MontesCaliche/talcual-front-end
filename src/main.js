import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'

import VueAxios from 'vue-axios'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Importing the global css file
import '../src/assets/css/style.css'; 

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

const localurl = 'http://localhost:3000'
const serverurl = 'https://talcual-uam-app.herokuapp.com/'

axios.defaults.baseURL = localurl;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
