<template>
  <v-hover v-slot="{ hover }">
    <div class="d-flex flex-column fill-height" :class="elevationClass(hover)">
      <v-img :src="imagesrc" max-height="200" class="d-block" />
      <div class="px-4 py-4">
        <h2 class="mb-3">{{ title }}</h2>
        <p class="mb-3 text-truncate">{{ summary }}</p>
        <div class="mb-0 mt-1">
          <div class="d-flex flex-wrap">
            <p class="d-inline-block mr-3 font-weight-bold">{{ author }}</p>
            <span class="d-inline-block mr-3">{{ postdate }}</span>
          </div>
        </div>
      </div>
    </div>
  </v-hover>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  name: 'AritcleBlock',
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
