<template>
  <section id="why-msambizi" class="relative py-20 reveal-on-scroll sm:py-28">
    <div class="page-container">
      <div class="mx-auto max-w-3xl text-center">
        <span class="eyebrow">Why Msambizi</span>
        <h2 class="section-title mt-6">Built for academic rigor, not casual web chat.</h2>
        <p class="section-subtitle mt-5">
          See how a governed learning platform compares to generic AI chatbots.
        </p>
      </div>

      <div class="mt-12 overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-card dark:border-white/10 dark:bg-white/5">
        <div class="overflow-x-auto">
          <table class="w-full min-w-[640px] text-sm">
            <thead>
              <tr class="border-b border-ink-900/10 dark:border-white/10">
                <th class="px-5 py-4 text-left font-semibold text-ink-500 dark:text-ink-300">Capability</th>
                <th class="px-5 py-4 text-left font-semibold text-ink-400">Generic AI chatbots</th>
                <th class="px-5 py-4 text-left font-semibold text-brand-600 dark:text-accent-400">Msambizi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="r in rows" :key="r.cap" class="border-b border-ink-900/10 last:border-0 dark:border-white/5">
                <td class="px-5 py-4 font-medium text-ink-900 dark:text-paper-50">{{ r.cap }}</td>
                <td class="px-5 py-4 text-ink-500 dark:text-ink-300">
                  <span class="inline-flex items-center gap-2">
                    <X class="h-4 w-4 text-rose-500" /> {{ r.generic }}
                  </span>
                </td>
                <td class="px-5 py-4 text-ink-700 dark:text-ink-200">
                  <span class="inline-flex items-center gap-2">
                    <Check class="h-4 w-4 text-verified-500" /> {{ r.msambizi }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Check, X } from 'lucide-vue-next'

const rows = [
  { cap: 'Educational purpose', generic: 'General-purpose consumer assistant', msambizi: 'Built for HE faculties & courses' },
  { cap: 'Curriculum alignment', generic: 'Trained on general web data', msambizi: 'Locked to your syllabi & reading lists' },
  { cap: 'Teaching method', generic: 'Dumps complete answers', msambizi: 'Socratic, step-by-step scaffolding' },
  { cap: 'Lecturer oversight', generic: 'Black box, no dashboards', msambizi: 'Live analytics, heatmaps, audit trails' },
  { cap: 'Academic integrity', generic: 'Ghostwrites unvetted work', msambizi: 'Refuses ghostwriting, enforces citations' },
  { cap: 'Institutional control', generic: 'Personal accounts only', msambizi: 'Branded multi-tenant portals' },
  { cap: 'Data ownership', generic: 'Vendor-controlled', msambizi: 'Institution-owned & isolated' },
]
</script>