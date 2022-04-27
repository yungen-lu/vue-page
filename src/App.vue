<template>
  <v-app>
    <top-bar></top-bar>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import TopBar from './components/TopBar.vue';
export default defineComponent({
  name: 'app',
  components: {
    TopBar,
  },
});
