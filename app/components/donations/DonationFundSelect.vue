<script setup lang="ts">
import type { Fund } from '~/types'

/**
 * "Where should your contribution go?" — allocation radios backed by Funds
 * from GET /v1/donation-options (Step 1 of the donation workflow).
 * Radio semantics (single selection) rather than a select box, per design.
 */
interface Props {
  funds: Fund[]
  modelValue?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  disabled: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const groupName = `fund-${useId()}`
</script>

<template>
  <fieldset class="donation-fund-select">
    <legend class="donation-fund-select__legend">
      Where should your contribution go?
    </legend>
    <div class="donation-fund-select__options">
      <label
        v-for="fund in funds"
        :key="fund.id"
        class="donation-fund-select__option"
        :class="{ 'donation-fund-select__option--disabled': disabled }"
      >
        <input
          type="radio"
          :name="groupName"
          :value="fund.id"
          :checked="modelValue === fund.id"
          :disabled="disabled"
          class="donation-fund-select__radio"
          @change="emit('update:modelValue', fund.id)"
        />
        <span class="donation-fund-select__copy">
          <span class="donation-fund-select__name">{{ fund.name }}</span>
          <span v-if="fund.description" class="donation-fund-select__description">
            {{ fund.description }}
          </span>
        </span>
      </label>
    </div>
  </fieldset>
</template>

<style scoped>
.donation-fund-select {
  @apply m-0 p-0 border-0;
}

.donation-fund-select__legend {
  @apply text-sm font-sans font-semibold text-navy mb-3 px-0;
}

.donation-fund-select__options {
  @apply flex flex-col gap-3;
}

.donation-fund-select__option {
  @apply flex items-start gap-2.5 cursor-pointer;
}

.donation-fund-select__option--disabled {
  @apply opacity-60 cursor-not-allowed;
}

.donation-fund-select__radio {
  @apply mt-0.5 w-4 h-4 text-cobalt border-gray-300 focus:ring-cobalt focus:ring-2 focus:ring-offset-0 cursor-pointer;
}

.donation-fund-select__copy {
  @apply flex flex-col gap-0.5;
}

.donation-fund-select__name {
  @apply text-sm font-sans font-medium text-gray-800 leading-snug;
}

.donation-fund-select__description {
  @apply text-xs font-sans text-gray-500 leading-snug;
}
</style>
