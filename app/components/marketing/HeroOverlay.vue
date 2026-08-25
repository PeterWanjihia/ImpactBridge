<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  imageUrl?: string
  imageAlt?: string
  overlay?: 'dark' | 'light' | 'gradient'
}

const props = withDefaults(defineProps<Props>(), {
  overlay: 'dark'
})
</script>

<template>
  <section class="hero-overlay">
    <div v-if="imageUrl" class="hero-overlay-bg">
      <img :src="imageUrl" :alt="imageAlt || title" class="hero-overlay-image" />
      <div :class="['hero-overlay-mask', `hero-overlay-mask--${overlay}`]" />
    </div>
    <div class="hero-overlay-content">
      <LayoutContainer>
        <div class="hero-overlay-inner">
          <h1 class="hero-overlay-title">{{ title }}</h1>
          <p v-if="subtitle" class="hero-overlay-subtitle">{{ subtitle }}</p>
          <slot name="actions" />
        </div>
      </LayoutContainer>
    </div>
  </section>
</template>

<style scoped>
.hero-overlay {
  @apply relative min-h-[60vh] flex items-center;
}

.hero-overlay-bg {
  @apply absolute inset-0;
}

.hero-overlay-image {
  @apply w-full h-full object-cover;
}

.hero-overlay-mask {
  @apply absolute inset-0;
}

.hero-overlay-mask--dark {
  @apply bg-navy/70;
}

.hero-overlay-mask--light {
  @apply bg-white/50;
}

.hero-overlay-mask--gradient {
  @apply bg-gradient-to-r from-navy/80 to-transparent;
}

.hero-overlay-content {
  @apply relative z-10 w-full py-20 md:py-24 lg:py-32;
}

.hero-overlay-inner {
  @apply max-w-2xl;
}

.hero-overlay-title {
  @apply text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white;
}

.hero-overlay-subtitle {
  @apply mt-6 text-lg md:text-xl text-gray-200;
}
</style>
