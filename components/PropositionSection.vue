<template>
  <section id="proposition" class="proposition-section" tabindex="-1">
    <div class="page-container">
      <div class="proposition-heading" data-reveal>
        <p class="eyebrow"><span class="eyebrow-rule" /> How it works for institutions</p>
        <h2>Four parts of <em>one governed learning relationship.</em></h2>
        <p>Explore how Msambizi keeps learning grounded, educator-led, and supportive—so AI strengthens the academic experience without taking control away from your institution.</p>
      </div>

      <div class="proposition-map" :class="`is-active-${selectedElement}`" role="group" aria-label="Select a part of the academic relationship">
        <button v-for="item in elements" :key="item.id" class="proposition-node" :class="[`proposition-node--${item.id}`, { 'is-selected': selectedElement === item.id }]" type="button" :aria-pressed="selectedElement === item.id" :aria-controls="'proposition-detail'" @focus="stopAutoplay" @click="selectElement(item.id)">
          <span>{{ item.number }} <i>—</i> {{ item.label }}</span>
          <strong>{{ item.title }}</strong>
        </button>

        <div class="proposition-core">
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
      <div id="proposition-detail" class="proposition-detail" :aria-live="autoplayEnabled ? 'off' : 'polite'" aria-atomic="true">
        <div class="proposition-detail-inner">
          <span>{{ selectedItem?.label }}</span>
          <p><strong>{{ selectedItem?.title }}:</strong> {{ selectedItem?.detail }}</p>
        </div>
      </div>
      <p class="proposition-caption">A conceptual relationship—showing governance and learning flow, not a live product screen.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const selectedElement = ref('materials')
const autoplayEnabled = ref(false)
let autoplayTimer: ReturnType<typeof setInterval> | undefined

function stopAutoplay() {
  autoplayEnabled.value = false
  if (autoplayTimer) clearInterval(autoplayTimer)
  autoplayTimer = undefined
}

function selectElement(id: string) {
  selectedElement.value = id
  stopAutoplay()
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  autoplayEnabled.value = true
  autoplayTimer = setInterval(() => {
    if (document.hidden) return
    const currentIndex = elements.findIndex((item) => item.id === selectedElement.value)
    selectedElement.value = elements[(currentIndex + 1) % elements.length]!.id
  }, 3600)
})

onBeforeUnmount(stopAutoplay)

const elements = [
  { id: 'materials', number: '01', label: 'THE FOUNDATION', title: 'Approved academic materials', detail: 'Syllabi, notes, and readings provided by the institution define what support can draw from—keeping learning aligned and source-grounded.' },
  { id: 'educators', number: '02', label: 'THE GUIDANCE', title: 'Educators remain central', detail: 'Teaching intent, boundaries, and oversight stay with educators, so AI assists the learning experience rather than directing it.' },
  { id: 'support', number: '03', label: 'THE SUPPORT', title: 'AI-supported, step-by-step help', detail: 'Students receive guided explanations that encourage understanding and point back to materials, supporting learning beyond scheduled class time.' },
  { id: 'students', number: '04', label: 'THE EXPERIENCE', title: 'Confident student learning', detail: 'Learners can ask in their own words and get timely help within an educator-guided context—building clarity when it matters most.' },
]
const selectedItem = computed(() => elements.find((item) => item.id === selectedElement.value))
</script>
