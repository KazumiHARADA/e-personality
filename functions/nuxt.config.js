// import Questions from './assets/ja-edited-questions.json'

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | Big Five 精密 パーソナリティ診断 ~ e-personality ~',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        name: 'google-site-verification',
        content: 'qXnJkdNM7nOPIkqEvkQCgErSloWOUFNN_8-ntMxc8Ws'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/app.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/scroll', '~/plugins/vue-scrollto'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    ['bootstrap-vue/nuxt', { css: false }],
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-gtag', { id: 'UA-154214086-2', debug: true }]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'https://e-personality.firebaseapp.com/' // https://e-personality.heroku.com/
        : 'http://localhost:3000/'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.devtool = ctx.isClient ? 'eval-source-map' : 'inline-source-map'
    }
  },
  buildDir: 'nuxt',

  generate: {
    routes() {
      const count = 120 / 8 // Questions.length / 8
      const result = []
      for (let i = 1; i <= count; i++) {
        result.push('/inputs/' + i)
      }
      return result
    }
  },

  env: {
    mongoUrl:
      'mongodb://heroku_g43j8m44:6iagj8up9rud4alsnncug1t8dc@ds251158.mlab.com:51158/heroku_g43j8m44'
  },
  layoutTransition: 'page',

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://e-personality.firebaseapp.com/',
    exclude: ['/result', '/inputs/1', '/simple/**']
  }
}
