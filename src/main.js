import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from '@/router';
import 'leaflet/dist/leaflet.css';
import VueClipboard from 'vue-clipboard2';

Vue.config.productionTip = false

VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard);
          

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
