<template>
  <div>
    <v-app-bar app clipped-left elevation="4">
      <v-row justify="space-between">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-col cols="auto">
          <v-icon @click="gotoLanding()"> mdi-notebook </v-icon>
        </v-col>
        <v-col cols="auto">
          <div>Posts</div>
        </v-col>
        <v-col cols="auto">
          <div>Tags</div>
        </v-col>
        <v-spacer></v-spacer>

        <v-col cols="auto">
          <v-icon> mdi-github </v-icon>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-navigation-drawer app clipped bottom v-model="drawer"></v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'TopBar',
  data: () => ({ drawer: false }),
  methods: {
    gotoLanding() {
      this.$router.push({ path: '/' });
    },
  },
});
</script>
