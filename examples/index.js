import 'babel-polyfill';
import Vue from 'vue';
// import App from './decorator-form.vue';
import App from './model-form.vue';
import 'ant-design-vue/style.js';

new Vue({
  el: '#app',
  render: h => h(App),
});
