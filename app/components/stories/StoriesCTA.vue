<script setup lang="ts">
import { ArrowRight, Users, Building2 } from '@lucide/vue'
import type { StoriesCtaData } from '~/types'

interface Props {
  data: StoriesCtaData
}

defineProps<Props>()
</script>

<template>
  <section class="stories-cta">
    <LayoutContainer>
      <div class="stories-cta-grid">
        <div class="stories-cta-main">
          <h2 class="stories-cta-title">{{ data.title }}</h2>
          <p class="stories-cta-description">{{ data.description }}</p>
        </div>
        <div class="stories-cta-actions">
          <NuxtLink :to="data.primaryCta.to" class="stories-cta-action stories-cta-action--primary">
            <Users class="w-6 h-6" />
            <div>
              <span class="stories-cta-action-label">Fund a classroom</span>
              <span class="stories-cta-action-desc">Give today and help more learners access meaningful learning.</span>
            </div>
            <ArrowRight class="w-4 h-4 ml-auto flex-shrink-0" />
          </NuxtLink>
          <NuxtLink :to="data.secondaryCta.to" class="stories-cta-action stories-cta-action--secondary">
            <Building2 class="w-6 h-6" />
            <div>
              <span class="stories-cta-action-label">Start a partnership</span>
              <span class="stories-cta-action-desc">Work with us to equip schools, strengthen systems and document impact.</span>
            </div>
            <ArrowRight class="w-4 h-4 ml-auto flex-shrink-0" />
          </NuxtLink>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.stories-cta {
  @apply bg-navy py-16 md:py-20;
}

.stories-cta-grid {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-12 items-center;
}

.stories-cta-title {
  @apply text-3xl md:text-4xl font-serif font-bold text-white leading-tight;
}

.stories-cta-description {
  @apply mt-4 text-lg text-gray-300;
}

.stories-cta-actions {
  @apply flex flex-col gap-4;
}

.stories-cta-action {
  @apply flex items-center gap-4 p-5 rounded-xl bg-white/10 text-white
         hover:bg-white/20 transition-colors;
}

.stories-cta-action-label {
  @apply block text-base font-sans font-semibold;
}

.stories-cta-action-desc {
  @apply block text-sm text-gray-300 mt-1;
}
</style>
