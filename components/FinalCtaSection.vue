<template>
  <section id="demo" class="relative overflow-hidden py-20 sm:py-28 reveal-on-scroll">
    <div class="absolute inset-0 -z-10">
      <div class="absolute inset-0 bg-gradient-to-br from-brand-900 via-midnight-800 to-midnight-900" />
      <div class="absolute inset-0 grid-overlay opacity-30" />
      <div class="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent-500/30 blur-3xl" />
    </div>

    <div class="page-container">
      <div class="mx-auto max-w-3xl text-center text-white">
        <span class="eyebrow border-white/15 bg-white/10 text-accent-400">Ready to transform learning?</span>
        <h2 class="mt-6 font-display text-3xl font-semibold leading-tight sm:text-5xl">
          Bring governed AI to your faculty.
        </h2>
        <p class="mt-5 text-lg text-white/70">
          Book a demo to see how every student can get help after class while your lecturers stay in control.
        </p>
        <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="mailto:support@msambizi.school?subject=Msambizi%20demo%20request">
            <button class="btn-primary w-full sm:w-auto">
              Book a free demo
              <ArrowRight class="h-5 w-5" />
            </button>
          </a>
          <a href="mailto:support@msambizi.school?subject=Msambizi%20support%20request">
            <button class="btn-secondary w-full border-white/20 bg-white/10 text-white hover:bg-white/20 sm:w-auto">
              Talk to our team
            </button>
          </a>
        </div>
        <p class="mt-6 text-xs text-white/50">Curriculum-Grounded • Safe for Institutions • Institution-Owned Data</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
</script>