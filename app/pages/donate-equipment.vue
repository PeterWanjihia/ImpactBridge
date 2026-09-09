<script setup lang="ts">
// ---------------------------------------------------------------------------
// SEO — shared composable (canonical, OG/Twitter cards, robots)
// TODO: Source from the CMS `pages` collection when the backend is live.
// ---------------------------------------------------------------------------
usePageSeo({
  title: 'Donate Equipment',
  description:
    'Turn suitable technology into supported learning. We assess, prepare and deploy suitable computers, displays and supporting equipment as part of complete teacher-led learning hubs.',
  path: '/donate-equipment',
  type: 'website',
})

// ---------------------------------------------------------------------------
// Data layer — equipment requirements (Go API when ready, static defaults now)
// ---------------------------------------------------------------------------
const { getEquipmentRequirements } = useEquipmentOffer()

onMounted(async () => {
  try {
    await getEquipmentRequirements()
  } catch {
    // Use static defaults defined in the section components
  }
})
</script>

<template>
  <div class="page-donate-equipment">
    <EquipmentHero />
    <EquipmentNeedsSection />
    <EquipmentProcessSection />
    <EquipmentSuitabilitySection />
    <EquipmentDonorReceive />
    <EquipmentOfferForm />
    <EquipmentQuestionsBand />
  </div>
</template>
