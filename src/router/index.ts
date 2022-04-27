import Vue from 'vue';
import VueRouter from 'vue-router';
import type { RouteConfig } from 'vue-router/types/router';
import Landing from '@/views/Landing.vue';
import Post from '@/views/Post.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'landing',
    component: Landing,
  },
  {
    path: '/post',
    name: 'post',
    component: Post,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
