<template>
  <section id="top" class="hero-section">
    <div class="hero-backdrop" aria-hidden="true"><span class="hero-grid" /><span class="hero-glow hero-glow--a" /><span class="hero-glow hero-glow--b" /></div>
    <div class="page-container hero-layout">
      <div class="hero-copy">
        <p class="eyebrow"><span class="eyebrow-rule" /> Institutional learning for universities and colleges</p>
        <h1>Every student gets their educator’s guidance—<em>even after class.</em></h1>
        <p class="hero-intro">
          Msambizi helps institutions extend teaching beyond the lecture hall with AI support grounded in approved course materials, shaped by educators, and designed so students get help while teachers stay in control.
        </p>
        <div class="hero-actions">
          <a class="button-primary" href="mailto:support@msambizi.school?subject=Request%20an%20institutional%20presentation">
            Request an institutional presentation <ArrowRight :size="17" aria-hidden="true" />
          </a>
          <a class="text-link" href="#learning-story">See the learning story <ArrowDown :size="16" aria-hidden="true" /></a>
        </div>
      </div>

      <ProductShowcase />

      <div class="hero-baseline"><span>MSAMBIZI</span><span>ASK · LEARN · EXCEL</span><span>UNIVERSITIES · COLLEGES</span></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowDown, ArrowRight } from 'lucide-vue-next'
</script>
