import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import icon from '@/components/icon.vue';

Vue.config.productionTip = false;
Vue.component('icon',icon)
Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app');
