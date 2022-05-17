import { RouteRecordPublic } from 'vue-router';
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import router from '../router';
Vue.use(Vuex);
type post = {
  title: string;
  summary: string;
  author: string;
  date: string;
  imagesrc: string;
  path: string;
  viewcount: number;
};

const posts: RouteRecordPublic[] = router
  .getRoutes()
  .filter((i) => i.path.startsWith('/post'))
  .slice(1);
const copyPosts: post[] = posts.map((e) => ({
  title: e.meta.frontmatter.title,
  summary: e.meta.frontmatter.summary,
  author: e.meta.frontmatter.author,
  date: e.meta.frontmatter.date,
  imagesrc: e.meta.frontmatter.imagesrc,
  path: e.path,
  viewcount: parseInt(e.meta.frontmatter.viewcount),
}));
export default new Store({
  state: {
    posts: copyPosts,
  },
  getters: {
    topPost: (state) => {
      return state.posts.at(0);
    },
    subPost: (state) => {
      return state.posts.slice(1);
    },
    getPostViewCount: (state) => (path: string) => {
      return state.posts.find((el) => el.path == path)?.viewcount;
    },
  },
  mutations: {
    incrementViewCount(state, post: string) {
      const target = state.posts.find((el) => el.path == post);
      if (target) {
        target.viewcount++;
      }
    },
  },
  actions: {},
  modules: {},
});
