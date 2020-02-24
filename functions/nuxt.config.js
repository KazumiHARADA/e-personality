// import Questions from './assets/ja-edited-questions.json'

const baseUrl =
  'https://e-personality.firebaseapp.com' || 'http://localhost:3000'
const baseDir = process.env.BASE_DIR || '/'
const basePath = baseUrl + baseDir

// meta
const siteName = 'BigFive 精密パーソナリティ診断 ~ ePersonality ~'
const shortName = 'ePersonality'
const siteDesc = process.env.npm_package_description
const siteKeywords = '性格診断,BigFive,パーソナリティ,性格分析'
const manifestIcon = '/icon-1024.png'

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: `%s | ${siteName}`,
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // SEO関連
      { hid: 'description', name: 'description', content: siteDesc },
      { hid: 'keywords', name: 'keywords', content: siteKeywords },
      {
        name: 'google-site-verification',
        content: 'qXnJkdNM7nOPIkqEvkQCgErSloWOUFNN_8-ntMxc8Ws'
      },

      // ogp関連
      { hid: 'og:site_name', property: 'og:site_name', content: siteName },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: basePath },
      { hid: 'og:title', property: 'og:title', content: siteName },
      { hid: 'og:description', property: 'og:description', content: siteDesc },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `/ogpimage.png`
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent'
      }
    ],
    link: [
      // icons
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: '/favicon-16.png'
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: '/favicon-32.png'
      },
      {
        rel: 'icon',
        sizes: '48x48',
        type: 'image/png',
        href: '/favicon-48.png'
      },
      {
        rel: 'icon',
        sizes: '62x62',
        type: 'image/png',
        href: '/favicon-62.png'
      },
      // apple touch icon
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      }
    ]
  },
  icon: {
    iconFileName: manifestIcon
  },
  manifest: {
    lang: 'ja',
    name: siteName,
    short_name: shortName,
    description: siteDesc,
    background_color: '#ffffff',
    theme_color: '#ffffff',
    display: 'standalone',
    orientation: 'portrait'
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
    exclude: ['/result', '/inputs/**', '/simple/**']
  }
}
