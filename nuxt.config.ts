// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',
  future: {
    compatibilityVersion: 4,
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@pinia/nuxt',
    'unplugin-icons/nuxt', // 1. Add module here
  ],

  // 2. Configure unplugin-icons
  icons: {
    compiler: 'vue3',
    autoInstall: true, // Automatically fetches icon sets if missing
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  // Image optimization setup (R2/S3 CDN domain)
  image: {
    domains: ['cdn.impactbridge.org'],
  },

  // App head & Typography settings
  app: {
    head: {
      titleTemplate: '%s | Impact Bridge',
      defaultTitle: 'Impact Bridge - Offline Digital Learning Hubs',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Bridging the educational digital divide with offline-first learning hubs.' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Inter:wght@400;500;600;700&family=Lora:ital,wght@0,500;0,600;1,400&display=swap' },
      ],
    },
  },

  // Runtime environment variables
  runtimeConfig: {
    // Private keys (Server-side only)
    goApiSecret: process.env.GO_API_SECRET,
    directusToken: process.env.DIRECTUS_STATIC_TOKEN,

    // Public keys (Exposed to client)
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL || 'http://localhost:8080',
      cmsUrl: process.env.NUXT_PUBLIC_CMS_URL || 'http://localhost:8055',
      stripePublicKey: process.env.NUXT_PUBLIC_STRIPE_KEY || '',
    },
  },

  typescript: {
    strict: true,
    typeCheck: false,
    tsConfig: {
      compilerOptions: {
        types: ['unplugin-icons/types/vue'], // Adds virtual ~icons/ module definitions
      },
    },
  },
});