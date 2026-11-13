<template>
  <header class="site-header">
    <div class="page-container header-inner">
      <a href="#top" class="brand-lockup" aria-label="Msambizi home">
        <span class="brand-symbol" aria-hidden="true">M</span>
        <span class="brand-name">msambizi<span>.</span></span>
      </a>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="open"
        aria-controls="primary-navigation"
        :aria-label="open ? 'Close navigation menu' : 'Open navigation menu'"
        @click="open = !open"
      >
        <X v-if="open" :size="20" aria-hidden="true" />
        <Menu v-else :size="20" aria-hidden="true" />
      </button>

      <nav id="primary-navigation" class="primary-navigation" :class="{ 'is-open': open }" aria-label="Main navigation">
        <a href="#vision" @click="open = false">Our vision</a>
        <a href="#institutions" @click="open = false">For institutions</a>
        <a href="#engage" @click="open = false">Engage with us</a>
        <a class="portal-link" href="https://app.msambizi.school/login">Portal sign in <ArrowUpRight :size="15" aria-hidden="true" /></a>
        <a class="button-primary header-cta" href="mailto:support@msambizi.school?subject=Request%20an%20institutional%20presentation">Request a presentation <ArrowRight :size="15" aria-hidden="true" /></a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight, ArrowUpRight, Menu, X } from 'lucide-vue-next'

const open = ref(false)
</script>
