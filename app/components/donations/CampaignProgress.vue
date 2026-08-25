<script setup lang="ts">
interface Props {
  current: number
  goal: number
  currency?: string
  showLabels?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  currency: 'GBP',
  showLabels: true
})

const percentage = computed(() => {
  if (props.goal <= 0) return 0
  return Math.min(100, Math.round((props.current / props.goal) * 100))
})

const formattedCurrent = computed(() => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: props.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(props.current)
})

const formattedGoal = computed(() => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: props.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(props.goal)
})
</script>

<template>
  <div class="campaign-progress">
    <div class="campaign-progress-bar">
      <div
        class="campaign-progress-fill"
        :style="{ width: `${percentage}%` }"
      />
    </div>
    <div v-if="showLabels" class="campaign-progress-labels">
      <span class="campaign-progress-current">{{ formattedCurrent }} raised</span>
      <span class="campaign-progress-goal">of {{ formattedGoal }} goal</span>
    </div>
    <div class="campaign-progress-percentage">
      {{ percentage }}% funded
    </div>
  </div>
</template>

<style scoped>
.campaign-progress {
  @apply flex flex-col gap-2;
}

.campaign-progress-bar {
  @apply h-3 bg-gray-200 rounded-full overflow-hidden;
}

.campaign-progress-fill {
  @apply h-full bg-cobalt rounded-full transition-all duration-500;
}

.campaign-progress-labels {
  @apply flex justify-between text-sm;
}

.campaign-progress-current {
  @apply font-sans font-semibold text-navy;
}

.campaign-progress-goal {
  @apply text-gray-500;
}

.campaign-progress-percentage {
  @apply text-sm font-sans font-medium text-cobalt;
}
</style>
