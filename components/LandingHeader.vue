<template>
  <header
    class="sticky top-0 z-50 border-b border-transparent transition-all duration-300"
    :class="scrolled ? 'border-ink-900/10 bg-paper-50/80 backdrop-blur-md dark:border-white/10 dark:bg-midnight-900/80' : 'bg-transparent'"
  >
    <div class="page-container flex h-16 items-center justify-between">
      <a href="#top" class="flex items-center gap-2.5" aria-label="Msambizi home">
        <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-900 text-white dark:bg-brand-600">
          <GraduationCap class="h-5 w-5" />
        </span>
        <span class="font-display text-xl font-semibold tracking-tight">Msambizi<span class="text-brand-600">.</span></span>
        <span class="hidden rounded-full border border-ink-900/10 bg-white px-2.5 py-0.5 text-[11px] font-semibold text-ink-500 sm:inline-block dark:border-white/10 dark:bg-white/5 dark:text-ink-300">
          Academic AI
        </span>
      </a>

      <nav class="hidden items-center gap-7 lg:flex" aria-label="Primary">
        <a v-for="l in links" :key="l.href" :href="l.href" class="text-sm font-medium text-ink-500 hover:text-brand-600 dark:text-ink-300 dark:hover:text-accent-400">
          {{ l.label }}
        </a>
      </nav>

      <div class="flex items-center gap-3">
        <button
          class="hidden h-9 w-9 items-center justify-center rounded-xl border border-ink-900/10 bg-white text-ink-700 sm:inline-flex dark:border-white/10 dark:bg-white/5 dark:text-paper-50"
          @click="toggleColor"
          aria-label="Toggle color mode"
        >
          <Sun v-if="isDark" class="h-4 w-4" />
          <Moon v-else class="h-4 w-4" />
        </button>
        <a
          href="https://app.msambizi.school/login"
          class="hidden text-sm font-semibold text-ink-700 hover:text-brand-600 sm:inline-block dark:text-ink-300 dark:hover:text-accent-400"
        >
          Sign in
        </a>
        <a href="#demo" class="hidden items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_-12px_rgba(37,99,235,0.7)] hover:-translate-y-0.5 hover:bg-brand-700 sm:inline-flex">
          Book a demo
        </a>
        <button
          class="rounded-xl border border-ink-900/10 bg-white p-2.5 lg:hidden dark:border-white/10 dark:bg-white/5"
          @click="open = !open"
          aria-label="Toggle menu"
        >
          <X v-if="open" class="h-5 w-5" />
          <Menu v-else class="h-5 w-5" />
        </button>
      </div>
    </div>

    <div v-if="open" class="border-t border-ink-900/10 bg-paper-50 px-4 pb-6 pt-3 lg:hidden dark:border-white/10 dark:bg-midnight-900">
      <nav class="flex flex-col gap-4">
        <a v-for="l in links" :key="l.href" :href="l.href" @click="open = false" class="text-base font-medium text-ink-500 hover:text-brand-600 dark:text-ink-300">
          {{ l.label }}
        </a>
        <a href="https://app.msambizi.school/login" class="text-base font-medium text-ink-500 dark:text-ink-300">Sign in</a>
        <a href="#demo" class="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white">Book a demo</a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { GraduationCap, Menu, X, Sun, Moon } from 'lucide-vue-next'
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
const toggleColor = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}

const links = [
  { label: 'Why', href: '#why' },
  { label: 'How it works', href: '#how' },
  { label: 'Workspaces', href: '#workspaces' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'FAQ', href: '#faq' },
]

const scrolled = ref(false)
const open = ref(false)

onMounted(() => {
  const onScroll = () => {
    scrolled.value = window.scrollY > 12
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
})
</script>