import Vuetify from "vuetify/lib/framework";
import Vue from "vue";

import { getCurrentInstance } from "@vue/composition-api";
import "@mdi/font/css/materialdesignicons.css";
Vue.use(Vuetify);
export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },
});

/** Get vuetify instance (For Composition api) */
export function useVuetify(): Vuetify {
  const instance = getCurrentInstance();
  if (!instance) {
    throw new Error(`Should be used in setup().`);
  }
  // @ts-ignore
  return instance.proxy.$vuetify;
}
