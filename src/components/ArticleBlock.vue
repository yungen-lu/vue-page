<template>
  <div class="d-flex flex-column elevation-6">
    <v-img
      src="https://static01.nyt.com/images/2022/04/26/us/politics/26pol-jan6gop-mccarthy/merlin_197278008_974c85e2-e796-41d3-9e5c-177d3f7f5edb-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
      class="d-block"
    ></v-img>
    <div class="px-4">
      <h2 class="mb-3">{{ title }}</h2>
      <p class="mb-3">{{ summary }}</p>
      <div class="mb-0 mt-1">
        <div class="d-flex flex-wrap">
          <p class="d-inline-block mr-3 font-weight-bold">{{ author }}</p>
          <span class="d-inline-block mr-3">{{ date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  name: 'AritcleBlock',
  data: () => ({
    title: 'McCarthy Feared G.O.P. Lawmakers Put ‘People in Jeopardy’ After Jan. 6',
    summary:
      'New audio recordings reveal Kevin McCarthy worried that comments by his far-right colleagues could incite violence. He later defended the lawmakers.',
    author: 'Yungen',
  }),
  computed: {
    date: () => {
      let tmp = new Date().toLocaleString();
      return tmp;
    },
  },
});
</script>
