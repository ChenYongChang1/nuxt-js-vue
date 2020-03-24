import env from '.env'
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
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
  css: ['ant-design-vue/dist/antd.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/antd-ui', ssr: true },
    { src: '~/plugins/vue-particles', ssr: false }
    
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  server: env[process.env.MODE].server,
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: env[process.env.MODE].api.host + env[process.env.MODE].api.port,
    // withCredentials: true,
    headers: {
      'Content-Type': 'application/json'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  router: {
    linkPrefetchedClass: 'nuxt-link-prefetched',
    linkExactActiveClass: 'exact-active-link',
    routeNameSplitter: '/'
  }
}
