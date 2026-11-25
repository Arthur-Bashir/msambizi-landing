<template>
  <section id="top" class="hero-section">
    <div class="page-container hero-layout">
      <div class="hero-copy">
        <p class="eyebrow"><span class="eyebrow-rule" /> For universities and colleges</p>
        <h1>When class ends, learning still needs <em>direction.</em></h1>
        <p class="hero-intro">
          Msambizi keeps after-class study tied to the course. Students work through approved materials with AI assistance, while academic direction stays with their lecturers.
        </p>
        <div class="hero-actions">
          <a class="button-primary" href="/contact">
            Request a presentation <ArrowRight :size="17" aria-hidden="true" />
          </a>
          <a class="text-link" href="#learning-story">See how it works <ArrowDown :size="16" aria-hidden="true" /></a>
        </div>
        <p class="hero-note">A conversation for institutional decision-makers, educators and academic teams.</p>
      </div>

      <ProductShowcase />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowDown, ArrowRight } from 'lucide-vue-next'
</script>
