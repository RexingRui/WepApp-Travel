/* eslint disable */
// 导入vue源文件
import Vue from 'vue';
//导入外部依赖模块
import fastClick from 'fastclick';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
//导入组件
import App from './App';
//导入路由
import router from '.router';
import store from 'store';

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);
new Vue({
  el: '#ap',
  router,
  store,
  components: { App },
  template: '<App/>',
});
