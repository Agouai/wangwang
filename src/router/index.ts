import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Money from '@/views/Money.vue';
import Labeis from '@/views/Labeis.vue';
import Statistics from '@/views/Statistics.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/money'
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/labeis',
    component: Labeis
  },
  {
    path: '/statistics',
    component: Statistics
  },
];

const router = new VueRouter({
  routes
});

export default router;
