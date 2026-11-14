<template>
  <section id="institutional-trust" class="institutional-trust-section" tabindex="-1">
    <div class="page-container">
      <div class="trust-heading" data-reveal>
        <p class="eyebrow"><span class="eyebrow-rule" /> For universities and colleges</p>
        <h2>Academic purpose. <em>Institutional priorities.</em></h2>
      </div>
      <div class="trust-accordion">
        <details v-for="(item, index) in considerations" :key="item.title" class="trust-item" data-reveal>
          <summary>
            <span class="trust-item-number">0{{ index + 1 }}</span>
            <span class="trust-item-title">{{ item.title }}</span>
            <span class="trust-item-icon" aria-hidden="true" />
          </summary>
          <div class="trust-item-content"><p>{{ item.detail }}</p></div>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const considerations = [
  { title: 'Academic alignment', detail: 'Discuss how approved academic materials inform the learning context at your university or college.' },
  { title: 'Educator involvement', detail: 'The intended approach keeps educators central in directing and supporting learning.' },
  { title: 'Responsible AI use', detail: 'Discuss the role and expectations for AI in a way that aligns with your institution’s academic priorities.' },
  { title: 'Institutional evaluation', detail: 'Specific privacy, security and compliance requirements should be confirmed directly with Msambizi during institutional evaluation.' },
]
</script>
