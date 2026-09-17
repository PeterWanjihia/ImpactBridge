<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'

defineProps<{
  lesson: {
    steps: Array<{
      number: string
      title: string
      description: string
      image: string
      alt: string
    }>
  }
}>()
</script>

<template>
  <section id="deployment" class="model-lesson">
    <LayoutContainer>
      <div class="model-lesson-layout">
        <!-- Header -->
        <div class="model-lesson-header">
          <span class="model-lesson-number">06</span>
          <h2 class="model-lesson-title">What one lesson<br />looks like impact.</h2>
          <p class="model-lesson-description">
            Technology supports the lesson.<br />The teacher leads it.
          </p>
          <NuxtLink to="/our-story" class="model-lesson-link">
            Watch a lesson in action
            <ArrowRight class="w-4 h-4" />
          </NuxtLink>
        </div>

        <!-- Lesson Steps -->
        <div class="model-lesson-steps">
          <div v-for="step in lesson.steps" :key="step.number" class="model-lesson-step">
            <div class="model-lesson-step-badge">
              <span class="model-lesson-step-num">{{ step.number }}</span>
              <span class="model-lesson-step-title">{{ step.title }}</span>
            </div>
            <p class="model-lesson-step-description">{{ step.description }}</p>
            <ClientOnly>
              <div class="model-lesson-step-image">
                <img :src="step.image" :alt="step.alt" class="model-lesson-step-img" loading="lazy" />
              </div>
              <template #fallback>
                <div class="model-lesson-step-image model-lesson-step-image--placeholder" />
              </template>
            </ClientOnly>
          </div>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.model-lesson {
  @apply py-section-sm md:py-section bg-white;
}
.model-lesson-layout {
  @apply grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-8 items-start;
}
.model-lesson-header {
  @apply lg:sticky lg:top-8;
}
.model-lesson-number {
  @apply inline-flex items-center justify-center w-10 h-10 rounded-full bg-cobalt/10 text-cobalt font-sans font-bold text-sm;
}
.model-lesson-title {
  @apply mt-4 text-3xl md:text-4xl font-display font-bold text-navy leading-tight;
}
.model-lesson-description {
  @apply mt-4 text-gray-600;
}
.model-lesson-link {
  @apply mt-6 inline-flex items-center gap-2 text-cobalt font-sans font-semibold text-sm hover:text-cobalt/80 transition-colors;
}

/* Lesson Steps */
.model-lesson-steps {
  @apply grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5;
}
.model-lesson-step {
  @apply flex flex-col;
}
.model-lesson-step-badge {
  @apply flex items-center gap-2 mb-2;
}
.model-lesson-step-num {
  @apply inline-flex items-center justify-center w-7 h-7 rounded-full bg-cobalt text-white text-xs font-sans font-bold flex-shrink-0;
}
.model-lesson-step-title {
  @apply text-base font-sans font-bold text-navy;
}
.model-lesson-step-description {
  @apply text-xs text-gray-500 leading-relaxed mb-3;
}
.model-lesson-step-image {
  @apply relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-100;
}
.model-lesson-step-image--placeholder {
  @apply bg-gray-200;
}
.model-lesson-step-img {
  @apply w-full h-full object-cover;
}
</style>
