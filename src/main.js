import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import authService from './services/auth.service';
import './registerServiceWorker';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !authService.getToken()) {
    next({ path: '/login', query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
