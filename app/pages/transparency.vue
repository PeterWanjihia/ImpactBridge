<script setup lang="ts">
// ---------------------------------------------------------------------------
// SEO — shared composable (canonical, OG/Twitter cards, robots)
// TODO: Source from the CMS `pages` collection when the backend is live.
// ---------------------------------------------------------------------------
usePageSeo({
  title: 'Transparency',
  description: 'Clear about what we do. Accountable about how we do it. Trust is earned through honesty.',
  path: '/transparency',
  type: 'website',
})

// ---------------------------------------------------------------------------
// Data layer — fetch transparency content from CMS + Go API
// ---------------------------------------------------------------------------
const { getPage } = useContent()

// TODO: When backend is ready, replace with:
// const { data: page } = await useAsyncData('transparency', () => getPage('transparency'))
// const { data: summary } = await useAsyncData('transparency-summary', () => $fetch(`${config.public.apiUrl}/v1/transparency`))
const pageData = ref<any>(null)

onMounted(async () => {
  try {
    pageData.value = await getPage('transparency')
  } catch {
    // Use defaults
  }
})
</script>

<template>
  <div class="page-transparency">
    <HeroOverlay
      title="Transparency & Accountability"
      subtitle="Clear about what we do. Accountable about how we do it. Trust is earned through honesty, accountability and consistent action."
    />

    <LayoutContainer>
      <div class="py-12 max-w-2xl mx-auto">
        <p class="text-gray-500 text-center">Transparency content coming soon.</p>
      </div>
    </LayoutContainer>
  </div>
</template>
