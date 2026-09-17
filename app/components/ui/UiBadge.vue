<script setup lang="ts">
interface Props {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'teal'
  size?: 'sm' | 'md'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md'
})
</script>

<template>
  <span
    :class="[
      'ui-badge',
      `ui-badge--${variant}`,
      `ui-badge--${size}`
    ]"
  >
    <slot />
  </span>
</template>

<style scoped>
.ui-badge {
  @apply inline-flex items-center font-sans font-medium rounded-full;
}

.ui-badge--default {
  @apply bg-gray-100 text-gray-800;
}

.ui-badge--success {
  @apply bg-success-100 text-success-800;
}

.ui-badge--warning {
  @apply bg-warning-100 text-warning-800;
}

.ui-badge--error {
  @apply bg-danger-100 text-danger-800;
}

.ui-badge--info {
  @apply bg-cobalt-100 text-cobalt-800;
}

.ui-badge--teal {
  @apply bg-teal text-white;
}

.ui-badge--sm {
  @apply px-2 py-0.5 text-xs;
}

.ui-badge--md {
  @apply px-2.5 py-1 text-sm;
}
</style>
