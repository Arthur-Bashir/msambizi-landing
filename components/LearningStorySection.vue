<template>
  <section id="learning-story" class="learning-story-section" tabindex="-1" aria-labelledby="story-title">
    <div class="page-container">
      <div class="story-heading" data-reveal>
        <p class="eyebrow"><span class="eyebrow-rule" /> The learning journey</p>
        <h2 id="story-title">A question after class.<br /><em>Still connected to the course.</em></h2>
        <p>Students ask, study and build understanding with support shaped by educator-approved materials.</p>
      </div>

      <div class="story-steps" aria-label="Three connected moments in the learning experience" data-reveal>
        <article v-for="(stage, index) in stages" :key="stage.id" class="story-step">
          <span class="story-step-number">0{{ index + 1 }}</span>
          <span class="story-step-icon" aria-hidden="true">
            <svg v-if="index === 0" viewBox="0 0 64 64" fill="none">
              <path d="M10 51h44M16 47V22h32v25M12 22l20-11 20 11M23 29v18m9-18v18m9-18v18" /><path d="M25 17h14" />
            </svg>
            <svg v-else-if="index === 1" viewBox="0 0 64 64" fill="none">
              <path d="M8 18c10-3 18-1 24 4v30c-6-5-14-7-24-4V18Zm48 0c-10-3-18-1-24 4v30c6-5 14-7 24-4V18Z" /><path d="M15 27c5-1 9 0 12 2m-12 5c5-1 9 0 12 2m22-9c-5-1-9 0-12 2m12 5c-5-1-9 0-12 2" />
            </svg>
            <svg v-else viewBox="0 0 64 64" fill="none">
              <rect x="9" y="11" width="46" height="32" rx="3" /><path d="M4 51h56l-5-8H9l-5 8Zm14-26h18m-18 7h27" /><circle cx="46" cy="24" r="2" />
            </svg>
          </span>
          <h3>{{ stage.title }}</h3>
          <p>{{ stage.detail }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stages = [
  {
    id: 'classroom',
    title: 'Classroom teaching',
    detail: 'Educators provide the approved notes, readings and course context that define what students learn.',
  },
  {
    id: 'study',
    title: 'Independent study, after class',
    detail: 'As students revise, AI-supported guidance draws on those same materials.',
  },
  {
    id: 'guidance',
    title: 'Educators stay in the loop',
    detail: 'Guidance points back to course sources, while educators remain central to learning.',
  },
]
</script>
