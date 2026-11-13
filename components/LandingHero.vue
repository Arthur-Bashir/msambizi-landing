<template>
  <section id="top" class="relative overflow-hidden bg-midnight-900 text-paper-50">
    <div aria-hidden="true" class="pointer-events-none absolute inset-0">
      <div class="absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-brand-500/30 blur-3xl" />
      <div class="absolute -left-32 top-1/3 h-[460px] w-[460px] rounded-full bg-accent-500/20 blur-3xl" />
      <div class="absolute inset-0 grid-overlay opacity-40" />
    </div>

    <div class="page-container relative pt-20 pb-24 sm:pt-28 lg:pb-32">
      <div class="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <!-- Copy -->
        <div class="max-w-xl">
          <Transition name="hero-fade" mode="out-in">
            <div :key="active" class="hero-rise">
              <span class="eyebrow border-white/15 bg-white/10 text-accent-400">
                <span class="h-1.5 w-1.5 rounded-full bg-verified-500 animate-pulse" />
                {{ slides[active].eyebrow }}
              </span>
              <h1 class="mt-6 font-display text-[2.6rem] font-semibold leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-[4.5rem]">
                {{ slides[active].title }}
                <span class="text-gradient"> {{ slides[active].highlight }}</span>
              </h1>
              <p class="mt-6 text-lg leading-relaxed text-white/70">
                {{ slides[active].desc }}
              </p>

              <div class="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#demo">
                  <button class="btn-primary w-full sm:w-auto">
                    {{ slides[active].cta }}
                    <ArrowRight class="h-5 w-5" />
                  </button>
                </a>
                <a href="#how">
                  <button class="btn-secondary w-full border-white/20 bg-white/10 text-white hover:bg-white/20 sm:w-auto">
                    See how it works
                    <ChevronRight class="h-4 w-4" />
                  </button>
                </a>
              </div>
            </div>
          </Transition>

          <div class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/60">
            <span class="inline-flex items-center gap-2">
              <ShieldCheck class="h-4 w-4 text-verified-500" /> Source-cited answers
            </span>
            <span class="inline-flex items-center gap-2">
              <Eye class="h-4 w-4 text-brand-400" /> Lecturer oversight
            </span>
            <span class="inline-flex items-center gap-2">
              <Lock class="h-4 w-4 text-accent-400" /> Institution-owned data
            </span>
          </div>

          <!-- Slide indicators -->
          <div class="mt-10 flex items-center gap-3">
            <button
              v-for="(s, i) in slides"
              :key="i"
              type="button"
              class="relative h-1.5 overflow-hidden rounded-full transition-all duration-300"
              :class="active === i ? 'w-16 bg-white/20' : 'w-6 bg-white/20 hover:bg-white/40'"
              @click="active = i"
              :aria-label="`Show slide ${i + 1}`"
            >
              <span v-if="active === i" class="absolute inset-y-0 left-0 bg-accent-400 animate-[shimmer_3s_linear_infinite]" style="width:100%" />
            </button>
          </div>
        </div>

        <!-- Visual -->
        <div class="relative hero-rise-delay">
          <AbstractKnowledgeCore />
        </div>
      </div>

      <!-- Stats -->
      <div class="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mt-20">
        <div v-for="s in stats" :key="s.l" class="glass rounded-2xl p-5">
          <p class="font-display text-3xl font-semibold text-white">{{ s.v }}</p>
          <p class="mt-1 text-sm text-white/60">{{ s.l }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { ArrowRight, ChevronRight, ShieldCheck, Eye, Lock } from 'lucide-vue-next'

const slides = [
  {
    eyebrow: 'Built for universities & colleges',
    title: 'Every student gets their lecturer\'s help',
    highlight: '— even after class.',
    desc: 'Msambizi turns your course materials into a governed AI learning experience: grounded in your syllabus, guided by Socratic method, and visible to every lecturer.',
    cta: 'Book a university demo',
  },
  {
    eyebrow: 'Governance · Integrity · Insight',
    title: 'Academic AI your faculty can',
    highlight: 'stand behind.',
    desc: 'Strict syllabus grounding, lecturer oversight, and anti-ghostwriting guardrails — engineered for higher education, not casual web chat.',
    cta: 'See how it works',
  },
  {
    eyebrow: 'Course materials · Socratic pedagogy',
    title: 'Help students after class',
    highlight: 'without surrendering control.',
    desc: 'Lecturers curate the knowledge base, review interactions, and act on struggle heatmaps before the exam.',
    cta: 'Book a university demo',
  },
]

const active = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  timer = setInterval(() => {
    active.value = (active.value + 1) % slides.length
  }, 6000)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})

const stats = [
  { v: 'Course-level', l: 'Control & scope' },
  { v: 'Source-cited', l: 'Every answer' },
  { v: 'Audit-ready', l: 'Interaction logs' },
  { v: 'Multi-tenant', l: 'Institution isolation' },
]
</script>

<style scoped>
.hero-fade-enter-active,
.hero-fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.hero-fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.hero-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>