import Vue from 'vue';
import VueRouter from 'vue-router';
import type { RouteConfig } from 'vue-router/types/router';
import LandingView from '@/views/Landing.vue';
import PostView from '@/views/Post.vue';
// eslint-disable-next-line import/no-unresolved
import routes from '~pages';
Vue.use(VueRouter);

const myroutes: RouteConfig[] = [
  {
    path: '/',
    name: 'LandingView',
    component: LandingView,
  },
  {
    path: '/post',
    name: 'PostView',
    component: PostView,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes: [...myroutes, ...routes],
});

export default router;
