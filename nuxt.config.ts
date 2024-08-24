// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Vivarium AI, do you have what it takes to save the world?',
        },
        {
          property: 'og:title',
          content: 'Vivarium AI',
        },
      ],
      script: [
        {
          src: 'https://kit.fontawesome.com/8c20175850.js',
          crossorigin: 'anonymous',
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
});
