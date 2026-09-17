<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'

defineProps<{
  content: {
    categories: Array<{
      title: string
      count: string
      image: string
      alt: string
    }>
  }
}>()
</script>

<template>
  <section class="model-content">
    <LayoutContainer>
      <div class="model-content-layout">
        <!-- Header -->
        <div class="model-content-header">
          <span class="model-content-number">04</span>
          <h2 class="model-content-title">Offline does<br />not mean limited.</h2>
          <p class="model-content-description">
            Our hubs include thousands of high-quality, curriculum-aligned resources.
          </p>
          <NuxtLink to="/transparency" class="model-content-link">
            Explore content library
            <ArrowRight class="w-4 h-4" />
          </NuxtLink>
        </div>

        <!-- Content Cards -->
        <div class="model-content-cards">
          <div v-for="category in content.categories" :key="category.title" class="model-content-card">
            <div class="model-content-card-info">
              <h3 class="model-content-card-title">{{ category.title }}</h3>
              <span class="model-content-card-count">{{ category.count }}</span>
            </div>
            <ClientOnly>
              <div class="model-content-card-image">
                <img :src="category.image" :alt="category.alt" class="model-content-card-img" loading="lazy" />
              </div>
              <template #fallback>
                <div class="model-content-card-image model-content-card-image--placeholder" />
              </template>
            </ClientOnly>
          </div>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.model-content {
  @apply py-section-sm md:py-section bg-white;
}
.model-content-layout {
  @apply grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-8 items-start;
}
.model-content-header {
  @apply lg:sticky lg:top-8;
}
.model-content-number {
  @apply inline-flex items-center justify-center w-10 h-10 rounded-full bg-cobalt/10 text-cobalt font-sans font-bold text-sm;
}
.model-content-title {
  @apply mt-4 text-3xl md:text-4xl font-display font-bold text-navy leading-tight;
}
.model-content-description {
  @apply mt-4 text-gray-600;
}
.model-content-link {
  @apply mt-6 inline-flex items-center gap-2 text-cobalt font-sans font-semibold text-sm hover:text-cobalt/80 transition-colors;
}
.model-content-cards {
  @apply grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4;
}
.model-content-card {
  @apply flex flex-col;
}
.model-content-card-info {
  @apply mb-3;
}
.model-content-card-title {
  @apply text-sm font-sans font-bold text-navy;
}
.model-content-card-count {
  @apply text-xs font-sans text-cobalt mt-0.5 block;
}
.model-content-card-image {
  @apply relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-navy/5;
}
.model-content-card-image--placeholder {
  @apply bg-gray-200;
}
.model-content-card-img {
  @apply w-full h-full object-cover mix-blend-multiply;
  filter: hue-rotate(200deg) saturate(1.2);
}
</style>
