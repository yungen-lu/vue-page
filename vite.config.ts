import { defineConfig } from 'vite';
import { createVuePlugin as vue } from 'vite-plugin-vue2';
import Components from 'unplugin-vue-components/vite';
import { VuetifyResolver } from 'unplugin-vue-components/resolvers';
import Markdown from 'vite-plugin-md';
import Pages from 'vite-plugin-pages';
import path, { resolve } from 'path';
import matter from 'gray-matter';
// import eslintPlugin from '@modyqyw/vite-plugin-eslint';
import anchor from 'markdown-it-anchor';
import Prism from 'markdown-it-prism';
import * as fs from 'fs';

import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-regex';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-xml-doc';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-go';
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        // vue @ shortcut fix
        find: '@/',
        replacement: `${path.resolve(__dirname, './src')}/`,
      },
      {
        find: 'src/',
        replacement: `${path.resolve(__dirname, './src')}/`,
      },
    ],
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
      target: 'esnext',
    }),
    Pages({
      extensions: ['vue', 'ts', 'md'],
      dirs: [{ dir: 'posts', baseRoute: 'post' }],
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1));
        const md = fs.readFileSync(path, 'utf-8');
        const { data } = matter(md);
        route.meta = Object.assign(route.meta || {}, { frontmatter: data });
        return route;
      },
    }),
    Markdown({
      markdownItSetup(md) {
        md.use(Prism);
        md.use(anchor, {
          permalink: anchor.permalink.ariaHidden({
            placement: 'before',
          }),
        });
      },
    }),
    Components({
      extensions: ['vue', 'md'],
      dts: true,
      directives: true,
      resolvers: [VuetifyResolver()],
    }),
    // eslintPlugin(),
  ],
  css: {
    // https://vitejs.dev/config/#css-preprocessoroptions
    preprocessorOptions: {
      sass: {
        additionalData: [
          // vuetify variable overrides
          '@import "@/styles/variables.scss"',
          '',
        ].join('\n'),
      },
    },
  },
});
