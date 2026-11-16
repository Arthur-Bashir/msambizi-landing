<template>
  <figure
    class="product-showcase continuity-scene"
    role="group"
    aria-label="Conceptual interactive illustration: educator-approved materials guide student learning after class, with cited support and educator review."
    data-reveal
    @pointermove="handlePointerMove"
    @pointerleave="resetPointer"
  >
    <div class="showcase-halo" aria-hidden="true" />
    <div class="scene-ambient" aria-hidden="true">
      <span class="scene-orb scene-orb--one" />
      <span class="scene-orb scene-orb--two" />
      <span class="scene-orb scene-orb--three" />
    </div>

    <div class="scene-stage" aria-hidden="true">
      <svg class="scene-flow" viewBox="0 0 520 300" fill="none">
        <path class="flow-path" d="M90 110C170 88 235 118 265 150" />
        <path class="flow-path flow-path--delay" d="M275 165C330 205 390 214 440 190" />
        <path class="flow-path flow-path--return" d="M420 120C350 74 210 70 130 98" />
        <circle cx="90" cy="110" r="4" class="flow-node" />
        <circle cx="268" cy="158" r="5" class="flow-node flow-node--core" />
        <circle cx="440" cy="190" r="4" class="flow-node" />
      </svg>

      <article class="scene-card scene-card--materials" :class="{ 'is-active': activeBeat === 0, 'is-muted': activeBeat !== 0 }">
        <span class="scene-tag">01 · Educators</span>
        <strong>Approved materials</strong>
        <p v-if="activeBeat === 0">Course notes and syllabi set clear, grounded boundaries.</p>
      </article>

      <article class="scene-card scene-card--student" :class="{ 'is-active': activeBeat === 1, 'is-muted': activeBeat !== 1 }">
        <span class="scene-tag">02 · After class</span>
        <strong>Student question</strong>
        <p v-if="activeBeat === 1" class="scene-bubble">“Why do leaves need chlorophyll?”</p>
      </article>

      <article class="scene-card scene-card--support" :class="{ 'is-active': activeBeat === 2, 'is-muted': activeBeat !== 2 }">
        <span class="scene-tag">03 · Guided support</span>
        <strong>Cited, step-by-step help</strong>
        <p v-if="activeBeat === 2" class="scene-answer">Guidance explains from class notes and prompts thinking.</p>
        <div v-if="activeBeat === 2" class="scene-citations">
          <span class="scene-cite">Source cited</span>
          <span class="scene-review">Educator in loop</span>
        </div>
      </article>

      <div class="scene-core" :class="`beat-${activeBeat}`">
        <img src="/brand/msambizi-logo-on-dark.webp" alt="" />
      </div>
    </div>

    <div class="scene-controls" role="tablist" aria-label="Explore how Msambizi supports learning">
      <button
        v-for="(beat, index) in beats"
        :key="beat.id"
        type="button"
        role="tab"
        class="scene-beat"
        :class="{ 'is-active': activeBeat === index }"
        :aria-selected="activeBeat === index"
        @click="selectBeat(index)"
      >
        <span class="scene-beat-dot" aria-hidden="true" />
        <span class="scene-beat-copy"><strong>{{ beat.label }}</strong><small>{{ beat.caption }}</small></span>
      </button>
    </div>

    <figcaption class="showcase-caption"><span />Conceptual illustration · not a live product screen or real data</figcaption>
  </figure>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const activeBeat = ref(0)
const paused = ref(false)
let timer: ReturnType<typeof setInterval> | undefined

const beats = [
  { id: 'materials', label: 'Set by educators', caption: 'Approved materials define the context' },
  { id: 'study', label: 'After class', caption: 'Students ask as they study' },
  { id: 'support', label: 'Guided & reviewed', caption: 'Cited support, educator in the loop' },
]

function selectBeat(index: number) {
  activeBeat.value = index
  paused.value = true
}

function startAutoPlay() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  timer = setInterval(() => {
    if (!paused.value) activeBeat.value = (activeBeat.value + 1) % beats.length
  }, 3600)
}

function handlePointerMove(event: PointerEvent) {
  if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const element = event.currentTarget as HTMLElement
  const bounds = element.getBoundingClientRect()
  element.style.setProperty('--pointer-x', String(((event.clientX - bounds.left) / bounds.width - 0.5) * 2))
  element.style.setProperty('--pointer-y', String(((event.clientY - bounds.top) / bounds.height - 0.5) * 2))
}

function resetPointer(event: PointerEvent) {
  const element = event.currentTarget as HTMLElement
  element.style.setProperty('--pointer-x', '0')
  element.style.setProperty('--pointer-y', '0')
}

onMounted(startAutoPlay)
onBeforeUnmount(() => { if (timer) clearInterval(timer) })
</script>
