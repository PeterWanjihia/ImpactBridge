<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'
import type { StoriesPhotoEssay as PhotoEssayType } from '~/types'

interface Props {
  data: PhotoEssayType
}

defineProps<Props>()
</script>

<template>
  <LayoutSection background="white">
    <LayoutContainer>
      <div class="stories-photo-essay-header">
        <h2 class="stories-photo-essay-title">{{ data.title }}</h2>
        <NuxtLink :to="data.ctaTo" class="stories-photo-essay-link">
          {{ data.ctaText }} <ArrowRight class="w-4 h-4" />
        </NuxtLink>
      </div>

      <div class="stories-photo-essay-steps">
        <div
          v-for="step in data.steps"
          :key="step.number"
          class="stories-photo-essay-step"
        >
          <div class="stories-photo-essay-step-number">
            {{ step.number }}
          </div>
          <div class="stories-photo-essay-step-image">
            <img :src="step.imageUrl" :alt="step.imageAlt" class="stories-photo-essay-step-img" />
          </div>
          <h4 class="stories-photo-essay-step-title">{{ step.title }}</h4>
          <p class="stories-photo-essay-step-desc">{{ step.description }}</p>
        </div>
      </div>
    </LayoutContainer>
  </LayoutSection>
</template>

<style scoped>
.stories-photo-essay-header {
  @apply flex items-end justify-between mb-10;
}

.stories-photo-essay-title {
  @apply text-3xl md:text-4xl font-serif font-bold text-navy;
}

.stories-photo-essay-link {
  @apply text-sm font-sans font-semibold text-cobalt hover:text-cobalt/80 transition-colors flex items-center gap-1;
}

.stories-photo-essay-steps {
  @apply grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4;
}

.stories-photo-essay-step {
  @apply relative;
}

.stories-photo-essay-step-number {
  @apply absolute -top-2 -left-2 w-7 h-7 rounded-full bg-cobalt text-white text-xs font-sans font-bold flex items-center justify-center z-10;
}

.stories-photo-essay-step-image {
  @apply aspect-square rounded-lg overflow-hidden mb-3;
}

.stories-photo-essay-step-img {
  @apply w-full h-full object-cover;
}

.stories-photo-essay-step-title {
  @apply text-sm font-sans font-semibold text-navy leading-snug;
}

.stories-photo-essay-step-desc {
  @apply mt-1 text-xs text-gray-500 leading-relaxed;
}
</style>
