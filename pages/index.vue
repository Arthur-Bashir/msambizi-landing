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
let revealFallbackTimer: ReturnType<typeof setTimeout> | undefined

onMounted(() => {
  const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
  if (!targets.length) return

  const showEverything = () => targets.forEach((target) => {
    target.classList.add('is-visible')
    target.style.removeProperty('--reveal-delay')
  })

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    showEverything()
    return
  }

  try {
    revealObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-visible')
        revealObserver?.unobserve(entry.target)
      }
    }, { threshold: 0, rootMargin: '0px' })

    targets.forEach((target, index) => {
      target.style.setProperty('--reveal-delay', `${Math.min(index % 5, 4) * 55}ms`)
      revealObserver?.observe(target)
    })
    document.documentElement.classList.add('motion-ready')
    revealFallbackTimer = setTimeout(showEverything, 8000)
  } catch {
    revealObserver?.disconnect()
    revealObserver = undefined
    document.documentElement.classList.remove('motion-ready')
    showEverything()
  }
})

onBeforeUnmount(() => {
  revealObserver?.disconnect()
  if (revealFallbackTimer) clearTimeout(revealFallbackTimer)
  document.documentElement.classList.remove('motion-ready')
})
</script>
