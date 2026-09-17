<script setup lang="ts">
interface Props {
  title: string
  description?: string
  icon?: string
  benefits?: string[]
}

const props = defineProps<Props>()
</script>

<template>
  <div class="partnership-type">
    <div v-if="icon" class="partnership-type-icon">
      <span class="partnership-type-icon-text">{{ icon }}</span>
    </div>
    <h3 class="partnership-type-title">{{ title }}</h3>
    <p v-if="description" class="partnership-type-description">{{ description }}</p>
    <ul v-if="benefits?.length" class="partnership-type-benefits">
      <li v-for="(benefit, index) in benefits" :key="index" class="partnership-type-benefit">
        <svg class="partnership-type-check" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        {{ benefit }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.partnership-type {
  @apply bg-white border border-gray-200 rounded-lg p-6;
}

.partnership-type-icon {
  @apply w-12 h-12 flex items-center justify-center bg-cobalt/10 rounded-lg mb-4;
}

.partnership-type-icon-text {
  @apply text-2xl;
}

.partnership-type-title {
  @apply text-lg font-display font-semibold text-navy;
}

.partnership-type-description {
  @apply mt-2 text-sm text-gray-600;
}

.partnership-type-benefits {
  @apply mt-4 space-y-2;
}

.partnership-type-benefit {
  @apply flex items-start gap-2 text-sm text-gray-600;
}

.partnership-type-check {
  @apply w-4 h-4 text-success-500 mt-0.5 flex-shrink-0;
}
</style>
