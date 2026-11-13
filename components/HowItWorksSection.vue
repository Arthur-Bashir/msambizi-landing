<template>
  <section id="how" class="relative py-20 reveal-on-scroll sm:py-28">
    <div class="page-container">
      <div class="mx-auto max-w-3xl text-center">
        <span class="eyebrow">How it works</span>
        <h2 class="section-title mt-6">Help from your own course materials, whenever students need it.</h2>
        <p class="section-subtitle mt-5">
          Three steps. No new content to write — Msambizi works from what your faculty already teaches.
        </p>
      </div>

      <ol class="mt-14 grid gap-6 md:grid-cols-3">
        <li v-for="(s, i) in steps" :key="s.title" class="card relative">
          <span class="absolute -top-4 left-6 flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 font-mono text-sm font-bold text-white shadow-glow">
            {{ i + 1 }}
          </span>
          <div class="mt-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 dark:bg-brand-500/15">
            <component :is="s.icon" class="h-6 w-6 text-brand-600 dark:text-brand-400" />
          </div>
          <h3 class="mt-5 font-display text-lg font-semibold">{{ s.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">{{ s.desc }}</p>
        </li>
      </ol>

      <div class="mt-10 flex justify-center">
        <a href="https://app.msambizi.school/login" class="btn-secondary">
          Get started
          <ArrowRight class="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Upload, MessageCircleQuestion, BarChart3, ArrowRight } from 'lucide-vue-next'

const steps = [
  {
    icon: Upload,
    title: 'Faculty curates the knowledge',
    desc: 'Syllabi, lecture notes, past papers and reading lists go in. Lecturers decide exactly what the tutor may use.',
  },
  {
    icon: MessageCircleQuestion,
    title: 'Students ask in their own words',
    desc: 'The tutor guides step by step with questions, and shows which notes each explanation came from.',
  },
  {
    icon: BarChart3,
    title: 'Lecturers stay in the loop',
    desc: 'Review tutor conversations, see which topics the cohort struggles with, and act before the exam.',
  },
]
</script>