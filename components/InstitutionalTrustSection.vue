<template>
  <section id="institutional-trust" class="institutional-trust-section" tabindex="-1">
    <div class="page-container">
      <div class="trust-heading" data-reveal>
        <p class="eyebrow"><span class="eyebrow-rule" /> For universities and colleges</p>
        <h2>Built for academic purpose. <em>Aligned to institutional priorities.</em></h2>
      </div>
      <div class="trust-accordion">
        <details v-for="(item, index) in considerations" :key="item.id" class="trust-item" data-reveal>
          <summary>
            <span class="trust-item-number">0{{ index + 1 }}</span>
            <span class="trust-item-title">{{ item.title }}</span>
            <span class="trust-item-icon" aria-hidden="true" />
          </summary>
          <div class="trust-item-content">
            <p>{{ item.detail }}</p>
            <div v-if="item.id === 'alignment'" class="trust-visual" aria-hidden="true">
              <div class="trust-visual-row">
                <span class="trust-chip trust-chip--accent">Approved notes & syllabi</span>
                <span class="trust-arrow">→</span>
                <span class="trust-chip trust-chip--good">Bounded, source-grounded support</span>
              </div>
            </div>
            <div v-else-if="item.id === 'educators'" class="trust-visual" aria-hidden="true">
              <div class="trust-visual-row">
                <span class="trust-chip trust-chip--accent">Educator sets boundaries</span>
                <span class="trust-arrow">→</span>
                <span class="trust-chip">Students guided</span>
                <span class="trust-arrow">→</span>
                <span class="trust-chip trust-chip--good">Educator stays in the loop</span>
              </div>
            </div>
            <div v-else-if="item.id === 'responsible'" class="trust-visual" aria-hidden="true">
              <div class="trust-compare">
                <div class="trust-compare-card">
                  <strong>Generic AI</strong>
                  <p>Unverified, unbounded answers that bypass course context.</p>
                </div>
                <div class="trust-compare-card trust-compare-card--highlight">
                  <strong>Msambizi approach</strong>
                  <p>Step-by-step guidance grounded in approved materials, with citations and educator oversight.</p>
                </div>
              </div>
            </div>
            <div v-else class="trust-visual" aria-hidden="true">
              <div class="trust-visual-row">
                <span class="trust-chip">Discuss needs</span>
                <span class="trust-arrow">→</span>
                <span class="trust-chip">Demonstration</span>
                <span class="trust-arrow">→</span>
                <span class="trust-chip">Scope & fit</span>
                <span class="trust-arrow">→</span>
                <span class="trust-chip trust-chip--good">Institutional decision</span>
              </div>
            </div>
          </div>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const considerations = [
  { id: 'alignment', title: 'Academic alignment', detail: 'Support is shaped around approved academic materials, so guidance reflects your courses and context rather than unverified sources.' },
  { id: 'educators', title: 'Educator involvement', detail: 'Educators remain central—setting direction, defining boundaries, and staying connected to how students are supported beyond class.' },
  { id: 'responsible', title: 'Responsible AI use', detail: 'AI is positioned as a support for learning: guiding students step by step, encouraging understanding, and operating within expectations set with your institution.' },
  { id: 'evaluation', title: 'Institutional evaluation & fit', detail: 'Adoption, scope, and specific privacy, security, or compliance requirements are explored and confirmed directly with Msambizi during evaluation.' },
]
</script>
