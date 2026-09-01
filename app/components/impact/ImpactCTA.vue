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
        <!-- Text Content -->
        <div class="impact-cta-text">
          <h2 class="impact-cta-title">{{ title }}</h2>
          <p class="impact-cta-description">{{ description }}</p>

          <div class="impact-cta-actions">
            <UiButton variant="primary" size="lg">
              <NuxtLink :to="primaryButtonTo" class="impact-cta-button-content">
                <Heart class="w-5 h-5" />
                <span>{{ primaryButtonText }}</span>
              </NuxtLink>
            </UiButton>

            <UiButton variant="outline-white" size="lg">
              <NuxtLink :to="secondaryButtonTo" class="impact-cta-button-content">
                <Users class="w-5 h-5" />
                <span>{{ secondaryButtonText }}</span>
              </NuxtLink>
            </UiButton>
          </div>
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
  @apply py-16 md:py-20 bg-navy;
}

.impact-cta-content {
  @apply flex flex-col lg:flex-row items-center gap-10 lg:gap-16;
}

.impact-cta-text {
  @apply flex-1 text-white;
}

.impact-cta-title {
  @apply text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight;
}

.impact-cta-description {
  @apply mt-5 text-lg text-gray-300 leading-relaxed max-w-lg;
}

.impact-cta-actions {
  @apply mt-8 flex flex-wrap gap-4;
}

.impact-cta-button-content {
  @apply inline-flex items-center gap-2;
}

.impact-cta-media {
  @apply flex-1 relative;
}

.impact-cta-image {
  @apply w-full h-64 lg:h-80 object-cover rounded-xl;
}
</style>
