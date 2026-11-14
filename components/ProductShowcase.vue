<template>
  <figure class="product-showcase" role="img" aria-label="Conceptual illustration of educator-guided learning across devices. This is not a live product screen." data-reveal @pointermove="handlePointerMove" @pointerleave="resetPointer">
    <div class="showcase-halo" aria-hidden="true" />
    <div class="showcase-float-label showcase-float-label--guided" aria-hidden="true">
      <span class="showcase-label-mark">✳</span>
      <span><strong>Educator-guided</strong><small>Learning shaped by people</small></span>
    </div>
    <div class="showcase-float-label showcase-float-label--materials" aria-hidden="true">
      <span class="showcase-label-mark showcase-label-mark--book">◌</span>
      <span><strong>Academic learning</strong><small>Grounded in approved materials</small></span>
    </div>

    <div class="showcase-laptop" aria-hidden="true">
      <div class="showcase-laptop-screen">
        <div class="showcase-concept-art">
          <svg class="showcase-orbit showcase-orbit--large" viewBox="0 0 520 300" fill="none">
            <path d="M63 232C128 90 350 54 463 163" />
            <path d="M74 96C184 239 340 254 448 86" />
            <path d="M100 270C208 174 319 104 425 48" />
            <circle cx="63" cy="232" r="7" /><circle cx="463" cy="163" r="7" />
            <circle cx="74" cy="96" r="6" /><circle cx="448" cy="86" r="6" />
            <circle cx="100" cy="270" r="5" /><circle cx="425" cy="48" r="5" />
          </svg>
          <div class="showcase-concept-center">
            <img src="/brand/msambizi-logo-on-dark.webp" alt="" />
            <span>Educator-guided learning</span>
          </div>
          <span class="showcase-concept-point showcase-concept-point--one" />
          <span class="showcase-concept-point showcase-concept-point--two" />
          <span class="showcase-concept-point showcase-concept-point--three" />
        </div>
      </div>
      <div class="showcase-laptop-base"><span /></div>
    </div>

    <div class="showcase-phone" aria-hidden="true">
      <div class="showcase-phone-camera" />
      <div class="showcase-phone-screen">
        <svg class="showcase-phone-orbit" viewBox="0 0 90 120" fill="none">
          <path d="M12 91C15 47 62 23 78 56M14 39c17 51 48 63 66 18M20 109c16-35 39-63 58-89" />
          <circle cx="12" cy="91" r="4" /><circle cx="78" cy="56" r="4" />
          <circle cx="14" cy="39" r="3" /><circle cx="80" cy="57" r="3" />
        </svg>
        <img class="showcase-phone-logo" src="/brand/msambizi-logo-on-dark.webp" alt="" />
        <span class="showcase-phone-accent" />
      </div>
    </div>
    <figcaption class="showcase-caption"><span />Conceptual representation · not a live product screen</figcaption>
  </figure>
</template>

<script setup lang="ts">
function handlePointerMove(event: PointerEvent) {
  if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const element = event.currentTarget as HTMLElement
  const bounds = element.getBoundingClientRect()
  element.style.setProperty('--pointer-x', String(((event.clientX - bounds.left) / bounds.width - 0.5) * 2))
  element.style.setProperty('--pointer-y', String(((event.clientY - bounds.top) / bounds.height - 0.5) * 2))
}

function resetPointer(event: PointerEvent) {
  const element = event.currentTarget as HTMLElement
  element.style.setProperty('--pointer-x', '0')
  element.style.setProperty('--pointer-y', '0')
}
</script>
