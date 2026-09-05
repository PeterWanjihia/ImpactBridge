<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'
</script>

<template>
  <LayoutSection background="gray">
    <LayoutContainer>
      <div class="stories-insight-bar">
        <div class="stories-insight-item">
          <h3 class="stories-insight-title">Stories show experience.</h3>
          <p class="stories-insight-desc">
            Each story reflects a real person's journey and perspective.
          </p>
        </div>
        <div class="stories-insight-divider" />
        <div class="stories-insight-item">
          <h3 class="stories-insight-title">Evidence shows pattern.</h3>
          <p class="stories-insight-desc">
            Our Impact page brings together the data that many stories help explain.
          </p>
          <NuxtLink to="/impact" class="stories-insight-link">
            See the evidence <ArrowRight class="w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
    </LayoutContainer>
  </LayoutSection>
</template>

<style scoped>
.stories-insight-bar {
  @apply grid grid-cols-1 md:grid-cols-2 gap-8 items-start;
}

.stories-insight-divider {
  @apply hidden md:block w-px h-full bg-gray-200;
}

.stories-insight-item {
  @apply space-y-3;
}

.stories-insight-title {
  @apply text-xl font-serif font-bold text-navy;
}

.stories-insight-desc {
  @apply text-sm text-gray-600 leading-relaxed;
}

.stories-insight-link {
  @apply mt-2 inline-flex items-center gap-1.5 text-sm font-sans font-semibold text-cobalt hover:text-cobalt/80 transition-colors;
}
</style>
