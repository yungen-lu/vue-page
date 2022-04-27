<template>
  <header class="d-block text-center">
    <figure>
      <vue-icon></vue-icon>
    </figure>
    <h1 class="headline">A blog about awesome things related to Vue.js</h1>
    <v-row justify="center">
      <v-btn class="mt-8 mx-4" @click="gotoPost()">Get Started</v-btn>
      <v-btn class="mt-8 mx-4">Github Repo</v-btn>
    </v-row>
  </header>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
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
