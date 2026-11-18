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
        <p class="login-story-footer">UNIVERSITIES <i /> COLLEGES</p>
      </section>

      <section class="login-card access-card" aria-labelledby="workspace-heading">
        <p class="login-card-eyebrow">Institutional workspace</p>
        <h2 id="workspace-heading">Sign in</h2>
        <p class="login-card-intro">Use your university or college workspace account.</p>

        <form class="login-form" autocomplete="on" @submit.prevent>
          <div class="login-field">
            <label for="workspace-email">Email address</label>
            <input id="workspace-email" name="email" type="email" autocomplete="username" placeholder="name@institution.edu" required />
          </div>
          <div class="login-field">
            <label for="workspace-password">Password</label>
            <input id="workspace-password" name="password" type="password" autocomplete="current-password" placeholder="Enter your password" required />
          </div>
          <label class="login-remember" for="remember-workspace">
            <input id="remember-workspace" name="remember" type="checkbox" value="true" />
            <span>Remember this device</span>
          </label>
          <button class="button-primary login-submit" type="button">Sign in <ArrowRight :size="17" aria-hidden="true" /></button>
        </form>

        <p class="login-unavailable">Authentication is not connected yet. For workspace access help, <a href="mailto:support@msambizi.school?subject=Msambizi%20workspace%20access">contact the Msambizi team</a>.</p>
        <a class="text-link login-return" href="/"><ArrowLeft :size="15" aria-hidden="true" /> Return to homepage</a>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'

const description = 'A learning platform for universities and colleges, grounded in approved course materials and guided by educators. AI supports the learning experience.'
const socialTitle = 'Msambizi — Extend the Reach of Educators'
const socialDescription = 'A university and college learning platform grounded in approved materials and guided by educators, with AI supporting the learning experience.'

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
