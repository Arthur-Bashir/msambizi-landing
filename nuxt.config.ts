export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Msambizi — Extend the Reach of Educators',
      htmlAttrs: { lang: 'en', 'data-theme': 'light' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A learning platform for universities and colleges, grounded in approved course materials and guided by educators. AI supports the learning experience. Extend the reach of educators. Strengthen the learning experience.' },
        { property: 'og:title', content: 'Msambizi — Extend the Reach of Educators' },
        { property: 'og:description', content: 'A university and college learning platform grounded in approved materials and guided by educators, with AI supporting the learning experience.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Msambizi' },
        { property: 'og:image', content: 'https://msambizi.africa/brand/msambizi-social-preview.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:alt', content: 'Msambizi logo above the headline “Faculty guidance. Even after class.” and a description of educator-guided learning for universities and colleges, on a navy background.' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Msambizi — Extend the Reach of Educators' },
        { name: 'twitter:description', content: 'A university and college learning platform grounded in approved materials and guided by educators, with AI supporting the learning experience.' },
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
            description: 'A learning platform for universities and colleges, grounded in approved course materials and guided by educators. AI supports the learning experience.',
          }),
        },
      ],
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/login'],
    },
  },
  css: ['~/assets/css/main.css'],
  ssr: true,
  typescript: {
    strict: true,
    typeCheck: false,
  },
})
