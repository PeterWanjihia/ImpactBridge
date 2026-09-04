<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'
import type { Component } from 'vue'
import modelHubEquipmentImage from '~/assets/images/model-hub-equipment-img.png'

defineProps<{
  hub: {
    features: Array<{
      iconKey: string
      label: string
    }>
  }
  iconMap: Record<string, Component>
}>()
</script>

<template>
  <section id="inside-the-hub" class="model-hub">
    <LayoutContainer class="relative z-10">
      <div class="model-hub-grid">

        <!-- Left Column: Header & CTA -->
        <div class="model-hub-header">
          <span class="model-hub-number">03</span>
          <h2 class="model-hub-title">Inside the<br />learning hub</h2>
          <p class="model-hub-description">
            Every component is chosen for a reason—solving a real classroom constraint.
          </p>
          <NuxtLink to="/transparency" class="model-hub-cta-btn">
            View technical specifications
            <ArrowRight class="w-4 h-4" />
          </NuxtLink>
        </div>

        <!-- Center Diagram Stage (Single Composite Graphic + Bottom Dock) -->
        <div class="model-hub-stage">
          <!-- Composite Graphic Container -->
          <div class="model-hub-graphic-wrap">
            <ClientOnly>
              <img :src="modelHubEquipmentImage" alt="Impact Bridge learning hub hardware equipment"
                class="model-hub-graphic-img" loading="lazy" />
              <template #fallback>
                <div class="model-hub-graphic-placeholder" />
              </template>
            </ClientOnly>
          </div>

          <!-- Integrated Bottom Feature Dock -->
          <div class="model-hub-feature-bar">
            <div v-for="feature in hub.features" :key="feature.label" class="model-hub-feature-card">
              <div class="model-hub-feature-icon-box">
                <component :is="iconMap[feature.iconKey]" class="w-4 h-4 text-cobalt-400" />
              </div>
              <span class="model-hub-feature-text">{{ feature.label }}</span>
            </div>
          </div>
        </div>

      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.model-hub {
  @apply relative py-16 md:py-24 bg-[#0a2540] overflow-hidden text-white;
}
.model-hub-grid {
  @apply grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-center;
}

/* Left Header Section */
.model-hub-header {
  @apply flex flex-col items-start;
}
.model-hub-number {
  @apply inline-flex items-center justify-center w-10 h-10 rounded-full border border-blue-400/30 text-blue-300 font-sans font-semibold text-xs mb-4;
}
.model-hub-title {
  @apply text-3xl md:text-4xl font-serif font-bold leading-tight text-white;
}
.model-hub-description {
  @apply mt-4 text-sm text-blue-100/70 leading-relaxed max-w-xs;
}
.model-hub-cta-btn {
  @apply mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-cobalt hover:bg-cobalt/90 text-white font-sans font-medium text-sm transition-colors shadow-lg shadow-cobalt/20;
}

/* Center Stage */
.model-hub-stage {
  @apply flex flex-col gap-6 w-full;
}
.model-hub-graphic-wrap {
  @apply relative w-full flex items-center justify-center overflow-hidden rounded-xl;
}
.model-hub-graphic-img {
  @apply w-full h-auto object-contain max-h-[480px] drop-shadow-xl;
}
.model-hub-graphic-placeholder {
  @apply w-full aspect-[16/9] bg-blue-950/40 rounded-xl animate-pulse;
}

/* Bottom Feature Dock */
.model-hub-feature-bar {
  @apply grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 bg-[#071d33]/90 border border-blue-500/20 rounded-xl p-3 gap-2 backdrop-blur-sm;
}
.model-hub-feature-card {
  @apply flex items-center gap-2.5 px-3 py-2 border-r border-blue-500/10 last:border-r-0;
}
.model-hub-feature-icon-box {
  @apply w-7 h-7 rounded border border-blue-400/20 bg-blue-900/40 flex items-center justify-center flex-shrink-0;
}
.model-hub-feature-text {
  @apply text-xs font-sans font-medium text-blue-100/80 leading-snug;
}
</style>
