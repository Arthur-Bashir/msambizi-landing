<template>
  <section class="presentation-deal" aria-labelledby="presentation-deal-title">
    <div class="presentation-deal-inner page-container">
      <div class="presentation-deal-copy">
        <p class="presentation-deal-eyebrow"><span aria-hidden="true">✦</span> A complimentary introduction</p>
        <h2 id="presentation-deal-title">See the learning journey.<br /><em>On us.</em></h2>
        <p class="presentation-deal-description">
          Book a free institutional presentation for your university or college. Meet the team, explore the Msambizi vision, and bring your academic context to the conversation.
        </p>
        <a
          class="presentation-deal-cta"
          href="mailto:support@msambizi.school?subject=Claim%20a%20free%20institutional%20presentation"
        >
          Claim your free presentation
          <ArrowRight :size="18" aria-hidden="true" />
        </a>
        <p class="presentation-deal-note">For universities and colleges · No cost to request</p>
      </div>

      <figure class="presentation-deal-image">
        <img
          src="https://images.pexels.com/photos/5940713/pexels-photo-5940713.jpeg?auto=compress&dpr=1&h=750&w=1260"
          alt="Black university students studying together with a tutor"
          width="1260"
          height="840"
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          Photo by <a href="https://www.pexels.com/photo/attentive-young-black-groupmates-using-laptop-while-preparing-for-exams-with-anonymous-teacher-5940713/" target="_blank" rel="noopener noreferrer">Kampus Production / Pexels</a> · Illustrative image; no Msambizi affiliation or endorsement implied.
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
</script>
