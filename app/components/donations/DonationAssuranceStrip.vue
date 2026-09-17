<script setup lang="ts">
import { ShieldCheck, MailOpen, PieChart, Lock } from '@lucide/vue'
import type { Component } from 'vue'
import type { DonationAssurance } from '~/types'

/**
 * Reassurance strip under the hero — payment rails, receipt, impact and
 * privacy notes. Editorial copy is CMS-owned; icons map by key.
 */
interface Props {
  items: DonationAssurance[]
}

defineProps<Props>()

const icons: Record<DonationAssurance['icon'], Component> = {
  shield: ShieldCheck,
  receipt: MailOpen,
  chart: PieChart,
  lock: Lock,
}
</script>

<template>
  <section class="assurance-strip">
    <LayoutContainer>
      <div class="assurance-strip__grid">
        <div
          v-for="item in items"
          :key="item.title"
          class="assurance-strip__card"
        >
          <span class="assurance-strip__icon">
            <component :is="icons[item.icon]" class="w-5 h-5" />
          </span>
          <div>
            <h3 class="assurance-strip__title">{{ item.title }}</h3>
            <p class="assurance-strip__description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.assurance-strip {
  @apply py-section-xs bg-white;
}

.assurance-strip__grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4;
}

.assurance-strip__card {
  @apply flex items-start gap-3.5 p-4 rounded-xl border border-gray-100 bg-gray-50/60;
}

.assurance-strip__icon {
  @apply flex items-center justify-center w-10 h-10 rounded-lg bg-cobalt/10 text-cobalt flex-shrink-0;
}

.assurance-strip__title {
  @apply text-sm font-sans font-bold text-navy;
}

.assurance-strip__description {
  @apply mt-1 text-xs font-sans text-gray-500 leading-snug;
}
</style>
