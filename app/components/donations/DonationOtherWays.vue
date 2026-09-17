<script setup lang="ts">
import { ArrowRight, Building2, Laptop } from '@lucide/vue'
import type { Component } from 'vue'
import type { OtherWayToGive } from '~/types'

/**
 * "Other ways to give" cards shown next to the campaign panel — corporate
 * partnerships and equipment donation routes (internal links only; writes
 * live on their own pages through their own workflow components).
 */
interface Props {
  title: string
  items: OtherWayToGive[]
}

defineProps<Props>()

const icons: Record<OtherWayToGive['icon'], Component> = {
  building: Building2,
  laptop: Laptop,
}
</script>

<template>
  <div class="other-ways">
    <h3 class="other-ways__title">{{ title }}</h3>

    <div class="other-ways__list">
      <article
        v-for="item in items"
        :key="item.title"
        class="other-ways__card"
      >
        <span class="other-ways__icon">
          <component :is="icons[item.icon]" class="w-6 h-6" />
        </span>
        <div class="other-ways__copy">
          <h4 class="other-ways__card-title">{{ item.title }}</h4>
          <p class="other-ways__description">{{ item.description }}</p>
          <NuxtLink :to="item.linkTo" class="other-ways__link">
            {{ item.linkText }}
            <ArrowRight class="w-4 h-4" />
          </NuxtLink>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.other-ways {
  @apply flex flex-col h-full;
}

.other-ways__title {
  @apply text-2xs font-sans font-semibold tracking-eyebrow uppercase text-navy mb-4;
}

.other-ways__list {
  @apply flex flex-col gap-4 flex-1;
}

.other-ways__card {
  @apply flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 md:p-6 shadow-elevation-1 flex-1;
}

.other-ways__icon {
  @apply flex items-center justify-center w-12 h-12 rounded-lg bg-cobalt/10 text-cobalt flex-shrink-0;
}

.other-ways__copy {
  @apply flex flex-col items-start;
}

.other-ways__card-title {
  @apply text-base font-sans font-bold text-navy;
}

.other-ways__description {
  @apply mt-1.5 text-label font-sans text-gray-600 leading-relaxed;
}

.other-ways__link {
  @apply mt-3 inline-flex items-center gap-2 text-sm font-sans font-semibold text-cobalt hover:text-cobalt-700;
}
</style>
