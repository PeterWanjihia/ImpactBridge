<script setup lang="ts">
// ---------------------------------------------------------------------------
// SEO — shared composable (canonical, OG/Twitter cards, robots)
// TODO: Source from the CMS `pages` collection when the backend is live.
// ---------------------------------------------------------------------------
usePageSeo({
  title: 'Corporate Partnerships',
  description:
    'Partner with us to bring appropriate technology, teacher development and support to schools where connectivity should not limit learning.',
  path: '/corporate-partnerships',
  type: 'website',
})

// ---------------------------------------------------------------------------
// Data layer — partnership form options (Go API when ready, static defaults now)
// ---------------------------------------------------------------------------
const { getPartnershipOptions } = usePartnershipEnquiry()

onMounted(async () => {
  try {
    await getPartnershipOptions()
  } catch {
    // Use static defaults defined in the section components
  }
})
</script>

<template>
  <div class="page-corporate-partnerships">
    <PartnershipHero />
    <TrustStrip />
    <WaysToPartner />
    <ProcessTimeline />
    <ReceiveSection />
    <TransparencyBand />
    <EnquirySection />
  </div>
</template>
