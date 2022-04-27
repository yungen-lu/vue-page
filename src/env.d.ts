// declare module '*.vue' {
//   import { defineComponent } from 'vue'
//   export default defineComponent
// }
declare module "*.vue" {
  import Vue from "vue";
  // const component: ReturnType<typeof defineComponent>;
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "vuetify/lib/framework" {
  import "vuetify/types";
  import Vuetify from "vuetify";
  export default Vuetify;
}
