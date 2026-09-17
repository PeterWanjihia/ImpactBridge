<script setup lang="ts">
import { Heart, ChartColumn } from '@lucide/vue'

/**
 * Closing CTA band — navy card with classroom photo, matching the design's
 * "Every gift becomes part of a bigger change." Links route to the donation
 * widget (top of page) and the impact evidence page.
 */
interface Props {
  title: string
  titleAccent: string
  description: string
  imageUrl?: string
  imageAlt?: string
  primaryText: string
  primaryTo: string
  secondaryText: string
  secondaryTo: string
}

withDefaults(defineProps<Props>(), {
  imageUrl:
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop&crop=center',
  imageAlt: 'Student smiling in a classroom',
})
</script>

<template>
  <section class="donate-cta">
    <LayoutContainer>
      <div class="donate-cta__card">
        <div class="donate-cta__copy">
          <h2 class="donate-cta__title">
            {{ title }}
            <span class="donate-cta__title-accent">{{ titleAccent }}</span>
          </h2>
          <p class="donate-cta__description">{{ description }}</p>

          <div class="donate-cta__actions">
            <UiButton to="#top" variant="primary" size="md" class="donate-cta__btn">
              <Heart class="w-4 h-4" />
              {{ primaryText }}
            </UiButton>
            <UiButton :to="secondaryTo" variant="outline-white" size="md" class="donate-cta__btn">
              {{ secondaryText }}
              <ChartColumn class="w-4 h-4" />
            </UiButton>
          </div>
        </div>

        <div class="donate-cta__media">
          <NuxtImg
            :src="imageUrl"
            :alt="imageAlt"
            class="donate-cta__image"
            loading="lazy"
            width="640"
            height="480"
            sizes="sm:100vw lg:50vw"
          />
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.donate-cta {
  @apply py-section-xs md:py-section-md bg-white;
}

.donate-cta__card {
  @apply grid grid-cols-1 lg:grid-cols-2 rounded-card overflow-hidden bg-navy-900;
}

.donate-cta__copy {
  @apply p-8 md:p-12 lg:p-14 flex flex-col justify-center;
}

.donate-cta__title {
  @apply text-3xl md:text-4xl font-display font-bold text-white leading-tight;
}

.donate-cta__title-accent {
  @apply block;
}

.donate-cta__description {
  @apply mt-4 text-sm md:text-base text-gray-300 leading-relaxed max-w-md;
}

.donate-cta__actions {
  @apply mt-8 flex flex-wrap gap-3;
}

.donate-cta__btn {
  @apply font-semibold;
}

.donate-cta__media {
  @apply relative min-h-[240px] lg:min-h-0;
}

.donate-cta__image {
  @apply absolute inset-0 w-full h-full object-cover;
}
</style>
