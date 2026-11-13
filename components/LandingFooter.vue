<template>
  <footer class="site-footer">
    <div class="page-container footer-main">
      <a href="#top" class="brand-lockup" aria-label="Msambizi home">
        <span class="brand-symbol" aria-hidden="true">M</span>
        <span class="brand-name">msambizi<span>.</span></span>
      </a>
      <p>For universities and colleges shaping the future of higher education.</p>
      <nav aria-label="Footer navigation">
        <a href="#vision">Our vision</a>
        <a href="#institutions">For institutions</a>
        <a href="mailto:support@msambizi.school?subject=Engage%20with%20the%20Msambizi%20team">Contact Msambizi</a>
        <a href="https://app.msambizi.school/login">Portal sign in <ArrowUpRight :size="13" aria-hidden="true" /></a>
      </nav>
    </div>
    <div class="page-container footer-bottom"><span>© {{ year }} Msambizi</span><span>Institutional technology for higher education</span></div>
  </footer>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
const year = new Date().getFullYear()
</script>
