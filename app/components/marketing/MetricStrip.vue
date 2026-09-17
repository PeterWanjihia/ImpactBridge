<script setup lang="ts">
interface Metric {
  value: string | number
  label: string
  suffix?: string
}

interface Props {
  metrics: Metric[]
}

const props = defineProps<Props>()
</script>

<template>
  <section class="metric-strip">
    <LayoutContainer>
      <div class="metric-strip-grid">
        <div v-for="(metric, index) in metrics" :key="index" class="metric-strip-item">
          <div class="metric-strip-value">
            {{ metric.value }}<span v-if="metric.suffix" class="metric-strip-suffix">{{ metric.suffix }}</span>
          </div>
          <div class="metric-strip-label">{{ metric.label }}</div>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.metric-strip {
  @apply py-section-sm bg-navy;
}

.metric-strip-grid {
  @apply grid grid-cols-2 md:grid-cols-4 gap-8;
}

.metric-strip-item {
  @apply text-center;
}

.metric-strip-value {
  @apply text-3xl md:text-4xl font-display font-bold text-white;
}

.metric-strip-suffix {
  @apply text-xl;
}

.metric-strip-label {
  @apply mt-2 text-sm text-gray-300;
}
</style>
