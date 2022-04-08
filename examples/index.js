import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';
import 'ant-design-vue/style.js';

new Vue({
  el: '#app',
  render: h => h(App),
});
