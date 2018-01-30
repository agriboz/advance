module.exports = {
  debug: true,
  /*
  ** Single Page Application mode
  ** Means no SSR
  */
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Maaş Avansı',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          '//cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css'
      }
    ]
  },
  modules: ['@nuxtjs/axios'],
  env: {
    baseUrl: process.env.NODE_ENV === 'development'
      ? 'http://10.10.27.36:8181/adv/v1/'
      : 'http://10.10.27.36:8181/adv/v2/'
  },
  axios: {
    withCredentials: true,
    baseURL: process.env.NODE_ENV === 'development' ? 'http://10.10.27.36:8181/adv/v1/' : 'http://10.10.27.36:8181/adv/v2/',
    requestInterceptor: (config, {store}) => {
      store.state.loading = true
      return config
    },
    responseInterceptor: (response, {store}) => {
      store.state.loading = false
      return response
    }
  },
  loading: { color: '#3B8070' },
  plugins: ['~/plugins/buefy', '~/plugins/axios', '~/plugins/vuelidate', '~/plugins/excel'],
  css: ['animate.css/animate.min.css', 'node_modules/buefy/lib/buefy.min.css'],
  router: {
    linkActiveClass: 'is-active'
  },

  /*
  ** Build configuration
  */
  build: {
    analyze: {
      analyzerMode: 'static'
    },
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
