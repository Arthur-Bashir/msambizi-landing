<template>
  <footer class="site-footer">
    <div class="page-container footer-main">
      <a href="#top" class="brand-lockup" aria-label="Msambizi home">
        <img class="brand-logo brand-logo--dark" src="/brand/msambizi-logo-on-dark.webp" alt="Msambizi — Ask, Learn, Excel" width="445" height="176" />
        <img class="brand-logo brand-logo--light" src="/brand/msambizi-logo-on-light.webp" alt="Msambizi — Ask, Learn, Excel" width="453" height="176" />
      </a>
      <p>Ask. Learn. Excel. For universities and colleges.</p>
    </div>
    <div class="page-container footer-bottom">
      <span>© {{ year }} Msambizi · Illustrations are conceptual; no live product screens shown.</span>
      <nav aria-label="Footer navigation">
        <a href="#learning-story">How it works</a>
        <a href="#institutional-engagement">For institutions</a>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
