<template>
  <div>
    <v-container>
      <div class="mx-auto px-12 d-block">
        <div class="d-flex flex-wrap">
          <v-col cols="12">
            <router-link :to="topPost.path" style="color: inherit; text-decoration: none">
              <top-article-block
                :title="topPost.title"
                :summary="topPost.summary"
                :author="topPost.author"
                :postdate="topPost.date"
                :imagesrc="topPost.imagesrc"
              />
            </router-link>
          </v-col>
          <v-col v-for="post in subPost" :key="post.path" cols="12" sm="6" lg="4">
            <router-link :to="post.path" style="color: inherit; text-decoration: none">
              <article-block
                :title="post.title"
                :summary="post.summary"
                :author="post.author"
                :postdate="post.date"
                :imagesrc="post.imagesrc"
              />
            </router-link>
          </v-col>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ArticleBlock from '@/components/ArticleBlock.vue';
import TopArticleBlock from '@/components/TopArticleBlock.vue';

type post = {
  title: string;
  summary: string;
  author: string;
  date: string;
  imagesrc: string;
  path: string;
  viewcount: number;
};
export default defineComponent({
  name: 'PostView',
  components: {
    ArticleBlock,
    TopArticleBlock,
  },
  computed: {
    topPost(): post {
      return this.$store.getters.topPost;
    },
    subPost(): post[] {
      return this.$store.getters.subPost;
    },
  },
  methods: {
    dateToString(date: string) {
      return new Date(date).toLocaleDateString();
    },
  },
});
</script>
