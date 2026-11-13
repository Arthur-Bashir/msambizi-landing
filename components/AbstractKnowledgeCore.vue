<template>
  <div class="relative mx-auto aspect-square w-full max-w-[460px]">
    <!-- outer rings -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="absolute h-[92%] w-[92%] rounded-full border border-brand-500/20 dark:border-brand-400/20" />
      <div class="absolute h-[70%] w-[70%] rounded-full border border-accent-500/25 dark:border-accent-400/25" />
      <div class="absolute h-[48%] w-[48%] rounded-full border border-verified-500/30 dark:border-verified-400/30" />
    </div>

    <!-- pulsing core -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="relative">
        <span class="absolute -inset-6 rounded-full bg-brand-500/30 blur-2xl animate-pulse" />
        <div class="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-glow">
          <GraduationCap class="h-10 w-10" />
        </div>
      </div>
    </div>

    <!-- orbiting nodes -->
    <div class="absolute inset-0 animate-[spin_26s_linear_infinite]">
      <div
        v-for="(n, i) in nodes"
        :key="i"
        class="absolute left-1/2 top-1/2"
        :style="nodeStyle(i)"
      >
        <div class="flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-white/20 bg-white/80 px-3 py-1.5 text-xs font-semibold text-ink-700 shadow-card backdrop-blur dark:border-white/10 dark:bg-midnight-700/80 dark:text-paper-50">
          <component :is="n.icon" class="h-3.5 w-3.5" :class="n.color" />
          {{ n.label }}
        </div>
      </div>
    </div>

    <!-- citation chips -->
    <div class="absolute bottom-6 left-6 hidden rounded-xl border border-ink-900/10 bg-white/80 px-3 py-2 text-[11px] font-medium text-ink-500 shadow-card backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-ink-300 sm:block">
      <span class="font-mono text-brand-600 dark:text-accent-400">source:</span> Lecture 7, p. 12
    </div>
    <div class="absolute top-8 right-4 hidden rounded-xl border border-ink-900/10 bg-white/80 px-3 py-2 text-[11px] font-medium text-ink-500 shadow-card backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-ink-300 sm:block">
      <span class="font-mono text-verified-500">grounded</span> · 94% match
    </div>
  </div>
</template>

<script setup lang="ts">
import { GraduationCap, BookOpen, FlaskConical, Network, ShieldCheck } from 'lucide-vue-next'

const nodes = [
  { icon: BookOpen, label: 'Syllabus', color: 'text-brand-600' },
  { icon: FlaskConical, label: 'Lab manual', color: 'text-accent-500' },
  { icon: Network, label: 'Reading list', color: 'text-verified-500' },
  { icon: ShieldCheck, label: 'Policy', color: 'text-brand-600' },
]

const nodeStyle = (i: number) => {
  const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2
  const r = 44 // percent of half-size
  const x = 50 + r * Math.cos(angle)
  const y = 50 + r * Math.sin(angle)
  return { left: `${x}%`, top: `${y}%` }
}
</script>