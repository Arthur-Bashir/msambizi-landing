<template>
  <section id="proposition" class="proposition-section" tabindex="-1" aria-labelledby="proposition-title">
    <div class="page-container">
      <div class="proposition-heading" data-reveal>
        <p class="eyebrow"><span class="eyebrow-rule" /> The academic approach</p>
        <h2 id="proposition-title">Support that stays <em>within the course.</em></h2>
        <p>Course context and educator direction are part of the learning relationship from the start.</p>
      </div>

      <div class="proposition-grid" aria-label="How Msambizi supports course-aligned learning" data-reveal>
        <article v-for="(item, index) in principles" :key="item.title" class="proposition-card">
          <span class="proposition-card-number">0{{ index + 1 }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.detail }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const principles = [
  { title: 'Course materials set the context', detail: 'Syllabi, notes and readings give student questions an academic frame.' },
  { title: 'Educators set the direction', detail: 'Teaching intent and course expectations shape the help students get.' },
  { title: 'Students work through questions', detail: 'AI explanations walk students through course concepts step by step.' },
  { title: 'Learning stays connected', detail: 'Answers link back to course sources, so independent study stays close to class.' },
]
</script>
