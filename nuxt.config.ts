const description = 'Msambizi brings educator-guided learning to universities and colleges, using approved course materials and AI to support students after class.'
const socialDescription = 'A learning platform for universities and colleges, where AI support stays within the materials educators approve.'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  // Nuxt 3.21 generates the dev app manifest too late for Vite's import analysis,
  // which logs spurious "#app-manifest" pre-transform errors on a clean start.
  // This project has no routeRules, so disabling the manifest has no effect here.
  experimental: { appManifest: false },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      apiBase: '',
    },
  },
  app: {
    head: {
      title: 'Msambizi — Extend the Reach of Educators',
      htmlAttrs: { lang: 'en', 'data-theme': 'light' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: description },
        { property: 'og:title', content: 'Msambizi — Extend the Reach of Educators' },
        { property: 'og:description', content: socialDescription },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Msambizi' },
        { property: 'og:image', content: 'https://msambizi.africa/brand/msambizi-social-preview.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:alt', content: 'Msambizi logo above the headline “Faculty guidance. Even after class.” and a description of educator-guided learning for universities and colleges, on a navy background.' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Msambizi — Extend the Reach of Educators' },
        { name: 'twitter:description', content: socialDescription },
        { name: 'twitter:image', content: 'https://msambizi.africa/brand/msambizi-social-preview.png' },
        { name: 'twitter:image:alt', content: 'Msambizi logo above the headline “Faculty guidance. Even after class.” and a description of educator-guided learning for universities and colleges, on a navy background.' },
        { name: 'theme-color', content: '#f3f6fa' },
        { property: 'og:url', content: 'https://msambizi.africa/' },
      ],
      link: [
        { rel: 'canonical', href: 'https://msambizi.africa/', key: 'canonical' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap' },
      ],
      script: [
        {
          key: 'theme-init',
          textContent: "(function(){try{const saved=localStorage.getItem('msambizi-theme');if(saved==='light'||saved==='dark'){document.documentElement.dataset.theme=saved}}catch{}})()",
        },
        {
          type: 'application/ld+json',
          textContent: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Msambizi',
            url: 'https://msambizi.africa/',
            logo: 'https://msambizi.africa/brand/msambizi-logo-on-dark.webp',
            description,
          }),
        },
      ],
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/login', '/contact'],
    },
  },
  css: ['~/assets/css/main.css'],
  ssr: true,
  typescript: {
    strict: true,
    typeCheck: false,
  },
})
