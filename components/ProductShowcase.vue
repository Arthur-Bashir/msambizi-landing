<template>
  <figure
    class="product-showcase"
    role="img"
    aria-label="Illustrative Msambizi concept for educator-guided academic learning, shown on a laptop and phone. It is not a live product screenshot."
  >
    <div class="showcase-halo" aria-hidden="true" />
    <div class="showcase-float-label showcase-float-label--guided" aria-hidden="true">
      <span class="showcase-label-mark">✳</span>
      <span><strong>Educator-guided</strong><small>Learning context</small></span>
    </div>
    <div class="showcase-float-label showcase-float-label--materials" aria-hidden="true">
      <span class="showcase-label-mark showcase-label-mark--book"><BookOpen :size="15" /></span>
      <span><strong>Academic learning</strong><small>Illustrative concept</small></span>
    </div>

    <div class="showcase-laptop" aria-hidden="true">
      <div class="showcase-laptop-screen">
        <div class="showcase-app-window">
          <div class="showcase-browser-bar">
            <span class="showcase-window-dots"><i /><i /><i /></span>
            <span>Msambizi · Educator-guided learning</span>
            <span class="showcase-product-label">CONCEPT VISUAL</span>
          </div>
          <div class="showcase-app-content">
            <header class="showcase-app-header">
              <img src="/brand/msambizi-logo-on-dark.webp" alt="" width="112" height="44" />
            </header>
            <div class="showcase-chat-title">
              <span class="showcase-avatar"><Sparkles :size="15" /></span>
              <span><strong>Academic conversation</strong></span>
            </div>
            <div class="showcase-message showcase-message--student">
              <p>How can I think about the relationship between energy and entropy?</p>
            </div>
            <div class="showcase-message showcase-message--guide">
              <p>Begin by considering how energy spreads through a system. Which change would make that energy less concentrated?</p>
            </div>
          </div>
        </div>
      </div>
      <div class="showcase-laptop-base"><span /></div>
    </div>

    <div class="showcase-phone" aria-hidden="true">
      <div class="showcase-phone-camera" />
      <div class="showcase-phone-screen">
        <div class="showcase-phone-title"><span class="showcase-avatar"><Sparkles :size="13" /></span><strong>Academic conversation</strong></div>
        <div class="showcase-phone-bubble showcase-phone-bubble--student">How does energy spread?</div>
        <div class="showcase-phone-bubble showcase-phone-bubble--guide">What changes as it spreads?</div>
      </div>
    </div>

    <figcaption class="showcase-caption"><span /> Concept visual · not a live product screen</figcaption>
  </figure>
</template>

<script setup lang="ts">
import { BookOpen, Sparkles } from 'lucide-vue-next'
</script>
