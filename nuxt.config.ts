// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
    "nuxt-meilisearch",
  ],
  content: {
    highlight: {
      theme: "light-plus",
    },
    documentDriven: true,
  },
  googleFonts: {
    families: {
      Merriweather: [400, 700],
      "Merriweather Sans": [400, 700],
      "Noto Serif TC": [300, 600],
    },
    download: true, // Download the fonts and serve them locally
  },
  colorMode: {
    classSuffix: "",
  },
});
