<script setup lang="ts">
import type { Donation } from '~/types'

// ---------------------------------------------------------------------------
// SEO — shared composable; spec: completion/operational routes must not be indexed
// ---------------------------------------------------------------------------
usePageSeo({
  title: 'Donation Complete',
  description: 'Thank you for supporting offline digital learning.',
  path: '/donate/complete',
  type: 'website',
  noindex: true,
})

// ---------------------------------------------------------------------------
// Data layer — verify donation status after Stripe redirect
// ---------------------------------------------------------------------------
const route = useRoute()
const { getDonationStatus } = useDonation()

const donationPublicId = computed(() => {
  const queryValue = route.query.donation_public_id
    ?? route.query.public_id
    ?? route.query.publicId
  return typeof queryValue === 'string' ? queryValue : ''
})
const donation = ref<Partial<Donation> | null>(null)
const loading = ref(true)
const verificationFailed = ref(false)

onMounted(async () => {
  if (!donationPublicId.value) {
    verificationFailed.value = true
    loading.value = false
    return
  }
  try {
    donation.value = await getDonationStatus(donationPublicId.value) as any
  } catch {
    verificationFailed.value = true
  } finally {
    loading.value = false
  }
})

const completionState = computed<'loading' | 'completed' | 'processing' | 'failed' | 'unverified'>(() => {
  if (loading.value) return 'loading'
  if (verificationFailed.value || !donation.value) return 'unverified'
  if (donation.value.status === 'completed') return 'completed'
  if (donation.value.status === 'pending' || donation.value.status === 'processing') return 'processing'
  return 'failed'
})
</script>

<template>
  <div class="page-donate-complete">
    <LayoutContainer>
      <div class="donate-complete-card">
        <div v-if="completionState === 'loading'" class="donate-complete-state">
          <span class="donate-complete-spinner" aria-hidden="true" />
          <h1 class="donate-complete-title">Verifying your donation</h1>
          <p class="donate-complete-description">Please wait while we confirm the payment with our provider.</p>
        </div>

        <div v-else-if="completionState === 'completed'" class="donate-complete-state">
          <h1 class="donate-complete-title">Thank you!</h1>
          <p class="donate-complete-description">Your donation has been confirmed. We'll send a receipt and confirmation email shortly.</p>
          <p v-if="donation?.amount && donation.currency" class="donate-complete-detail">
            {{ formatCurrency(donation.amount, donation.currency) }} donation
          </p>
          <p v-if="donation?.publicId" class="donate-complete-detail">
            Donation reference: {{ donation.publicId }}
          </p>
        </div>

        <div v-else-if="completionState === 'processing'" class="donate-complete-state">
          <h1 class="donate-complete-title">Your donation is processing</h1>
          <p class="donate-complete-description">We have received the payment request and will confirm it once processing is complete.</p>
          <p v-if="donation?.publicId" class="donate-complete-detail">
            Donation reference: {{ donation.publicId }}
          </p>
        </div>

        <div v-else class="donate-complete-state">
          <h1 class="donate-complete-title">We couldn't confirm your donation yet</h1>
          <p class="donate-complete-description">Your payment may still be processing. Please check your email or try again from the donation page.</p>
        </div>

        <div class="donate-complete-actions">
          <UiButton to="/donate" variant="primary" size="md">Return to donations</UiButton>
          <UiButton to="/" variant="outline" size="md">Back to home</UiButton>
        </div>
      </div>
    </LayoutContainer>
  </div>
</template>

<style scoped>
.donate-complete-card {
  @apply max-w-2xl mx-auto my-section-sm md:my-section border border-gray-200 rounded-card bg-white p-card md:p-card-lg shadow-elevation-1 text-center;
}

.donate-complete-state {
  @apply flex flex-col items-center;
}

.donate-complete-title {
  @apply text-3xl font-display font-bold text-navy;
}

.donate-complete-description {
  @apply mt-4 text-gray-600 font-sans leading-relaxed;
}

.donate-complete-detail {
  @apply mt-2 text-sm text-gray-500 font-sans;
}

.donate-complete-actions {
  @apply mt-8 flex flex-wrap justify-center gap-3;
}

.donate-complete-spinner {
  @apply mb-5 w-8 h-8 border-2 border-cobalt border-t-transparent rounded-full animate-spin;
}
</style>
