<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  steps: Array<{
    iconKey: string
    title: string
    description: string
  }>
  iconMap: Record<string, Component>
}>()
</script>

<template>
  <section id="overview" class="model-glance">
    <LayoutContainer>
      <div class="model-glance-layout">
        <!-- Header -->
        <div class="model-glance-header">
          <span class="model-glance-number">01</span>
          <h2 class="model-glance-title">The model<br />at a glance</h2>
          <p class="model-glance-description">
            Every component is useful on its own. Real learning happens when they work together.
          </p>
        </div>

        <!-- Flow Diagram -->
        <div class="model-glance-flow">
          <!-- Top horizontal dashed connector -->
          <div class="model-glance-dashed-line" aria-hidden="true" />

          <!-- 6-step horizontal row -->
          <div class="model-glance-steps">
            <div v-for="step in steps" :key="step.title" class="model-glance-step">
              <div class="model-glance-step-circle">
                <component :is="iconMap[step.iconKey]" class="w-6 h-6" />
              </div>
              <h3 class="model-glance-step-title">{{ step.title }}</h3>
              <p class="model-glance-step-description">{{ step.description }}</p>
            </div>
          </div>

          <!-- Bottom bracket connector lines (from step 1 and step 6 down to the badge) -->
          <div class="model-glance-bracket-wrap" aria-hidden="true">
            <svg class="model-glance-bracket-svg" viewBox="0 0 1000 70" fill="none" preserveAspectRatio="none">
              <path d="M 83.33 0 V 45 Q 83.33 60 98.33 60 H 280" class="stroke-cobalt-200" stroke-width="1.5"
                stroke-dasharray="4 4" />
              <path d="M 916.67 0 V 45 Q 916.67 60 901.67 60 H 720" class="stroke-cobalt-200" stroke-width="1.5"
                stroke-dasharray="4 4" />
            </svg>
          </div>

          <!-- Functioning Classroom Pill Badge -->
          <div class="model-glance-result">
            <div class="model-glance-result-icon">
              <component :is="iconMap['group']" class="w-5 h-5 text-cobalt" />
            </div>
            <span class="model-glance-result-label">A functioning classroom.</span>
            <div class="model-glance-result-fingerprint">
              <component :is="iconMap['biometric']" class="w-7 h-7 text-cobalt/70" />
            </div>
          </div>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.model-glance {
  @apply py-section-sm md:py-section bg-gray-50;
}
.model-glance-layout {
  @apply grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-12 items-start;
}
.model-glance-header {
  @apply lg:sticky lg:top-8;
}
.model-glance-number {
  @apply inline-flex items-center justify-center w-10 h-10 rounded-full bg-cobalt/10 text-cobalt font-sans font-bold text-sm;
}
.model-glance-title {
  @apply mt-4 text-3xl md:text-4xl font-display font-bold text-navy leading-tight;
}
.model-glance-description {
  @apply mt-4 text-gray-600 text-sm leading-relaxed;
}

/* Flow Container */
.model-glance-flow {
  @apply relative flex flex-col items-center w-full;
}
.model-glance-dashed-line {
  @apply absolute top-7 left-[8.33%] right-[8.33%] h-px border-t border-dashed border-navy-200 z-0 pointer-events-none;
}

/* 6-step Grid */
.model-glance-steps {
  @apply relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full;
}
.model-glance-step {
  @apply flex flex-col items-center text-center px-1;
}
.model-glance-step-circle {
  @apply w-14 h-14 rounded-full border border-navy-200 bg-white flex items-center justify-center text-cobalt shadow-elevation-1 mb-4 transition-transform hover:scale-105;
}
.model-glance-step-title {
  @apply text-sm font-sans font-bold text-navy leading-snug;
}
.model-glance-step-description {
  @apply mt-2 text-xs text-gray-500 leading-relaxed max-w-[150px];
}

/* Bracket SVG Wrapper */
.model-glance-bracket-wrap {
  @apply hidden lg:block w-full h-16 relative mt-2 z-0 pointer-events-none;
}
.model-glance-bracket-svg {
  @apply w-full h-full;
}

/* Central Pill Badge */
.model-glance-result {
  @apply relative z-10 flex items-center justify-between gap-6 px-6 py-3.5 mt-4 lg:-mt-3 bg-navy-50/60 border border-navy-200/80 rounded-full max-w-md w-full shadow-elevation-1;
}
.model-glance-result-icon {
  @apply flex items-center justify-center flex-shrink-0;
}
.model-glance-result-label {
  @apply text-base font-sans font-bold text-cobalt tracking-wide text-center flex-1;
}
.model-glance-result-fingerprint {
  @apply flex items-center justify-center flex-shrink-0 opacity-80;
}
</style>
