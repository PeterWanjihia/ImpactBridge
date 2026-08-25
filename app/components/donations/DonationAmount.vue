<script setup lang="ts">
interface Props {
  modelValue?: number
  currency?: string
  presets?: number[]
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
  currency: 'GBP',
  presets: () => [25, 50, 100, 250]
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

const customAmount = ref('')
const showCustom = ref(false)

function selectPreset(amount: number) {
  showCustom.value = false
  customAmount.value = ''
  emit('update:modelValue', amount)
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
    <div class="donation-amount-presets">
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
        @click="showCustom = true"
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
        @input="handleCustomInput"
      />
    </div>
  </div>
</template>

<style scoped>
.donation-amount {
  @apply flex flex-col gap-4;
}

.donation-amount-presets {
  @apply grid grid-cols-2 sm:grid-cols-4 gap-3;
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
