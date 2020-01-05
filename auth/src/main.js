import Vue from 'vue';
import axios from 'axios';

import App from './App.vue';
import router from './router';
import store from './store';

const instance = axios.create({
  baseURL: 'https://vue-auth-9a840.firebaseio.com/'
});

Vue.prototype.$http = instance;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
