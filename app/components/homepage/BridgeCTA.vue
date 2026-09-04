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
        <path d="M0 300L100 120L200 300L300 80L400 300" stroke="#2563eb" stroke-width="1.5" />
        <path d="M50 300L150 180L250 300L350 140" stroke="#1d4ed8" stroke-width="1.5" />
        <path d="M100 120L300 80" stroke="#2563eb" stroke-width="1.5" />
        <path d="M0 200L400 200" stroke="#1e40af" stroke-width="1" />
        <path d="M0 250L400 250" stroke="#1e40af" stroke-width="1" />
        <circle cx="100" cy="120" r="3" fill="#60a5fa" />
        <circle cx="300" cy="80" r="3" fill="#60a5fa" />
      </svg>
    </div>

    <div class="bridge-cta-inner">
      <div class="bridge-cta-content">
        <h2 class="bridge-cta-title">{{ cta.title }}</h2>
        <p class="bridge-cta-description">{{ cta.description }}</p>
      </div>
      <div class="bridge-cta-actions">
        <NuxtLink :to="cta.primaryCta.to" class="bridge-btn bridge-btn-primary">
          <Heart class="w-5 h-5 text-white stroke-[2]" />
          <span>{{ cta.primaryCta.text }}</span>
        </NuxtLink>
        <NuxtLink :to="cta.secondaryCta.to" class="bridge-btn bridge-btn-outline">
          <Building2 class="w-5 h-5 text-white" />
          <span>{{ cta.secondaryCta.text }}</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bridge-cta-section {
  @apply relative overflow-hidden bg-gradient-to-r from-[#011438] via-[#032363] to-[#011233] text-white py-12 md:py-16;
}
.bridge-cta-graphic {
  @apply absolute left-0 top-0 bottom-0 w-[45%] pointer-events-none z-0 mix-blend-screen;
}
.bridge-cta-inner {
  @apply max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10;
}
.bridge-cta-content {
  @apply text-left max-w-xl;
}
.bridge-cta-title {
  @apply text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-white leading-tight;
}
.bridge-cta-description {
  @apply mt-2 text-base md:text-lg font-sans text-gray-200 font-normal opacity-90;
}
.bridge-cta-actions {
  @apply flex flex-wrap items-center gap-4;
}
.bridge-btn {
  @apply inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-sans text-sm font-semibold transition-all duration-200 shadow-md;
}
.bridge-btn-primary {
  @apply bg-[#1450f5] hover:bg-[#0f43d4] text-white border border-transparent;
}
.bridge-btn-outline {
  @apply bg-transparent text-white border-2 border-[#00c4cc] hover:bg-[#00c4cc]/10;
}
</style>
