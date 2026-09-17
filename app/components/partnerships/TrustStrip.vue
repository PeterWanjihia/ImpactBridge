<script setup lang="ts">
import { GraduationCap, ChartColumn, ShieldCheck, Users } from '@lucide/vue'
import type { Component } from 'vue'

interface TrustItem {
  title: string
  description: string
  icon: Component
}

const items: TrustItem[] = [
  {
    title: 'Proven model',
    description: 'Teacher-led, offline-first learning hubs.',
    icon: GraduationCap,
  },
  {
    title: 'Ready to scale',
    description: 'Standardised deployment with local ownership.',
    icon: ChartColumn,
  },
  {
    title: 'Accountable',
    description: 'Funds used effectively and reported transparently.',
    icon: ShieldCheck,
  },
  {
    title: 'Collaborative',
    description: 'We co-create solutions that fit your goals.',
    icon: Users,
  },
]
</script>

<template>
  <section class="trust-strip">
    <LayoutContainer>
      <p class="trust-strip__eyebrow">
        Trusted by organisations that care about real, lasting impact
      </p>

      <div class="trust-strip__grid">
        <div
          v-for="item in items"
          :key="item.title"
          class="trust-strip__item"
        >
          <div class="trust-strip__icon">
            <component :is="item.icon" class="w-6 h-6" />
          </div>
          <div>
            <h3 class="trust-strip__title">{{ item.title }}</h3>
            <p class="trust-strip__description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.trust-strip {
  @apply bg-gray-50 border-b border-gray-200 py-section-sm;
}

.trust-strip__eyebrow {
  @apply text-center text-xs font-sans font-semibold tracking-eyebrow-wide uppercase text-navy-600 mb-10;
}

.trust-strip__grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8;
}

.trust-strip__item {
  @apply flex items-start gap-4 lg:justify-center;
}

.trust-strip__icon {
  @apply w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-white border border-gray-200 text-navy-600 shadow-elevation-1;
}

.trust-strip__title {
  @apply text-base font-sans font-bold text-navy-800;
}

.trust-strip__description {
  @apply mt-1 text-label font-sans leading-snug text-gray-500 max-w-[200px];
}
</style>
