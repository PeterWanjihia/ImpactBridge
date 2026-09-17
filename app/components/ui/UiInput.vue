<script setup lang="ts">
interface Props {
  modelValue?: string
  type?: 'text' | 'email' | 'tel' | 'url' | 'number' | 'password'
  placeholder?: string
  min?: number | string
  disabled?: boolean
  error?: string
  label?: string
  required?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'text',
  placeholder: '',
  disabled: false,
  required: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const inputId = computed(() => `input-${useId()}`)
const errorId = computed(() => `${inputId.value}-error`)
</script>

<template>
  <div class="ui-input-wrapper">
    <label
      v-if="label"
      :for="inputId"
      class="ui-input-label"
    >
      {{ label }}
      <span v-if="required" class="text-danger-500">*</span>
    </label>
    <input
      :id="inputId"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :min="min"
      :disabled="disabled"
      :required="required"
      :aria-invalid="error ? 'true' : undefined"
      :aria-describedby="error ? errorId : undefined"
      :class="[
        'ui-input',
        { 'ui-input--error': error }
      ]"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <p v-if="error" :id="errorId" class="ui-input-error">{{ error }}</p>
  </div>
</template>

<style scoped>
.ui-input-wrapper {
  @apply flex flex-col gap-1.5;
}

.ui-input-label {
  @apply text-sm font-sans font-medium text-navy;
}

.ui-input {
  @apply w-full px-3 py-2 text-base font-sans border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cobalt focus:border-cobalt disabled:opacity-50 disabled:cursor-not-allowed;
}

.ui-input--error {
  @apply border-danger-500 focus:ring-danger-500 focus:border-danger-500;
}

.ui-input-error {
  @apply text-sm text-danger-600;
}
</style>
