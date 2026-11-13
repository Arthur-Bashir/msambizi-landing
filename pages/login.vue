<template>
  <div class="login-page">
    <a class="skip-link" href="#workspace-main">Skip to workspace information</a>
    <header class="login-topbar page-container">
      <a href="/" class="brand-lockup" aria-label="Msambizi home">
        <img class="brand-logo brand-logo--dark" src="/brand/msambizi-logo-on-dark.webp" alt="Msambizi — Ask, Learn, Excel" width="445" height="176" />
        <img class="brand-logo brand-logo--light" src="/brand/msambizi-logo-on-light.webp" alt="Msambizi — Ask, Learn, Excel" width="453" height="176" />
      </a>
      <div class="login-top-actions">
        <ThemeToggle />
        <a class="login-home-link" href="/"><ArrowLeft :size="15" aria-hidden="true" /> Back to homepage</a>
      </div>
    </header>

    <main id="workspace-main" class="login-layout page-container" tabindex="-1">
      <section class="login-story" aria-labelledby="workspace-story-heading">
        <div class="login-story-copy">
          <p class="eyebrow"><span class="eyebrow-rule" /> Learning in higher education</p>
          <h1 id="workspace-story-heading">Extend the reach of educators. <em>Strengthen learning.</em></h1>
          <p>Msambizi brings educator-guided learning to universities and colleges.</p>
        </div>
        <div class="login-art" aria-hidden="true">
          <div class="login-art-ring login-art-ring--outer" />
          <div class="login-art-ring login-art-ring--inner" />
          <div class="login-art-sun" />
          <div class="login-art-building">
            <i /><i /><i /><i /><i />
          </div>
          <span class="login-art-caption">A place to ask, learn and excel.</span>
        </div>
        <p class="login-story-footer">ASK <i /> LEARN <i /> EXCEL</p>
      </section>

      <section class="login-card access-card" aria-labelledby="workspace-heading">
        <div class="login-card-mark" aria-hidden="true"><GraduationCap :size="23" /></div>
        <p class="login-card-eyebrow">Institutional platform</p>
        <h2 id="workspace-heading">Workspace access is coming.</h2>
        <p class="login-card-intro">Workspace access will be made available when the institutional platform is ready.</p>
        <p class="access-contact-copy">For questions from a university or college, contact the Msambizi team.</p>
        <div class="access-actions">
          <a class="button-primary access-contact" href="mailto:support@msambizi.school?subject=Msambizi%20workspace%20access">
            Contact the Msambizi team <ArrowRight :size="17" aria-hidden="true" />
          </a>
          <a class="text-link" href="/">Return to homepage <ArrowLeft :size="15" aria-hidden="true" /></a>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft, ArrowRight, GraduationCap } from 'lucide-vue-next'

const description = 'Educator-guided AI learning for universities and colleges, grounded in approved course materials. Extend the reach of educators. Strengthen the learning experience.'
const socialTitle = 'Msambizi — Extend the Reach of Educators'
const socialDescription = 'Strengthen the learning experience through educator-guided AI learning for universities and colleges, grounded in approved course materials.'

useHead({
  title: 'Institutional workspace | Msambizi',
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: socialTitle },
    { property: 'og:description', content: socialDescription },
    { property: 'og:url', content: 'https://msambizi.africa/login' },
    { name: 'twitter:title', content: socialTitle },
    { name: 'twitter:description', content: socialDescription },
  ],
  link: [{ rel: 'canonical', href: 'https://msambizi.africa/login', key: 'canonical' }],
})
</script>
