<script setup lang="ts">
interface Props {
  modelValue?: number
  currency?: string
  presets?: number[]
  /** Preset grid columns at sm+ (2 or 3 — the donate widget uses 3) */
  columns?: 2 | 3
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
  currency: 'GBP',
  presets: () => [25, 50, 100, 250],
  columns: 2,
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
  /** Emitted when the donor switches between presets and a custom amount */
  'update:custom': [value: boolean]
}>()

const customAmount = ref('')
const showCustom = ref(false)

function selectPreset(amount: number) {
  if (showCustom.value) {
    showCustom.value = false
    emit('update:custom', false)
  }
  customAmount.value = ''
  emit('update:modelValue', amount)
}

function selectCustom() {
  if (!showCustom.value) {
    showCustom.value = true
    emit('update:custom', true)
  }
}

function setCustomAmount() {
  const amount = parseFloat(customAmount.value)
  if (!isNaN(amount) && amount > 0) {
    emit('update:modelValue', amount)
  }
}

function handleCustomInput() {
  setCustomAmount()
}
</script>

<template>
  <div class="donation-amount">
    <div :class="['donation-amount-presets', `donation-amount-presets--cols-${columns}`]">
      <button
        v-for="preset in presets"
        :key="preset"
        type="button"
        :class="[
          'donation-amount-preset',
          { 'donation-amount-preset--active': modelValue === preset && !showCustom }
        ]"
        @click="selectPreset(preset)"
      >
        {{ currency === 'GBP' ? '£' : '$' }}{{ preset }}
      </button>
      <button
        type="button"
        :class="[
          'donation-amount-preset',
          { 'donation-amount-preset--active': showCustom }
        ]"
        @click="selectCustom"
      >
        Custom
      </button>
    </div>
    <div v-if="showCustom" class="donation-amount-custom">
      <UiInput
        v-model="customAmount"
        type="number"
        :placeholder="`Enter amount in ${currency}`"
        :min="1"
        @update:modelValue="handleCustomInput"
      />
    </div>
  </div>
</template>

<style scoped>
.donation-amount {
  @apply flex flex-col gap-4;
}

.donation-amount-presets {
  @apply grid grid-cols-2 gap-3;
}

.donation-amount-presets--cols-3 {
  @apply sm:grid-cols-3;
}

.donation-amount-presets--cols-2 {
  @apply sm:grid-cols-4;
}

.donation-amount-preset {
  @apply py-3 px-4 text-center font-sans font-semibold border-2 border-gray-200 rounded-lg hover:border-cobalt hover:text-cobalt transition-colors focus:outline-none focus:ring-2 focus:ring-cobalt;
}

.donation-amount-preset--active {
  @apply border-cobalt bg-cobalt text-white;
}

.donation-amount-custom {
  @apply mt-2;
}
</style>
