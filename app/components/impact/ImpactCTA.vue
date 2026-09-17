<script setup lang="ts">
import { Heart, Users } from '@lucide/vue'

interface Props {
  title?: string
  description?: string
  imageUrl?: string
  imageAlt?: string
  primaryButtonText?: string
  primaryButtonTo?: string
  secondaryButtonText?: string
  secondaryButtonTo?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Help us build the next classroom—and stronger evidence of what works.',
  description: 'Your support helps us reach more learners, improve the model and measure what matters most.',
  imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop&crop=center',
  imageAlt: 'Students learning in a classroom',
  primaryButtonText: 'Fund the next classroom',
  primaryButtonTo: '/donate',
  secondaryButtonText: 'Partner with Impact Bridge',
  secondaryButtonTo: '/corporate-partnerships'
})
</script>

<template>
  <section class="impact-cta">
    <LayoutContainer>
      <div class="impact-cta-content">
        <!-- Text -->
        <div class="impact-cta-text">
          <h2 class="impact-cta-title">{{ title }}</h2>
          <p class="impact-cta-description">{{ description }}</p>
        </div>

        <!-- Buttons -->
        <div class="impact-cta-actions">
          <NuxtLink :to="primaryButtonTo" class="impact-cta-btn impact-cta-btn--primary">
            <Heart class="w-5 h-5" />
            <span>{{ primaryButtonText }}</span>
          </NuxtLink>
          <NuxtLink :to="secondaryButtonTo" class="impact-cta-btn impact-cta-btn--secondary">
            <Users class="w-5 h-5" />
            <span>{{ secondaryButtonText }}</span>
          </NuxtLink>
        </div>

        <!-- Image -->
        <div class="impact-cta-media">
          <img
            :src="imageUrl"
            :alt="imageAlt"
            class="impact-cta-image"
          />
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.impact-cta {
  @apply py-section-md md:py-section bg-navy;
}

.impact-cta-content {
  @apply flex flex-col lg:flex-row items-center gap-8 lg:gap-10;
}

.impact-cta-text {
  @apply flex-1;
}

.impact-cta-title {
  @apply text-3xl md:text-4xl font-display font-bold text-white leading-tight;
}

.impact-cta-description {
  @apply mt-4 text-base text-gray-300 leading-relaxed;
}

.impact-cta-actions {
  @apply flex flex-row lg:flex-col gap-3 flex-shrink-0;
}

.impact-cta-btn {
  @apply inline-flex items-center gap-2.5 px-6 py-3 rounded-lg font-sans font-semibold text-sm transition-colors whitespace-nowrap;
}

.impact-cta-btn--primary {
  @apply bg-white text-navy hover:bg-gray-100;
}

.impact-cta-btn--secondary {
  @apply border border-white/60 text-white hover:bg-white/10;
}

.impact-cta-media {
  @apply flex-shrink-0;
}

.impact-cta-image {
  @apply w-64 h-48 lg:w-80 lg:h-56 object-cover rounded-xl;
}
</style>
