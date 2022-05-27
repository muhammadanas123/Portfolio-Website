import Vue from 'vue'
import App from './App.vue'
import './index.css'
import VueFullPage from 'vue-fullpage.js'

Vue.use(VueFullPage);

new Vue({
  render: h => h(App),
}).$mount('#app')
