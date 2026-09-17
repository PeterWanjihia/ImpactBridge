<script setup lang="ts">
import {
  Heart,
  Building2,
  CheckCircle2,
  ArrowRight,
} from '@lucide/vue'

defineProps<{
  waysToGive: {
    title: string
    individual: {
      title: string
      description: string
      items: string[]
      imageUrl: string
      imageAlt: string
      cta: { text: string; to: string }
    }
    corporate: {
      title: string
      description: string
      items: string[]
      note?: string
      imageUrl: string
      imageAlt: string
      cta: { text: string; to: string }
    }
  }
}>()
</script>

<template>
  <LayoutSection class="bg-white py-section-sm lg:py-section">
    <LayoutContainer>
      <h2 class="ways-title">{{ waysToGive.title }}</h2>

      <div class="ways-grid">
        <!-- Individual Giving Card -->
        <div class="ways-card">
          <div class="ways-card-content">
            <div class="ways-card-header">
              <Heart class="w-6 h-6 text-cobalt-600" />
              <h3 class="ways-card-title text-cobalt-600">
                {{ waysToGive.individual.title }}
              </h3>
            </div>
            <p class="ways-card-description">
              {{ waysToGive.individual.description }}
            </p>
            <ul class="ways-card-list">
              <li
                v-for="(item, i) in waysToGive.individual.items"
                :key="i"
                class="ways-card-item"
              >
                <CheckCircle2 class="w-4 h-4 text-cobalt-600 flex-shrink-0" />
                <span>{{ item }}</span>
              </li>
            </ul>
            <NuxtLink
              :to="waysToGive.individual.cta.to"
              class="ways-btn ways-btn-blue"
            >
              <span>{{ waysToGive.individual.cta.text }}</span>
              <ArrowRight class="w-4 h-4 ml-1" />
            </NuxtLink>
          </div>
          <div class="ways-card-image-wrap">
            <div class="ways-card-fade" />
            <NuxtImg
              :src="waysToGive.individual.imageUrl"
              :alt="waysToGive.individual.imageAlt"
              class="ways-card-img"
              width="800"
              height="600"
              loading="lazy"
              sizes="sm:100vw md:50vw"
            />
          </div>
        </div>

        <!-- Corporate Partnership Card -->
        <div class="ways-card">
          <div class="ways-card-content">
            <div class="ways-card-header">
              <Building2 class="w-6 h-6 text-teal-900" />
              <h3 class="ways-card-title text-teal-900">
                {{ waysToGive.corporate.title }}
              </h3>
            </div>
            <p class="ways-card-description">
              {{ waysToGive.corporate.description }}
            </p>
            <ul class="ways-card-list">
              <li
                v-for="(item, i) in waysToGive.corporate.items"
                :key="i"
                class="ways-card-item"
              >
                <CheckCircle2 class="w-4 h-4 text-teal-900 flex-shrink-0" />
                <span>{{ item }}</span>
              </li>
            </ul>
            <p v-if="waysToGive.corporate.note" class="ways-card-note">
              {{ waysToGive.corporate.note }}
            </p>
            <NuxtLink
              :to="waysToGive.corporate.cta.to"
              class="ways-btn ways-btn-green"
            >
              <span>{{ waysToGive.corporate.cta.text }}</span>
              <ArrowRight class="w-4 h-4 ml-1" />
            </NuxtLink>
          </div>
          <div class="ways-card-image-wrap">
            <div class="ways-card-fade" />
            <NuxtImg
              :src="waysToGive.corporate.imageUrl"
              :alt="waysToGive.corporate.imageAlt"
              class="ways-card-img"
              width="800"
              height="600"
              loading="lazy"
              sizes="sm:100vw md:50vw"
            />
          </div>
        </div>
      </div>
    </LayoutContainer>
  </LayoutSection>
</template>

<style scoped>
.ways-title {
  @apply text-3xl md:text-4xl font-display font-bold text-ink text-center mb-10 tracking-tight;
}
.ways-grid {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch;
}
.ways-card {
  @apply relative bg-white border border-gray-200/80 rounded-card overflow-hidden flex flex-col md:flex-row shadow-elevation-1 min-h-[380px];
}
.ways-card-content {
  @apply relative z-20 flex-1 p-card md:p-card-lg flex flex-col justify-between max-w-full md:max-w-[62%];
}
.ways-card-header {
  @apply flex items-center gap-2.5 mb-2;
}
.ways-card-title {
  @apply text-xl font-display font-bold tracking-tight;
}
.ways-card-description {
  @apply text-label font-sans text-gray-600 leading-snug mb-5;
}
.ways-card-list {
  @apply space-y-2.5 mb-4;
}
.ways-card-item {
  @apply flex items-center gap-2.5 text-xs font-sans font-medium text-gray-800;
}
.ways-card-note {
  @apply text-2xs font-sans text-gray-500 leading-relaxed mb-4;
}
.ways-btn {
  @apply inline-flex items-center justify-center px-5 py-2.5 rounded-full text-label font-sans font-semibold text-white transition-all whitespace-nowrap self-start mt-auto;
}
.ways-btn-blue {
  @apply bg-cobalt-600 hover:bg-cobalt-700;
}
.ways-btn-green {
  @apply bg-teal-900 hover:bg-teal-950;
}
.ways-card-image-wrap {
  @apply relative md:absolute md:right-0 md:top-0 md:bottom-0 md:w-[48%] h-48 md:h-full z-10 overflow-hidden;
}
.ways-card-fade {
  @apply hidden md:block absolute inset-0 z-10 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none;
}
.ways-card-img {
  @apply w-full h-full object-cover object-center;
}
</style>
