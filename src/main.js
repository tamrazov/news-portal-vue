import Vue from 'vue'
import store from './store';
import Vuelidate from 'vuelidate'
import router from '@/router/index.js'
import App from './App.vue'
import '@/components/global'

Vue.config.productionTip = false

Vue.use(Vuelidate)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')