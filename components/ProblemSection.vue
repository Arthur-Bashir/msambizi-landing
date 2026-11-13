<template>
  <section id="why" class="relative py-20 reveal-on-scroll sm:py-28">
    <div class="page-container">
      <div class="mx-auto max-w-3xl text-center">
        <span class="eyebrow">The problem</span>
        <h2 class="section-title mt-6">Generic AI is a black box. Higher education needs a governed layer.</h2>
        <p class="section-subtitle mt-5">
          ChatGPT, Gemini and Claude are built for open-ended conversation. They hallucinate, ghostwrite
          assignments, and offer lecturers zero visibility. Msambizi is purpose-built for academic use —
          strict syllabus grounding, Socratic pedagogy, and educator governance by design.
        </p>
      </div>

      <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="p in problems" :key="p.title" class="card">
          <div class="flex h-11 w-11 items-center justify-center rounded-xl" :class="p.bg">
            <component :is="p.icon" class="h-5 w-5" :class="p.color" />
          </div>
          <h3 class="mt-5 font-display text-lg font-semibold">{{ p.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">{{ p.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { AlertTriangle, Ghost, EyeOff, BookX, ShieldAlert, Users } from 'lucide-vue-next'

const problems = [
  { icon: AlertTriangle, title: 'Unverified answers', desc: 'Generic models answer from the open web, not your approved course materials.', bg: 'bg-amber-100 dark:bg-amber-500/10', color: 'text-amber-600 dark:text-amber-400' },
  { icon: Ghost, title: 'Ghostwriting risk', desc: 'Students can paste in assignment prompts and receive finished essays.', bg: 'bg-rose-100 dark:bg-rose-500/10', color: 'text-rose-600 dark:text-rose-400' },
  { icon: EyeOff, title: 'No lecturer visibility', desc: 'Zero dashboards, struggle telemetry, or audit trails for teaching staff.', bg: 'bg-slate-100 dark:bg-slate-500/10', color: 'text-slate-600 dark:text-slate-400' },
  { icon: BookX, title: 'Off-syllabus drift', desc: 'Explanations wander from your module outcomes and reading lists.', bg: 'bg-indigo-100 dark:bg-indigo-500/10', color: 'text-indigo-600 dark:text-indigo-400' },
  { icon: ShieldAlert, title: 'Integrity exposure', desc: 'No guardrails against plagiarism, fabricated citations, or unsafe content.', bg: 'bg-orange-100 dark:bg-orange-500/10', color: 'text-orange-600 dark:text-orange-400' },
  { icon: Users, title: 'No institutional control', desc: 'Personal accounts with no faculty roles, tenancy, or data isolation.', bg: 'bg-cyan-100 dark:bg-cyan-500/10', color: 'text-cyan-600 dark:text-cyan-400' },
]
</script>