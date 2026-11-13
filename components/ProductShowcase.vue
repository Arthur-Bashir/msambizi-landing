<template>
  <figure
    class="product-showcase"
    role="img"
    aria-label="Illustrative Msambizi tutor experience shown on a laptop and phone. The sample academic conversation is conceptual and is not a live product screenshot."
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
            <span>app.msambizi.school <i>/ tutor</i></span>
            <span class="showcase-product-label">AI TUTOR</span>
          </div>
          <div class="showcase-app-content">
            <header class="showcase-app-header">
              <img src="/brand/msambizi-logo-on-dark.webp" alt="" width="112" height="44" />
              <span class="showcase-session-label"><i /> Illustrative experience</span>
            </header>
            <div class="showcase-chat-title">
              <span class="showcase-avatar"><Sparkles :size="15" /></span>
              <span><strong>Academic conversation</strong><small>A conceptual example</small></span>
            </div>
            <div class="showcase-message showcase-message--student">
              <span>STUDENT</span>
              <p>How can I think about the relationship between energy and entropy?</p>
            </div>
            <div class="showcase-message showcase-message--tutor">
              <span>MSAMBIZI · ILLUSTRATIVE</span>
              <p>Begin by considering how energy spreads through a system. Which change would make that energy less concentrated?</p>
              <small><MessageCircle :size="12" /> A prompt to continue thinking</small>
            </div>
            <div class="showcase-input"><span>Continue the conversation</span><ArrowUp :size="15" /></div>
          </div>
        </div>
      </div>
      <div class="showcase-laptop-base"><span /></div>
    </div>

    <div class="showcase-phone" aria-hidden="true">
      <div class="showcase-phone-camera" />
      <div class="showcase-phone-screen">
        <div class="showcase-phone-status"><span>9:41</span><i>● ● ●</i></div>
        <div class="showcase-phone-header">
          <img src="/brand/msambizi-logo-on-dark.webp" alt="" width="86" height="34" />
          <span><MoreHorizontal :size="16" /></span>
        </div>
        <div class="showcase-phone-title"><span class="showcase-avatar"><Sparkles :size="13" /></span><strong>Academic conversation</strong></div>
        <div class="showcase-phone-bubble showcase-phone-bubble--student">How does energy spread through a system?</div>
        <div class="showcase-phone-bubble showcase-phone-bubble--tutor">What might happen to its concentration as it spreads?</div>
        <div class="showcase-phone-input"><span>Write a message</span><ArrowUp :size="13" /></div>
      </div>
    </div>

    <figcaption class="showcase-caption"><span /> Concept visual · not a live product screen</figcaption>
  </figure>
</template>

<script setup lang="ts">
import { ArrowUp, BookOpen, MessageCircle, MoreHorizontal, Sparkles } from 'lucide-vue-next'
</script>
