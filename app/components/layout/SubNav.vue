<script setup lang="ts">
interface Props {
  items: Array<{
    label: string
    to?: string
    active?: boolean
  }>
}

const props = defineProps<Props>()
</script>

<template>
  <nav class="sub-nav" aria-label="Breadcrumb">
    <ol class="sub-nav-list">
      <li v-for="(item, index) in items" :key="index" class="sub-nav-item">
        <NuxtLink
          v-if="item.to && !item.active"
          :to="item.to"
          class="sub-nav-link"
        >
          {{ item.label }}
        </NuxtLink>
        <span v-else class="sub-nav-current" :aria-current="item.active ? 'page' : undefined">
          {{ item.label }}
        </span>
        <svg
          v-if="index < items.length - 1"
          class="sub-nav-separator"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.sub-nav {
  @apply py-4;
}

.sub-nav-list {
  @apply flex items-center flex-wrap gap-2 text-sm;
}

.sub-nav-item {
  @apply flex items-center gap-2;
}

.sub-nav-link {
  @apply text-gray-500 hover:text-navy transition-colors;
}

.sub-nav-current {
  @apply text-navy font-medium;
}

.sub-nav-separator {
  @apply w-4 h-4 text-gray-400;
}
</style>
