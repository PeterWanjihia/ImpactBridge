<script setup lang="ts">
useHead({
  title: 'Corporate Partnerships - Impact Bridge',
  meta: [
    { name: 'description', content: 'Partner with us to bring appropriate technology, teacher development and support to schools.' }
  ]
})

// ---------------------------------------------------------------------------
// Data layer
// ---------------------------------------------------------------------------
const { getPartnershipOptions } = usePartnershipEnquiry()

// TODO: When backend is ready, replace with:
// const { data: options } = await useAsyncData('partnership-options', () => getPartnershipOptions())

const loading = ref(true)

onMounted(async () => {
  try {
    await getPartnershipOptions()
  } catch {
    // Use defaults
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="page-corporate-partnerships">
    <HeroOverlay
      title="Partner for Learning. Transform Classrooms."
      subtitle="We work with organisations to bring appropriate technology, teacher development and ongoing support to schools where connectivity should not limit learning."
    />

    <LayoutContainer>
      <div class="py-12 max-w-2xl mx-auto">
        <p class="text-gray-500 text-center">Partnership sections coming soon.</p>
      </div>
    </LayoutContainer>
  </div>
</template>
