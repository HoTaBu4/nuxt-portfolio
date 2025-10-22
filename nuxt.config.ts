import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL ?? '/',
    head: {
      title: 'My Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A portfolio showcasing my projects and skills.' }
      ]
    }
  },
  css: [
    '~/assets/css/tailwind.css',
    '@/assets/styles/main.css',
  ],
  plugins: [
    '@/plugins/axios.ts'
  ],
  modules: [
    '@nuxt/content'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    preset: 'github-pages',
    output: {
      dir: '.output',
    },
  },
})
