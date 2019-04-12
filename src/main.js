import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import routes from './router/router';
import store from './store/';
import './config/rem';
import FastClick from 'fastclick';
import { LoadingPlugin, ToastPlugin, DatetimePlugin, AlertPlugin } from 'vux';
Vue.use(require('vue-wechat-title'))                           //微信title自定义
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(DatetimePlugin)
Vue.use(AlertPlugin)

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: "hash",
  strict: process.env.NODE_ENV === 'production'
})
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
