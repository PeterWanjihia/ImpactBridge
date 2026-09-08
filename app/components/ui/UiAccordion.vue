<script setup lang="ts">
interface Props {
  items: Array<{
    id: string
    title: string
    content?: string
    disabled?: boolean
  }>
  multiple?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  multiple: false
})

const openItems = ref<Set<string>>(new Set())

function toggleItem(id: string) {
  if (props.multiple) {
    if (openItems.value.has(id)) {
      openItems.value.delete(id)
    } else {
      openItems.value.add(id)
    }
  } else {
    if (openItems.value.has(id)) {
      openItems.value.clear()
    } else {
      openItems.value.clear()
      openItems.value.add(id)
    }
  }
}

function isOpen(id: string) {
  return openItems.value.has(id)
}
</script>

<template>
  <div class="ui-accordion">
    <div
      v-for="item in items"
      :key="item.id"
      class="ui-accordion-item"
    >
      <button
        type="button"
        :disabled="item.disabled"
        :class="[
          'ui-accordion-trigger',
          { 'ui-accordion-trigger--open': isOpen(item.id) }
        ]"
        :aria-expanded="isOpen(item.id)"
        @click="toggleItem(item.id)"
      >
        <span class="ui-accordion-title">{{ item.title }}</span>
        <svg
          :class="['ui-accordion-icon', { 'ui-accordion-icon--open': isOpen(item.id) }]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        v-show="isOpen(item.id)"
        class="ui-accordion-content"
        role="region"
      >
        <slot :name="item.id" :item="item">
          <p>{{ item.content }}</p>
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ui-accordion {
  @apply flex flex-col divide-y divide-gray-200 border border-gray-200 rounded-lg;
}

.ui-accordion-trigger {
  @apply flex items-center justify-between w-full px-4 py-3 text-left font-sans font-medium text-navy hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cobalt disabled:opacity-50 disabled:cursor-not-allowed;
}

.ui-accordion-icon {
  @apply w-5 h-5 text-gray-500 transition-transform duration-200;
}

.ui-accordion-icon--open {
  @apply rotate-180;
}

.ui-accordion-content {
  @apply px-4 pb-3 text-gray-600;
}
</style>
