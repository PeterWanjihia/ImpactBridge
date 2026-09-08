<script setup lang="ts">
// ---------------------------------------------------------------------------
// SEO — shared composable (canonical, OG/Twitter cards, robots)
// ---------------------------------------------------------------------------
usePageSeo({
  title: 'Donate Equipment',
  description: 'Support our mission by donating suitable computers, displays and supporting equipment.',
  path: '/donate-equipment',
  type: 'website',
})

// ---------------------------------------------------------------------------
// Data layer
// ---------------------------------------------------------------------------
const { getEquipmentRequirements } = useEquipmentOffer()

// TODO: When backend is ready, replace with:
// const { data: requirements } = await useAsyncData('equipment-requirements', () => getEquipmentRequirements())

const loading = ref(true)

onMounted(async () => {
  try {
    await getEquipmentRequirements()
  } catch {
    // Use defaults
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="page-donate-equipment">
    <HeroOverlay
      title="Donate Equipment"
      subtitle="Support our mission by donating suitable computers, displays and supporting equipment as part of complete teacher-led learning hubs."
    />

    <LayoutContainer>
      <div class="py-12 max-w-2xl mx-auto">
        <p class="text-gray-500 text-center">Equipment donation workflow coming soon.</p>
      </div>
    </LayoutContainer>
  </div>
</template>
