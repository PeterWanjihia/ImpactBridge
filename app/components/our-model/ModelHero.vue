<script setup lang="ts">
import { ArrowDown, ArrowRight } from '@lucide/vue'
import type { Component } from 'vue'

defineProps<{
  hero: {
    imageUrl: string
    imageAlt: string
    title: string
    titleAccent: string
    description: string
    primaryCta: { text: string; to: string }
    secondaryCta: { text: string; to: string }
    tabs: Array<{
      label: string
      href: string
      active?: boolean
    }>
    features: Array<{
      iconKey: string
      label: string
    }>
  }
  iconMap: Record<string, Component>
}>()
</script>

<template>
  <section class="model-hero">
    <div class="model-hero-bg">
      <ClientOnly>
        <img :src="hero.imageUrl"
          :alt="hero.imageAlt" class="model-hero-image"
          width="1920" height="1080" />
        <template #fallback>
          <div class="model-hero-image model-hero-image--placeholder" />
        </template>
      </ClientOnly>
      <div class="model-hero-overlay" />
    </div>

    <!-- Tab Navigation -->
    <nav class="model-hero-tabs" aria-label="Model sections">
      <LayoutContainer>
        <ul class="model-hero-tab-list">
          <li v-for="tab in hero.tabs" :key="tab.label">
            <a :href="tab.href" :class="['model-hero-tab', { 'model-hero-tab--active': tab.active }]">
              {{ tab.label }}
            </a>
          </li>
        </ul>
      </LayoutContainer>
    </nav>

    <!-- Hero Content -->
    <div class="model-hero-content">
      <LayoutContainer>
        <div class="model-hero-inner">
          <h1 class="model-hero-title">
            {{ hero.title }}
            <span class="model-hero-title-accent">{{ hero.titleAccent }}</span>
          </h1>

          <p class="model-hero-description">
            {{ hero.description }}
          </p>

          <div class="model-hero-actions">
            <UiButton variant="primary" size="lg">
              <NuxtLink :to="hero.primaryCta.to" class="flex items-center gap-2"
                aria-label="Explore the model — learn how our approach works">
                {{ hero.primaryCta.text }}
                <ArrowDown class="w-5 h-5" />
              </NuxtLink>
            </UiButton>

            <UiButton variant="outline-white" size="lg" class="border-white/90">
              <NuxtLink :to="hero.secondaryCta.to" class="flex items-center gap-2"
                aria-label="See a hub in action — view how a learning hub operates">
                {{ hero.secondaryCta.text }}
                <ArrowRight class="w-5 h-5" />
              </NuxtLink>
            </UiButton>
          </div>
        </div>
      </LayoutContainer>
    </div>

    <!-- Feature Badges Strip -->
    <div class="model-hero-features">
      <LayoutContainer>
        <ul class="model-hero-feature-list">
          <li v-for="feature in hero.features" :key="feature.label" class="model-hero-feature-item">
            <component :is="iconMap[feature.iconKey]" class="w-4 h-4 text-cobalt-400 flex-shrink-0" />
            <span class="model-hero-feature-label">{{ feature.label }}</span>
          </li>
        </ul>
      </LayoutContainer>
    </div>
  </section>
</template>

<style scoped>
.model-hero {
  @apply relative min-h-[85vh] flex flex-col overflow-hidden;
}
.model-hero-bg {
  @apply absolute inset-0;
}
.model-hero-image {
  @apply w-full h-full object-cover;
}
.model-hero-image--placeholder {
  @apply bg-navy-800;
}
.model-hero-overlay {
  @apply absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/50;
}

/* Tab Navigation */
.model-hero-tabs {
  @apply relative z-10 pt-6;
}
.model-hero-tab-list {
  @apply flex flex-wrap gap-1 list-none p-0 m-0;
}
.model-hero-tab {
  @apply px-4 py-2 text-sm font-sans font-medium text-gray-300 hover:text-white transition-colors rounded-md;
}
.model-hero-tab--active {
  @apply text-cobalt-400 font-semibold;
}

/* Hero Content */
.model-hero-content {
  @apply relative z-10 flex-1 flex items-center py-section md:py-section-lg;
}
.model-hero-inner {
  @apply max-w-3xl;
}
.model-hero-title {
  @apply text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight;
}
.model-hero-title-accent {
  @apply block mt-2 italic text-cobalt-400;
}
.model-hero-description {
  @apply mt-6 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed;
}
.model-hero-actions {
  @apply mt-8 flex flex-wrap gap-4;
}

/* Feature Badges Strip */
.model-hero-features {
  @apply relative z-10 border-t border-white/10 py-4;
}
.model-hero-feature-list {
  @apply flex flex-wrap items-center gap-x-6 gap-y-3 list-none p-0 m-0;
}
.model-hero-feature-item {
  @apply flex items-center gap-2;
}
.model-hero-feature-label {
  @apply text-sm font-sans text-gray-300;
}
</style>
