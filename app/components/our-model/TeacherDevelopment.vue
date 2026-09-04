<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'

defineProps<{
  teacher: {
    videoUrl: string
    videoAlt: string
    videoDuration: string
    championQualities: string[]
    journeySteps: string[]
  }
}>()
</script>

<template>
  <section id="teacher-development" class="model-teacher">
    <LayoutContainer>
      <div class="model-teacher-layout">
        <!-- Header -->
        <div class="model-teacher-header">
          <span class="model-teacher-number">05</span>
          <h2 class="model-teacher-title">The teacher is<br />at the centre.</h2>
          <p class="model-teacher-description">
            We train teachers to confidently use technology to improve how they teach and how learners learn.
          </p>
          <NuxtLink to="/our-story" class="model-teacher-link">
            Our teacher development
            <ArrowRight class="w-4 h-4" />
          </NuxtLink>
        </div>

        <!-- Video Thumbnail -->
        <div class="model-teacher-video">
          <ClientOnly>
            <div class="model-teacher-video-wrap">
              <img :src="teacher.videoUrl"
                :alt="teacher.videoAlt" class="model-teacher-video-img" loading="lazy" />
              <button class="model-teacher-play" aria-label="Play teacher training video">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </button>
              <span class="model-teacher-duration">{{ teacher.videoDuration }}</span>
            </div>
            <template #fallback>
              <div class="model-teacher-video-wrap model-teacher-video-wrap--placeholder" />
            </template>
          </ClientOnly>
        </div>

        <!-- Champion Teacher Model -->
        <div class="model-teacher-champion">
          <h3 class="model-teacher-champion-title">The Champion Teacher model</h3>
          <p class="model-teacher-champion-description">
            We empower local educators to lead adoption and support their peers—driving lasting change from within.
          </p>
          <ul class="model-teacher-champion-list">
            <li v-for="quality in teacher.championQualities" :key="quality" class="model-teacher-champion-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" class="model-teacher-champion-check">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{{ quality }}</span>
            </li>
          </ul>
          <NuxtLink to="/our-story" class="model-teacher-champion-link">
            Meet a Champion Teacher
            <ArrowRight class="w-4 h-4" />
          </NuxtLink>
        </div>

        <!-- Teacher Journey -->
        <div class="model-teacher-journey">
          <h3 class="model-teacher-journey-title">Teacher journey</h3>
          <ol class="model-teacher-journey-list">
            <li v-for="step in teacher.journeySteps" :key="step" class="model-teacher-journey-step">
              <span class="model-teacher-journey-dot" />
              <span class="model-teacher-journey-label">{{ step }}</span>
            </li>
          </ol>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.model-teacher {
  @apply py-16 md:py-24 bg-gray-50;
}
.model-teacher-layout {
  @apply grid grid-cols-1 lg:grid-cols-[220px_1fr_280px_220px] gap-8 items-start;
}
.model-teacher-header {
  @apply lg:sticky lg:top-8;
}
.model-teacher-number {
  @apply inline-flex items-center justify-center w-10 h-10 rounded-full bg-cobalt/10 text-cobalt font-sans font-bold text-sm;
}
.model-teacher-title {
  @apply mt-4 text-3xl md:text-4xl font-serif font-bold text-navy leading-tight;
}
.model-teacher-description {
  @apply mt-4 text-gray-600;
}
.model-teacher-link {
  @apply mt-6 inline-flex items-center gap-2 text-cobalt font-sans font-semibold text-sm hover:text-cobalt/80 transition-colors;
}

/* Video */
.model-teacher-video {
  @apply lg:col-span-1;
}
.model-teacher-video-wrap {
  @apply relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-navy-800;
}
.model-teacher-video-wrap--placeholder {
  @apply bg-gray-300;
}
.model-teacher-video-img {
  @apply w-full h-full object-cover;
}
.model-teacher-play {
  @apply absolute inset-0 flex items-center justify-center w-full h-full bg-navy/30 hover:bg-navy/40 transition-colors cursor-pointer;
}
.model-teacher-play svg {
  @apply text-white drop-shadow-lg;
}
.model-teacher-duration {
  @apply absolute bottom-3 right-3 px-2 py-0.5 bg-navy/80 text-white text-xs font-sans font-medium rounded;
}

/* Champion Teacher */
.model-teacher-champion {
  @apply bg-white rounded-xl p-6 shadow-sm border border-gray-100;
}
.model-teacher-champion-title {
  @apply text-lg font-sans font-bold text-navy;
}
.model-teacher-champion-description {
  @apply mt-3 text-sm text-gray-600 leading-relaxed;
}
.model-teacher-champion-list {
  @apply mt-4 space-y-2 list-none p-0 m-0;
}
.model-teacher-champion-item {
  @apply flex items-center gap-2 text-sm text-gray-700;
}
.model-teacher-champion-check {
  @apply text-cobalt flex-shrink-0;
}
.model-teacher-champion-link {
  @apply mt-4 inline-flex items-center gap-2 text-cobalt font-sans font-semibold text-sm hover:text-cobalt/80 transition-colors;
}

/* Teacher Journey */
.model-teacher-journey {
  @apply lg:sticky lg:top-8;
}
.model-teacher-journey-title {
  @apply text-sm font-sans font-bold text-navy mb-4;
}
.model-teacher-journey-list {
  @apply space-y-3 list-none p-0 m-0;
}
.model-teacher-journey-step {
  @apply flex items-center gap-3;
}
.model-teacher-journey-dot {
  @apply w-3 h-3 rounded-full bg-cobalt flex-shrink-0;
}
.model-teacher-journey-label {
  @apply text-sm font-sans text-gray-700;
}
</style>
