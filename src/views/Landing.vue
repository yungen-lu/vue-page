<template>
  <main>
    <figure-block></figure-block>
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import FigureBlock from '@/components/FigureBlock.vue';
export default defineComponent({
  name: 'landing',
  components: { FigureBlock },
});
</script>
