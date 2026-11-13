<template>
  <section class="relative py-20 reveal-on-scroll sm:py-28">
    <div class="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-brand-50/40 to-transparent dark:via-brand-900/10" />
    <div class="page-container">
      <div class="mx-auto max-w-3xl text-center">
        <span class="eyebrow">The pillars</span>
        <h2 class="section-title mt-6">Engineered for academic rigor, not casual web chat.</h2>
        <p class="section-subtitle mt-5">
          Four principles that separate a governed learning platform from a chatbot.
        </p>
      </div>

      <div class="mt-14 grid gap-6 md:grid-cols-2">
        <div v-for="p in pillars" :key="p.title" class="card group">
          <div class="flex items-start gap-4">
            <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl" :class="p.bg">
              <component :is="p.icon" class="h-6 w-6" :class="p.color" />
            </div>
            <div>
              <h3 class="font-display text-xl font-semibold">{{ p.title }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">{{ p.desc }}</p>
              <ul class="mt-4 space-y-2">
                <li v-for="b in p.bullets" :key="b" class="flex items-start gap-2 text-sm text-ink-700 dark:text-ink-200">
                  <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-verified-500" />
                  {{ b }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { BookOpen, ShieldCheck, Sparkles, FileCheck2, Check } from 'lucide-vue-next'

const pillars = [
  {
    icon: BookOpen,
    title: 'Curriculum & course grounding',
    desc: 'Answers lock to your syllabi, lecture slides, and reading lists — zero unverified web hallucinations.',
    bg: 'bg-brand-100 dark:bg-brand-500/15',
    color: 'text-brand-600 dark:text-brand-400',
    bullets: ['Degree & module-level scoping', 'Lecturer-curated knowledge base', 'Citation-locked responses'],
  },
  {
    icon: ShieldCheck,
    title: 'Educator governance',
    desc: 'Lecturers set knowledge boundaries, review interactions, and monitor class-wide struggle.',
    bg: 'bg-verified-100 dark:bg-verified-500/15',
    color: 'text-verified-600 dark:text-verified-400',
    bullets: ['Live struggle heatmaps', 'Full audit trails', 'Role-based access'],
  },
  {
    icon: Sparkles,
    title: 'Socratic pedagogy',
    desc: 'Guides learners through step-by-step reasoning instead of dumping answer keys.',
    bg: 'bg-accent-100 dark:bg-accent-500/15',
    color: 'text-accent-600 dark:text-accent-400',
    bullets: ['Adaptive scaffolding', 'Comprehension checks', 'Authentic local context'],
  },
  {
    icon: FileCheck2,
    title: 'Academic integrity',
    desc: 'Anti-cheating guardrails refuse ghostwriting and enforce verified citations.',
    bg: 'bg-indigo-100 dark:bg-indigo-500/15',
    color: 'text-indigo-600 dark:text-indigo-400',
    bullets: ['Plagiarism-aware refusals', 'Citation enforcement', 'Safe, moderated content'],
  },
]
</script>