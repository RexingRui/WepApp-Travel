import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    // 异步加载形式
    component: () => import('@/pages/home/Home'),
  }, {
    path: '/city',
    name: 'City',
    component: () => import('@/pages/city/City'),
  }, {
    path: '/detail:id',
    name: 'Detail',
    component: () => import('@/pages/detail/Detail'),
  }],
  // 当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样
  scrollBehavior() {
    return { x: 0, y: 0};
  },
});