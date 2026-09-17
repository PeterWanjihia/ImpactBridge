<script setup lang="ts">
interface Props {
  value: string | number
  label: string
  description?: string
  suffix?: string
  prefix?: string
  trend?: 'up' | 'down' | 'neutral'
  trendValue?: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="impact-metric">
    <div class="impact-metric-value">
      <span v-if="prefix" class="impact-metric-prefix">{{ prefix }}</span>
      {{ value }}
      <span v-if="suffix" class="impact-metric-suffix">{{ suffix }}</span>
    </div>
    <div class="impact-metric-label">{{ label }}</div>
    <div v-if="description" class="impact-metric-description">{{ description }}</div>
    <div v-if="trend" :class="['impact-metric-trend', `impact-metric-trend--${trend}`]">
      <svg v-if="trend === 'up'" class="impact-metric-trend-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
      <svg v-else-if="trend === 'down'" class="impact-metric-trend-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
      <span v-if="trendValue" class="impact-metric-trend-value">{{ trendValue }}</span>
    </div>
  </div>
</template>

<style scoped>
.impact-metric {
  @apply text-center;
}

.impact-metric-value {
  @apply text-4xl md:text-5xl font-display font-bold text-navy;
}

.impact-metric-prefix {
  @apply text-2xl;
}

.impact-metric-suffix {
  @apply text-2xl;
}

.impact-metric-label {
  @apply mt-2 text-sm font-sans font-medium text-gray-600;
}

.impact-metric-description {
  @apply mt-1 text-xs text-gray-500;
}

.impact-metric-trend {
  @apply mt-2 inline-flex items-center gap-1 text-sm font-sans font-medium;
}

.impact-metric-trend--up {
  @apply text-success-600;
}

.impact-metric-trend--down {
  @apply text-danger-600;
}

.impact-metric-trend--neutral {
  @apply text-gray-500;
}

.impact-metric-trend-icon {
  @apply w-4 h-4;
}
</style>
