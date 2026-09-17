<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { BarChart3, GraduationCap, Users, TrendingUp, Smile, Volume2 } from '@lucide/vue'

const metrics = [
  { icon: BarChart3, value: '1', label: 'Learning hub implemented' },
  { icon: GraduationCap, value: '2', label: 'Champion Teachers trained' },
  { icon: Users, value: '50+', label: 'Learners reached' },
  { icon: TrendingUp, value: '92%', label: 'Feel more confident' },
  { icon: Smile, value: '85%', label: 'Feel better supported' },
  { icon: Volume2, value: '78%', label: 'Reported less stress in tech lessons' }
]

// Audio players for testimonials
const activeAudio = ref<string | null>(null)
const audioRef = ref<HTMLAudioElement | null>(null)

function toggleAudio(id: string) {
  if (activeAudio.value === id) {
    audioRef.value?.pause()
    activeAudio.value = null
  } else {
    activeAudio.value = id
    // In real app, would play actual audio
  }
}
</script>

<template>
  <section class="early-results-section">
    <LayoutContainer>
      <div class="early-results-header">
        <div class="early-results-eyebrow">
          <span class="early-results-eyebrow-number">06</span>
          <span class="early-results-eyebrow-label">THE PRECEDENCE: REAL LIVES</span>
        </div>
      </div>

      <div class="early-results-grid">
        <!-- Pilot Findings Card -->
        <div class="early-results-findings">
          <h3 class="early-results-findings-title">Early Pilot Findings</h3>
          <p class="early-results-findings-date">April — June 2025</p>
          <div class="early-results-metrics">
            <div v-for="(metric, index) in metrics" :key="index" class="early-results-metric">
              <component :is="metric.icon" class="w-5 h-5 text-cobalt shrink-0" />
              <div class="early-results-metric-content">
                <span class="early-results-metric-value">{{ metric.value }}</span>
                <span class="early-results-metric-label">{{ metric.label }}</span>
              </div>
            </div>
          </div>
          <div class="early-results-findings-cta">
            <UiButton variant="ghost" class="text-cobalt hover:bg-cobalt/5">
              See our methodology →
            </UiButton>
          </div>
        </div>

        <!-- From a Learner -->
        <div class="early-results-testimonial">
          <h3 class="early-results-testimonial-title">From a learner</h3>
          <blockquote class="early-results-quote">
            "I feel like I can now finish my schooling."
          </blockquote>
          <p class="early-results-author">— Namalwa, P7 Student</p>
          <div class="early-results-audio">
            <button
              type="button"
              class="early-results-audio-btn"
              @click="toggleAudio('learner')"
            >
              <Volume2 class="w-4 h-4" />
              {{ activeAudio === 'learner' ? 'Pause Namalwa\'s story' : 'Hear Namalwa\'s story' }}
            </button>
          </div>
          <div class="early-results-testimonial-cta">
            <UiButton variant="ghost" class="text-cobalt hover:bg-cobalt/5">
              Read full story →
            </UiButton>
          </div>
        </div>

        <!-- From a Champion Teacher -->
        <div class="early-results-testimonial">
          <h3 class="early-results-testimonial-title">From a Champion Teacher</h3>
          <blockquote class="early-results-quote">
            "The hub has changed how I teach. Students participate more and understand better."
          </blockquote>
          <p class="early-results-author">— Teacher Judith</p>
          <div class="early-results-audio">
            <button
              type="button"
              class="early-results-audio-btn"
              @click="toggleAudio('teacher')"
            >
              <Volume2 class="w-4 h-4" />
              {{ activeAudio === 'teacher' ? 'Pause Judith\'s story' : 'Hear Judith\'s story' }}
            </button>
          </div>
          <div class="early-results-testimonial-cta">
            <UiButton variant="ghost" class="text-cobalt hover:bg-cobalt/5">
              Read full story →
            </UiButton>
          </div>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.early-results-section {
  @apply py-section-sm md:py-section bg-gray-50;
}
.early-results-header {
  @apply max-w-3xl mb-12;
}
.early-results-eyebrow {
  @apply flex items-center gap-2 mb-4;
}
.early-results-eyebrow-number {
  @apply w-6 h-6 rounded-full border border-cobalt/30 text-cobalt text-xs font-semibold flex items-center justify-center;
}
.early-results-eyebrow-label {
  @apply text-2xs font-bold tracking-eyebrow text-cobalt uppercase;
}

.early-results-grid {
  @apply grid grid-cols-1 md:grid-cols-3 gap-6;
}

/* Findings Card */
.early-results-findings {
  @apply bg-white rounded-xl p-6 border border-gray-200 shadow-elevation-1;
}
.early-results-findings-title {
  @apply text-xl font-bold text-ink mb-1;
}
.early-results-findings-date {
  @apply text-sm text-gray-500 mb-6;
}
.early-results-metrics {
  @apply space-y-3;
}
.early-results-metric {
  @apply flex items-center gap-3;
}
.early-results-metric-content {
  @apply flex items-baseline gap-2;
}
.early-results-metric-value {
  @apply text-sm font-bold text-ink;
}
.early-results-metric-label {
  @apply text-sm text-gray-600;
}
.early-results-findings-cta {
  @apply mt-6 pt-4 border-t border-gray-100;
}

/* Testimonial Cards */
.early-results-testimonial {
  @apply bg-white rounded-xl p-6 border border-gray-200 shadow-elevation-1 flex flex-col;
}
.early-results-testimonial-title {
  @apply text-lg font-bold text-ink mb-4;
}
.early-results-quote {
  @apply text-xl font-display text-gray-800 italic leading-relaxed flex-grow;
}
.early-results-author {
  @apply text-sm text-gray-500 mt-4;
}
.early-results-audio {
  @apply mt-4;
}
.early-results-audio-btn {
  @apply flex items-center gap-2 text-sm text-cobalt hover:text-cobalt/80 font-medium transition-colors cursor-pointer;
}
.early-results-testimonial-cta {
  @apply mt-4 pt-4 border-t border-gray-100;
}
</style>
