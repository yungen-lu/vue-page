<template>
  <div class="py-6 d-flex flex-column flex-md-row flex-md-row-reverse elevation-6">
    <v-col cols="12" md="6" lg="8">
      <v-img
        src="https://static01.nyt.com/images/2022/04/26/magazine/26Mag-Musk-01/26Mag-Musk-01-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
        class="d-block"
      ></v-img>
    </v-col>
    <v-col cols="12" md="6" lg="4">
      <div class="px-6">
        <h1 class="mb-3">{{ title }}</h1>
        <p class="mb-3">{{ summary }}</p>
        <div class="mb-0 mt-1">
          <div class="d-flex flex-wrap">
            <p class="d-inline-block mr-3 font-weight-bold">{{ author }}</p>
            <span class="d-inline-block mr-3">{{ date }}</span>
          </div>
        </div>
      </div>
    </v-col>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  name: 'TopAritcleBlock',
  data: () => ({
    title: 'Elon Musk Is a Typical Twitter User, Except for One Thing',
    summary:
      'The platform has always been the perfect place to indulge your whims. But when you’re the richest man in the world, those whims can grow significantly.',
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
