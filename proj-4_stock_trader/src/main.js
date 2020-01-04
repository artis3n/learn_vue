import Vue from 'vue';
import VueRouter from "vue-router";
import axios from 'axios';

import App from './App.vue';
import { routes } from "./routes";
import store from "./store/store";

const instance = axios.create({
  baseURL: 'https://vue-stock-trader-c0841.firebaseio.com/'
});

Vue.prototype.$http = instance;
Vue.prototype.axios = instance;

Vue.use(VueRouter);

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
