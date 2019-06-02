// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import {store} from "./store/store";
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueCookies);

new Vue({
  router,
  store:store,
  el: '#app',
  components: { App },
  template: '<App/>'
})
