/* eslint-disable */
/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />
// declare module '*.vue' {
//   import { defineComponent } from 'vue'
//   export default defineComponent
// }
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // const component: ReturnType<typeof defineComponent>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'vuetify/lib/framework' {
  import 'vuetify/types';
  import Vuetify from 'vuetify';
  export default Vuetify;
}

declare module '*.md' {
  import type { ComponentOptions } from 'vue';
  const Component: ComponentOptions;
  export default Component;
}
