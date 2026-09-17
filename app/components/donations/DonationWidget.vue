<script setup lang="ts">
import {
  CreditCard,
  Bitcoin,
  Landmark,
  ArrowRight,
  ArrowLeft,
  Heart,
} from '@lucide/vue'
import type { Component } from 'vue'
import type {
  DonationStep,
  PaymentMethod,
  DonationFrequency,
  DonorDetails,
  Fund,
} from '~/types'
import {
  validateEmail,
  validateDonationAmount,
  validateRequired,
} from '~/utils/validation'

/**
 * The donation workflow widget (Step 1 Choose → Step 2 Details → Step 3 Payment).
 *
 * Architecture spec mapping:
 *   - Step 2 → POST /v1/donations (create donation intent; opaque public ID).
 *   - Step 3 → POST /v1/donations/:id/checkout (Stripe-hosted checkout) and
 *     redirect. The browser never sees payment credentials beyond this and
 *     never decides that a payment succeeded.
 *   - For crypto/bank transfer methods the Go API answers the same checkout
 *     call with its own hosted instructions (crypto invoice / transfer details).
 */
interface Props {
  /** Funds from GET /v1/donation-options (defaults used until API is live) */
  funds?: Fund[]
  /** Enabled payment methods from GET /v1/donation-options */
  paymentMethods?: PaymentMethod[]
  currency?: string
  presets?: number[]
}

const props = withDefaults(defineProps<Props>(), {
  funds: () => [],
  paymentMethods: () => ['card', 'crypto', 'bank_transfer'] as PaymentMethod[],
  currency: 'GBP',
  presets: () => [25, 50, 100, 250, 500],
})

const selectedCurrency = ref(props.currency)
const availablePresets = ref([...props.presets])

const { donate, getDonationOptions } = useDonation()

// ---------------------------------------------------------------------------
// Workflow state — local to the page per spec ("keep state local to the page").
// ---------------------------------------------------------------------------
const step = ref<DonationStep>('choose')
const method = ref<PaymentMethod>('card')
const frequency = ref<DonationFrequency>('once')
const amount = ref(50)
const customAmount = ref('')
const isCustom = ref(false)
const fundId = ref(props.funds[0]?.id ?? 'where-needed')

const details = ref<DonorDetails>({ email: '', name: '' })
const consent = ref(false)

const submitting = ref(false)
const errorMessage = ref('')

// Fetch live options on mount; silently keep defaults if the API is offline.
onMounted(async () => {
  const options = await getDonationOptions()
  if (!options) return
  if (options.funds?.length) {
    // Re-sync the selected fund to the live list
    fundId.value = options.funds.some((f) => f.id === fundId.value)
      ? fundId.value
      : options.funds[0]!.id
  }
  if (options.currency) selectedCurrency.value = options.currency
  if (options.presets?.length) {
    availablePresets.value = options.presets
    if (!isCustom.value) amount.value = options.presets[1] ?? options.presets[0]!
  }
})

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------
const amountError = computed(() => {
  const value = isCustom.value
    ? parseFloat(customAmount.value)
    : amount.value
  if (isNaN(value)) return { valid: false, error: 'Please enter a donation amount' }
  const result = validateDonationAmount(value)
  return result
})

const detailsErrors = ref<{ email?: string; name?: string; consent?: string }>({})

function validateDetails(): boolean {
  detailsErrors.value = {}
  const email = validateEmail(details.value.email)
  if (!email.valid) detailsErrors.value.email = email.error
  const name = validateRequired(details.value.name, 'Name')
  if (!name.valid) detailsErrors.value.name = name.error
  if (!consent.value) {
    detailsErrors.value.consent = 'Please confirm you are happy to hear from us'
  }
  return Object.keys(detailsErrors.value).length === 0
}

// ---------------------------------------------------------------------------
// Step transitions
// ---------------------------------------------------------------------------
function goChoose() {
  step.value = 'choose'
}

function goDetails() {
  if (amountError.value.valid === false) {
    errorMessage.value = amountError.value.error ?? 'Please check the amount'
    return
  }
  errorMessage.value = ''
  step.value = 'details'
}

function goBack() {
  step.value = 'choose'
}

// ---------------------------------------------------------------------------
// Submit — Step 2 → Step 3: create intent + redirect to hosted checkout
// ---------------------------------------------------------------------------
async function submitDonation() {
  if (!validateDetails()) return
  submitting.value = true
  errorMessage.value = ''
  try {
    await donate({
      method: method.value,
      frequency: frequency.value,
      amount: isCustom.value ? parseFloat(customAmount.value) : amount.value,
      fundId: fundId.value,
        currency: selectedCurrency.value,
        donor: {
          email: details.value.email.trim(),
          name: details.value.name.trim(),
        },
    })
    // Success = redirect to Stripe-hosted checkout (handled in startCheckout).
  } catch (error: any) {
    errorMessage.value =
      error?.message ?? 'Something went wrong starting your donation. Please try again.'
    submitting.value = false
  }
}

// ---------------------------------------------------------------------------
// Presentation helpers
// ---------------------------------------------------------------------------
const methodTabs = computed(() => {
  const all: { id: PaymentMethod; label: string; icon: Component }[] = [
    { id: 'card', label: 'Card & Wallets', icon: CreditCard },
    { id: 'crypto', label: 'Crypto', icon: Bitcoin },
    { id: 'bank_transfer', label: 'Bank Transfer', icon: Landmark },
  ]
  const enabled = new Set(props.paymentMethods)
  return all.filter((m) => enabled.has(m.id))
})

const currencySymbol = computed(() => (selectedCurrency.value === 'GBP' ? '£' : '$'))

const fundName = computed(
  () => props.funds.find((f) => f.id === fundId.value)?.name ?? 'Where it is needed most',
)

const summary = computed(
  () =>
    `${currencySymbol.value}${isCustom.value ? customAmount.value || '0' : amount.value} ${frequency.value === 'monthly' ? 'monthly' : 'one-time'}`,
)
</script>

<template>
  <div class="donation-widget">
    <DonationStepper :current="step" class="donation-widget__stepper" />

    <!-- ------------------------------------------------  STEP 1 · CHOOSE  -->
    <form v-if="step === 'choose'" class="donation-widget__step" @submit.prevent="goDetails">
      <!-- Method tabs -->
      <div class="donation-widget__methods">
        <button
          v-for="m in methodTabs"
          :key="m.id"
          type="button"
          class="donation-widget__method"
          :class="{ 'donation-widget__method--active': method === m.id }"
          :aria-pressed="method === m.id"
          @click="method = m.id"
        >
          <component :is="m.icon" class="w-5 h-5" />
          <span>{{ m.label }}</span>
        </button>
      </div>

      <!-- Frequency toggle -->
      <div class="donation-widget__frequency">
        <button
          type="button"
          class="donation-widget__freq-btn"
          :class="{ 'donation-widget__freq-btn--active': frequency === 'once' }"
          @click="frequency = 'once'"
        >
          Give once
        </button>
        <button
          type="button"
          class="donation-widget__freq-btn"
          :class="{ 'donation-widget__freq-btn--active': frequency === 'monthly' }"
          @click="frequency = 'monthly'"
        >
          Give monthly
        </button>
      </div>

      <!-- Amounts -->
      <DonationAmount
        v-model="amount"
        :currency="selectedCurrency"
        :presets="availablePresets"
        :columns="3"
        @update:custom="(v: boolean) => (isCustom = v)"
      />

      <!-- Allocation -->
      <DonationFundSelect v-model="fundId" :funds="funds" />

      <p v-if="errorMessage" class="donation-widget__error">{{ errorMessage }}</p>

      <UiButton type="submit" variant="primary" size="lg" class="donation-widget__cta">
        Continue to details
        <ArrowRight class="w-4 h-4" />
      </UiButton>
    </form>

    <!-- ------------------------------------------------ STEP 2 · DETAILS  -->
    <form
      v-else-if="step === 'details'"
      class="donation-widget__step"
      @submit.prevent="submitDonation"
    >
      <div class="donation-widget__summary">
        <Heart class="w-4 h-4 text-cobalt" />
        <span>{{ summary }} · {{ fundName }}</span>
        <button type="button" class="donation-widget__edit" @click="goBack">
          Edit
        </button>
      </div>

      <UiInput
        v-model="details.name"
        label="Your name"
        placeholder="Jane Doe"
        required
        :error="detailsErrors.name"
      />
      <UiInput
        v-model="details.email"
        type="email"
        label="Email address"
        placeholder="jane@example.com"
        required
        :error="detailsErrors.email"
      />
      <p class="donation-widget__hint">
        We'll send your receipt and confirmation here.
      </p>

      <UiCheckbox
        v-model="consent"
        label="Keep me updated on the impact of my gift"
        :error="detailsErrors.consent"
      />

      <p v-if="errorMessage" class="donation-widget__error">{{ errorMessage }}</p>

      <div class="donation-widget__actions">
        <UiButton variant="ghost" size="lg" @click="goBack">
          <ArrowLeft class="w-4 h-4" />
          Back
        </UiButton>
        <UiButton
          type="submit"
          variant="primary"
          size="lg"
          :loading="submitting"
          class="flex-1"
        >
          <template v-if="method === 'crypto'">Get crypto invoice</template>
          <template v-else-if="method === 'bank_transfer'">Get bank details</template>
          <template v-else>Continue to payment</template>
        </UiButton>
      </div>
    </form>

    <!-- ------------------------------- STEP 3 · PAYMENT (provider-hosted)  -->
    <div v-else class="donation-widget__step donation-widget__step--payment">
      <p class="donation-widget__payment-note">
        Redirecting you to our secure payment partner…
      </p>
      <span class="donation-widget__spinner" aria-hidden="true" />
    </div>
  </div>
</template>

<style scoped>
.donation-widget {
  @apply flex flex-col;
}

.donation-widget__stepper {
  @apply mb-6;
}

.donation-widget__step {
  @apply flex flex-col gap-5;
}

/* Method tabs */
.donation-widget__methods {
  @apply grid grid-cols-3 gap-2;
}

.donation-widget__method {
  @apply flex items-center justify-center gap-2 px-3 py-3 rounded-lg border border-gray-200 text-label font-sans font-medium text-gray-700 bg-white;
  @apply hover:border-cobalt hover:text-cobalt transition-colors focus:outline-none focus:ring-2 focus:ring-cobalt;
}

.donation-widget__method--active {
  @apply border-cobalt text-cobalt bg-cobalt/5;
}

/* Frequency */
.donation-widget__frequency {
  @apply grid grid-cols-2 gap-2;
}

.donation-widget__freq-btn {
  @apply py-2.5 rounded-lg text-sm font-sans font-semibold border border-gray-200 text-gray-600 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-cobalt;
}

.donation-widget__freq-btn--active {
  @apply bg-cobalt text-white border-cobalt;
}

/* Custom amount input */
.donation-widget__custom-input {
  @apply w-full px-3 py-2 text-base font-sans border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cobalt focus:border-cobalt;
}

/* Summary row on Step 2 */
.donation-widget__summary {
  @apply flex items-center gap-2 px-3 py-2.5 rounded-lg bg-cobalt/5 text-sm font-sans font-medium text-navy;
}

.donation-widget__edit {
  @apply ml-auto text-xs font-sans font-semibold text-cobalt underline-offset-2 hover:underline;
}

.donation-widget__hint {
  @apply -mt-3 text-xs font-sans text-gray-400;
}

/* Step navigation */
.donation-widget__actions {
  @apply flex items-center gap-2;
}

.donation-widget__cta {
  @apply w-full;
}

/* Errors */
.donation-widget__error {
  @apply text-sm font-sans text-danger-600;
}

/* Step 3 placeholder */
.donation-widget__step--payment {
  @apply items-center py-8 gap-4;
}

.donation-widget__payment-note {
  @apply text-sm font-sans text-gray-500;
}

.donation-widget__spinner {
  @apply w-6 h-6 border-2 border-cobalt border-t-transparent rounded-full animate-spin;
}

</style>
