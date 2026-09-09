<script setup lang="ts">
import { Check } from '@lucide/vue'
import type { DonationStep } from '~/types'

/**
 * Progress indicator for the donation workflow (Choose → Details → Payment).
 * Purely presentational — the parent owns the workflow state.
 */
const props = withDefaults(
  defineProps<{
    steps?: { id: DonationStep; label: string }[]
    current?: DonationStep
  }>(),
  {
    steps: () => [
      { id: 'choose', label: 'Choose' },
      { id: 'details', label: 'Details' },
      { id: 'payment', label: 'Payment' },
    ],
    current: 'choose',
  },
)

const orderedSteps = computed(() => props.steps.map((s) => s.id))
const currentIndex = computed(() => orderedSteps.value.indexOf(props.current))

/** Numbered circles: done steps show a tick, upcoming steps stay muted. */
function stepState(index: number): 'done' | 'current' | 'upcoming' {
  if (index < currentIndex.value) return 'done'
  if (index === currentIndex.value) return 'current'
  return 'upcoming'
}
</script>

<template>
  <nav class="donation-stepper" aria-label="Donation steps">
    <template v-for="(step, index) in steps" :key="step.id">
      <span
        v-if="index > 0"
        class="donation-stepper-line"
        :class="{ 'donation-stepper-line--done': index <= currentIndex }"
        aria-hidden="true"
      />
      <span
        class="donation-stepper-step"
        :class="`donation-stepper-step--${stepState(index)}`"
        :aria-current="step.id === current ? 'step' : undefined"
      >
        <span class="donation-stepper-circle">
          <Check v-if="stepState(index) === 'done'" class="w-3 h-3" />
          <template v-else>{{ index + 1 }}</template>
        </span>
        <span class="donation-stepper-label">{{ step.label }}</span>
      </span>
    </template>
  </nav>
</template>

<style scoped>
.donation-stepper {
  @apply flex items-center gap-2;
}

.donation-stepper-step {
  @apply flex items-center gap-2;
}

.donation-stepper-circle {
  @apply flex items-center justify-center w-6 h-6 rounded-full text-xs font-sans font-semibold;
}

.donation-stepper-step--current .donation-stepper-circle {
  @apply bg-cobalt text-white;
}

.donation-stepper-step--done .donation-stepper-circle {
  @apply bg-cobalt/15 text-cobalt;
}

.donation-stepper-step--upcoming .donation-stepper-circle {
  @apply border border-gray-300 text-gray-400 bg-white;
}

.donation-stepper-label {
  @apply text-sm font-sans font-medium text-navy;
}

.donation-stepper-step--upcoming .donation-stepper-label {
  @apply text-gray-400;
}

.donation-stepper-line {
  @apply flex-1 h-px bg-gray-200 min-w-4;
}

.donation-stepper-line--done {
  @apply bg-cobalt/40;
}
</style>
