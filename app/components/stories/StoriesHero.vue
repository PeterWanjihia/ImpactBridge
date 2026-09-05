<script setup lang="ts">
import { Play, ArrowRight, Clock } from '@lucide/vue'
import type { StoriesHeroData, StoriesFeaturedStory } from '~/types'

interface Props {
  hero: StoriesHeroData
  featuredStory: StoriesFeaturedStory
}

defineProps<Props>()
</script>

<template>
  <section class="stories-hero">
    <div class="stories-hero-bg">
      <img :src="hero.imageUrl" :alt="hero.imageAlt" class="stories-hero-image" />
      <div class="stories-hero-overlay" />
    </div>
    <div class="stories-hero-content">
      <LayoutContainer>
        <div class="stories-hero-grid">
          <div class="stories-hero-text">
            <h1 class="stories-hero-title">
              {{ hero.title }}<span class="stories-hero-title-accent">{{ hero.titleAccent }}</span>
            </h1>
            <p class="stories-hero-description">{{ hero.description }}</p>
            <div class="stories-hero-actions">
              <UiButton variant="primary" size="lg">
                <NuxtLink :to="hero.primaryCta.to" class="flex items-center gap-2">
                  {{ hero.primaryCta.text }}
                  <Play class="w-4 h-4" />
                </NuxtLink>
              </UiButton>
              <UiButton variant="outline-white" size="lg">
                <NuxtLink :to="hero.secondaryCta.to" class="flex items-center gap-2">
                  {{ hero.secondaryCta.text }}
                  <ArrowRight class="w-4 h-4" />
                </NuxtLink>
              </UiButton>
            </div>
          </div>

          <!-- Featured Story Card -->
          <div class="stories-hero-card">
            <UiBadge variant="info" size="sm" class="mb-3">
              {{ featuredStory.eyebrow }}
            </UiBadge>
            <h3 class="stories-hero-card-title">{{ featuredStory.title }}</h3>
            <p class="stories-hero-card-summary">{{ featuredStory.summary }}</p>
            <div class="stories-hero-card-meta">
              <span class="stories-hero-card-meta-item">
                <Play class="w-4 h-4" />
                Video
              </span>
              <span v-if="featuredStory.mediaDuration" class="stories-hero-card-meta-item">
                <Clock class="w-4 h-4" />
                {{ featuredStory.mediaDuration }}
              </span>
            </div>
            <NuxtLink :to="`/stories/${featuredStory.slug}`" class="stories-hero-card-link">
              Read the story
              <ArrowRight class="w-4 h-4" />
            </NuxtLink>
          </div>
        </div>
      </LayoutContainer>
    </div>
  </section>
</template>

<style scoped>
.stories-hero {
  @apply relative min-h-[85vh] flex items-center overflow-hidden;
}

.stories-hero-bg {
  @apply absolute inset-0;
}

.stories-hero-image {
  @apply w-full h-full object-cover;
}

.stories-hero-overlay {
  @apply absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/50;
}

.stories-hero-content {
  @apply relative z-10 w-full py-20 md:py-24;
}

.stories-hero-grid {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-12 items-center;
}

.stories-hero-title {
  @apply text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight;
}

.stories-hero-title-accent {
  @apply italic text-cobalt relative;
}

.stories-hero-title-accent::after {
  content: '';
  @apply absolute -bottom-1 left-0 right-0 h-[3px] bg-cobalt rounded-full transform -rotate-1;
}

.stories-hero-description {
  @apply mt-6 text-lg text-gray-300 max-w-xl;
}

.stories-hero-actions {
  @apply mt-8 flex flex-wrap gap-4;
}

.stories-hero-card {
  @apply bg-white rounded-xl p-6 shadow-2xl max-w-sm justify-self-end;
}

.stories-hero-card-title {
  @apply text-xl font-serif font-bold text-gray-900 leading-tight;
}

.stories-hero-card-summary {
  @apply mt-3 text-sm text-gray-600 leading-relaxed;
}

.stories-hero-card-meta {
  @apply mt-4 flex items-center gap-4 text-sm text-gray-500;
}

.stories-hero-card-meta-item {
  @apply flex items-center gap-1.5;
}

.stories-hero-card-link {
  @apply mt-4 inline-flex items-center gap-2 text-sm font-sans font-semibold text-cobalt hover:text-cobalt/80 transition-colors;
}
</style>
