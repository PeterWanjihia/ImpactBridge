<script setup lang="ts">
interface Props {
  category: string
  description?: string
  quantity?: number
  priority?: 'high' | 'medium' | 'low'
  specifications?: string[]
}

const props = defineProps<Props>()

const priorityColors: Record<string, string> = {
  high: 'bg-red-100 text-red-700',
  medium: 'bg-orange-100 text-orange-700',
  low: 'bg-green-100 text-green-700'
}
</script>

<template>
  <div class="equipment-need-card">
    <div class="equipment-need-card-header">
      <h3 class="equipment-need-card-category">{{ category }}</h3>
      <UiBadge v-if="priority" :class="priorityColors[priority]">{{ priority }}</UiBadge>
    </div>
    <p v-if="description" class="equipment-need-card-description">{{ description }}</p>
    <div v-if="quantity" class="equipment-need-card-quantity">
      Quantity needed: {{ quantity }}
    </div>
    <ul v-if="specifications?.length" class="equipment-need-card-specs">
      <li v-for="(spec, index) in specifications" :key="index" class="equipment-need-card-spec">
        {{ spec }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.equipment-need-card {
  @apply bg-white border border-gray-200 rounded-lg p-4;
}

.equipment-need-card-header {
  @apply flex items-center justify-between;
}

.equipment-need-card-category {
  @apply text-lg font-serif font-semibold text-navy;
}

.equipment-need-card-description {
  @apply mt-2 text-sm text-gray-600;
}

.equipment-need-card-quantity {
  @apply mt-2 text-sm font-sans font-medium text-cobalt;
}

.equipment-need-card-specs {
  @apply mt-3 space-y-1;
}

.equipment-need-card-spec {
  @apply text-xs text-gray-500 before:content-["•"] before:mr-2;
}
</style>
