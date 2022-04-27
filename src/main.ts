import Vue from "vue";
import vueCompositionApi from "@vue/composition-api";

import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";
import App from "./App.vue";

Vue.use(vueCompositionApi);
Vue.config.productionTip = true;

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
