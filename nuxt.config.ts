export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Msambizi — Educator-Guided Learning for Higher Education',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Msambizi brings educator-guided AI learning to universities and colleges, grounded in approved course materials. Request an institutional presentation.' },
        { property: 'og:title', content: 'Msambizi — Educator-Guided Learning for Higher Education' },
        { property: 'og:description', content: 'Every learner deserves faculty guidance, even after class. Discover educator-guided learning for universities and colleges.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Msambizi' },
        { property: 'og:image', content: 'https://msambizi.africa/brand/msambizi-social-preview.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:alt', content: 'Msambizi: Faculty guidance. Even after class. Educator-guided learning for universities and colleges.' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Msambizi — Educator-Guided Learning for Higher Education' },
        { name: 'twitter:description', content: 'Every learner deserves faculty guidance, even after class. Discover educator-guided learning for universities and colleges.' },
        { name: 'twitter:image', content: 'https://msambizi.africa/brand/msambizi-social-preview.png' },
        { name: 'twitter:image:alt', content: 'Msambizi: Faculty guidance. Even after class. Educator-guided learning for universities and colleges.' },
        { name: 'theme-color', content: '#0b182c' },
        { property: 'og:url', content: 'https://msambizi.africa/' },
      ],
      link: [
        { rel: 'canonical', href: 'https://msambizi.africa/' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap' },
      ],
      script: [
        {
          type: 'application/ld+json',
          textContent: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Msambizi',
            url: 'https://msambizi.africa/',
            logo: 'https://msambizi.africa/brand/msambizi-logo-on-dark.webp',
            description: 'Educator-guided AI learning for universities and colleges, grounded in approved course materials.',
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
