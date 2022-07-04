<template>
  <v-hover v-slot="{ hover }">
    <div class="py-6 d-flex flex-column flex-md-row flex-md-row-reverse" :class="elevationClass(hover)">
      <v-col cols="12" md="6" lg="8">
        <v-img :src="imagesrc" height="100%" weight="100%" class="d-block" />
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <div class="px-6">
          <h1 class="mb-3">{{ title }}</h1>
          <p class="mb-3">{{ summary }}</p>
          <div class="mb-0 mt-1">
            <div class="d-flex flex-wrap">
              <p class="d-inline-block mr-3 font-weight-bold">{{ author }}</p>
              <span class="d-inline-block mr-3">{{ postdate }}</span>
            </div>
          </div>
        </div>
      </v-col>
    </div>
  </v-hover>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
// type post = {
//   title: string;
//   summary: string;
//   date: Date;
//   author: string;
// };
export default defineComponent({
  name: 'TopAritcleBlock',
  // data: () => ({
  //   title: 'Elon Musk Is a Typical Twitter User, Except for One Thing',
  //   summary:
  //     'The platform has always been the perfect place to indulge your whims. But when you’re the richest man in the world, those whims can grow significantly.',
  //   author: 'Yungen',
  // }),
  props: {
    title: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    postdate: {
      type: String,
      required: true,
    },
    imagesrc: {
      type: String,
      required: true,
    },
  },
  methods: {
    elevationClass(hover: boolean): string {
      return `elevation-${hover ? 6 : 1}`;
    },
  },
});
</script>
