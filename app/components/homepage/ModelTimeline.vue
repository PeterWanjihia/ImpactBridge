<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'
import type { Component } from 'vue'

defineProps<{
  steps: Array<{
    iconKey: string
    number: string
    title: string
    description: string
  }>
  iconMap: Record<string, Component>
}>()
</script>

<template>
  <LayoutSection class="model-section">
    <LayoutContainer>
      <div class="model-grid">
        <div class="model-content">
          <div class="model-header">
            <p class="model-eyebrow">OUR MODEL</p>
            <h2 class="model-title">A simple model. Lasting change.</h2>
          </div>

          <div class="model-timeline">
            <div v-for="(step, index) in steps" :key="index" class="model-step">
              <div class="model-step-wrapper">
                <div class="model-step-icon-badge">
                  <component :is="iconMap[step.iconKey]" class="w-6 h-6 text-blue-600" />
                </div>
                <ArrowRight
                  v-if="index < steps.length - 1"
                  class="model-step-arrow"
                />
              </div>
              <h3 class="model-step-title">
                <span class="model-step-number">{{ step.number }}. </span>{{ step.title }}
              </h3>
              <p class="model-step-description">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </LayoutContainer>
  </LayoutSection>
</template>

<style scoped>
.model-section {
  @apply relative bg-white py-16 lg:py-24;
}
.model-header {
  @apply text-center mb-16;
}
.model-eyebrow {
  @apply text-xs font-sans font-bold text-blue-600 uppercase tracking-widest mb-2;
}
.model-title {
  @apply text-3xl md:text-4xl font-serif font-bold text-gray-900 tracking-tight;
}
.model-timeline {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 items-start w-full;
}
.model-step {
  @apply flex flex-col items-center text-center relative px-2;
}
.model-step-wrapper {
  @apply relative flex items-center justify-center w-full mb-5;
}
.model-step-icon-badge {
  @apply w-16 h-16 rounded-full bg-blue-50/80 flex items-center justify-center flex-shrink-0 transition-transform duration-200 hover:scale-105;
}
.model-step-arrow {
  @apply hidden lg:block w-4 h-4 text-blue-500 absolute -right-2 top-1/2 -translate-y-1/2 z-10;
}
.model-step-title {
  @apply text-[15px] font-sans font-bold text-gray-900 leading-snug;
}
.model-step-number {
  @apply font-bold text-gray-900;
}
.model-step-description {
  @apply mt-2 text-[13px] font-sans text-gray-600 leading-relaxed max-w-[200px] mx-auto;
}
</style>
