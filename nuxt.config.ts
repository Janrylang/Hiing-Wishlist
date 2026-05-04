export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ["~/main.css"],
  modules: [
    '@nuxt/ui', 
    '@nuxt/icon', 
    '@nuxtjs/google-fonts'],

  googleFonts: {
    families: {
      Manrope: [300, 400, 500, 600, 700, 800],
      Inter: [300, 400, 500, 600, 700, 800],
    },
  },
})