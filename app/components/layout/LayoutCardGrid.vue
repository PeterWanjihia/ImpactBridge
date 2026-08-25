<script setup lang="ts">
interface Props {
  columns?: 1 | 2 | 3 | 4
  gap?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  columns: 3,
  gap: 'md'
})
</script>

<template>
  <div
    :class="[
      'layout-card-grid',
      `layout-card-grid--${columns}`,
      `layout-card-grid--gap-${gap}`
    ]"
  >
    <slot />
  </div>
</template>

<style scoped>
.layout-card-grid {
  @apply grid;
}

.layout-card-grid--1 {
  @apply grid-cols-1;
}

.layout-card-grid--2 {
  @apply grid-cols-1 sm:grid-cols-2;
}

.layout-card-grid--3 {
  @apply grid-cols-1 sm:grid-cols-2 lg:grid-cols-3;
}

.layout-card-grid--4 {
  @apply grid-cols-1 sm:grid-cols-2 lg:grid-cols-4;
}

.layout-card-grid--gap-sm {
  @apply gap-4;
}

.layout-card-grid--gap-md {
  @apply gap-6;
}

.layout-card-grid--gap-lg {
  @apply gap-8;
}
</style>
