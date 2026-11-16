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
  const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
  if (!targets.length) return

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    targets.forEach((target) => target.classList.add('is-visible'))
    return
  }

  document.documentElement.classList.add('motion-ready')
  revealObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      entry.target.classList.add('is-visible')
      revealObserver?.unobserve(entry.target)
    }
  }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' })

  targets.forEach((target, index) => {
    target.style.setProperty('--reveal-delay', `${Math.min(index % 5, 4) * 55}ms`)
    revealObserver?.observe(target)
  })
})

onBeforeUnmount(() => {
  revealObserver?.disconnect()
  document.documentElement.classList.remove('motion-ready')
})
</script>
