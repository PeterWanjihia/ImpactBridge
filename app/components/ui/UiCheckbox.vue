<script setup lang="ts">
interface Props {
  modelValue?: boolean
  label?: string
  disabled?: boolean
  error?: string
  required?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  disabled: false,
  required: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const checkboxId = computed(() => `checkbox-${useId()}`)
</script>

<template>
  <div class="ui-checkbox-wrapper">
    <div class="ui-checkbox-container">
      <input
        :id="checkboxId"
        type="checkbox"
        :checked="modelValue"
        :disabled="disabled"
        :required="required"
        class="ui-checkbox-input"
        @change="emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
      />
      <label
        v-if="label"
        :for="checkboxId"
        class="ui-checkbox-label"
      >
        {{ label }}
        <span v-if="required" class="text-danger-500">*</span>
      </label>
    </div>
    <p v-if="error" class="ui-checkbox-error">{{ error }}</p>
  </div>
</template>

<style scoped>
.ui-checkbox-wrapper {
  @apply flex flex-col gap-1.5;
}

.ui-checkbox-container {
  @apply flex items-center gap-2;
}

.ui-checkbox-input {
  @apply w-4 h-4 text-cobalt border-gray-300 rounded focus:ring-cobalt focus:ring-2 focus:ring-offset-2;
}

.ui-checkbox-label {
  @apply text-sm font-sans text-navy;
}

.ui-checkbox-error {
  @apply text-sm text-danger-600;
}
</style>
