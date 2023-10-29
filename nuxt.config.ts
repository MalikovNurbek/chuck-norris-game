// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  rootDir: '.',
  srcDir: 'src',
  modules: ['@nuxt/image', '@nuxtjs/eslint-module'],
  css: ['assets/css/style.css', 'assets/css/colors.css'],
  image: {
    dir: 'assets',
  },
  app: {
    buildAssetsDir: '/app/',
    head: {
      viewport: 'width=device-width, initial-scale=1',
      title: 'Шутки от Чака Норриса!',
    },
  },
});
