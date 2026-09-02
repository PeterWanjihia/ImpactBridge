<script setup lang="ts">
import type { Story } from '~/types'

const route = useRoute()
const slug = computed(() => route.params.slug as string)

// ---------------------------------------------------------------------------
// Data layer
// ---------------------------------------------------------------------------
const { getStory } = useStories()

// TODO: When backend is ready, replace with:
// const { data: story } = await useAsyncData(`story-${slug.value}`, () => getStory(slug.value))
const story = ref<Partial<Story> | null>(null)
const loading = ref(true)

onMounted(async () => {
  try {
    story.value = await getStory(slug.value) as any
  } catch {
    // Show not-found state
  } finally {
    loading.value = false
  }
})

useHead({
  title: computed(() => story.value?.title ? `${story.value.title} - Impact Bridge` : 'Story - Impact Bridge'),
  meta: [
    { name: 'description', content: computed(() => story.value?.summary ?? 'Read the full story.') }
  ]
})
</script>

<template>
  <div class="page-story-detail">
    <LayoutContainer>
      <div class="py-12 max-w-3xl mx-auto">
        <!-- Loading state -->
        <div v-if="loading" class="text-center py-20 text-gray-500">
          <p>Loading story...</p>
        </div>

        <!-- Story content -->
        <article v-else-if="story">
          <h1 class="text-3xl md:text-4xl font-serif font-bold text-navy">{{ story.title }}</h1>
          <p v-if="story.summary" class="mt-4 text-lg text-gray-600">{{ story.summary }}</p>
          <div v-if="story.body" class="mt-8 prose prose-navy" v-html="story.body" />
        </article>

        <!-- Not found -->
        <div v-else class="text-center py-20 text-gray-500">
          <p class="text-lg">Story not found.</p>
          <NuxtLink to="/stories" class="mt-4 inline-block text-cobalt font-semibold hover:underline">
            ← Back to stories
          </NuxtLink>
        </div>
      </div>
    </LayoutContainer>
  </div>
</template>
