export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/motion/nuxt',
  ],
  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light',
    storageKey: 'msambizi-color-mode',
  },
  app: {
    head: {
      title: 'Msambizi — Academic AI your faculty can stand behind',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Msambizi turns lecture notes, syllabi and reading lists into a governed learning experience — grounded in your content, guided by Socratic method, and visible to every lecturer. Built for universities and colleges.' },
        { property: 'og:title', content: 'Msambizi — Academic AI your faculty can stand behind' },
        { property: 'og:description', content: 'Governed AI learning for universities and colleges: curriculum grounding, educator oversight, and academic integrity by design.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Msambizi' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Msambizi — Academic AI your faculty can stand behind' },
        { name: 'twitter:description', content: 'Governed AI learning for universities and colleges.' },
        { name: 'theme-color', content: '#070B1A' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600&display=swap' },
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Msambizi',
            applicationCategory: 'EducationalApplication',
            operatingSystem: 'Web',
            description: 'Governed AI learning platform for universities and colleges.',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          }),
        },
      ],
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
  css: ['~/assets/css/main.css'],
  ssr: true,
  typescript: {
    strict: true,
    typeCheck: false,
  },
})