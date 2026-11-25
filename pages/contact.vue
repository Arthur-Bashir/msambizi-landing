<template>
  <div class="contact-page">
    <a class="skip-link" href="#contact-main">Skip to contact form</a>
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

    <main id="contact-main" class="contact-layout page-container" tabindex="-1">
      <section class="contact-intro" aria-labelledby="contact-heading">
        <p class="eyebrow"><span class="eyebrow-rule" /> Talk to us</p>
        <h1 id="contact-heading">Bring your institution <em>into the conversation.</em></h1>
        <p>Tell us a little about your courses and we will shape a presentation around your context.</p>

        <div class="contact-channels">
          <a class="button-primary" :href="whatsappLink" target="_blank" rel="noopener noreferrer">
            <MessageCircle :size="17" aria-hidden="true" /> Chat on WhatsApp
          </a>
          <p>
            Or call / message <a href="https://wa.me/265995612188" target="_blank" rel="noopener noreferrer">+265 995 61 21 88</a>.
            Email <a href="mailto:support@msambizi.school">support@msambizi.school</a> works too.
          </p>
        </div>
      </section>

      <form class="contact-form" aria-labelledby="contact-form-heading" @submit.prevent="sendMessage">
        <h2 id="contact-form-heading">Request a presentation</h2>
        <p class="contact-form-intro">A few details help us prepare.</p>

        <div class="contact-fields">
          <div class="contact-field">
            <label for="contact-name">Your name</label>
            <input id="contact-name" v-model="details.name" name="name" type="text" autocomplete="name" placeholder="Dr. Chisomo Banda" required />
          </div>
          <div class="contact-field">
            <label for="contact-email">Work email</label>
            <input id="contact-email" v-model="details.email" name="email" type="email" autocomplete="email" placeholder="name@institution.edu" required />
          </div>
          <div class="contact-field">
            <label for="contact-institution">Institution</label>
            <input id="contact-institution" v-model="details.institution" name="institution" type="text" autocomplete="organization" placeholder="University or college" required />
          </div>
          <div class="contact-field">
            <label for="contact-topic">What is this about?</label>
            <select id="contact-topic" v-model="details.topic" name="topic">
              <option>Presentation request</option>
              <option>General enquiry</option>
            </select>
          </div>
          <div class="contact-field">
            <label for="contact-message">Message</label>
            <textarea id="contact-message" v-model="details.message" name="message" rows="4" placeholder="Tell us about your programme or the questions you would like to cover." required />
          </div>
        </div>

        <button class="button-primary contact-submit" type="submit" :disabled="status === 'sending'">
          {{ status === 'sending' ? 'Sending…' : 'Send request' }} <ArrowRight :size="17" aria-hidden="true" />
        </button>
        <p v-if="notice" class="contact-notice" role="status">{{ notice }}</p>
      </form>
    </main>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { ArrowLeft, ArrowRight, MessageCircle } from 'lucide-vue-next'

const details = reactive({
  name: '',
  email: '',
  institution: '',
  topic: 'Presentation request',
  message: '',
})

const { status, notice, submit } = useFormSubmit()
const whatsappLink = `https://wa.me/265995612188?text=${encodeURIComponent("Hello Msambizi, I'd like to request an institutional presentation.")}`

function sendMessage() {
  return submit('/api/contact/', { ...details }, {
    offline: 'The form will go live soon. For now, please message us on WhatsApp or email support@msambizi.school.',
    success: 'Thanks — we have your request and will be in touch.',
  })
}

const title = 'Contact | Msambizi'
const description = 'Request a Msambizi presentation for your university or college, or reach the team on WhatsApp.'

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: 'https://msambizi.africa/contact' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
  ],
  link: [{ rel: 'canonical', href: 'https://msambizi.africa/contact', key: 'canonical' }],
})
</script>
