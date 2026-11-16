<template>
  <button
    class="theme-toggle"
    type="button"
    aria-label="Switch colour theme"
    title="Switch colour theme"
    @click="toggleTheme"
  >
    <Sun class="theme-icon--dark" :size="17" aria-hidden="true" />
    <Moon class="theme-icon--light" :size="17" aria-hidden="true" />
    <span>Change theme</span>
  </button>
</template>

<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next'

const { toggleTheme } = useTheme()
</script>
