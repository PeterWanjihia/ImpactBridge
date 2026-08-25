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
</script>

<template>
  <div class="ui-tabs">
    <div class="ui-tabs-list" role="tablist">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        type="button"
        role="tab"
        :aria-selected="activeTab === tab.id"
        :disabled="tab.disabled"
        :class="[
          'ui-tab',
          { 'ui-tab--active': activeTab === tab.id }
        ]"
        @click="activeTab = tab.id"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="ui-tabs-content">
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
