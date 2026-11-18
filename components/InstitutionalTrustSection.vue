<template>
  <section id="institutional-trust" class="institutional-trust-section" tabindex="-1" aria-labelledby="trust-title">
    <div class="page-container">
      <div class="trust-heading" data-reveal>
        <p class="eyebrow"><span class="eyebrow-rule" /> A considered institutional decision</p>
        <h2 id="trust-title">Explore the questions <em>that matter to your institution.</em></h2>
        <p>A presentation is a chance to examine the academic fit, the educator’s role and the requirements that would shape any next step.</p>
      </div>

      <div class="trust-grid" aria-label="Areas institutions can explore with Msambizi" data-reveal>
        <article v-for="(item, index) in considerations" :key="item.title" class="trust-card">
          <span class="trust-item-number">0{{ index + 1 }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.detail }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const considerations = [
  { title: 'Academic alignment', detail: 'Discuss how approved course materials and academic expectations shape the learning context.' },
  { title: 'Educator involvement', detail: 'Explore how educators guide the experience and remain central to the learning relationship.' },
  { title: 'Institutional requirements', detail: 'Raise questions about scope, privacy and security early, before considering any adoption.' },
]
</script>
