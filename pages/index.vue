<template>
  <LandingHeader />
  <main id="main-content" tabindex="-1">
    <LandingHero />
    <LearningStorySection />
    <PropositionSection />
    <InstitutionalTrustSection />
    <InstitutionalEngagementSection />
  </main>
  <LandingFooter />
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'

let revealObserver: IntersectionObserver | undefined

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]')
  if (!targets.length) return

  document.documentElement.classList.add('motion-ready')
  revealObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      entry.target.classList.add('is-visible')
      revealObserver?.unobserve(entry.target)
    }
  }, { threshold: 0.12, rootMargin: '0px 0px -4% 0px' })

  targets.forEach((target, index) => {
    target.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 65}ms`)
    revealObserver?.observe(target)
  })
})

onBeforeUnmount(() => {
  revealObserver?.disconnect()
  document.documentElement.classList.remove('motion-ready')
})
</script>
