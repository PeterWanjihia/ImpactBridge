<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'

defineProps<{
  evidence: {
    title: string
    pilotLabel: string
    pilotLocation: string
    stats: Array<{
      value: string
      label: string
    }>
    impactLink?: {
      text: string
      to: string
    }
    testimonial: {
      imageUrl: string
      imageAlt: string
      quote: string
      author: string
      story: string
      storyUrl: string
    }
  }
}>()
</script>

<template>
  <LayoutSection class="bg-white py-section-sm lg:py-section">
    <LayoutContainer>
      <h2 class="evidence-title">{{ evidence.title }}</h2>

      <div class="evidence-grid">
        <!-- Left: Stats Card -->
        <div class="evidence-stats-card">
          <div>
            <div class="evidence-pilot-label">
              <span class="evidence-pilot-badge">{{ evidence.pilotLabel }}</span>
              <span class="evidence-pilot-dot">•</span>
              <span class="evidence-pilot-location">{{ evidence.pilotLocation }}</span>
            </div>

            <div class="evidence-stats">
              <div
                v-for="(stat, index) in evidence.stats"
                :key="index"
                class="evidence-stat-tile"
              >
                <div class="evidence-stat-value">{{ stat.value }}</div>
                <div class="evidence-stat-label">{{ stat.label }}</div>
              </div>
            </div>
          </div>

          <NuxtLink
            v-if="evidence.impactLink"
            :to="evidence.impactLink.to"
            class="evidence-link"
          >
            <span>{{ evidence.impactLink.text }}</span>
            <ArrowRight class="w-4 h-4 ml-1" />
          </NuxtLink>
        </div>

        <!-- Right: Featured Testimonial -->
        <div class="evidence-testimonial">
          <img
            :src="evidence.testimonial.imageUrl"
            :alt="evidence.testimonial.imageAlt"
            class="evidence-testimonial-bg"
          />
          <div class="evidence-testimonial-overlay" />

          <div class="evidence-testimonial-inner">
            <blockquote class="evidence-quote">
              &ldquo;{{ evidence.testimonial.quote }}&rdquo;
            </blockquote>
            <div class="evidence-attribution">
              <span class="evidence-author">— {{ evidence.testimonial.author }}</span>
            </div>
            <p class="evidence-story">{{ evidence.testimonial.story }}</p>
            <NuxtLink
              :to="evidence.testimonial.storyUrl"
              class="evidence-story-link"
            >
              <span>Read the full story</span>
              <ArrowRight class="w-4 h-4 ml-1" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </LayoutContainer>
  </LayoutSection>
</template>

<style scoped>
.evidence-title {
  @apply text-3xl md:text-4xl font-display font-bold text-ink mb-6 tracking-tight;
}
.evidence-grid {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch;
}
.evidence-stats-card {
  @apply bg-cobalt-50 rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full;
}
.evidence-pilot-label {
  @apply flex items-center gap-2 text-2xs font-sans font-bold text-cobalt-500 tracking-eyebrow uppercase mb-6;
}
.evidence-pilot-dot {
  @apply text-cobalt-400;
}
.evidence-stats {
  @apply grid grid-cols-5 gap-2.5 my-auto;
}
.evidence-stat-tile {
  @apply bg-white rounded-xl p-3 md:py-5 md:px-3 text-center flex flex-col items-center justify-between shadow-elevation-1 min-h-[120px];
}
.evidence-stat-value {
  @apply text-2xl md:text-3xl font-sans font-bold text-cobalt-700 leading-none mb-2;
}
.evidence-stat-label {
  @apply text-2xs font-sans text-gray-600 leading-snug font-medium max-w-[85px] mx-auto;
}
.evidence-link {
  @apply mt-6 inline-flex items-center text-label font-sans font-bold text-cobalt-600 hover:text-cobalt-800 transition-colors;
}
.evidence-testimonial {
  @apply relative rounded-2xl overflow-hidden min-h-[360px] flex items-center p-6 md:p-8 bg-ink text-white;
}
.evidence-testimonial-bg {
  @apply absolute inset-0 w-full h-full object-cover object-right z-0;
}
.evidence-testimonial-overlay {
  @apply absolute inset-0 bg-gradient-to-r from-ink-deep via-ink-deep/80 to-transparent z-10;
}
.evidence-testimonial-inner {
  @apply relative z-20 max-w-[65%] flex flex-col justify-center;
}
.evidence-quote {
  @apply text-2xl md:text-3xl font-display font-bold text-white leading-tight tracking-tight;
}
.evidence-attribution {
  @apply mt-2 mb-4;
}
.evidence-author {
  @apply text-label font-sans font-semibold text-gray-300;
}
.evidence-story {
  @apply text-xs font-sans text-gray-300 leading-relaxed max-w-[280px];
}
.evidence-story-link {
  @apply mt-6 inline-flex items-center text-label font-sans font-bold text-white hover:underline transition-all;
}

/* Accessibility & touch targets */
.evidence-link,
.evidence-story-link {
  @apply min-h-[44px] inline-flex items-center;
}
</style>
