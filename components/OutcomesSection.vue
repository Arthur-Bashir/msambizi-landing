<template>
  <section class="relative py-20 reveal-on-scroll sm:py-28">
    <div class="page-container">
      <div class="mx-auto max-w-3xl text-center">
        <span class="eyebrow">Outcomes</span>
        <h2 class="section-title mt-6">What your institution gains.</h2>
        <p class="section-subtitle mt-5">
          Not metrics we invented — capabilities your faculty can verify on a demo.
        </p>
      </div>

      <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="o in outcomes" :key="o.title" class="card text-center">
          <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl" :class="o.bg">
            <component :is="o.icon" class="h-6 w-6" :class="o.color" />
          </div>
          <h3 class="mt-5 font-display text-base font-semibold">{{ o.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">{{ o.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Target, Shield, TrendingUp, Clock } from 'lucide-vue-next'

const outcomes = [
  { icon: Target, title: 'Course-level control', desc: 'Scope every tutor to approved materials and module outcomes.', bg: 'bg-brand-100 dark:bg-brand-500/15', color: 'text-brand-600 dark:text-brand-400' },
  { icon: Shield, title: 'Integrity by design', desc: 'Guardrails that refuse ghostwriting and demand citations.', bg: 'bg-verified-100 dark:bg-verified-500/15', color: 'text-verified-600 dark:text-verified-400' },
  { icon: TrendingUp, title: 'Teaching insight', desc: 'Struggle heatmaps reveal what the cohort needs next.', bg: 'bg-accent-100 dark:bg-accent-500/15', color: 'text-accent-600 dark:text-accent-400' },
  { icon: Clock, title: 'After-class support', desc: 'Students get help on demand, without extra lecturer hours.', bg: 'bg-indigo-100 dark:bg-indigo-500/15', color: 'text-indigo-600 dark:text-indigo-400' },
]
</script>