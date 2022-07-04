<template>
  <v-breadcrumbs :items="items" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
type item = {
  text: string;
  disabled: boolean;
  exact: boolean;
  to: string;
};
export default defineComponent({
  computed: {
    items: function (): item[] {
      const path = this.$route.path.split('/').slice(1);
      if (path[0] == '') return [];
      const arr: item[] = [
        {
          text: 'home',
          disabled: false,
          exact: true,
          to: '/',
        },
      ];
      let rootPath = '';
      path.forEach((el) => {
        rootPath = rootPath + '/' + el;
        arr.push({
          text: el,
          disabled: false,
          exact: true,
          to: rootPath,
        });
      });
      return arr;
    },
  },
});
</script>
