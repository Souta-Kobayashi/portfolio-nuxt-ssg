// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss"],
  srcDir: "src/",
  ssr: false,
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: "double",
        semi: false,
      },
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: tag => /^(swiper|swiper-slide|swiper-container)$/.test(tag),
    },
  },
})
