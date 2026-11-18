<template>
  <section id="top" class="hero-section">
    <div class="page-container hero-layout">
      <div class="hero-copy">
        <p class="eyebrow"><span class="eyebrow-rule" /> For universities and colleges</p>
        <h1>When class ends, learning still needs <em>direction.</em></h1>
        <p class="hero-intro">
          Msambizi helps universities and colleges keep student learning connected to the course after class. AI-supported guidance draws on materials educators approve, while educators keep the academic direction.
        </p>
        <div class="hero-actions">
          <a class="button-primary" href="mailto:support@msambizi.school?subject=Request%20an%20institutional%20presentation">
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
