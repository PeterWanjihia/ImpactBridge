<script setup lang="ts">
import { Play, ArrowRight, Clock, FileText, Camera } from '@lucide/vue'
import type { StoriesStoryItem } from '~/types'

interface Props {
  stories: StoriesStoryItem[]
}

defineProps<Props>()

const typeLabels: Record<string, string> = {
  learner: 'LEARNER STORY',
  teacher: 'TEACHER STORY',
  school: 'SCHOOL STORY',
  partner: 'PARTNERSHIP STORY',
}

const typeColors: Record<string, string> = {
  learner: 'bg-cobalt/10 text-cobalt',
  teacher: 'bg-teal/10 text-teal',
  school: 'bg-green-100 text-green-700',
  partner: 'bg-purple-100 text-purple-700',
}

const mediaIcons: Record<string, any> = {
  video: Play,
  photo: Camera,
  article: FileText,
}

function getMediaLabel(type?: string): string {
  if (type === 'video') return 'Video'
  if (type === 'photo') return 'Photo Story'
  if (type === 'article') return 'Article'
  return 'Story'
}
</script>

<template>
  <section class="stories-grid-section">
    <LayoutContainer>
      <div class="stories-grid">
        <div
          v-for="story in stories"
          :key="story.id"
          :class="[
            'stories-grid-card',
            `stories-grid-card--${story.type}`,
          ]"
        >
          <div class="stories-grid-card-image">
            <img :src="story.imageUrl" :alt="story.imageAlt" class="stories-grid-card-img" />
            <div v-if="story.mediaType === 'video'" class="stories-grid-card-play">
              <Play class="w-6 h-6 text-white" />
            </div>
          </div>
          <div class="stories-grid-card-content">
            <UiBadge :class="typeColors[story.type]" size="sm">
              {{ typeLabels[story.type] || story.type }}
            </UiBadge>
            <h3 class="stories-grid-card-title">{{ story.title }}</h3>
            <p class="stories-grid-card-summary">{{ story.summary }}</p>
            <div class="stories-grid-card-meta">
              <span v-if="story.mediaType" class="stories-grid-card-meta-item">
                <component :is="mediaIcons[story.mediaType] || FileText" class="w-4 h-4" />
                {{ getMediaLabel(story.mediaType) }}
              </span>
              <span v-if="story.mediaDuration" class="stories-grid-card-meta-item">
                <Clock class="w-4 h-4" />
                {{ story.mediaDuration }}
              </span>
              <span v-if="story.readTime" class="stories-grid-card-meta-item">
                {{ story.readTime }}
              </span>
            </div>
            <NuxtLink :to="`/stories/${story.slug}`" class="stories-grid-card-link">
              Read the story <ArrowRight class="w-4 h-4" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.stories-grid-section {
  @apply py-12 md:py-16;
}

.stories-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
}

.stories-grid-card {
  @apply bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100;
}

.stories-grid-card-image {
  @apply relative aspect-video overflow-hidden;
}

.stories-grid-card-img {
  @apply w-full h-full object-cover;
}

.stories-grid-card-play {
  @apply absolute inset-0 flex items-center justify-center bg-navy/30;
}

.stories-grid-card-content {
  @apply p-5;
}

.stories-grid-card-title {
  @apply mt-3 text-lg font-serif font-bold text-navy leading-snug;
}

.stories-grid-card-summary {
  @apply mt-2 text-sm text-gray-600 leading-relaxed line-clamp-3;
}

.stories-grid-card-meta {
  @apply mt-4 flex items-center gap-3 text-xs text-gray-500;
}

.stories-grid-card-meta-item {
  @apply flex items-center gap-1;
}

.stories-grid-card-link {
  @apply mt-3 inline-flex items-center gap-1.5 text-sm font-sans font-semibold text-cobalt hover:text-cobalt/80 transition-colors;
}
</style>
