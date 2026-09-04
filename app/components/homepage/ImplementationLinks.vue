<script setup lang="ts">
import { ChevronRight } from '@lucide/vue'
import type { Component } from 'vue'

defineProps<{
  links: Array<{
    iconKey: string
    title: string
    description: string
    linkText: string
    to: string
  }>
  iconMap: Record<string, Component>
}>()
</script>

<template>
  <LayoutSection background="white">
    <LayoutContainer>
      <h2 class="implementation-title">Built for responsible implementation</h2>
      <LayoutCardGrid :columns="4" gap="md">
        <NuxtLink
          v-for="(link, index) in links"
          :key="index"
          :to="link.to"
          class="implementation-card"
        >
          <div class="implementation-card-icon">
            <component :is="iconMap[link.iconKey]" class="w-6 h-6" />
          </div>
          <h3 class="implementation-card-title">{{ link.title }}</h3>
          <p class="implementation-card-description">{{ link.description }}</p>
          <span class="implementation-card-link">
            {{ link.linkText }}
            <ChevronRight class="w-4 h-4" />
          </span>
        </NuxtLink>
      </LayoutCardGrid>
    </LayoutContainer>
  </LayoutSection>
</template>

<style scoped>
.implementation-title {
  @apply text-3xl md:text-4xl font-serif font-bold text-navy text-center mb-12;
}
.implementation-card {
  @apply block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow;
}
.implementation-card-icon {
  @apply w-10 h-10 flex items-center justify-center bg-cobalt/10 rounded-lg text-cobalt;
}
.implementation-card-title {
  @apply mt-4 text-base font-serif font-bold text-navy;
}
.implementation-card-description {
  @apply mt-2 text-sm text-gray-600;
}
.implementation-card-link {
  @apply mt-4 inline-flex items-center gap-1 text-sm font-sans font-semibold text-cobalt hover:text-navy transition-colors;
}

/* Touch targets ≥ 44px */
.implementation-card {
  @apply min-h-[44px];
}
</style>
