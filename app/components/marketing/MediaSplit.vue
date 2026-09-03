<script setup lang="ts">
interface Props {
  title?: string
  description?: string
  imageUrl?: string
  imageAlt?: string
  imagePosition?: 'left' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
  imagePosition: 'right'
})
</script>

<template>
  <section class="media-split">
    <LayoutContainer>
      <div
        :class="[
          'media-split-grid',
          { 'media-split-grid--reverse': imagePosition === 'left' }
        ]"
      >
        <div class="media-split-media">
          <slot name="media">
            <img v-if="imageUrl" :src="imageUrl" :alt="imageAlt || title || ''" class="media-split-image" />
          </slot>
        </div>
        <div class="media-split-content">
          <h2 v-if="title" class="media-split-title">{{ title }}</h2>
          <p v-if="description" class="media-split-description">{{ description }}</p>
          <slot />
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.media-split {
  @apply py-16 md:py-20;
}

.media-split-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center;
}

.media-split-grid--reverse .media-split-media {
  @apply md:order-2;
}

.media-split-grid--reverse .media-split-content {
  @apply md:order-1;
}

.media-split-title {
  @apply text-2xl md:text-3xl font-serif font-bold text-navy;
}

.media-split-description {
  @apply mt-4 text-gray-600;
}

.media-split-image {
  @apply w-full rounded-lg shadow-lg;
}
</style>
