<template>
  <section id="capabilities" class="relative py-20 reveal-on-scroll sm:py-28">
    <div class="page-container">
      <div class="mx-auto max-w-3xl text-center">
        <span class="eyebrow">Inside the platform</span>
        <h2 class="section-title mt-6">A complete academic toolkit, governed end to end.</h2>
        <p class="section-subtitle mt-5">
          Six integrated studios. Abstract by design — request a demo to see the real thing.
        </p>
      </div>

      <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="c in caps" :key="c.title" class="card">
          <div class="flex items-center justify-between">
            <div class="flex h-11 w-11 items-center justify-center rounded-xl" :class="c.bg">
              <component :is="c.icon" class="h-5 w-5" :class="c.color" />
            </div>
            <div class="flex gap-1">
              <span v-for="i in 4" :key="i" class="h-1.5 w-6 rounded-full" :class="i <= c.level ? 'bg-brand-500' : 'bg-ink-900/10 dark:bg-white/10'" />
            </div>
          </div>
          <h3 class="mt-5 font-display text-lg font-semibold">{{ c.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">{{ c.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Laptop, Bot, ClipboardCheck, FlaskConical, BookOpenCheck, BarChart3 } from 'lucide-vue-next'

const caps = [
  { icon: Laptop, title: 'Lecturer Studio', desc: 'Manage courses, monitor teaching analytics, review student queries, track mastery.', bg: 'bg-brand-100 dark:bg-brand-500/15', color: 'text-brand-600 dark:text-brand-400', level: 4 },
  { icon: Bot, title: 'Student AI Tutor', desc: 'Patient, citation-locked guidance from your own course materials.', bg: 'bg-accent-100 dark:bg-accent-500/15', color: 'text-accent-600 dark:text-accent-400', level: 3 },
  { icon: ClipboardCheck, title: 'Assessment Studio', desc: 'Turn any unit into quizzes, homework and exam-style questions with rubrics.', bg: 'bg-verified-100 dark:bg-verified-500/15', color: 'text-verified-600 dark:text-verified-400', level: 4 },
  { icon: FlaskConical, title: 'Virtual Labs', desc: 'Simulate circuits, run code, explore networking — without the lab glassware.', bg: 'bg-indigo-100 dark:bg-indigo-500/15', color: 'text-indigo-600 dark:text-indigo-400', level: 2 },
  { icon: BookOpenCheck, title: 'Knowledge Studio', desc: 'Curate syllabi, notes and past papers into a governed knowledge base.', bg: 'bg-amber-100 dark:bg-amber-500/15', color: 'text-amber-600 dark:text-amber-400', level: 4 },
  { icon: BarChart3, title: 'Teaching Analytics', desc: 'Concept heatmaps, struggle alerts, and cohort-level insight for lecturers.', bg: 'bg-rose-100 dark:bg-rose-500/15', color: 'text-rose-600 dark:text-rose-400', level: 3 },
]
</script>