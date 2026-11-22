<template>
  <figure
    class="product-showcase campaign-visual"
    role="group"
    aria-label="Students studying with computers"
  >
    <Transition name="hero-fade" mode="out-in">
      <img
        :key="active"
        class="campaign-visual-photo"
        :src="slides[active].image"
        :alt="slides[active].alt"
        width="1280"
        height="855"
        fetchpriority="high"
        decoding="async"
      />
    </Transition>
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
        :aria-label="`Show slide ${i + 1}`"
      />
    </div>
    <Transition name="hero-fade" mode="out-in">
      <figcaption :key="active" class="campaign-visual-credit">
        {{ slides[active].credit }}
      </figcaption>
    </Transition>
  </figure>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const slides = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/UoM_Students.jpg/1280px-UoM_Students.jpg',
    alt: 'University of Malawi students studying with computers',
    kicker: 'The learning journey',
    title: 'Ask. Learn.<br /><em>Excel.</em>',
    caption: 'From the lecture hall to independent study.',
    credit:
      'University of Malawi students · Photo by Putsud, unchanged · CC BY-SA 4.0 · Source: commons.wikimedia.org/wiki/File:UoM_Students.jpg.',
  },
  {
    image: 'https://images.pexels.com/photos/6281827/pexels-photo-6281827.jpeg?auto=compress&cs=tinysrgb&w=1280&h=853&fit=crop&dpr=1',
    alt: 'Black students studying together with laptops and textbooks',
    kicker: 'Grounded guidance',
    title: 'Your course.<br /><em>Your pace.</em>',
    caption: 'AI support that stays inside the materials educators approve.',
    credit:
      'Black students preparing for exams together · Photo by Gabby K / Pexels.',
  },
]

const active = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  timer = setInterval(() => {
    active.value = (active.value + 1) % slides.length
  }, 5000)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.hero-fade-enter-active,
.hero-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.hero-fade-enter-from {
  opacity: 0;
  transform: scale(1.02);
}
.hero-fade-leave-to {
  opacity: 0;
  transform: scale(0.98);
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