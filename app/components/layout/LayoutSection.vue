<script setup lang="ts">
interface Props {
  tag?: 'div' | 'section' | 'article'
  padded?: boolean
  background?: 'white' | 'gray' | 'navy'
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'section',
  padded: true,
  background: 'white'
})
</script>

<template>
  <component
    :is="tag"
    :class="[
      'layout-section',
      `layout-section--${background}`,
      { 'layout-section--padded': padded }
    ]"
  >
    <slot />
  </component>
</template>

<style scoped>
.layout-section {
  @apply w-full;
}

.layout-section--padded {
  @apply py-12 md:py-16;
}

.layout-section--white {
  @apply bg-white;
}

.layout-section--gray {
  @apply bg-gray-50;
}

.layout-section--navy {
  @apply bg-navy text-white;
}
</style>
