<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  imageUrl?: string
  imageAlt?: string
  imagePosition?: 'left' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
  imagePosition: 'right'
})
</script>

<template>
  <section class="hero-split">
    <LayoutContainer>
      <div
        :class="[
          'hero-split-grid',
          { 'hero-split-grid--reverse': imagePosition === 'left' }
        ]"
      >
        <div class="hero-split-content">
          <h1 class="hero-split-title">{{ title }}</h1>
          <p v-if="subtitle" class="hero-split-subtitle">{{ subtitle }}</p>
          <slot name="actions" />
        </div>
        <div v-if="imageUrl" class="hero-split-media">
          <img :src="imageUrl" :alt="imageAlt || title" class="hero-split-image" />
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.hero-split {
  @apply py-section md:py-section-lg lg:py-section-xl bg-white;
}

.hero-split-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center;
}

.hero-split-grid--reverse {
  @apply md:direction-rtl;
}

.hero-split-grid--reverse > * {
  @apply md:direction-ltr;
}

.hero-split-title {
  @apply text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy;
}

.hero-split-subtitle {
  @apply mt-6 text-lg text-gray-600;
}

.hero-split-media {
  @apply relative;
}

.hero-split-image {
  @apply w-full rounded-lg shadow-elevation-2;
}
</style>
