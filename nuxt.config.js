const isProduction = process.env.NODE_ENV === 'production';

export default {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Verifiable Credentials',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'},
      {hid: 'description', name: 'description', content: 'Verifiable Credentials'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    scripts: []
  },

  /*
  ** Configure environment variables
   */
  env: {
    SITE_BASE_URL: process.env.VUE_APP_SITE_BASE_URL,
    API_KEY: process.env.VUE_APP_API_KEY,
    API_PROXY_PATH: process.env.VUE_APP_API_PROXY_PATH,
    disableSign: true,

    disablePageHowTo: true,
    disablePageMoreInfo: true,
    disablePageContact: true,

    main_title: process.env.MAIN_TITLE || 'PDF Sign and Seal API',
    main_text: process.env.MAIN_TEXT || 'This is a demo portal for signing & sealing your PDF documents.',

    main_card_sign_title: process.env.MAIN_CARD_SIGN_TITLE || 'Sign',
    main_card_sign_text: process.env.MAIN_CARD_SIGN_TEXT || 'The files you upload here are not being stored on any permanent storage device. When the signing process has completed successfully, its authenticity is guaranteed.',

    sign_title: process.env.SIGN_TITLE || 'Demo page for signing & sealing your PDF documents.',
    sign_text: process.env.SIGN_TEXT || 'The files you upload here are not being stored on any permanent storage device. When the signing process has completed successfully, its authenticity is guaranteed. Please read our',
    sign_sub_title: process.env.SIGN_SUB_TITLE || '',
    sign_sub_text: process.env.SIGN_SUB_TEXT || '',
    sign_card_title: process.env.SIGN_CARD_TITLE || 'Sign',
    sign_card_text: process.env.SIGN_CARD_TEXT || '',

    // theme: 'blockchange',
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#3B8070'},

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/components',
    '~/plugins/filters',
    '~/plugins/vue-moment',
    {src: '~/plugins/vue-click-outside', ssr: false}
  ],

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/eslint-module'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
//    '@nuxtjs/axios',
    '@nuxtjs/vuetify',
    '@nuxtjs/sentry',
    // '@nuxtjs/google-analytics',
    '@nuxtjs/sitemap'
  ],

  /*
  ** Router middleware
  */
  router: {
    trailingSlash: false,
    middleware: []
  },

  /*
  ** Server middleware configuration
  */
  serverMiddleware: [
    ...isProduction ? [] : [
      '~/middleware/logger.js'
    ]
  ],

  server: {
    host: '0.0.0.0'
  },

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    browserBaseURL: '/'
  },

  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    optionsPath: './vuetify.options.js'
  },

  /*
  ** Sentry configuration
   */
  sentry: {
    dsn: process.env.SENTRY_DSN,
    config: {
      ignoreErrors: ['ReportingObserver']
    }
  },

  /*
  ** Google Analytics configuration
   */
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
    dev: false
  },

  /*
  ** Sitemap configuration
  */
  sitemap: {
    hostname: process.env.VUE_APP_SITE_BASE_URL,
    defaults: {
      changefreq: 'daily',
      lastmod: new Date(),
      priority: 1.0
    },

    gzip: isProduction,

    exclude: [
      '**/embed'
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: [/^vuetify/],
    extractCSS: isProduction,
    hardSource: process.env.HARDSOURCE,
    templates: [
      {
        src: './templates/robots.txt',
        dst: '../static/robots.txt'
      }
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, {isClient, isDev}) {
      if (isClient && isDev) {
        config.devtool = 'source-map';
      }
    }
  }
}
