<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { CirclePlay } from '@lucide/vue'

const isPlaying = ref(false)
const videoRef = ref<HTMLVideoElement | null>(null)

const videoUrl = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
const posterUrl = 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop&crop=center'

function handlePlay() {
  isPlaying.value = true
  nextTick(() => {
    videoRef.value?.play()
  })
}
</script>

<template>
  <section class="first-classroom-section">
    <LayoutContainer>
      <div class="first-classroom-grid">

        <!-- Media Column -->
        <div class="first-classroom-media">
          <video v-if="isPlaying" ref="videoRef" :src="videoUrl" controls autoplay class="first-classroom-video">
            Your browser does not support the video tag.
          </video>
          <template v-else>
            <img :src="posterUrl" alt="First classroom installation" class="first-classroom-poster" />
            <button type="button" aria-label="Play video" @click="handlePlay" class="group first-classroom-play-overlay">
              <div class="first-classroom-play-btn">
                <CirclePlay class="w-8 h-8 text-cobalt" />
              </div>
            </button>
          </template>
        </div>

        <!-- Content Column -->
        <div class="first-classroom-content">
          <div class="first-classroom-eyebrow">
            <span class="first-classroom-eyebrow-number">04</span>
            <span class="first-classroom-eyebrow-label">THE FIRST CLASSROOM</span>
          </div>

          <h2 class="first-classroom-title">
            Then the idea entered a real classroom.
          </h2>

          <p class="first-classroom-description">
            In April 2025, the first hub was installed at Our Lady Seat of Wisdom in Kansanga.
            A teacher explored the content, led a lesson, and a two-day CPS program introduced
            the concept to the entire staff.
          </p>

          <div class="first-classroom-cta">
            <UiButton variant="primary" size="lg">
              <CirclePlay class="w-5 h-5" />
              Watch the first installation
            </UiButton>
          </div>
        </div>

      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.first-classroom-section {
  @apply py-16 md:py-24 bg-slate-50/50;
}
.first-classroom-grid {
  @apply grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center;
}
.first-classroom-media {
  @apply lg:col-span-5 relative overflow-hidden rounded-2xl shadow-md bg-slate-900 aspect-[4/3];
}
.first-classroom-video {
  @apply w-full h-full object-cover;
}
.first-classroom-poster {
  @apply w-full h-full object-cover transition-transform duration-300 hover:scale-105;
}
.first-classroom-play-overlay {
  @apply absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer;
}
.first-classroom-play-btn {
  @apply w-16 h-16 rounded-full bg-white text-cobalt flex items-center justify-center shadow-xl transition-transform;
}
.group:hover .first-classroom-play-btn {
  transform: scale(1.1);
}

.first-classroom-content {
  @apply lg:col-span-7 flex flex-col justify-center;
}
.first-classroom-eyebrow {
  @apply flex items-center gap-2 mb-3;
}
.first-classroom-eyebrow-number {
  @apply w-6 h-6 rounded-full border border-cobalt/30 text-cobalt text-xs font-semibold flex items-center justify-center;
}
.first-classroom-eyebrow-label {
  @apply text-xs font-bold tracking-wider text-cobalt uppercase;
}
.first-classroom-title {
  @apply text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight;
}
.first-classroom-description {
  @apply mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl;
}
.first-classroom-cta {
  @apply mt-8;
}
</style>
