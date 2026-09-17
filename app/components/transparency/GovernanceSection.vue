<script setup lang="ts">
import { Building2, ShieldCheck, Scale, Check } from '@lucide/vue'
import type { Component } from 'vue'
import type { TransparencyGovernance } from '~/types'

const props = defineProps<{
  governance: TransparencyGovernance
}>()

const iconMap: Record<string, Component> = {
  building: Building2,
  shield: ShieldCheck,
  scale: Scale,
}
</script>

<template>
  <section id="policies" class="gov">
    <LayoutContainer>
      <div class="gov__grid">
        <div
          v-for="card in governance.cards"
          :key="card.title"
          class="gov-card"
        >
          <div class="gov-card__header">
            <span class="gov-card__icon">
              <component :is="iconMap[card.icon] ?? Building2" class="w-5 h-5" />
            </span>
            <h3 class="gov-card__title">{{ card.title }}</h3>
          </div>

          <p class="gov-card__description">{{ card.description }}</p>

          <ul class="gov-card__items">
            <li v-for="item in card.items" :key="item" class="gov-card__item">
              <Check class="w-4 h-4 text-success-600 flex-shrink-0" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.gov {
  @apply bg-white py-2 pb-14 md:pb-16 border-b border-gray-100;
}

.gov__grid {
  @apply grid grid-cols-1 md:grid-cols-3 gap-6;
}

/* Card */
.gov-card {
  @apply rounded-card border border-gray-200 bg-gray-50/60 p-card;
}

.gov-card__header {
  @apply flex items-center gap-3 mb-3;
}

.gov-card__icon {
  @apply w-10 h-10 rounded-full bg-teal-50 text-teal-600 border border-teal-100;
  @apply flex items-center justify-center flex-shrink-0;
}

.gov-card__title {
  @apply text-base font-display font-bold text-ink;
}

.gov-card__description {
  @apply text-label font-sans leading-relaxed text-gray-500;
}

.gov-card__items {
  @apply mt-4 space-y-2.5;
}

.gov-card__item {
  @apply flex items-start gap-2.5 text-label font-sans font-medium text-gray-700;
}
</style>
