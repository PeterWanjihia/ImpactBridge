<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  challenge: {
    eyebrow: string
    title: string
    description: string
    imageUrl: string
    imageAlt: string
    source?: string
    stats: Array<{
      value?: string
      iconKey?: string
      label: string
    }>
  }
  iconMap: Record<string, Component>
}>()
</script>

<template>
  <LayoutSection background="white">
    <LayoutContainer>
      <div class="challenge-grid">
        <div class="challenge-content">
          <p class="challenge-eyebrow">{{ challenge.eyebrow }}</p>
          <h2 class="challenge-title">{{ challenge.title }}</h2>
          <p class="challenge-description">{{ challenge.description }}</p>
          <div class="challenge-stats">
            <div v-for="(stat, index) in challenge.stats" :key="index" class="challenge-stat">
              <div v-if="stat.value" class="challenge-stat-value">{{ stat.value }}</div>
              <div v-else-if="stat.iconKey" class="challenge-stat-icon">
                <component :is="iconMap[stat.iconKey]" class="w-8 h-8" />
              </div>
              <p class="challenge-stat-label">{{ stat.label }}</p>
            </div>
          </div>
          <p v-if="challenge.source" class="challenge-source">
            {{ challenge.source }}
          </p>
        </div>
        <div class="challenge-media">
          <NuxtImg
            :src="challenge.imageUrl"
            :alt="challenge.imageAlt"
            class="challenge-image"
            width="800"
            height="600"
            loading="lazy"
            sizes="sm:100vw md:50vw"
          />
        </div>
      </div>
    </LayoutContainer>
  </LayoutSection>
</template>

<style scoped>
.challenge-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center;
}
.challenge-eyebrow {
  @apply text-2xs font-sans font-semibold text-cobalt uppercase tracking-eyebrow mb-3;
}
.challenge-title {
  @apply text-3xl md:text-4xl font-display font-bold text-navy;
}
.challenge-description {
  @apply mt-4 text-gray-600;
}
.challenge-stats {
  @apply mt-8 grid grid-cols-3 gap-4;
}
.challenge-stat {
  @apply bg-gray-50 rounded-lg p-4;
}
.challenge-stat-value {
  @apply text-2xl font-sans font-bold text-navy;
}
.challenge-stat-icon {
  @apply text-2xl;
}
.challenge-stat-label {
  @apply mt-2 text-xs text-gray-600;
}
.challenge-source {
  @apply mt-4 text-xs text-gray-400;
}
.challenge-image {
  @apply w-full rounded-lg shadow-elevation-2;
}
</style>
