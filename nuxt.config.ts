// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/content", '@nuxtjs/tailwindcss', "@nuxt/image"],
  content: {
    highlight: {
      theme: 'light-plus'
    },
    documentDriven: true,
    experimental: {
      
    }
  },
});