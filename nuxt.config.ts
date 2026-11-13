export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Msambizi — A vision for higher education',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Msambizi is shaping a thoughtful approach to AI for universities and colleges. Discover the vision and request an institutional presentation.' },
        { property: 'og:title', content: 'Msambizi — A vision for higher education' },
        { property: 'og:description', content: 'A thoughtful approach to AI in higher education, shaped alongside universities and colleges.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Msambizi' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Msambizi — A vision for higher education' },
        { name: 'twitter:description', content: 'A thoughtful approach to AI in higher education, shaped alongside universities and colleges.' },
        { name: 'theme-color', content: '#f6f4ee' },
        { property: 'og:url', content: 'https://msambizi.africa/' },
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
            '@type': 'Organization',
            name: 'Msambizi',
            url: 'https://msambizi.africa/',
            description: 'An institutional technology initiative focused on universities and colleges.',
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
