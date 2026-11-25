<template>
  <a class="skip-link" href="#main-content">Skip to main content</a>
  <header class="site-header">
    <div ref="headerElement" class="page-container header-inner">
      <a href="#top" class="brand-lockup" aria-label="Msambizi home">
        <img class="brand-logo brand-logo--dark" src="/brand/msambizi-logo-on-dark.webp" alt="Msambizi — Ask, Learn, Excel" width="445" height="176" />
        <img class="brand-logo brand-logo--light" src="/brand/msambizi-logo-on-light.webp" alt="Msambizi — Ask, Learn, Excel" width="453" height="176" />
      </a>

      <button
        ref="menuButton"
        class="menu-toggle"
        type="button"
        :aria-expanded="open"
        aria-controls="primary-navigation"
        :aria-label="open ? 'Close navigation menu' : 'Open navigation menu'"
        @click="toggleMenu"
      >
        <X v-if="open" :size="20" aria-hidden="true" />
        <Menu v-else :size="20" aria-hidden="true" />
      </button>

      <nav id="primary-navigation" ref="navigationElement" class="primary-navigation" :class="{ 'is-open': open }" aria-label="Main navigation">
        <a href="#learning-story" :aria-current="activeSection === 'learning-story' ? 'location' : undefined" @click="navigateToSection('learning-story')">How it works</a>
        <a href="#proposition" :aria-current="activeSection === 'proposition' ? 'location' : undefined" @click="navigateToSection('proposition')">Our approach</a>
        <a href="#institutional-trust" :aria-current="activeSection === 'institutional-trust' ? 'location' : undefined" @click="navigateToSection('institutional-trust')">Institutional fit</a>
        <a href="/contact">Contact</a>
        <ThemeToggle />
        <a class="header-login-link" href="/login" @click="closeMenu()">Sign in</a>
        <a class="button-primary header-cta" href="/contact" @click="closeMenu()">Request a presentation <ArrowRight :size="15" aria-hidden="true" /></a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { ArrowRight, Menu, X } from 'lucide-vue-next'

const open = ref(false)
const activeSection = ref('')
const headerElement = ref<HTMLElement | null>(null)
const menuButton = ref<HTMLButtonElement | null>(null)
const navigationElement = ref<HTMLElement | null>(null)
let sectionObserver: IntersectionObserver | undefined

function closeMenu(returnFocus = false) {
  open.value = false
  if (returnFocus) menuButton.value?.focus()
}

function toggleMenu() {
  open.value = !open.value
  if (open.value) void nextTick(() => navigationElement.value?.querySelector<HTMLElement>('a, button')?.focus())
}

function navigateToSection(id: string) {
  open.value = false
  void nextTick(() => document.getElementById(id)?.focus({ preventScroll: true }))
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && open.value) closeMenu(true)
  if (event.key !== 'Tab' || !open.value || !navigationElement.value) return

  const focusable = Array.from(navigationElement.value.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'))
  const first = focusable[0]
  const last = focusable.at(-1)
  if (!first || !last) return
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

function handlePointerdown(event: PointerEvent) {
  if (open.value && event.target instanceof Node && !headerElement.value?.contains(event.target)) closeMenu()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('pointerdown', handlePointerdown)
  if ('IntersectionObserver' in window) {
    sectionObserver = new IntersectionObserver((entries) => {
      const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
      if (current?.target.id) activeSection.value = current.target.id
    }, { rootMargin: '-18% 0px -68% 0px' })
    document.querySelectorAll<HTMLElement>('#learning-story, #proposition, #institutional-trust').forEach((section) => sectionObserver?.observe(section))
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('pointerdown', handlePointerdown)
  sectionObserver?.disconnect()
})
</script>
