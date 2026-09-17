<script setup lang="ts">
interface Tab {
  id: string
  label: string
  disabled?: boolean
}

interface Props {
  tabs: Tab[]
  modelValue?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => ''
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const activeTab = computed({
  get: () => props.modelValue || props.tabs[0]?.id,
  set: (value) => emit('update:modelValue', value)
})

function moveTab(currentId: string, direction: 1 | -1) {
  const enabledTabs = props.tabs.filter(tab => !tab.disabled)
  const currentIndex = enabledTabs.findIndex(tab => tab.id === currentId)
  if (currentIndex < 0) return
  const nextIndex = (currentIndex + direction + enabledTabs.length) % enabledTabs.length
  activeTab.value = enabledTabs[nextIndex]!.id
}

function handleTabKeydown(event: KeyboardEvent, tabId: string) {
  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
    event.preventDefault()
    moveTab(tabId, 1)
  } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
    event.preventDefault()
    moveTab(tabId, -1)
  } else if (event.key === 'Home' || event.key === 'End') {
    event.preventDefault()
    const enabledTabs = props.tabs.filter(tab => !tab.disabled)
    activeTab.value = event.key === 'Home' ? enabledTabs[0]!.id : enabledTabs[enabledTabs.length - 1]!.id
  }
}
</script>

<template>
  <div class="ui-tabs">
    <div class="ui-tabs-list" role="tablist">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        type="button"
        role="tab"
        :id="`tab-${tab.id}`"
        :aria-controls="`tabpanel-${tab.id}`"
        :tabindex="activeTab === tab.id ? 0 : -1"
        :aria-selected="activeTab === tab.id"
        :disabled="tab.disabled"
        :class="[
          'ui-tab',
          { 'ui-tab--active': activeTab === tab.id }
        ]"
        @click="activeTab = tab.id"
        @keydown="handleTabKeydown($event, tab.id)"
      >
        {{ tab.label }}
      </button>
    </div>
    <div :id="`tabpanel-${activeTab}`" class="ui-tabs-content" role="tabpanel" :aria-labelledby="`tab-${activeTab}`" tabindex="0">
      <slot :active-tab="activeTab" />
    </div>
  </div>
</template>

<style scoped>
.ui-tabs {
  @apply flex flex-col;
}

.ui-tabs-list {
  @apply flex border-b border-gray-200;
}

.ui-tab {
  @apply px-4 py-2 text-sm font-sans font-medium text-gray-500 hover:text-navy hover:border-gray-300 border-b-2 border-transparent focus:outline-none focus:ring-2 focus:ring-cobalt focus:ring-inset disabled:opacity-50 disabled:cursor-not-allowed transition-colors;
}

.ui-tab--active {
  @apply text-navy border-cobalt;
}

.ui-tabs-content {
  @apply py-4;
}
</style>
