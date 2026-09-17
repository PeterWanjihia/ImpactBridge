<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'
import type { StoriesVoiceItem } from '~/types'

interface Props {
  voices: StoriesVoiceItem[]
}

defineProps<Props>()
</script>

<template>
  <LayoutSection background="gray">
    <LayoutContainer>
      <div class="stories-voices-header">
        <h2 class="stories-voices-title">Hear it in their own words</h2>
        <NuxtLink to="/stories" class="stories-voices-link">
          View more voices <ArrowRight class="w-4 h-4" />
        </NuxtLink>
      </div>

      <div class="stories-voices-grid">
        <div
          v-for="voice in voices"
          :key="voice.id"
          class="stories-voice-card"
        >
          <div class="stories-voice-image">
            <NuxtImg :src="voice.imageUrl" :alt="voice.imageAlt" class="stories-voice-img" width="160" height="160" loading="lazy" sizes="160px" />
          </div>
          <div class="stories-voice-content">
            <blockquote class="stories-voice-quote">
              "{{ voice.quote }}"
            </blockquote>
            <p class="stories-voice-author">{{ voice.author }}</p>
            <p class="stories-voice-role">{{ voice.description }}</p>

            <!-- Real inline audio player -->
            <audio
              v-if="voice.audioUrl"
              class="stories-voice-audio"
              :src="voice.audioUrl"
              :aria-label="`Hear ${voice.author}`"
              controls
              playsinline
              preload="none"
            >
              Your browser does not support embedded audio.
            </audio>

            <NuxtLink v-if="voice.storyUrl" :to="voice.storyUrl" class="stories-voice-read-link">
              Read transcript <ArrowRight class="w-4 h-4" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </LayoutContainer>
  </LayoutSection>
</template>

<style scoped>
.stories-voices-header {
  @apply flex items-end justify-between mb-10;
}

.stories-voices-title {
  @apply text-3xl md:text-4xl font-display font-bold text-navy;
}

.stories-voices-link {
  @apply text-sm font-sans font-semibold text-cobalt hover:text-cobalt/80 transition-colors flex items-center gap-1;
}

.stories-voices-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-8;
}

.stories-voice-card {
  @apply bg-white rounded-xl p-6 shadow-elevation-1 border border-gray-100;
}

.stories-voice-image {
  @apply w-16 h-16 rounded-full overflow-hidden mb-4;
}

.stories-voice-img {
  @apply w-full h-full object-cover;
}

.stories-voice-quote {
  @apply text-lg font-display text-navy leading-relaxed italic;
}

.stories-voice-author {
  @apply mt-3 text-sm font-sans font-semibold text-navy;
}

.stories-voice-role {
  @apply mt-1 text-sm text-gray-500;
}

.stories-voice-audio {
  @apply mt-4 block w-full;
}

.stories-voice-read-link {
  @apply mt-4 inline-flex items-center gap-1.5 text-sm font-sans font-semibold text-cobalt hover:text-cobalt/80 transition-colors;
}
</style>
