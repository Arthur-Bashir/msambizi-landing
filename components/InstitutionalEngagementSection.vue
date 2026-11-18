<template>
  <section id="institutional-engagement" class="institutional-engagement-section" tabindex="-1" aria-labelledby="engagement-title">
    <div class="page-container">
      <div class="engagement-heading" data-reveal>
        <p class="eyebrow"><span class="eyebrow-rule" /> For universities and colleges</p>
        <h2 id="engagement-title">Explore the fit.<br /><em>Then decide.</em></h2>
        <p>Start with a presentation. Share your academic context, see the learning journey, and discuss whether Msambizi fits your institution.</p>
      </div>

      <ol class="engagement-steps" aria-label="Proposed institutional engagement journey" data-reveal>
        <li><span>01</span><strong>Share your context</strong></li>
        <li><span>02</span><strong>See a presentation</strong></li>
        <li><span>03</span><strong>Consider the fit</strong></li>
        <li><span>04</span><strong>Choose next steps</strong></li>
      </ol>

      <div class="engagement-actions" data-reveal>
        <a class="button-primary engagement-cta" href="mailto:support@msambizi.school?subject=Request%20an%20institutional%20presentation">
          Request a presentation <ArrowRight :size="17" aria-hidden="true" />
        </a>
        <p class="engagement-email">For institutional enquiries, email <a href="mailto:support@msambizi.school">support@msambizi.school</a>.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
</script>
