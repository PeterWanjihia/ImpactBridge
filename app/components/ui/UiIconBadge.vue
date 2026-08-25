<script setup lang="ts">
interface Props {
  icon?: string
  variant?: 'default' | 'primary' | 'secondary' | 'success'
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md'
})
</script>

<template>
  <div
    :class="[
      'ui-icon-badge',
      `ui-icon-badge--${variant}`,
      `ui-icon-badge--${size}`
    ]"
  >
    <slot name="icon">
      <span v-if="icon" class="ui-icon-badge-icon">{{ icon }}</span>
    </slot>
  </div>
</template>

<style scoped>
.ui-icon-badge {
  @apply inline-flex items-center gap-3;
}

.ui-icon-badge--sm {
  @apply text-sm;
}

.ui-icon-badge--md {
  @apply text-base;
}

.ui-icon-badge--lg {
  @apply text-lg;
}

.ui-icon-badge-icon {
  @apply flex items-center justify-center rounded-full;
}

.ui-icon-badge--primary .ui-icon-badge-icon {
  @apply bg-cobalt/10 text-cobalt;
}

.ui-icon-badge--secondary .ui-icon-badge-icon {
  @apply bg-teal/10 text-teal;
}

.ui-icon-badge--success .ui-icon-badge-icon {
  @apply bg-green-100 text-green-600;
}

.ui-icon-badge--sm .ui-icon-badge-icon {
  @apply w-6 h-6 text-xs;
}

.ui-icon-badge--md .ui-icon-badge-icon {
  @apply w-8 h-8 text-sm;
}

.ui-icon-badge--lg .ui-icon-badge-icon {
  @apply w-10 h-10 text-base;
}
</style>
