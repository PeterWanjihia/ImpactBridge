<script setup lang="ts">
import type { Story } from '~/types'

useHead({
  title: 'Stories - Impact Bridge',
  meta: [
    { name: 'description', content: 'Meet the learners, teachers, schools and partners shaping Impact Bridge.' }
  ]
})

// ---------------------------------------------------------------------------
// Data layer
// ---------------------------------------------------------------------------
const { getStories } = useStories()

const stories = ref<Story[]>([])
const loading = ref(true)

// TODO: When backend is ready, replace with:
// const { data } = await useAsyncData('stories', () => getStories({ limit: 20 }))
// stories.value = data.value?.stories ?? []

onMounted(async () => {
  try {
    const result = await getStories({ limit: 20 })
    stories.value = (result as any)?.stories ?? []
  } catch {
    // Defaults to empty — page renders hero + empty state
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="page-stories">
    <HeroOverlay
      title="Stories"
      subtitle="Every classroom holds more than a lesson. Meet the people behind the impact."
    />

    <LayoutContainer>
      <div class="py-12">
        <!-- Story listing grid -->
        <div v-if="stories.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StoryCard
            v-for="story in stories"
            :key="story.id"
            :title="story.title"
            :slug="story.slug"
            :summary="story.summary"
            :image-url="story.imageUrl"
            :image-alt="story.imageAlt"
            :type="story.type"
          />
        </div>

        <!-- Empty / loading state -->
        <div v-else-if="!loading" class="text-center py-16 text-gray-500">
          <p class="text-lg">Stories coming soon.</p>
        </div>
      </div>
    </LayoutContainer>
  </div>
</template>
