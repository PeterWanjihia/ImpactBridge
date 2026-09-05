<script setup lang="ts">
import { Play, ArrowRight, Clock, FileText, Camera, SearchX } from '@lucide/vue'
import type { StoriesStoryItem } from '~/types'

interface Props {
  stories: StoriesStoryItem[]
}

defineProps<Props>()

const typeLabels: Record<string, string> = {
  learner: 'LEARNER STORY',
  teacher: 'TEACHER STORY',
  school: 'SCHOOL STORY',
  classroom: 'CLASSROOM STORY',
  community: 'COMMUNITY STORY',
  partner: 'PARTNERSHIP STORY',
}

const typeColors: Record<string, string> = {
  learner: 'text-indigo-900',
  teacher: 'text-red-900',
  school: 'text-indigo-900',
  classroom: 'text-indigo-900',
  community: 'text-indigo-900',
  partner: 'text-indigo-900',
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
  <section class="stories-grid-section bg-gray-50/50">
    <LayoutContainer>
      <!-- Empty state -->
      <div v-if="!stories.length" class="stories-grid-empty">
        <SearchX class="w-12 h-12 text-gray-300 mb-4" />
        <h3 class="stories-grid-empty-title">No stories found</h3>
        <p class="stories-grid-empty-desc">
          There are no stories matching this filter yet. Try selecting a different category.
        </p>
        <slot name="empty-action" />
      </div>

      <!-- Story cards -->
      <TransitionGroup
        v-else
        tag="div"
        name="stories-grid"
        class="stories-grid"
      >
        <div
          v-for="story in stories"
          :key="story.id"
          :class="[
            'stories-grid-card',
            `stories-grid-card--${story.id}`
          ]"
        >
          <!-- Text Content Section -->
          <div class="stories-grid-card-content">
            <div class="space-y-2">
              <span 
                class="text-[11px] font-extrabold tracking-wider uppercase inline-block"
                :class="typeColors[story.type] || 'text-indigo-900'"
              >
                {{ typeLabels[story.type] || story.type }}
              </span>
              
              <h3 class="stories-grid-card-title">{{ story.title }}</h3>
              <p class="stories-grid-card-summary">{{ story.summary }}</p>
            </div>

            <div class="mt-6 space-y-3">
              <div class="stories-grid-card-meta">
                <span v-if="story.mediaType" class="stories-grid-card-meta-item">
                  <component :is="mediaIcons[story.mediaType] || FileText" class="w-3.5 h-3.5" />
                  {{ getMediaLabel(story.mediaType) }}
                </span>
                <span v-if="story.mediaDuration" class="stories-grid-card-meta-item">
                  <Clock class="w-3.5 h-3.5" />
                  {{ story.mediaDuration }}
                </span>
                <span v-if="story.readTime" class="stories-grid-card-meta-item">
                  {{ story.readTime }}
                </span>
              </div>

              <NuxtLink :to="`/stories/${story.slug}`" class="stories-grid-card-link">
                Read the story <ArrowRight class="w-3.5 h-3.5" />
              </NuxtLink>
            </div>
          </div>

          <!-- Image Section -->
          <div class="stories-grid-card-image">
            <img :src="story.imageUrl" :alt="story.imageAlt" class="stories-grid-card-img" />
            
            <!-- Floating play icon button matching mockup -->
            <div v-if="story.mediaType === 'video'" class="stories-grid-card-play">
              <div class="w-12 h-12 rounded-full border-2 border-white/80 bg-black/30 backdrop-blur-xs flex items-center justify-center">
                <Play class="w-5 h-5 text-white fill-white translate-x-0.5" />
              </div>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.stories-grid-section {
  @apply py-8 md:py-12;
}

/* 12-column Grid Layout setup matching design */
.stories-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5;
}

.stories-grid-card {
  @apply bg-white rounded-2xl overflow-hidden shadow-xs border border-gray-200/80 flex flex-col sm:flex-row h-full;
}

/* Row 1 layout */
.stories-grid-card--1 {
  @apply lg:col-span-7;
}
.stories-grid-card--2 {
  @apply lg:col-span-5;
}

/* Row 2 layout */
.stories-grid-card--3 {
  @apply lg:col-span-4;
}
.stories-grid-card--4 {
  @apply lg:col-span-4;
}
.stories-grid-card--5 {
  @apply lg:col-span-4;
}

/* Row 3 layout */
.stories-grid-card--6 {
  @apply lg:col-span-12;
}

.stories-grid-card-content {
  @apply p-6 flex flex-col justify-between flex-1 sm:w-1/2 lg:w-[48%];
}

.stories-grid-card-title {
  @apply text-xl font-serif font-bold text-slate-900 leading-snug tracking-tight;
}

.stories-grid-card-summary {
  @apply text-xs text-gray-500 leading-relaxed font-sans;
}

.stories-grid-card-meta {
  @apply flex items-center gap-3 text-xs text-gray-500 font-medium;
}

.stories-grid-card-meta-item {
  @apply flex items-center gap-1.5;
}

.stories-grid-card-link {
  @apply inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors;
}

.stories-grid-card-image {
  @apply relative sm:w-1/2 lg:w-[52%] min-h-[220px] sm:min-h-full overflow-hidden;
}

.stories-grid-card-img {
  @apply w-full h-full object-cover;
}

.stories-grid-card-play {
  @apply absolute inset-0 flex items-center justify-center;
}

.stories-grid-empty {
  @apply col-span-full flex flex-col items-center justify-center py-16 text-center;
}

.stories-grid-empty-title {
  @apply text-xl font-serif font-bold text-navy;
}

.stories-grid-empty-desc {
  @apply mt-2 text-sm text-gray-500 max-w-sm;
}
</style>