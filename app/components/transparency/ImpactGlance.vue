<script setup lang="ts">
import { Building2, Server, School, Laptop, GraduationCap, Users } from '@lucide/vue'
import type { Component } from 'vue'
import type { TransparencyImpact } from '~/types'

const props = defineProps<{
  impact: TransparencyImpact
}>()

const iconMap: Record<string, Component> = {
  building: Building2,
  server: Server,
  school: School,
  laptop: Laptop,
  graduation: GraduationCap,
  users: Users,
}
</script>

<template>
  <section id="impact" class="glance">
    <LayoutContainer>
      <h2 class="glance__title">{{ impact.title }}</h2>

      <div class="glance__panel">
        <div class="glance__grid">
          <div
            v-for="metric in impact.metrics"
            :key="metric.label"
            class="glance__item"
          >
            <span class="glance__icon">
              <component :is="iconMap[metric.icon] ?? Building2" class="w-6 h-6" />
            </span>
            <span class="glance__value">{{ metric.value }}</span>
            <span class="glance__label">{{ metric.label }}</span>
          </div>
        </div>

        <p class="glance__asof">Data as of {{ impact.asOf }}</p>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.glance {
  @apply bg-white py-2 pb-14 md:pb-16 border-b border-gray-100;
}

.glance__title {
  @apply text-2xl md:text-3xl font-display font-bold text-ink mb-8;
}

/* Panel */
.glance__panel {
  @apply rounded-2xl border border-gray-200 bg-gray-50/60 p-6 md:p-8;
}

.glance__grid {
  @apply grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-4;
}

.glance__item {
  @apply flex flex-col items-center text-center gap-2 px-2 lg:border-r lg:border-gray-200 lg:last:border-r-0;
}

.glance__icon {
  @apply text-teal-600;
}

.glance__value {
  @apply text-2xl md:text-3xl font-sans font-bold text-ink tabular-nums;
}

.glance__label {
  @apply text-xs font-sans text-gray-500 leading-tight max-w-[140px];
}

/* As-of note */
.glance__asof {
  @apply mt-6 pt-4 border-t border-gray-200 text-2xs font-sans text-gray-400;
}
</style>
