<template>
  <div class="login-page">
    <a class="skip-link" href="#login-main">Skip to sign-in form</a>
    <header class="login-topbar page-container">
      <a href="/" class="brand-lockup" aria-label="Msambizi home">
        <img class="brand-logo brand-logo--dark" src="/brand/msambizi-logo-on-dark.webp" alt="Msambizi — Ask, Learn, Excel" width="445" height="176" />
        <img class="brand-logo brand-logo--light" src="/brand/msambizi-logo-on-light.webp" alt="Msambizi — Ask, Learn, Excel" width="453" height="176" />
      </a>
      <div class="login-top-actions">
        <ThemeToggle />
        <a class="login-home-link" href="/">Back to home <ArrowUpRight :size="15" aria-hidden="true" /></a>
      </div>
    </header>

    <main id="login-main" class="login-layout page-container" tabindex="-1">
      <section class="login-story" aria-labelledby="login-story-heading">
        <div class="login-story-copy">
          <p class="eyebrow"><span class="eyebrow-rule" /> Learning in higher education</p>
          <h1 id="login-story-heading">Faculty guidance, <em>even after class.</em></h1>
          <p>Continue to your Msambizi workspace.</p>
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

      <section class="login-card" aria-labelledby="login-heading">
        <div class="login-card-mark" aria-hidden="true"><GraduationCap :size="23" /></div>
        <p class="login-card-eyebrow">Msambizi workspace</p>
        <h2 id="login-heading">Welcome back</h2>
        <p class="login-card-intro">Sign in to continue to your Msambizi workspace.</p>

        <form class="login-form" @submit.prevent="showUnavailableMessage = true">
          <label for="login-email">Email address</label>
          <input id="login-email" v-model="email" type="email" name="email" autocomplete="username" placeholder="name@example.com" required />

          <div class="login-password-label">
            <label for="login-password">Password</label>
            <a :href="passwordHelpLink">Forgot password?</a>
          </div>
          <div class="login-password-input">
            <input id="login-password" v-model="password" :type="showPassword ? 'text' : 'password'" name="password" autocomplete="current-password" placeholder="Enter your password" required />
            <button type="button" class="password-visibility" :aria-label="showPassword ? 'Hide password' : 'Show password'" :aria-pressed="showPassword" @click="showPassword = !showPassword">
              <EyeOff v-if="showPassword" :size="17" aria-hidden="true" />
              <Eye v-else :size="17" aria-hidden="true" />
            </button>
          </div>

          <p v-if="showUnavailableMessage" class="login-status" role="status">
            Sign-in is not connected on this website yet. Your details were not sent. Please contact the Msambizi team for assistance.
          </p>

          <button class="button-primary login-submit" type="submit">Sign in <ArrowRight :size="17" aria-hidden="true" /></button>
        </form>

        <p class="login-signup">New to Msambizi? <a :href="demoLink">Request an institutional presentation</a></p>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight, ArrowUpRight, Eye, EyeOff, GraduationCap } from 'lucide-vue-next'

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const showUnavailableMessage = ref(false)
const passwordHelpLink = 'mailto:support@msambizi.school?subject=Password%20assistance'
const demoLink = 'mailto:support@msambizi.school?subject=Request%20an%20institutional%20presentation'

useHead({
  title: 'Sign in | Msambizi',
  meta: [
    { name: 'description', content: 'Sign in to continue to your Msambizi workspace.' },
    { property: 'og:url', content: 'https://msambizi.africa/login' },
  ],
  link: [{ rel: 'canonical', href: 'https://msambizi.africa/login', key: 'canonical' }],
})
</script>
