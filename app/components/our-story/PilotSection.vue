<script setup lang="ts">
import { Wrench, User, WifiOff, MapPin } from '@lucide/vue'
import type { Component } from 'vue'

const findings: Array<{
  icon: Component
  iconBg: string
  iconColor: string
  title: string
  description: string
}> = [
  {
    icon: Wrench,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    title: 'Hardware must survive reality',
    description: 'We refined the system for reliability, protection and the conditions in which a school operates.'
  },
  {
    icon: User,
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-500',
    title: 'Teachers determine adoption',
    description: 'A device without training transforms a classroom unless teachers understand, trust and use it.'
  },
  {
    icon: WifiOff,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    title: 'Offline still needs to feel rich',
    description: 'Removing internet dependency cannot mean stale, irrelevant or difficult-to-navigate content.'
  },
  {
    icon: MapPin,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    title: 'Local ownership drives longevity',
    description: 'The hub must become part of the school\'s teaching culture - not remain an outside project.'
  }
]
</script>

<template>
  <section class="pilot-section">
    <LayoutContainer>
      <div class="pilot-header">
        <div class="pilot-eyebrow">
          <span class="pilot-eyebrow-number">05</span>
          <span class="pilot-eyebrow-label">THE PILOT GAVE US EVIDENCE TO IMPROVE.</span>
        </div>
      </div>

      <div class="pilot-grid">
        <div v-for="(item, index) in findings" :key="index" class="pilot-card">
          <div :class="['pilot-card-icon', item.iconBg]">
            <component :is="item.icon" :class="['w-5 h-5', item.iconColor]" />
          </div>
          <h3 class="pilot-card-title">{{ item.title }}</h3>
          <p class="pilot-card-description">{{ item.description }}</p>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.pilot-section {
  @apply py-16 md:py-24 bg-white;
}
.pilot-header {
  @apply max-w-3xl mb-12;
}
.pilot-eyebrow {
  @apply flex items-center gap-2 mb-4;
}
.pilot-eyebrow-number {
  @apply w-6 h-6 rounded-full border border-cobalt/30 text-cobalt text-xs font-semibold flex items-center justify-center;
}
.pilot-eyebrow-label {
  @apply text-xs font-bold tracking-wider text-cobalt uppercase;
}

.pilot-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6;
}
.pilot-card {
  @apply bg-white rounded-xl p-6 border border-slate-200 shadow-sm;
}
.pilot-card-icon {
  @apply w-12 h-12 rounded-full flex items-center justify-center mb-4;
}
.pilot-card-title {
  @apply text-lg font-bold text-slate-900 mb-2;
}
.pilot-card-description {
  @apply text-sm text-slate-600 leading-relaxed;
}
</style>
