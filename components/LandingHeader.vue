<template>
  <a class="skip-link" href="#vision">Skip to main content</a>
  <header class="site-header">
    <div ref="headerElement" class="page-container header-inner">
      <a href="#top" class="brand-lockup" aria-label="Msambizi home">
        <img class="brand-logo" src="/brand/msambizi-logo-on-dark.webp" alt="Msambizi — Ask, Learn, Excel" width="445" height="176" />
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

      <nav id="primary-navigation" class="primary-navigation" :class="{ 'is-open': open }" aria-label="Main navigation">
        <a href="#vision" @click="closeMenu(true)">Our vision</a>
        <a href="#institutions" @click="closeMenu(true)">For institutions</a>
        <a href="#engage" @click="closeMenu(true)">Engage with us</a>
        <a class="portal-link" href="https://app.msambizi.school/login" @click="closeMenu(true)">Portal sign in <ArrowUpRight :size="15" aria-hidden="true" /></a>
        <a class="button-primary header-cta" href="mailto:support@msambizi.school?subject=Request%20an%20institutional%20presentation" @click="closeMenu(true)">Request a presentation <ArrowRight :size="15" aria-hidden="true" /></a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { ArrowRight, ArrowUpRight, Menu, X } from 'lucide-vue-next'

const open = ref(false)
const headerElement = ref<HTMLElement | null>(null)
const menuButton = ref<HTMLButtonElement | null>(null)

function closeMenu(returnFocus = false) {
  open.value = false
  if (returnFocus) menuButton.value?.focus()
}

function toggleMenu() {
  if (open.value) closeMenu()
  else open.value = true
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && open.value) closeMenu(true)
}

function handlePointerdown(event: PointerEvent) {
  if (open.value && event.target instanceof Node && !headerElement.value?.contains(event.target)) closeMenu()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('pointerdown', handlePointerdown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('pointerdown', handlePointerdown)
})
</script>
