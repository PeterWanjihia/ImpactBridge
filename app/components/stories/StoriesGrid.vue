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
  partner: 'text-blue-700',
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
            `stories-grid-card--${story.id}`,
            story.type === 'partner' ? 'stories-grid-card--banner' : ''
          ]"
        >
          <!-- Full-bleed background image for Banner/Partner style -->
          <template v-if="story.type === 'partner'">
            <div class="stories-banner-image-wrapper">
              <img :src="story.imageUrl" :alt="story.imageAlt" loading="lazy" decoding="async" class="stories-banner-img" />
              <!-- Soft gradient blend overlay on the left -->
              <div class="stories-banner-gradient-overlay" />
            </div>

            <!-- Overlaid Content -->
            <div class="stories-banner-content">
              <div class="space-y-2 max-w-sm">
                <span class="text-[11px] font-black tracking-wider uppercase text-blue-700 inline-block">
                  {{ typeLabels[story.type] || story.type }}
                </span>
                
                <h3 class="text-2xl font-serif font-extrabold text-slate-900 leading-tight">
                  {{ story.title }}
                </h3>
                <p class="text-xs text-slate-600 font-medium leading-relaxed">
                  {{ story.summary }}
                </p>
              </div>

              <!-- Floating Metadata & Action Pill Bar -->
              <div class="mt-6 inline-flex items-center gap-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-slate-100 max-w-max">
                <div class="flex items-center gap-3 text-xs text-slate-600 font-semibold">
                  <span v-if="story.mediaType" class="flex items-center gap-1.5">
                    <component :is="mediaIcons[story.mediaType] || FileText" class="w-3.5 h-3.5 text-slate-700" />
                    {{ getMediaLabel(story.mediaType) }}
                  </span>
                  <span v-if="story.mediaDuration" class="flex items-center gap-1">
                    <Clock class="w-3.5 h-3.5 text-slate-500" />
                    {{ story.mediaDuration }}
                  </span>
                </div>

                <NuxtLink :to="`/stories/${story.slug}`" class="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors pl-2 border-l border-gray-200">
                  Read the story <ArrowRight class="w-3.5 h-3.5" />
                </NuxtLink>
              </div>
            </div>
          </template>

          <!-- Standard Card Layout -->
          <template v-else>
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

            <div class="stories-grid-card-image">
              <a
                v-if="story.mediaType === 'video' && story.mediaUrl"
                :href="story.mediaUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="stories-grid-card-video-link"
                :aria-label="`Play video: ${story.title}`"
              >
                <img :src="story.imageUrl" :alt="story.imageAlt" loading="lazy" decoding="async" class="stories-grid-card-img" />
                <div class="stories-grid-card-play">
                  <div class="w-12 h-12 rounded-full border-2 border-white/80 bg-black/30 backdrop-blur-xs flex items-center justify-center">
                    <Play class="w-5 h-5 text-white fill-white translate-x-0.5" />
                  </div>
                </div>
              </a>
              <template v-else>
                <img :src="story.imageUrl" :alt="story.imageAlt" loading="lazy" decoding="async" class="stories-grid-card-img" />
              </template>
            </div>
          </template>
        </div>
      </TransitionGroup>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.stories-grid-section {
  @apply py-8 md:py-12;
}

.stories-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5;
}

.stories-grid-card {
  @apply bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200/80 flex flex-col sm:flex-row h-full relative;
}

/* Banner / Partner Card Specific Styles */
.stories-grid-card--banner {
  @apply lg:col-span-12 min-h-[300px] sm:min-h-[340px] flex-col justify-center;
}

.stories-banner-image-wrapper {
  @apply absolute inset-0 w-full h-full z-0;
}

.stories-banner-img {
  @apply w-full h-full object-cover object-center;
}

.stories-banner-gradient-overlay {
  @apply absolute inset-0 bg-gradient-to-r from-white via-white/90 via-40% to-transparent;
}

.stories-banner-content {
  @apply relative z-10 p-8 sm:p-10 flex flex-col justify-between h-full max-w-lg;
}

/* Standard Layout Spans */
.stories-grid-card--1 {
  @apply lg:col-span-7;
}
.stories-grid-card--2 {
  @apply lg:col-span-5;
}

.stories-grid-card--3 {
  @apply lg:col-span-4;
}
.stories-grid-card--4 {
  @apply lg:col-span-4;
}
.stories-grid-card--5 {
  @apply lg:col-span-4;
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

.stories-grid-card-video-link {
  @apply relative block w-full h-full;
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