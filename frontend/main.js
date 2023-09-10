import Vue from 'vue';
import axios from 'axios';

// Defina a URL base da sua API Django
const apiBaseUrl = 'http://localhost:8000/api/';

// Crie a instância do Axios com a URL base
const api = axios.create({
  baseURL: apiBaseUrl,
});

// Defina a variável `api` como uma propriedade global no objeto Vue.prototype
Vue.prototype.$api = api;

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
