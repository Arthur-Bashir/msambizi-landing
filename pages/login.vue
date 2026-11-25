<template>
  <div class="login-page">
    <a class="skip-link" href="#workspace-main">Skip to workspace information</a>
    <header class="page-topbar page-container">
      <a href="/" class="brand-lockup" aria-label="Msambizi home">
        <img class="brand-logo brand-logo--dark" src="/brand/msambizi-logo-on-dark.webp" alt="Msambizi — Ask, Learn, Excel" width="445" height="176" />
        <img class="brand-logo brand-logo--light" src="/brand/msambizi-logo-on-light.webp" alt="Msambizi — Ask, Learn, Excel" width="453" height="176" />
      </a>
      <div class="topbar-actions">
        <ThemeToggle />
        <a class="home-link" href="/"><ArrowLeft :size="15" aria-hidden="true" /> Back to homepage</a>
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

      <section class="login-card" aria-labelledby="workspace-heading">
        <p class="login-card-eyebrow">Institutional workspace</p>
        <h2 id="workspace-heading">Sign in</h2>
        <p class="login-card-intro">Use your university or college workspace account.</p>

        <form class="login-form" autocomplete="on" @submit.prevent="signIn">
          <div class="login-field">
            <label for="workspace-email">Email address</label>
            <input id="workspace-email" v-model="credentials.email" name="email" type="email" autocomplete="username" placeholder="name@institution.edu" required />
          </div>
          <div class="login-field">
            <label for="workspace-password">Password</label>
            <input id="workspace-password" v-model="credentials.password" name="password" type="password" autocomplete="current-password" placeholder="Enter your password" required />
          </div>
          <label class="login-remember" for="remember-workspace">
            <input id="remember-workspace" v-model="credentials.remember" name="remember" type="checkbox" value="true" />
            <span>Remember this device</span>
          </label>
          <button class="button-primary login-submit" type="submit" :disabled="status === 'sending'">
            {{ status === 'sending' ? 'Signing in…' : 'Sign in' }} <ArrowRight :size="17" aria-hidden="true" />
          </button>
        </form>

        <p v-if="!notice" class="login-unavailable">Authentication is not connected yet. For workspace access help, <a href="mailto:support@msambizi.school?subject=Msambizi%20workspace%20access">contact the Msambizi team</a>.</p>
        <p v-else class="login-unavailable" role="status">{{ notice }}</p>
        <a class="text-link login-return" href="/"><ArrowLeft :size="15" aria-hidden="true" /> Return to homepage</a>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'

const credentials = reactive({ email: '', password: '', remember: false })
const { status, notice, submit } = useFormSubmit()

function signIn() {
  return submit('/api/auth/login/', { ...credentials }, {
    offline: 'Sign-in is not connected yet. For workspace access help, email support@msambizi.school.',
    success: 'Signed in.',
  })
}

const title = 'Institutional workspace | Msambizi'
const description = 'Workspace access for Msambizi, a learning platform for universities and colleges.'

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: 'https://msambizi.africa/login' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
  ],
  link: [{ rel: 'canonical', href: 'https://msambizi.africa/login', key: 'canonical' }],
})
</script>
