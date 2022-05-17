<template>
  <main>
    <figure-block />
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import FigureBlock from '@/components/FigureBlock.vue';
export default defineComponent({
  name: 'LandingView',
  components: { FigureBlock },
});
</script>
