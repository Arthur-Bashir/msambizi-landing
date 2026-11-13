<template>
  <button
    class="theme-toggle"
    type="button"
    :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
    :title="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="toggleTheme"
  >
    <Sun v-if="theme === 'dark'" :size="17" aria-hidden="true" />
    <Moon v-else :size="17" aria-hidden="true" />
    <span>{{ theme === 'dark' ? 'Light mode' : 'Dark mode' }}</span>
  </button>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { Moon, Sun } from 'lucide-vue-next'

const { theme, initializeTheme, toggleTheme } = useTheme()

onMounted(initializeTheme)
</script>
