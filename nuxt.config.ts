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
  // @ts-expect-error unplugin-icons adds this Nuxt configuration option at runtime.
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

  // Route caching per architecture spec route map:
  // /stories -> "ISR / cached SSR", /stories/:slug -> "ISR",
  // /impact -> "ISR / cached SSR", /transparency -> "ISR / cached SSR".
  // swr = cached SSR with background revalidation; works on every Nitro
  // deployment target listed in the spec (Vercel, Render, Fly, Railway, containers).
  routeRules: {
    '/stories': { swr: 600 },
    '/stories/**': { swr: 600 },
    '/impact': { swr: 600 },
    '/transparency': { swr: 600 },
  },

  // Image optimization setup (R2/S3 CDN domain)
  image: {
    domains: ['cdn.impactbridge.org'],
  },

  // App head & Typography settings
  app: {
    head: {
      titleTemplate: '%s | Impact Bridge',
      title: 'Impact Bridge - Offline Digital Learning Hubs',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Bridging the educational digital divide with offline-first learning hubs.' },
      ],
      // Typography uses the system token stacks declared in tailwind.config.ts
      // (Georgia for editorial headings, Arial for body/controls/metrics/nav),
      // so no external font stylesheet is requested.
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
      // Absolute site origin used to build canonical URLs and social cards
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.impactbridge.org',
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