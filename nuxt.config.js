export default {
  router: {
    base: '/WarpDrive/',
  },
  generate: {
    fallback: false,
    minify: {
      collapseWhitespace: false,
    },
  },
  build: {
    extend(config, { isDev, isClient }) {
      if (!isDev) {
        config.output.publicPath = './_nuxt/';
      }
      return config;
    },
    filenames: {
      app: () => '[name].js',
      chunk: () => '[name].js',
    },
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      lang: 'zh-TW',
    },
    title: 'WarpDrive',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1',
      },
      {
        'http-equiv': 'X-UA-Compatible',
        content: 'ie=edge',
      },
      {
        name: 'theme-color',
        content: '#ffffff',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Warpdrive Blob Clothes, motion graphics and creative clothes based in Taipei.',
      },

      //fb設定開始
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Warpdrive Blob Clothes, motion graphics and creative clothes based in Taipei.',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://theme.northguan-nsa.gov.tw/NorthGuanKorea/_nuxt/img/index-1visual-1-mobile.864071f.jpg',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content: 'Warp Drive 曲速引擎細胞系列',
      },
      {
        property: 'og:description',
        content: 'Warp Drive 曲速引擎細胞系列',
      },
      {
        property: 'og:site_name',
        content: 'Warp Drive 曲速引擎細胞系列',
      },
      { property: 'og:locale', content: 'ko' },
      //fb設定結束

      //twitter開始
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:site', content: '' },
      { property: 'twitter:site:id', content: '' },
      { property: 'twitter:creator', content: '' },
      { property: 'twitter:creator:id', content: '' },
      {
        property: 'twitter:description',
        content: 'Warp Drive 曲速引擎細胞系列',
      },
      {
        property: 'twitter:title',
        content: 'Warp Drive 曲速引擎細胞系列',
      },
      {
        property: 'twitter:image',
        content:
          'https://theme.northguan-nsa.gov.tw/NorthGuanKorea/_nuxt/img/index-1visual-1-mobile.864071f.jpg',
      },
      {
        property: 'twitter:image:alt',
        content: 'Warp Drive 曲速引擎細胞系列',
      },
      { property: 'twitter:creator:id', content: '' },
      //twitter結束
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.5.1.min.js',
      },
      {
        src: 'https://aaroniker.me/range.js',
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js',
      },
      {
        src:
          'https://unpkg.com/three@0.85.0/examples/js/controls/OrbitControls.js',
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/simplex-noise/2.4.0/simplex-noise.min.js',
      },
      {
        src: 'https://cdn.jsdelivr.net/jquery.drawsvg/1/jquery.drawsvg.min.js',
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/gsap.min.js',
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.js',
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.4.5/js/swiper.min.js',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: './favicon/apple-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: './favicon/apple-icon-60x60.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: './favicon/apple-icon-72x72.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: './favicon/apple-icon-76x76.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: './favicon/apple-icon-114x114.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: './favicon/apple-icon-120x120.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: './favicon/apple-icon-144x144.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: './favicon/apple-icon-152x152.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: './favicon/apple-icon-180x180.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: './favicon/android-icon-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: './favicon/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: './favicon/favicon-96x96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: './favicon/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: './favicon/manifest.json',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [
    {
      src: '~assets/scss/main.scss',
      lang: 'scss',
    },
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    {
      src: '~/plugins/vue-scrollto.js',
    },
    // {
    //   src: "~/plugins/jquery.drawsvg.js"
    // },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
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
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
};
