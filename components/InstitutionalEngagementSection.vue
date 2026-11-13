<template>
  <section id="institutional-engagement" class="institutional-engagement-section" tabindex="-1">
    <div class="page-container">
      <div class="engagement-heading">
        <p class="eyebrow"><span class="eyebrow-rule" /> A proposed engagement journey</p>
        <h2>Explore Msambizi for <em>your institution.</em></h2>
        <p>Discuss your needs, explore a demonstration, consider a suitable scope and discuss a proposal.</p>
      </div>

      <ol class="engagement-steps" aria-label="Proposed institutional engagement journey">
        <li><span>01</span><h3>Discuss needs</h3></li>
        <li><span>02</span><h3>Explore a demonstration</h3></li>
        <li><span>03</span><h3>Consider adoption scope</h3></li>
        <li><span>04</span><h3>Discuss a proposal</h3></li>
      </ol>
      <p class="engagement-note">A suggested path for institutional discussion; each step and any commercial scope must be agreed with the institution.</p>
      <a class="button-light engagement-cta" href="mailto:support@msambizi.school?subject=Request%20an%20institutional%20presentation">
        Request an Institutional Presentation <ArrowRight :size="17" aria-hidden="true" />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
</script>
