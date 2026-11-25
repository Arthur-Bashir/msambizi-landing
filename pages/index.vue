<template>
  <LandingHeader />
  <main id="main-content" tabindex="-1">
    <LandingHero />
    <LearningStorySection />
    <PropositionSection />
    <PresentationDealBanner />
    <InstitutionalTrustSection />
    <InstitutionalEngagementSection />
  </main>
  <LandingFooter />
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'

let revealObserver: IntersectionObserver | undefined

onMounted(() => {
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]')
  if (!targets.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  if (!('IntersectionObserver' in window)) return

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-visible')
      revealObserver?.unobserve(entry.target)
    })
  })

  targets.forEach((target, index) => {
    target.style.setProperty('--reveal-delay', `${(index % 5) * 55}ms`)
    revealObserver?.observe(target)
  })
  document.documentElement.classList.add('motion-ready')
})

onBeforeUnmount(() => {
  revealObserver?.disconnect()
  document.documentElement.classList.remove('motion-ready')
})
</script>
