<template>
  <v-subheader v-if="onPostPage" class="text-right">viewCount: {{ viewCount }}</v-subheader>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  computed: {
    viewCount() {
      return this.$store.getters.getPostViewCount(this.$route.path);
    },
    onPostPage() {
      return this.$route.path.split('/post/').length > 1;
    },
  },
});
</script>
