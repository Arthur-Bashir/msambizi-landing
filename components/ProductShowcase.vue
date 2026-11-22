<template>
  <figure
    class="product-showcase campaign-visual"
    role="group"
    aria-label="Marketing illustration featuring University of Malawi students. The photograph is contextual and does not imply a Msambizi affiliation or endorsement."
  >
    <img
      class="campaign-visual-photo"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/UoM_Students.jpg/1280px-UoM_Students.jpg"
      alt="University of Malawi students studying with computers"
      width="1280"
      height="855"
      fetchpriority="high"
      decoding="async"
    />
    <div class="campaign-visual-shade" aria-hidden="true" />
    <div class="campaign-visual-copy" aria-hidden="true">
      <Transition name="hero-fade" mode="out-in">
        <div :key="active" class="carousel-slide">
          <span class="campaign-visual-kicker">{{ slides[active].kicker }}</span>
          <h2 v-html="slides[active].title" />
          <span class="campaign-visual-caption">{{ slides[active].caption }}</span>
        </div>
      </Transition>
    </div>
    <div class="campaign-carousel-dots" aria-hidden="true">
      <button
        v-for="(s, i) in slides"
        :key="i"
        type="button"
        class="campaign-dot"
        :class="active === i ? 'is-active' : ''"
        @click="active = i"
      />
    </div>
    <figcaption class="campaign-visual-credit">
      University of Malawi students · Photo by Putsud, unchanged ·
      <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> ·
      <a href="https://commons.wikimedia.org/wiki/File:UoM_Students.jpg" target="_blank" rel="noopener noreferrer">Source</a>.
      Contextual image; no Msambizi affiliation or endorsement implied.
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const slides = [
  { kicker: 'The learning journey', title: 'Ask. Learn.<br /><em>Excel.</em>', caption: 'From the lecture hall to independent study.' },
  { kicker: 'Grounded guidance', title: 'Your course.<br /><em>Your pace.</em>', caption: 'AI support that stays inside the materials educators approve.' },
  { kicker: 'Educator visibility', title: 'Teach.<br /><em>Track. Adjust.</em>', caption: 'See where students struggle and respond before the exam.' },
]

const active = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  timer = setInterval(() => {
    active.value = (active.value + 1) % slides.length
  }, 4500)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.carousel-slide {
  display: grid;
  gap: 0;
}
.hero-fade-enter-active,
.hero-fade-leave-active {
  transition: opacity 0.45s ease, transform 0.45s ease;
}
.hero-fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.hero-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
.campaign-carousel-dots {
  position: absolute;
  right: 18px;
  bottom: 46px;
  display: flex;
  gap: 8px;
  z-index: 3;
}
.campaign-dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  border: 1px solid rgb(255 255 255 / 45%);
  background: rgb(255 255 255 / 18%);
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;
}
.campaign-dot.is-active {
  background: #f5bd77;
  transform: scale(1.15);
}
</style>