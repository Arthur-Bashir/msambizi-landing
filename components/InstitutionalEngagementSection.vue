<template>
  <section id="institutional-engagement" class="institutional-engagement-section" tabindex="-1">
    <div class="page-container">
      <div class="engagement-heading" data-reveal>
        <p class="eyebrow"><span class="eyebrow-rule" /> A proposed engagement journey</p>
        <h2>See it in your context. <em>Explore Msambizi for your institution.</em></h2>
        <p>A clear, low-risk path from first conversation to an informed decision—focused on your academic goals, courses, and learners.</p>
      </div>

      <ol class="engagement-steps" aria-label="Proposed institutional engagement journey" data-reveal>
        <li>
          <span>01</span>
          <h3>Discuss needs</h3>
          <p>Share your teaching context, courses, and where after-class support matters most.</p>
        </li>
        <li>
          <span>02</span>
          <h3>Explore a demonstration</h3>
          <p>See how educator-guided, source-grounded learning can work for your students.</p>
        </li>
        <li>
          <span>03</span>
          <h3>Consider adoption scope</h3>
          <p>Identify the right programs, departments, or pilot approach for your institution.</p>
        </li>
        <li>
          <span>04</span>
          <h3>Discuss a proposal</h3>
          <p>Align on fit, expectations, and next steps with a clear institutional plan.</p>
        </li>
      </ol>
      <p class="engagement-note" data-reveal>A suggested path for institutional discussion; each step and any scope are agreed with the institution.</p>
      <div class="engagement-actions" data-reveal>
        <a class="button-primary engagement-cta" href="mailto:support@msambizi.school?subject=Request%20an%20institutional%20presentation">
          Request an Institutional Presentation <ArrowRight :size="17" aria-hidden="true" />
        </a>
        <p class="engagement-email">For institutional enquiries, email <a href="mailto:support@msambizi.school">support@msambizi.school</a>.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
</script>
