import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';

import router from './router'
import store from './store'

const instance = axios.create({
  baseURL: 'https://learn-axios-e49c3.firebaseio.com/',
});

instance.interceptors.request.use((config => {
  console.log('Request Interceptor', config);
  return config;
}));

instance.interceptors.response.use(response => {
  console.log('Response Interceptor', response);
  return response;
});

Vue.prototype.$http = instance;
Vue.prototype.axios = instance;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
