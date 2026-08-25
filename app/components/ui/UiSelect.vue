<script setup lang="ts">
interface Option {
  value: string | number
  label: string
  disabled?: boolean
}

interface Props {
  modelValue?: string | number
  options: Option[]
  placeholder?: string
  disabled?: boolean
  error?: string
  label?: string
  required?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  placeholder: 'Select an option',
  disabled: false,
  required: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const selectId = computed(() => `select-${useId()}`)
</script>

<template>
  <div class="ui-select-wrapper">
    <label
      v-if="label"
      :for="selectId"
      class="ui-select-label"
    >
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <select
      :id="selectId"
      :value="modelValue"
      :disabled="disabled"
      :required="required"
      :class="[
        'ui-select',
        { 'ui-select--error': error }
      ]"
      @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    >
      <option value="" disabled>{{ placeholder }}</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :disabled="option.disabled"
      >
        {{ option.label }}
      </option>
    </select>
    <p v-if="error" class="ui-select-error">{{ error }}</p>
  </div>
</template>

<style scoped>
.ui-select-wrapper {
  @apply flex flex-col gap-1.5;
}

.ui-select-label {
  @apply text-sm font-sans font-medium text-navy;
}

.ui-select {
  @apply w-full px-3 py-2 text-base font-sans border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-cobalt focus:border-cobalt disabled:opacity-50 disabled:cursor-not-allowed;
}

.ui-select--error {
  @apply border-red-500 focus:ring-red-500 focus:border-red-500;
}

.ui-select-error {
  @apply text-sm text-red-600;
}
</style>
