// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      title: 'Simon Chester',
      meta: [
        { name: 'author', content: 'Simon Chester' },
        { name: 'description', content: '"Simon Chester, software engineer from Portsmouth, UK' },
        { name: 'keywords', content: 'Simon Chester, software engineer, Portsmouth' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
    }
  },
  devtools: { enabled: true }
})
