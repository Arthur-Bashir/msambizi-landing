<template>
  <section id="proposition" class="proposition-section" tabindex="-1">
    <div class="page-container">
      <div class="proposition-heading" data-reveal>
        <p class="eyebrow"><span class="eyebrow-rule" /> The Msambizi proposition</p>
        <h2>Four parts of <em>one academic relationship.</em></h2>
        <p>Institutions set the academic context; educators guide learning, and AI supports students as they engage with approved materials.</p>
      </div>

      <div class="proposition-map" :class="`is-active-${selectedElement}`" role="group" aria-label="Select a part of the academic relationship">
        <button v-for="item in elements" :key="item.id" class="proposition-node" :class="[`proposition-node--${item.id}`, { 'is-selected': selectedElement === item.id }]" type="button" :aria-pressed="selectedElement === item.id" :aria-controls="'proposition-detail'" data-reveal @click="selectedElement = item.id">
          <span>{{ item.number }} <i>—</i> {{ item.label }}</span>
          <strong>{{ item.title }}</strong>
        </button>

        <div class="proposition-core" data-reveal>
          <span class="proposition-core-mark">M</span>
          <strong>Learning guided<br />by educators</strong>
          <span class="proposition-core-name">MSAMBIZI</span>
        </div>
        <svg class="proposition-connections" viewBox="0 0 900 450" preserveAspectRatio="none" aria-hidden="true">
          <path class="connection--materials" d="M170 105H340" /><path class="connection--educators" d="M730 105H560" />
          <path class="connection--support" d="M170 345H340" /><path class="connection--students" d="M730 345H560" />
          <circle cx="340" cy="105" r="4" /><circle cx="560" cy="105" r="4" /><circle cx="340" cy="345" r="4" /><circle cx="560" cy="345" r="4" />
        </svg>
      </div>
      <div id="proposition-detail" class="proposition-detail" aria-live="polite" aria-atomic="true" data-reveal>
        <Transition name="proposition-panel" mode="out-in">
          <div :key="selectedItem?.id" class="proposition-detail-inner">
            <span>{{ selectedItem?.label }}</span><p>{{ selectedItem?.detail }}</p>
          </div>
        </Transition>
      </div>
      <p class="proposition-caption">A conceptual relationship—not a product screen or workflow.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const selectedElement = ref('materials')
const elements = [
  { id: 'materials', number: '01', label: 'THE FOUNDATION', title: 'Approved academic materials', detail: 'Academic materials provide the context for the learning proposition.' },
  { id: 'educators', number: '02', label: 'THE GUIDANCE', title: 'Educators remain central', detail: 'Educators establish direction and remain central to the learning relationship.' },
  { id: 'support', number: '03', label: 'THE SUPPORT', title: 'AI-supported learning', detail: 'AI is positioned as a supporting capability around academic learning.' },
  { id: 'students', number: '04', label: 'THE EXPERIENCE', title: 'Student learning', detail: 'Students engage with academic materials within an educator-guided context.' },
]
const selectedItem = computed(() => elements.find((item) => item.id === selectedElement.value))
</script>
