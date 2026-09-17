<script setup lang="ts">
import { ref, nextTick } from 'vue'
import {
  WifiOff,
  BookOpen,
  BookX,
  UserX,
  Play,
} from '@lucide/vue'
import type { Component } from 'vue'

// Video player state
const isPlaying = ref(false)
const videoRef = ref<HTMLVideoElement | null>(null)

const videoUrl = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
const posterUrl = 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop&crop=center'

function handlePlayVideo() {
  isPlaying.value = true
  nextTick(() => {
    videoRef.value?.play()
  })
}

const realityConstraints: Array<{ icon: Component; label: string }> = [
  { icon: WifiOff, label: 'Unreliable connectivity' },
  { icon: BookOpen, label: 'Limited learning materials' },
  { icon: BookX, label: 'Outdated or scarce resources' },
  { icon: UserX, label: 'Teachers unsupported in using technology' },
]
</script>

<template>
  <section id="reality" class="reality-section">
    <LayoutContainer>
      <div class="reality-grid">

        <!-- Interactive Media Column -->
        <div class="reality-media">

          <!-- Native HTML5 Video Player -->
          <video v-if="isPlaying" ref="videoRef" :src="videoUrl" controls autoplay class="reality-video">
            Your browser does not support the video tag.
          </video>

          <!-- Video Thumbnail & Play Overlay Button -->
          <template v-else>
            <img :src="posterUrl" alt="Classroom learning environment"
              class="reality-poster" />

            <button type="button" aria-label="Play video" @click="handlePlayVideo"
              class="group reality-play-overlay">
              <div class="reality-play-btn">
                <Play class="w-7 h-7 fill-cobalt text-cobalt translate-x-0.5" />
              </div>
            </button>
          </template>
        </div>

        <!-- Content Column -->
        <div class="reality-content">
          <div class="reality-eyebrow">
            <span class="reality-eyebrow-number">01</span>
            <span class="reality-eyebrow-label">THE REALITY</span>
          </div>

          <h2 class="reality-title">
            The desire to learn was never missing.
          </h2>

          <p class="reality-description">
            A teacher enters a room full of questions. The learners are curious.
            The lesson has ambition. But textbooks are limited, digital resources
            are hard to reach, and web-dependent classrooms cannot function
            reliably.
          </p>

          <!-- Key Constraints Grid -->
          <div class="reality-constraints">
            <div v-for="(item, index) in realityConstraints" :key="index" class="reality-constraint">
              <div class="reality-constraint-icon">
                <component :is="item.icon" class="w-5 h-5 text-cobalt" />
              </div>
              <span class="reality-constraint-label">
                {{ item.label }}
              </span>
            </div>
          </div>
        </div>

      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.reality-section {
  @apply py-section-sm md:py-section bg-gray-50/50;
}
.reality-grid {
  @apply grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center;
}

/* Interactive Media Column */
.reality-media {
  @apply lg:col-span-5 relative overflow-hidden rounded-card shadow-elevation-1 bg-ink aspect-[4/3];
}
.reality-video {
  @apply w-full h-full object-cover;
}
.reality-poster {
  @apply w-full h-full object-cover transition-transform duration-300 hover:scale-105;
}
.reality-play-overlay {
  @apply absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer;
}
.reality-play-btn {
  @apply w-16 h-16 rounded-full bg-white text-cobalt flex items-center justify-center shadow-elevation-1 transition-transform;
}
.group:hover .reality-play-btn {
  transform: scale(1.1);
}

/* Content Column */
.reality-content {
  @apply lg:col-span-7 flex flex-col justify-center;
}
.reality-eyebrow {
  @apply flex items-center gap-2 mb-3;
}
.reality-eyebrow-number {
  @apply w-6 h-6 rounded-full border border-cobalt/30 text-cobalt text-xs font-semibold flex items-center justify-center;
}
.reality-eyebrow-label {
  @apply text-2xs font-bold tracking-eyebrow text-cobalt uppercase;
}
.reality-title {
  @apply text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-ink leading-tight;
}
.reality-description {
  @apply mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl;
}

/* Key Constraints Grid */
.reality-constraints {
  @apply mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-6 border-t border-gray-200/80;
}
.reality-constraint {
  @apply flex items-start gap-3;
}
.reality-constraint-icon {
  @apply p-2 rounded-lg bg-cobalt-50/80 text-cobalt shrink-0;
}
.reality-constraint-label {
  @apply text-sm font-medium text-gray-700 leading-snug pt-1;
}
</style>
