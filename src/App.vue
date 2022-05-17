<template>
  <v-app>
    <top-bar />
    <v-main>
      <v-container>
        <div class="d-flex">
          <v-col>
            <bread-crumb />
          </v-col>
          <v-col>
            <view-count class="justify-end" />
          </v-col>
        </div>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import TopBar from './components/TopBar.vue';
import BreadCrumb from './components/BreadCrumb.vue';
import ViewCount from './components/ViewCount.vue';
export default defineComponent({
  components: {
    TopBar,
    BreadCrumb,
    ViewCount,
  },
});
</script>
