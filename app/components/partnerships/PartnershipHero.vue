<script setup lang="ts">
import { ArrowRight, Download, Users, CircleCheck } from '@lucide/vue'

interface Props {
  imageUrl?: string
}

const props = withDefaults(defineProps<Props>(), {
  imageUrl:
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&h=900&fit=crop&crop=center',
})

const impactPoints = [
  'Meaningful contribution',
  'Responsible delivery',
  'Transparent reporting',
  'Stronger communities',
]
</script>

<template>
  <section class="partnership-hero">
    <div v-if="imageUrl" class="partnership-hero__bg">
      <img
        :src="imageUrl"
        alt="Teacher leading a lesson in a connected classroom"
        class="partnership-hero__image"
      />
      <div class="partnership-hero__mask" />
    </div>

    <LayoutContainer class="partnership-hero__container">
      <div class="partnership-hero__grid">
        <!-- Left: copy + CTAs -->
        <div class="partnership-hero__copy">
          <span class="partnership-hero__eyebrow">Corporate Partnerships</span>

          <h1 class="partnership-hero__title">
            Partner for learning.<br />
            Transform classrooms<br />
            <span class="partnership-hero__title-accent">together.</span>
          </h1>

          <p class="partnership-hero__subtitle">
            We work with organisations to bring appropriate technology, teacher
            development and ongoing support to schools where connectivity
            should not limit learning.
          </p>

          <div class="partnership-hero__actions">
            <NuxtLink to="#begin-the-conversation" class="partnership-hero__cta">
              Start a partnership conversation
              <ArrowRight class="w-4 h-4" />
            </NuxtLink>
            <UiButton
              variant="outline-white"
              size="lg"
              class="partnership-hero__cta-secondary"
            >
              Download partnership overview
              <Download class="w-4 h-4" />
            </UiButton>
          </div>
        </div>

        <!-- Right: impact card -->
        <div class="partnership-hero__aside">
          <div class="partnership-hero__card">
            <Users class="partnership-hero__card-icon" />
            <h2 class="partnership-hero__card-title">Make measurable impact</h2>
            <ul class="partnership-hero__card-list">
              <li
                v-for="point in impactPoints"
                :key="point"
                class="partnership-hero__card-item"
              >
                <CircleCheck class="partnership-hero__card-check" />
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.partnership-hero {
  @apply relative bg-navy-900 overflow-hidden;
}

.partnership-hero__bg {
  @apply absolute inset-0;
}

.partnership-hero__image {
  @apply w-full h-full object-cover object-right;
}

.partnership-hero__mask {
  @apply absolute inset-0;
  background: linear-gradient(
    to right,
    rgba(10, 26, 48, 0.97) 0%,
    rgba(13, 33, 61, 0.92) 34%,
    rgba(16, 42, 67, 0.72) 58%,
    rgba(16, 42, 67, 0.35) 100%
  );
}

.partnership-hero__container {
  @apply relative z-10 py-section md:py-section-lg lg:py-section-xl;
}

.partnership-hero__grid {
  @apply flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-12;
}

.partnership-hero__copy {
  @apply max-w-2xl;
}

.partnership-hero__eyebrow {
  @apply inline-block text-teal-300 font-sans font-semibold text-xs tracking-eyebrow uppercase mb-5;
}

.partnership-hero__title {
  @apply text-4xl md:text-5xl font-display font-bold text-white leading-heading;
}

.partnership-hero__title-accent {
  @apply text-cobalt-400;
}

.partnership-hero__subtitle {
  @apply mt-6 text-base md:text-lead leading-relaxed text-gray-200 max-w-xl;
}

.partnership-hero__actions {
  @apply mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4;
}

.partnership-hero__cta {
  @apply inline-flex items-center justify-between gap-2.5 px-6 py-3 rounded-lg;
  @apply bg-cobalt-600 hover:bg-cobalt-700 text-white text-sm font-sans font-medium whitespace-nowrap;
  @apply transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cobalt-500 focus:ring-offset-navy-900;
}

.partnership-hero__cta-secondary {
  @apply inline-flex items-center justify-between gap-3 px-5 py-2.5 rounded-lg;
  @apply bg-white/10 border border-white/25 hover:bg-white/20 text-white text-sm font-sans font-medium whitespace-nowrap;
}

.partnership-hero__aside {
  @apply lg:flex-shrink-0 lg:w-[340px];
}

.partnership-hero__card {
  @apply rounded-xl border border-white/10 bg-ink-soft/80 backdrop-blur-sm p-6 lg:p-7;
}

.partnership-hero__card-icon {
  @apply w-8 h-8 text-cobalt-400;
}

.partnership-hero__card-title {
  @apply mt-3 text-xl font-sans font-semibold text-white leading-snug max-w-[180px];
}

.partnership-hero__card-list {
  @apply mt-5 space-y-3.5;
}

.partnership-hero__card-item {
  @apply flex items-center gap-3 text-sm font-sans text-gray-200;
}

.partnership-hero__card-check {
  @apply w-[18px] h-[18px] text-cobalt-400 flex-shrink-0;
}
</style>
