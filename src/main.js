import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vant from 'vant';
import VueAxios from "vue-plugin-axios";
import axios from "axios";
import VueSweetalert2 from 'vue-sweetalert2'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vant/lib/index.css';
import 'sweetalert2/dist/sweetalert2.min.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vant);


Vue.use(VueSweetalert2)


Vue.config.productionTip = false



Vue.use(VueAxios, {
  axios,
  config: {
    // withCredentials: true,
    baseURL: 'https://ielts.test/api/v1',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
  }
});




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
