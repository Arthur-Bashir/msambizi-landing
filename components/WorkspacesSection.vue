<template>
  <section id="workspaces" class="relative py-20 reveal-on-scroll sm:py-28">
    <div class="page-container">
      <div class="mx-auto max-w-3xl text-center">
        <span class="eyebrow">Who it's for</span>
        <h2 class="section-title mt-6">Tailored workspaces for every academic role.</h2>
        <p class="section-subtitle mt-5">
          Purpose-built environments for faculties, colleges, tutors, and students — under one
          institution-owned roof.
        </p>
      </div>

      <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <button
          v-for="w in workspaces"
          :key="w.key"
          class="card text-left"
          :class="active === w.key ? 'ring-2 ring-brand-500/60' : ''"
          @click="active = w.key"
        >
          <div class="flex h-11 w-11 items-center justify-center rounded-xl" :class="w.bg">
            <component :is="w.icon" class="h-5 w-5" :class="w.color" />
          </div>
          <h3 class="mt-4 font-display text-base font-semibold">{{ w.title }}</h3>
          <p class="mt-1 text-xs text-ink-500 dark:text-ink-300">{{ w.tag }}</p>
        </button>
      </div>

      <div class="mt-8 card">
        <div class="grid gap-8 md:grid-cols-[1fr_1.2fr]">
          <div>
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl" :class="activeWs.bg">
              <component :is="activeWs.icon" class="h-6 w-6" :class="activeWs.color" />
            </div>
            <h3 class="mt-4 font-display text-2xl font-semibold">{{ activeWs.title }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-300">{{ activeWs.desc }}</p>
            <a href="#demo" class="btn-primary mt-6 inline-flex">
              {{ activeWs.cta }}
              <ArrowRight class="h-4 w-4" />
            </a>
          </div>
          <ul class="grid gap-3 sm:grid-cols-2">
            <li v-for="b in activeWs.bullets" :key="b" class="flex items-start gap-2 text-sm text-ink-700 dark:text-ink-200">
              <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-verified-500" />
              {{ b }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Building2, GraduationCap, Briefcase, Users, Check, ArrowRight } from 'lucide-vue-next'

const workspaces = [
  { key: 'uni', title: 'Universities & Faculties', tag: 'Lead audience', icon: Building2, bg: 'bg-brand-100 dark:bg-brand-500/15', color: 'text-brand-600 dark:text-brand-400' },
  { key: 'college', title: 'Colleges & Institutes', tag: 'Vocational & technical', icon: GraduationCap, bg: 'bg-verified-100 dark:bg-verified-500/15', color: 'text-verified-600 dark:text-verified-400' },
  { key: 'tutor', title: 'Tutors & Centers', tag: 'Branded tuition hubs', icon: Briefcase, bg: 'bg-accent-100 dark:bg-accent-500/15', color: 'text-accent-600 dark:text-accent-400' },
  { key: 'student', title: 'Students & Self-learners', tag: 'Personal study', icon: Users, bg: 'bg-indigo-100 dark:bg-indigo-500/15', color: 'text-indigo-600 dark:text-indigo-400' },
]

const details: Record<string, any> = {
  uni: {
    title: 'Universities & Faculties',
    desc: 'Deploy faculty-wide governed AI across departments and modules. Course-level scoping, lecturer oversight, and integrity reporting built in.',
    cta: 'Book a university demo',
    bullets: [
      'Multi-department & module management',
      'Lecturer analytics & struggle heatmaps',
      'Academic integrity & audit trails',
      'Branded institutional portal',
      'Role hierarchies for staff & students',
      'Curriculum & reading-list grounding',
    ],
  },
  college: {
    title: 'Colleges & Institutes',
    desc: 'Support vocational, technical and professional programs with practical, grounded AI tutoring and lab simulation.',
    cta: 'Book a college demo',
    bullets: [
      'Vocational & diploma programs',
      'Virtual labs for hands-on skills',
      'Cohort-level progress tracking',
      'Branded college portal',
      'Assessment & quiz generation',
      'Safe, moderated student support',
    ],
  },
  tutor: {
    title: 'Private Tutors & Centers',
    desc: 'Launch a branded tuition hub in minutes, with full control over content, students, and progress.',
    cta: 'Start a tutor hub',
    bullets: [
      'Branded tuition workspace',
      'Question banks & assessments',
      'Student progress tracking',
      'Flexible subject coverage',
      'Affordable, scalable setup',
      'Parent & student reporting',
    ],
  },
  student: {
    title: 'Students & Self-learners',
    desc: 'A personal study companion grounded in your course materials — with cited sources and guided reasoning.',
    cta: 'Explore as a student',
    bullets: [
      'Ask in your own words',
      'Source-cited explanations',
      'Adaptive practice questions',
      'Progress & weak-area tracking',
      'Exam & viva preparation',
      'Available anytime',
    ],
  },
}

const active = ref('uni')
const activeWs = computed(() => ({ ...workspaces.find(w => w.key === active.value)!, ...details[active.value] }))
</script>