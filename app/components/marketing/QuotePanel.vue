<script setup lang="ts">
interface Props {
  quote: string
  author?: string
  role?: string
  imageUrl?: string
}

const props = defineProps<Props>()
</script>

<template>
  <section class="quote-panel">
    <LayoutContainer>
      <div class="quote-panel-content">
        <blockquote class="quote-panel-text">
          "{{ quote }}"
        </blockquote>
        <div v-if="author" class="quote-panel-attribution">
          <img v-if="imageUrl" :src="imageUrl" :alt="author" class="quote-panel-avatar" />
          <div>
            <div class="quote-panel-author">{{ author }}</div>
            <div v-if="role" class="quote-panel-role">{{ role }}</div>
          </div>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.quote-panel {
  @apply py-section bg-gray-50;
}

.quote-panel-content {
  @apply max-w-3xl mx-auto text-center;
}

.quote-panel-text {
  @apply text-2xl md:text-3xl font-display text-navy leading-relaxed;
}

.quote-panel-attribution {
  @apply mt-8 flex items-center justify-center gap-4;
}

.quote-panel-avatar {
  @apply w-12 h-12 rounded-full object-cover;
}

.quote-panel-author {
  @apply text-sm font-sans font-semibold text-navy;
}

.quote-panel-role {
  @apply text-sm text-gray-500;
}
</style>
