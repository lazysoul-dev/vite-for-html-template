import { resolve } from 'path'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
  },
  plugins: [
    vue(),
  ],
  root: './',
  server: {
    base: './',
  },
  build: {
    rollupOptions: {
      input: resolve(__dirname, './src/main.js'),
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
})
