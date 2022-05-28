import { resolve } from 'path'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import handlebars from 'vite-plugin-handlebars'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
  },
  plugins: [
    vue(),
    handlebars({
      partialDirectory: resolve(__dirname, 'pages/partials'),
    }),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  build: {
    rollupOptions: {
      input: [
        resolve(__dirname, 'pages/index.html'),
        resolve(__dirname, 'pages/about.html'),
      ],
    },
  },
})
