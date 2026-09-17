<script setup lang="ts">
import { Play, ArrowRight, Volume2 } from '@lucide/vue'
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
            <img :src="voice.imageUrl" :alt="voice.imageAlt" class="stories-voice-img" />
          </div>
          <div class="stories-voice-content">
            <blockquote class="stories-voice-quote">
              "{{ voice.quote }}"
            </blockquote>
            <p class="stories-voice-author">{{ voice.author }}</p>
            <p class="stories-voice-role">{{ voice.description }}</p>

            <!-- Audio Player -->
            <div v-if="voice.audioUrl" class="stories-voice-audio">
              <button class="stories-voice-audio-play">
                <Play class="w-4 h-4" />
              </button>
              <div class="stories-voice-audio-waveform">
                <div class="stories-voice-audio-bars">
                  <span v-for="i in 20" :key="i" class="stories-voice-audio-bar" />
                </div>
              </div>
              <span class="stories-voice-audio-duration">{{ voice.audioDuration }}</span>
            </div>

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
  @apply mt-4 flex items-center gap-3;
}

.stories-voice-audio-play {
  @apply w-8 h-8 flex items-center justify-center rounded-full bg-navy text-white hover:bg-navy/80 transition-colors flex-shrink-0;
}

.stories-voice-audio-waveform {
  @apply flex-1;
}

.stories-voice-audio-bars {
  @apply flex items-end gap-0.5 h-6;
}

.stories-voice-audio-bar {
  @apply w-1 bg-navy/30 rounded-full;
  animation: audioBar 1s ease-in-out infinite alternate;
}

.stories-voice-audio-bar:nth-child(odd) {
  @apply h-4;
}

.stories-voice-audio-bar:nth-child(even) {
  @apply h-6;
}

.stories-voice-audio-bar:nth-child(3n) {
  @apply h-3;
}

@keyframes audioBar {
  0% { height: 30%; }
  100% { height: 100%; }
}

.stories-voice-audio-duration {
  @apply text-xs text-gray-500 font-sans tabular-nums flex-shrink-0;
}

.stories-voice-read-link {
  @apply mt-4 inline-flex items-center gap-1.5 text-sm font-sans font-semibold text-cobalt hover:text-cobalt/80 transition-colors;
}
</style>
