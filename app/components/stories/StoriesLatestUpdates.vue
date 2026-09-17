<script setup lang="ts">
import { ArrowRight, Heart } from '@lucide/vue'
import type { StoriesUpdateItem } from '~/types'

interface Props {
  updates: StoriesUpdateItem[]
}

defineProps<Props>()
</script>

<template>
  <LayoutSection background="white">
    <LayoutContainer>
      <div class="stories-updates-header">
        <h2 class="stories-updates-title">Latest from the field</h2>
        <NuxtLink to="/stories" class="stories-updates-link">
          See all updates <ArrowRight class="w-4 h-4" />
        </NuxtLink>
      </div>

      <div class="stories-updates-grid">
        <div
          v-for="update in updates"
          :key="update.id"
          class="stories-update-card"
        >
          <div class="stories-update-image">
            <NuxtImg :src="update.imageUrl" :alt="update.imageAlt" class="stories-update-img" width="400" height="240" loading="lazy" sizes="sm:100vw md:33vw lg:400px" />
          </div>
          <div class="stories-update-content">
            <p class="stories-update-date">{{ update.date }}</p>
            <h4 class="stories-update-title">{{ update.title }}</h4>
            <p class="stories-update-meta">{{ update.readTime }}</p>
          </div>
        </div>

        <!-- Share CTA card -->
        <div class="stories-update-card stories-update-card--cta">
          <div class="stories-update-cta-content">
            <Heart class="w-8 h-8 text-cobalt mb-3" />
            <h4 class="stories-update-cta-title">Share a story or tip</h4>
            <p class="stories-update-cta-desc">
              Know a school, teacher or learner story we should tell? Let us know.
            </p>
            <NuxtLink to="/contact" class="stories-update-cta-link">
              Share with us <ArrowRight class="w-4 h-4" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </LayoutContainer>
  </LayoutSection>
</template>

<style scoped>
.stories-updates-header {
  @apply flex items-end justify-between mb-10;
}

.stories-updates-title {
  @apply text-3xl md:text-4xl font-display font-bold text-navy;
}

.stories-updates-link {
  @apply text-sm font-sans font-semibold text-cobalt hover:text-cobalt/80 transition-colors flex items-center gap-1;
}

.stories-updates-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6;
}

.stories-update-card {
  @apply bg-white rounded-xl overflow-hidden shadow-elevation-1 border border-gray-100;
}

.stories-update-image {
  @apply aspect-video overflow-hidden;
}

.stories-update-img {
  @apply w-full h-full object-cover;
}

.stories-update-content {
  @apply p-4;
}

.stories-update-date {
  @apply text-2xs font-sans font-semibold text-cobalt uppercase tracking-eyebrow;
}

.stories-update-title {
  @apply mt-2 text-sm font-sans font-semibold text-navy leading-snug line-clamp-2;
}

.stories-update-meta {
  @apply mt-2 text-xs text-gray-500;
}

.stories-update-card--cta {
  @apply bg-gray-50 flex items-center;
}

.stories-update-cta-content {
  @apply p-6;
}

.stories-update-cta-title {
  @apply text-lg font-display font-bold text-navy;
}

.stories-update-cta-desc {
  @apply mt-2 text-sm text-gray-600 leading-relaxed;
}

.stories-update-cta-link {
  @apply mt-4 inline-flex items-center gap-1.5 text-sm font-sans font-semibold text-cobalt hover:text-cobalt/80 transition-colors;
}
</style>
