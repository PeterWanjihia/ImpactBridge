<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  items: Array<{
    iconKey: string
    title: string
    description: string
  }>
  iconMap: Record<string, Component>
}>()
</script>

<template>
  <LayoutSection background="white">
    <LayoutContainer>
      <LayoutCardGrid :columns="4" gap="md">
        <div v-for="(prop, index) in items" :key="index" class="value-prop">
          <div class="value-prop-icon">
            <component :is="iconMap[prop.iconKey]" class="w-8 h-8" />
          </div>
          <div>
            <h3 class="value-prop-title">{{ prop.title }}</h3>
            <p class="value-prop-description">{{ prop.description }}</p>
          </div>
        </div>
      </LayoutCardGrid>
    </LayoutContainer>
  </LayoutSection>
</template>

<style scoped>
.value-prop {
  @apply flex items-start gap-3;
}
.value-prop-icon {
  @apply flex-shrink-0 w-10 h-10 flex items-center justify-center bg-cobalt/10 rounded-lg text-cobalt;
}
.value-prop-title {
  @apply text-base font-sans font-bold text-navy;
}
.value-prop-description {
  @apply mt-1 text-sm text-gray-600;
}
</style>
