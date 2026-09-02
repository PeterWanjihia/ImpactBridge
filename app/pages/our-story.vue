<script setup lang="ts">
useHead({
  title: 'Our Story - Impact Bridge',
  meta: [
    { name: 'description', content: 'Learn about our mission to bring offline digital learning to schools without reliable connectivity.' }
  ]
})

// ---------------------------------------------------------------------------
// Data layer — fetch narrative content from CMS
// ---------------------------------------------------------------------------
const { getPage } = useContent()

// TODO: When CMS is ready, replace with:
// const { data: page } = await useAsyncData('our-story', () => getPage('our-story'))
const pageData = ref<any>(null)

onMounted(async () => {
  try {
    pageData.value = await getPage('our-story')
  } catch {
    // Use defaults
  }
})
</script>

<template>
  <div class="page-our-story">
    <HeroOverlay
      title="Our Story"
      subtitle="From a single classroom to a movement for digital equity."
    />

    <LayoutContainer>
      <div class="py-12 max-w-2xl mx-auto">
        <p class="text-gray-500 text-center">Story content coming soon.</p>
      </div>
    </LayoutContainer>
  </div>
</template>
