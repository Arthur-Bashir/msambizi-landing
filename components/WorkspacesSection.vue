<template>
  <section id="institutions" class="institutions-section" tabindex="-1">
    <div class="page-container">
      <div class="institutions-heading">
        <div>
          <p class="eyebrow"><span class="eyebrow-rule" /> Who we’re here to engage</p>
          <h2>A conversation for<br /><em>higher education.</em></h2>
        </div>
        <p>We invite university and college decision-makers to consider how educator-guided learning could serve their academic priorities.</p>
      </div>

      <div class="institution-cards">
        <article class="institution-card">
          <span class="institution-number">01 <i>—</i> UNIVERSITIES</span>
          <div class="institution-mark mark-university" aria-hidden="true"><span /><span /><span /></div>
          <h3>For universities</h3>
          <p>For university leaders, academic directors and faculty considering how learning support beyond class can reflect faculty knowledge and academic expectations.</p>
          <a href="mailto:support@msambizi.school?subject=University%20institutional%20presentation">Discuss university priorities <ArrowUpRight :size="15" aria-hidden="true" /></a>
        </article>
        <article class="institution-card">
          <span class="institution-number">02 <i>—</i> COLLEGES</span>
          <div class="institution-mark mark-college" aria-hidden="true"><span /><span /><span /><span /></div>
          <h3>For colleges</h3>
          <p>For college leaders, administrators and teaching teams considering how support can stay connected to course materials and educator guidance.</p>
          <a href="mailto:support@msambizi.school?subject=College%20institutional%20presentation">Discuss college priorities <ArrowUpRight :size="15" aria-hidden="true" /></a>
        </article>
      </div>
      <p class="institutions-footnote">Start with your institution’s priorities. We’ll introduce the Msambizi vision and listen to what matters to your academic community.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
</script>
