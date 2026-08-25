<script setup lang="ts">
interface Props {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
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
  @apply bg-green-100 text-green-800;
}

.ui-badge--warning {
  @apply bg-orange-100 text-orange-800;
}

.ui-badge--error {
  @apply bg-red-100 text-red-800;
}

.ui-badge--info {
  @apply bg-blue-100 text-blue-800;
}

.ui-badge--sm {
  @apply px-2 py-0.5 text-xs;
}

.ui-badge--md {
  @apply px-2.5 py-1 text-sm;
}
</style>
