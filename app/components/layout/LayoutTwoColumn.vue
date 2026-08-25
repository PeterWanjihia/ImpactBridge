<script setup lang="ts">
interface Props {
  reverse?: boolean
  gap?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  reverse: false,
  gap: 'md'
})
</script>

<template>
  <div
    :class="[
      'layout-two-column',
      `layout-two-column--gap-${gap}`,
      { 'layout-two-column--reverse': reverse }
    ]"
  >
    <div class="layout-two-column-primary">
      <slot name="primary" />
    </div>
    <div class="layout-two-column-secondary">
      <slot name="secondary" />
    </div>
  </div>
</template>

<style scoped>
.layout-two-column {
  @apply grid grid-cols-1 md:grid-cols-2 items-center;
}

.layout-two-column--gap-sm {
  @apply gap-4;
}

.layout-two-column--gap-md {
  @apply gap-8;
}

.layout-two-column--gap-lg {
  @apply gap-12;
}

.layout-two-column--reverse {
  @apply md:direction-rtl;
}

.layout-two-column--reverse > * {
  @apply md:direction-ltr;
}
</style>
