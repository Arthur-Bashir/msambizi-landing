<template>
  <section id="institutional-moment" class="human-moment-section" aria-labelledby="human-moment-title">
    <div class="human-moment-media" aria-hidden="true" />
    <div class="human-moment-scrim" aria-hidden="true" />

    <div class="page-container human-moment-inner">
      <div class="human-moment-copy" data-reveal>
        <h2 id="human-moment-title">Guidance that continues <em>beyond the lecture hall.</em></h2>
        <p class="human-moment-intro">
          After-class questions deserve answers grounded in the materials your educators chose. Msambizi keeps that connection alive.
        </p>
        <div class="human-moment-actions">
          <a class="button-primary" href="mailto:support@msambizi.school?subject=Request%20an%20institutional%20presentation">
            Book a presentation <ArrowRight :size="17" aria-hidden="true" />
          </a>
          <a class="text-link" href="#learning-story">See the learning story <ArrowDown :size="16" aria-hidden="true" /></a>
        </div>
        <p class="human-moment-note">30 minutes, tailored to your institution. No obligation.</p>
      </div>
    </div>

    <p class="human-moment-credit">Photo: Kampus Production / Pexels</p>
  </section>
</template>

<script setup lang="ts">
import { ArrowDown, ArrowRight } from 'lucide-vue-next'
</script>
