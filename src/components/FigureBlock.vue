<template>
  <header class="d-block text-center">
    <figure>
      <vue-icon />
    </figure>
    <h1 class="text-h5">Welcome to our website!</h1>
    <v-row justify="center">
      <v-btn class="mt-8 mx-4" @click="gotoPost()">Get Started</v-btn>
      <v-btn class="mt-8 mx-4">
        <a
          href="https://github.com/yungen-lu/vue-page"
          target="_blank"
          rel="noopener"
          style="text-decoration: none; color: inherit"
          >Github Repo</a
        >
      </v-btn>
    </v-row>
  </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import VueIcon from '@/assets/VueIcon.vue';
export default defineComponent({
  name: 'FigureBlock',
  components: {
    VueIcon,
  },
  methods: {
    gotoPost() {
      this.$router.push({ path: '/post' });
    },
  },
});
</script>
<style scoped>
* {
  text-transform: unset !important;
}
</style>
