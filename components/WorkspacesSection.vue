<template>
  <section id="institutions" class="institutions-section">
    <div class="page-container">
      <div class="institutions-heading">
        <div>
          <p class="eyebrow"><span class="eyebrow-rule" /> Who we’re here to engage</p>
          <h2>A conversation for<br /><em>higher education.</em></h2>
        </div>
        <p>Msambizi is focused exclusively on universities and colleges. We welcome the people responsible for shaping teaching, learning and academic support.</p>
      </div>

      <div class="institution-cards">
        <article class="institution-card">
          <span class="institution-number">01 <i>—</i> UNIVERSITIES</span>
          <div class="institution-mark mark-university" aria-hidden="true"><span /><span /><span /></div>
          <h3>For universities</h3>
          <p>For university leaders, faculty and academic teams considering how AI can support students while reflecting faculty knowledge and academic standards.</p>
          <a href="mailto:support@msambizi.school?subject=University%20institutional%20presentation">Discuss a university presentation <ArrowUpRight :size="15" aria-hidden="true" /></a>
        </article>
        <article class="institution-card">
          <span class="institution-number">02 <i>—</i> COLLEGES</span>
          <div class="institution-mark mark-college" aria-hidden="true"><span /><span /><span /><span /></div>
          <h3>For colleges</h3>
          <p>For college leadership, educators and administrators exploring educator-guided learning support grounded in course materials.</p>
          <a href="mailto:support@msambizi.school?subject=College%20institutional%20presentation">Discuss a college presentation <ArrowUpRight :size="15" aria-hidden="true" /></a>
        </article>
      </div>
      <p class="institutions-footnote">The first step is a conversation. We’ll listen to your institution’s priorities and share the Msambizi vision.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
</script>
