<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  timeline: {
    steps: Array<{
      iconKey: string
      title: string
    }>
  }
  iconMap: Record<string, Component>
}>()

const phases = ['PREPARE', 'BUILD', 'LAUNCH', 'SUSTAIN']
</script>

<template>
  <section class="model-timeline">
    <LayoutContainer>
      <div class="model-timeline-layout">
        <!-- Header -->
        <div class="model-timeline-header">
          <span class="model-timeline-number">07</span>
          <h2 class="model-timeline-title">From preparation<br />to long-term<br />impact.</h2>
          <p class="model-timeline-description">
            A proven process we follow for every hub.
          </p>
        </div>

        <!-- Timeline -->
        <div class="model-timeline-track">
          <!-- Phase Labels -->
          <div class="model-timeline-phases">
            <div v-for="phase in phases" :key="phase" class="model-timeline-phase">
              <span class="model-timeline-phase-label">{{ phase }}</span>
            </div>
          </div>

          <!-- Timeline Line -->
          <div class="model-timeline-line" aria-hidden="true">
            <svg class="model-timeline-line-svg" viewBox="0 0 1000 4" preserveAspectRatio="none">
              <line x1="0" y1="2" x2="1000" y2="2" class="stroke-navy-300" stroke-width="2" stroke-dasharray="8 4" />
            </svg>
          </div>

          <!-- Steps -->
          <div class="model-timeline-steps">
            <div v-for="step in timeline.steps" :key="step.title" class="model-timeline-step">
              <div class="model-timeline-step-dot" />
              <div class="model-timeline-step-icon">
                <component :is="iconMap[step.iconKey]" />
              </div>
              <span class="model-timeline-step-label">{{ step.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.model-timeline {
  @apply py-section-sm md:py-section bg-white;
}
.model-timeline-layout {
  @apply grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-8 items-start;
}
.model-timeline-header {
  @apply lg:sticky lg:top-8;
}
.model-timeline-number {
  @apply inline-flex items-center justify-center w-10 h-10 rounded-full bg-cobalt/10 text-cobalt font-sans font-bold text-sm;
}
.model-timeline-title {
  @apply mt-4 text-3xl md:text-4xl font-display font-bold text-navy leading-tight;
}
.model-timeline-description {
  @apply mt-4 text-gray-600;
}
.model-timeline-track {
  @apply relative pt-8 pb-12;
}

/* Phase Labels */
.model-timeline-phases {
  @apply grid grid-cols-4 gap-0 mb-8;
}
.model-timeline-phase {
  @apply text-center border-l border-gray-200 first:border-l-0;
}
.model-timeline-phase-label {
  @apply text-xs font-sans font-bold text-cobalt tracking-wider;
}

/* Timeline Line */
.model-timeline-line {
  @apply relative mb-6;
}
.model-timeline-line-svg {
  @apply w-full h-1;
}

/* Steps */
.model-timeline-steps {
  @apply grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-11 gap-4 relative z-10;
}
.model-timeline-step {
  @apply flex flex-col items-center text-center;
}
.model-timeline-step-dot {
  @apply w-3 h-3 rounded-full bg-cobalt mb-3 flex-shrink-0;
}
.model-timeline-step-icon {
  @apply w-14 h-14 rounded-full border-2 border-cobalt/20 bg-white flex items-center justify-center text-cobalt mb-3;
}
.model-timeline-step-label {
  @apply text-xs font-sans font-bold text-navy leading-snug;
}
</style>
