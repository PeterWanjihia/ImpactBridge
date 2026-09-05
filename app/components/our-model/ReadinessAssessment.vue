<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'

defineProps<{
  readiness: {
    cards: Array<{
      title: string
      description: string
      image: string
      alt: string
    }>
  }
}>()
</script>

<template>
  <section class="model-readiness">
    <LayoutContainer>
      <div class="model-readiness-layout">
        <!-- Header -->
        <div class="model-readiness-header">
          <span class="model-readiness-number">02</span>
          <h2 class="model-readiness-title">The model begins with a school—not a device.</h2>
          <p class="model-readiness-description">
            We assess readiness in partnership with school leaders to ensure the hub will be used, protected and
            sustained.
          </p>
          <NuxtLink to="/transparency" class="model-readiness-link">
            Readiness assessment framework
            <ArrowRight class="w-4 h-4" />
          </NuxtLink>
        </div>

        <!-- Cards -->
        <div class="model-readiness-cards">
          <div v-for="card in readiness.cards" :key="card.title" class="model-readiness-card">
            <ClientOnly>
              <div class="model-readiness-card-image">
                <img :src="card.image" :alt="card.alt" class="model-readiness-card-img" loading="lazy" />
              </div>
              <template #fallback>
                <div class="model-readiness-card-image model-readiness-card-image--placeholder" />
              </template>
            </ClientOnly>
            <h3 class="model-readiness-card-title">{{ card.title }}</h3>
            <p class="model-readiness-card-description">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.model-readiness {
  @apply py-12 md:py-16 bg-white;
}
.model-readiness-layout {
  @apply grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16 items-start;
}
.model-readiness-header {
  @apply lg:sticky lg:top-8;
}
.model-readiness-number {
  @apply inline-flex items-center justify-center w-10 h-10 rounded-full bg-cobalt/10 text-cobalt font-sans font-bold text-sm;
}
.model-readiness-title {
  @apply mt-4 text-3xl md:text-4xl font-serif font-bold text-navy leading-tight;
}
.model-readiness-description {
  @apply mt-4 text-gray-600;
}
.model-readiness-link {
  @apply mt-6 inline-flex items-center gap-2 text-cobalt font-sans font-semibold text-sm hover:text-cobalt/80 transition-colors;
}
.model-readiness-cards {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5;
}
.model-readiness-card {
  @apply flex flex-col;
}
.model-readiness-card-image {
  @apply relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4;
}
.model-readiness-card-image--placeholder {
  @apply bg-gray-200;
}
.model-readiness-card-img {
  @apply w-full h-full object-cover;
}
.model-readiness-card-title {
  @apply text-base font-sans font-bold text-navy leading-snug;
}
.model-readiness-card-description {
  @apply mt-2 text-sm text-gray-500 leading-relaxed;
}
</style>
