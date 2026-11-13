<template>
  <section class="border-y border-ink-900/10 bg-white/60 py-8 dark:border-white/10 dark:bg-white/5">
    <div class="page-container">
      <p class="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
        Designed for how higher education actually runs
      </p>
      <div class="mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div class="flex w-max animate-marquee gap-12">
          <span v-for="(s, i) in [...schools, ...schools]" :key="i" class="whitespace-nowrap font-display text-lg font-medium text-ink-900/40 dark:text-paper-50/40">
            {{ s }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const schools = [
  'University faculty workspaces',
  'College & institute portals',
  'Department-level governance',
  'Lecturer-curated course content',
  'Student self-study companions',
  'Tutor & center hubs',
  'Audit-ready interaction logs',
]
</script>