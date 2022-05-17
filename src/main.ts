import Vue from 'vue';
import VueCompositionApi, { createApp } from '@vue/composition-api';

import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
import App from './App.vue';

Vue.use(VueCompositionApi);
Vue.config.productionTip = true;

const app = createApp({
  render: (h) => h(App),
  router,
  store,
  vuetify,
});
app.mount('#app');
// new Vue({
//   router,
//   vuetify,
//   store,
//   render: (h) => h(App),
// }).$mount('#app');
