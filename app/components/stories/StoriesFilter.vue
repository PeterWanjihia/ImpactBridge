<script setup lang="ts">
import type { StoriesFilterItem } from '~/types'

interface Props {
  filters: StoriesFilterItem[]
  activeFilter?: string
}

const props = withDefaults(defineProps<Props>(), {
  activeFilter: 'all'
})

const emit = defineEmits<{
  'update:activeFilter': [value: string]
}>()
</script>

<template>
  <section class="stories-filter">
    <LayoutContainer>
      <div class="stories-filter-tabs">
        <button
          v-for="filter in filters"
          :key="filter.value"
          :class="[
            'stories-filter-tab',
            { 'stories-filter-tab--active': activeFilter === filter.value }
          ]"
          @click="emit('update:activeFilter', filter.value)"
        >
          {{ filter.label }}
        </button>
      </div>
      <p class="stories-filter-notice">
        <span class="stories-filter-notice-icon">ℹ</span>
        Real people. Real schools. Real change. All stories are shared with consent and respect.
        <NuxtLink to="/transparency" class="stories-filter-notice-link">
          Read our storytelling principles →
        </NuxtLink>
      </p>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.stories-filter {
  @apply py-8 border-b border-gray-100;
}

.stories-filter-tabs {
  @apply flex flex-wrap gap-3 justify-center;
}

.stories-filter-tab {
  @apply px-5 py-2.5 rounded-full text-sm font-sans font-medium transition-all
         border border-gray-200 text-gray-600 hover:border-navy hover:text-navy;
}

.stories-filter-tab--active {
  @apply bg-navy text-white border-navy;
}

.stories-filter-notice {
  @apply mt-6 text-center text-sm text-gray-500 flex items-center justify-center gap-2;
}

.stories-filter-notice-icon {
  @apply text-cobalt;
}

.stories-filter-notice-link {
  @apply text-cobalt font-semibold hover:text-cobalt/80 transition-colors;
}
</style>
