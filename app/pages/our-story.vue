<script setup lang="ts">
import { Play, ArrowRight } from '@lucide/vue'

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

const heroMetrics = [
  { value: '60,000', label: 'Learners reached' },
  { value: '221,000', label: 'Learners reached' },
  { value: '120', label: 'Classrooms equipped' },
  { value: '141', label: 'UK schools made possible' }
]
</script>

<template>
  <div class="page-our-story">
    <HeroOverlay
      title="Potential is everywhere, Access is not."
      subtitle="In classrooms across Uganda, learners are ready to explore and teachers are ready to lead. But unreliable connectivity and limited educational resources still determine how far that curiosity can travel."
      image-alt="Teacher explaining a lesson in a classroom"
      overlay="gradient"
    >
      <template #actions>
        <div class="hero-actions">
          <UiButton variant="primary" size="lg">
            <Play class="w-5 h-5" />
            Watch the classroom story
          </UiButton>
          <UiButton variant="outline-white" size="lg">
            <ArrowRight class="w-5 h-5" />
            Read our story
          </UiButton>
        </div>
      </template>
    </HeroOverlay>

    <MetricStrip :metrics="heroMetrics" />

    <LayoutContainer>
      <div class="py-12 max-w-2xl mx-auto">
        <p class="text-gray-500 text-center">Story content coming soon.</p>
      </div>
    </LayoutContainer>
  </div>
</template>

<style scoped>
.hero-actions {
  @apply flex flex-col sm:flex-row gap-4 mt-8;
}
</style>
