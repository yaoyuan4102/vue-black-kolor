// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import App from './App';
import ConfigRouter from './router.conf';

Vue.use(VueRouter);
Vue.use(VueAwesomeSwiper);

const router = new VueRouter({
  //mode: 'history',
  base: __dirname,
  routes: ConfigRouter
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
});

