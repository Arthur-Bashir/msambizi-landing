<template>
  <section id="faq" class="relative py-20 reveal-on-scroll sm:py-28">
    <div class="page-container">
      <div class="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <span class="eyebrow">FAQ</span>
          <h2 class="section-title mt-6">Common questions.</h2>
          <p class="section-subtitle mt-5">
            About Msambizi, our safety model, and institutional setup.
          </p>
          <a href="#demo" class="btn-secondary mt-8 inline-flex">Talk to our team</a>
        </div>

        <div class="space-y-3">
          <div v-for="(f, i) in faqs" :key="f.q" class="card p-0">
            <button
              class="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              @click="open = open === i ? null : i"
              :aria-expanded="open === i"
            >
              <span class="font-display text-base font-semibold">{{ f.q }}</span>
              <ChevronDown class="h-5 w-5 flex-shrink-0 text-ink-400 transition-transform" :class="open === i ? 'rotate-180' : ''" />
            </button>
            <div v-show="open === i" class="px-6 pb-5 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
              {{ f.a }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

const open = ref<number | null>(0)

const faqs = [
  { q: 'Does Msambizi support university curricula and reading lists?', a: 'Yes. Lecturers upload syllabi, lecture notes, past papers and reading lists. The tutor is scoped to that material per module.' },
  { q: 'How does it protect academic integrity?', a: 'Guardrails refuse ghostwriting and direct answer dumping, enforce citations, and log every interaction for lecturer review.' },
  { q: 'Can lecturers review student interactions?', a: 'Yes. The Lecturer Studio provides conversation review, concept heatmaps, and struggle alerts per cohort.' },
  { q: 'Is student data isolated per institution?', a: 'Yes. Msambizi is multi-tenant by design, with schema-isolated institutional portals and role hierarchies.' },
  { q: 'Can it help with exam and viva preparation?', a: 'Yes. Students can practice with grounded questions and get step-by-step guidance without receiving final answers.' },
  { q: 'How long does onboarding take?', a: 'A pilot faculty can be onboarded in days. We handle setup, content ingestion, and staff training.' },
]
</script>