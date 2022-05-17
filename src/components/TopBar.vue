<template>
  <div>
    <v-app-bar app clipped-left elevation="4">
      <v-row align="center" justify="center">
        <v-app-bar-nav-icon @click="clickDrawer()" />
        <v-col cols="auto">
          <router-link to="/" style="color: inherit; text-decoration: none">
            <v-icon> mdi-notebook </v-icon>
          </router-link>
        </v-col>
        <v-col cols="auto">
          <router-link to="/post" style="color: inherit; text-decoration: none">Posts</router-link>
        </v-col>
        <!-- <v-col cols="auto">
        <div>Tags</div>
      </v-col> -->
        <v-spacer />
        <v-col cols="auto">
          <v-autocomplete v-model="selected" :items="items" :search-input.sync="search" :no-filter="true" />
        </v-col>
        <v-col cols="auto">
          <a href="https://github.com/" target="_blank" rel="noopener" style="text-decoration: none; color: inherit">
            <v-icon> mdi-github </v-icon>
          </a>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app clipped disable-resize-watcher disable-route-watcher>
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="post in posts" :key="post.path">
            <router-link :to="post.path" style="color: inherit; text-decoration: none">
              <v-list-item-title v-text="post.title" />
            </router-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Fuse from 'fuse.js';

type post = {
  title: string;
  summary: string;
  author: string;
  date: string;
  imagesrc: string;
  path: string;
};

type items = {
  text: string;
  value?: string;
  disabled?: boolean;
  divider?: boolean;
  header?: boolean;
};
export default defineComponent({
  name: 'TopBar',
  data: function () {
    const search: string | null = null;
    const result: Fuse.FuseResult<post>[] = [];
    const posts: post[] = this.$store.state.posts;
    const fuse = new Fuse(posts, {
      keys: ['title', 'summary'],
      includeMatches: true,
    });
    return {
      drawer: false,
      posts,
      fuse,
      search,
      result,
      selected: [],
    };
  },
  computed: {
    items(): items[] {
      return this.result.map((result) => {
        return { text: result.item.title, value: result.item.path };
      });
    },
  },
  watch: {
    selected: function (newSelected: string) {
      this.$router.push(newSelected);
    },
    search: function (val: string) {
      this.querySelections(val);
    },
  },
  methods: {
    clickDrawer() {
      this.drawer = !this.drawer;
    },
    querySelections(input: string) {
      this.result = this.fuse.search(input);
    },
  },
});
</script>
