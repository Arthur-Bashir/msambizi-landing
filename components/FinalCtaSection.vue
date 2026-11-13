<template>
  <section id="engage" class="engage-section" tabindex="-1">
    <div class="page-container engage-layout">
      <div>
        <p class="eyebrow"><span class="eyebrow-rule" /> The next step</p>
        <h2>Bring your institution’s questions into <em>the conversation.</em></h2>
      </div>
      <div class="engage-action">
        <p>Request a presentation to explore educator-guided learning and share the priorities of your university or college.</p>
        <a class="button-light" href="mailto:support@msambizi.school?subject=Request%20an%20institutional%20presentation">
          Request an institutional presentation <ArrowRight :size="17" aria-hidden="true" />
        </a>
        <a class="engage-email" href="mailto:support@msambizi.school?subject=Engage%20with%20the%20Msambizi%20team">Engage with our team <ArrowUpRight :size="14" aria-hidden="true" /></a>
      </div>
      <div class="engage-decoration" aria-hidden="true"><span /><span /><span /></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, ArrowUpRight } from 'lucide-vue-next'
</script>
