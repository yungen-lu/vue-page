<template>
  <div>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
    <v-container>
      <div class="mx-auto px-12 d-block">
        <div class="d-flex flex-wrap">
          <v-col cols="12">
            <top-article-block></top-article-block>
          </v-col>
          <v-col cols="12" sm="6" lg="4">
            <article-block></article-block>
          </v-col>
          <v-col cols="12" sm="6" lg="4">
            <article-block></article-block>
          </v-col>
          <v-col cols="12" sm="6" lg="4">
            <article-block></article-block>
          </v-col>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import ArticleBlock from '@/components/ArticleBlock.vue';
import TopArticleBlock from '@/components/TopArticleBlock.vue';

export default defineComponent({
  name: 'post',
  components: {
    ArticleBlock,
    TopArticleBlock,
  },
  data: () => ({
    drawer: false,
    items: [
      {
        text: 'Dashboard',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'Link 1',
        disabled: false,
        href: 'breadcrumbs_link_1',
      },
      {
        text: 'Link 2',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
    ],
  }),
});
</script>
