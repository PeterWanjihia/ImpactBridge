<script setup lang="ts">
import { Heart, Building2 } from '@lucide/vue'

defineProps<{
  cta: {
    title: string
    description: string
    primaryCta: { text: string; to: string }
    secondaryCta: { text: string; to: string }
  }
}>()
</script>

<template>
  <section class="bridge-cta-section">
    <div class="bridge-cta-graphic">
      <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full opacity-35">
        <path d="M0 300L100 120L200 300L300 80L400 300" class="stroke-cobalt" stroke-width="1.5" />
        <path d="M50 300L150 180L250 300L350 140" class="stroke-cobalt-700" stroke-width="1.5" />
        <path d="M100 120L300 80" class="stroke-cobalt" stroke-width="1.5" />
        <path d="M0 200L400 200" class="stroke-cobalt-800" stroke-width="1" />
        <path d="M0 250L400 250" class="stroke-cobalt-800" stroke-width="1" />
        <circle cx="100" cy="120" r="3" class="fill-cobalt-400" />
        <circle cx="300" cy="80" r="3" class="fill-cobalt-400" />
      </svg>
    </div>

    <LayoutContainer class="bridge-cta-inner">
      <div class="bridge-cta-content">
        <h2 class="bridge-cta-title">{{ cta.title }}</h2>
        <p class="bridge-cta-description">{{ cta.description }}</p>
      </div>
      <div class="bridge-cta-actions">
        <UiButton :to="cta.primaryCta.to" variant="primary" size="lg" class="bridge-btn-primary shadow-elevation-2">
          <Heart class="w-5 h-5 text-white stroke-[2]" />
          <span>{{ cta.primaryCta.text }}</span>
        </UiButton>
        <UiButton :to="cta.secondaryCta.to" variant="outline-white" size="lg" class="bridge-btn-outline shadow-elevation-2">
          <Building2 class="w-5 h-5 text-white" />
          <span>{{ cta.secondaryCta.text }}</span>
        </UiButton>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.bridge-cta-section {
  @apply relative overflow-hidden bg-gradient-to-r from-ink via-ink-soft to-ink text-white py-section-sm md:py-section;
}
.bridge-cta-graphic {
  @apply absolute left-0 top-0 bottom-0 w-2/5 pointer-events-none z-0 mix-blend-screen;
}
.bridge-cta-inner {
  @apply flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10;
}
.bridge-cta-content {
  @apply text-left max-w-xl;
}
.bridge-cta-title {
  @apply text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight;
}
.bridge-cta-description {
  @apply mt-2 text-base md:text-lg font-sans text-gray-200 font-normal opacity-90;
}
.bridge-cta-actions {
  @apply flex flex-wrap items-center gap-4;
}
.bridge-btn-primary {
  @apply bg-bridge hover:bg-bridge-deep text-white border border-transparent;
}
.bridge-btn-outline {
  @apply bg-transparent text-white border-2 border-aqua hover:bg-aqua/10;
}
</style>
