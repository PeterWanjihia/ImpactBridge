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

const donationPublicId = computed(() => route.query.session_id as string)
const donation = ref<Partial<Donation> | null>(null)
const loading = ref(true)

// TODO: When backend is ready, replace with:
// const { data } = await useAsyncData(
//   `donation-complete-${donationPublicId.value}`,
//   () => getDonationStatus(donationPublicId.value!)
// )
// donation.value = data.value

onMounted(async () => {
  if (!donationPublicId.value) {
    loading.value = false
    return
  }
  try {
    donation.value = await getDonationStatus(donationPublicId.value) as any
  } catch {
    // Show generic thank-you even if verification fails
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="page-donate-complete">
    <LayoutContainer>
      <div class="max-w-lg mx-auto text-center py-12 md:py-16">
        <h1 class="text-3xl font-serif font-bold text-navy">Thank You!</h1>
        <p class="mt-4 text-gray-600">Your donation has been received. You'll receive a confirmation email shortly.</p>
        <p v-if="donation" class="mt-2 text-sm text-gray-400">
          Donation reference: {{ donation.publicId }}
        </p>
      </div>
    </LayoutContainer>
  </div>
</template>
