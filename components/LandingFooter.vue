<template>
  <footer class="site-footer">
    <div class="page-container footer-main">
      <a href="#top" class="brand-lockup" aria-label="Msambizi home">
        <img class="brand-logo brand-logo--dark" src="/brand/msambizi-logo-on-dark.webp" alt="Msambizi — Ask, Learn, Excel" width="445" height="176" />
        <img class="brand-logo brand-logo--light" src="/brand/msambizi-logo-on-light.webp" alt="Msambizi — Ask, Learn, Excel" width="453" height="176" />
      </a>
      <p>Ask. Learn. Excel. With educators guiding the way.</p>
      <nav aria-label="Footer navigation">
        <a href="#vision">Our vision</a>
        <a href="#institutions">For institutions</a>
        <a href="mailto:support@msambizi.school?subject=Engage%20with%20the%20Msambizi%20team">Contact Msambizi</a>
      </nav>
    </div>
    <div class="page-container footer-bottom"><span>© {{ year }} Msambizi</span><span>Institutional technology for higher education</span></div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
