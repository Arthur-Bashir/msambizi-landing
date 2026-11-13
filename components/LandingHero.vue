<template>
  <section id="top" class="hero-section">
    <div class="page-container hero-layout">
      <div class="hero-copy">
        <p class="eyebrow"><span class="eyebrow-rule" /> AI learning for higher education</p>
        <h1>Extend the reach of educators. <em>Strengthen the learning experience.</em></h1>
        <p class="hero-intro">
          An institutionally licensed AI learning platform for universities and colleges, grounded in approved academic materials.
        </p>
        <div class="hero-actions">
          <a class="button-primary" href="mailto:support@msambizi.school?subject=Request%20an%20institutional%20presentation">
            Request an institutional presentation <ArrowRight :size="17" aria-hidden="true" />
          </a>
          <a class="text-link" href="#proposition">Explore how it works <ArrowDown :size="16" aria-hidden="true" /></a>
        </div>
      </div>

      <div class="hero-art" aria-hidden="true">
        <div class="art-arc art-arc-outer" />
        <div class="art-arc art-arc-inner" />
        <div class="art-sun" />
        <div class="art-ground" />
        <div class="art-building">
          <div class="building-roof" />
          <div class="building-entablature" />
          <div class="building-columns"><i /><i /><i /><i /><i /></div>
          <div class="building-steps"><i /><i /><i /></div>
        </div>
        <div class="art-orbit orbit-a" /><div class="art-orbit orbit-b" />
        <div class="art-caption"><span>01</span><span>Help beyond<br />the lecture.</span></div>
        <div class="art-side-note">EDUCATOR-GUIDED <span>✳</span></div>
      </div>

      <div class="hero-baseline"><span>MSAMBIZI</span><span>ASK · LEARN · EXCEL</span><span>UNIVERSITIES · COLLEGES</span></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowDown, ArrowRight } from 'lucide-vue-next'
</script>
