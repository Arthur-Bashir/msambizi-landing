<template>
  <section id="learning-story" class="learning-story-section" tabindex="-1">
    <div class="page-container">
      <div class="story-heading" data-reveal>
        <p class="eyebrow"><span class="eyebrow-rule" /> The learning story</p>
        <h2>Teaching sets direction. <em>Learning continues after class.</em></h2>
        <p>Msambizi connects the classroom, independent study, and educator guidance into one continuous experience—so support is available when students need it, without replacing the teacher.</p>
      </div>

      <div class="story-sequence" aria-label="Three connected moments in the learning experience">
        <template v-for="(stage, index) in stages" :key="stage.id">
          <article class="story-moment" :class="{ 'is-selected': selectedStage === index }" data-reveal>
            <button class="story-stage-button" type="button" :aria-pressed="selectedStage === index" @click="selectedStage = index">
              <span class="story-moment-index">0{{ index + 1 }}</span>
              <span class="story-illustration" aria-hidden="true">
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
              <span class="story-stage-copy"><strong>{{ stage.title }}</strong><span>{{ stage.summary }}</span></span>
              <span class="story-stage-indicator" aria-hidden="true">{{ selectedStage === index ? 'In focus' : 'Explore' }}</span>
            </button>
          </article>
          <div v-if="index < stages.length - 1" class="story-connector" :class="{ 'is-active': selectedStage > index }" aria-hidden="true"><span /></div>
        </template>
      </div>

      <div class="story-detail" aria-live="polite" aria-atomic="true" data-reveal>
        <Transition name="story-panel" mode="out-in">
          <div :key="stages[selectedStage]?.id" class="story-detail-inner">
            <span class="story-detail-index">0{{ selectedStage + 1 }}</span>
            <div>
              <h3>{{ stages[selectedStage]?.title }}</h3>
              <p>{{ stages[selectedStage]?.detail }}</p>
              <p class="story-detail-benefit"><strong>Institutional value:</strong> {{ stages[selectedStage]?.benefit }}</p>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedStage = ref(0)
const stages = [
  {
    id: 'classroom',
    title: 'Classroom teaching',
    summary: 'Educators set the syllabus, materials, and direction.',
    detail: 'Lecturers and tutors provide the approved notes, readings, and course context that define what students should learn.',
    benefit: 'Learning stays aligned to your curriculum and academic standards from the start.',
  },
  {
    id: 'study',
    title: 'Independent study, after class',
    summary: 'Students ask questions in their own words when support is needed.',
    detail: 'As students revise or work through difficult concepts beyond class time, they can get step-by-step guidance grounded in those same approved materials.',
    benefit: 'Extends educator reach without increasing staff workload, especially outside contact hours.',
  },
  {
    id: 'guidance',
    title: 'Guidance with educators in the loop',
    summary: 'Support is cited, reviewable, and shaped by educator intent.',
    detail: 'Responses point back to source material and encourage understanding rather than answer-dumping, while educators remain central to the learning relationship.',
    benefit: 'Builds trust through transparency, academic integrity, and responsible AI use.',
  },
]
</script>
