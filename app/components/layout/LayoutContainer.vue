<script setup lang="ts">
interface Props {
  tag?: 'div' | 'section' | 'article' | 'main'
  padded?: boolean
  constrained?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'div',
  padded: true,
  constrained: true
})
</script>

<template>
  <component
    :is="tag"
    :class="[
      'layout-container',
      { 'layout-container--padded': padded },
      { 'layout-container--constrained': constrained }
    ]"
  >
    <slot />
  </component>
</template>

<style scoped>
.layout-container {
  @apply w-full;
}

.layout-container--padded {
  @apply px-4 sm:px-6 lg:px-8;
}

.layout-container--constrained {
  @apply max-w-7xl mx-auto;
}
</style>
