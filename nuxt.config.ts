// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@pinia/nuxt',
    '@samk-dev/nuxt-vcalendar',
    "@nuxt/ui",

  ],
  alias: {
    assets: '/<rootDir>/assets/images',
  },
  css: [
    '~/assets/main.scss',
    '~/assets/main.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})