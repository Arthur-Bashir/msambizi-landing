<template>
  <section id="institutional-trust" class="institutional-trust-section" tabindex="-1" aria-labelledby="trust-title">
    <div class="page-container">
      <div class="trust-heading" data-reveal>
        <p class="eyebrow"><span class="eyebrow-rule" /> A considered institutional decision</p>
        <h2 id="trust-title">The questions <em>worth asking.</em></h2>
        <p>A presentation is where we cover academic fit, the lecturer's role and the practical requirements before rollout is on the table.</p>
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
  { title: 'Academic alignment', detail: 'How course materials and academic expectations shape the learning context.' },
  { title: 'Educator involvement', detail: 'Where lecturers sit in the experience and how they keep the academic direction.' },
  { title: 'Institutional requirements', detail: 'Scope, privacy and security questions, raised before adoption is on the table.' },
]
</script>
