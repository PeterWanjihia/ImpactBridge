<script setup lang="ts">
import type { Campaign, Fund } from '~/types'

// ---------------------------------------------------------------------------
// SEO — shared composable (canonical, OG/Twitter cards, robots)
// ---------------------------------------------------------------------------
usePageSeo({
  title: 'Donate',
  description: 'Help teachers bring offline learning resources to schools where connectivity should not limit opportunity.',
  path: '/donate',
  type: 'website',
})

// ---------------------------------------------------------------------------
// Data layer
// ---------------------------------------------------------------------------
const { getDonationOptions } = useDonation()

// TODO: When backend is ready, replace with:
// const { data: options } = await useAsyncData('donation-options', () => getDonationOptions())
const funds = ref<Fund[]>([
  { id: 'default', name: 'General Fund', description: 'Where the need is greatest' },
])
const paymentMethods = ref<string[]>(['card'])

const loading = ref(true)

onMounted(async () => {
  try {
    const options = await getDonationOptions()
    if (options) {
      funds.value = (options as any).funds ?? funds.value
      paymentMethods.value = (options as any).paymentMethods ?? paymentMethods.value
    }
  } catch {
    // Use defaults
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="page-donate">
    <HeroOverlay
      title="Fund the Next Classroom"
      subtitle="Help teachers bring offline learning resources to schools where connectivity should not limit opportunity."
    />

    <LayoutContainer>
      <div class="py-12 max-w-2xl mx-auto">
        <!-- Donation form will be built here -->
        <p class="text-gray-500 text-center">Donation workflow coming soon.</p>
      </div>
    </LayoutContainer>
  </div>
</template>
