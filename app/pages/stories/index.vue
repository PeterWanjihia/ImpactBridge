<script setup lang="ts">
import type {
  StoriesHeroData,
  StoriesFeaturedStory,
  StoriesFilterItem,
  StoriesStoryItem,
  StoriesVoiceItem,
  StoriesPhotoEssay,
  StoriesUpdateItem,
  StoriesCtaData,
} from '~/types'

useHead({
  title: 'Stories - Impact Bridge',
  meta: [
    { name: 'description', content: 'Meet the learners, teachers, schools and partners shaping Impact Bridge.' }
  ]
})

// ---------------------------------------------------------------------------
// Data layer — SSR initial load + API-backed filter/cursor queries
// GET /v1/stories supports type/cursor filters (architecture spec, Appendix A)
// ---------------------------------------------------------------------------
const { getStories } = useStories()

const PAGE_SIZE = 20
const activeFilter = ref('all')

/** Initial load of all stories — runs on the server (cached SSR per spec). */
const { data: initialResult } = await useAsyncData(
  'stories-index',
  () => getStories({ limit: PAGE_SIZE }),
)

/**
 * Cursor-paginated state per filter ('all', 'learner', ...).
 * The 'all' bucket is seeded from the SSR response; each category accumulates
 * its own list and cursor so "Load more" appends pages independently.
 */
interface PagedState {
  stories: StoriesStoryItem[]
  cursor: string | null
  pending: boolean
}

const pagedState = reactive<Record<string, PagedState>>({
  all: {
    stories: [...(initialResult.value?.stories ?? [])],
    cursor: initialResult.value?.nextCursor ?? null,
    pending: false,
  },
})

/** Fetches one page for a filter; replaces the list on page 1, appends after. */
async function fetchPage(type: string, cursor?: string) {
  const state = pagedState[type] ?? (pagedState[type] = { stories: [], cursor: null, pending: false })
  if (state.pending) return
  state.pending = true
  try {
    const result = await getStories({
      type: type === 'all' ? undefined : type,
      cursor,
      limit: PAGE_SIZE,
    })
    if (cursor) {
      state.stories.push(...result.stories)
    } else {
      state.stories = result.stories
    }
    // Empty page means the list is exhausted — drop the cursor to stop loading
    state.cursor = result.stories.length ? (result.nextCursor ?? null) : null
  } catch {
    // Keep the current list and cursor so the visitor can retry "Load more"
  } finally {
    state.pending = false
  }
}

// Load a category's first page when its tab is first selected
watch(activeFilter, (filter) => {
  if (filter !== 'all' && !pagedState[filter]) fetchPage(filter)
})

function loadMore() {
  const state = pagedState[activeFilter.value]
  if (state?.cursor) fetchPage(activeFilter.value, state.cursor)
}

// ---------------------------------------------------------------------------
// Derived stories list
// ---------------------------------------------------------------------------
/** True once the API has served a real list; mock fallback is dev-only. */
const isApiLive = computed(() => (initialResult.value?.stories?.length ?? 0) > 0)

const activeState = computed(() => (isApiLive.value ? pagedState[activeFilter.value] : undefined))

const visibleStories = computed<StoriesStoryItem[]>(() => {
  // Backend not ready — filter the mock list client-side so every tab shows content
  if (!isApiLive.value) {
    return mockStories.filter(s => activeFilter.value === 'all' || s.type === activeFilter.value)
  }
  return activeState.value?.stories ?? []
})

const nextCursor = computed(() => activeState.value?.cursor ?? null)
const isFiltering = computed(() => !!activeState.value?.pending && visibleStories.value.length === 0)
const isLoadingMore = computed(() => !!activeState.value?.pending && visibleStories.value.length > 0)

// ---------------------------------------------------------------------------
// Infinite scroll — loads the next page as the visitor approaches the end.
// A sentinel div below the grid is watched with IntersectionObserver;
// the "Load more" button remains as a fallback where observers are unavailable.
// ---------------------------------------------------------------------------
const sentinelEl = ref<HTMLElement | null>(null)
const isSentinelVisible = ref(false)
const supportsInfiniteScroll = ref(true)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!('IntersectionObserver' in window)) {
    supportsInfiniteScroll.value = false
    return
  }
  observer = new IntersectionObserver(
    (entries) => {
      isSentinelVisible.value = entries.some(entry => entry.isIntersecting)
    },
    // Start fetching before the visitor actually reaches the bottom
    { rootMargin: '400px 0px' },
  )
  if (sentinelEl.value) observer.observe(sentinelEl.value)
})

onBeforeUnmount(() => observer?.disconnect())

// Re-observe whenever the sentinel mounts/unmounts (it is hidden when exhausted)
watch(sentinelEl, (el) => {
  isSentinelVisible.value = false
  if (el && observer) {
    observer.disconnect()
    observer.observe(el)
  }
})

// Chain-load while the sentinel stays in view (short pages, fast scrollers)
watch(
  [isSentinelVisible, nextCursor],
  ([visible, cursor]) => {
    if (visible && cursor && !isLoadingMore.value) loadMore()
  },
)

// ---------------------------------------------------------------------------
// Static / mock data for development — will be replaced by API responses
// ---------------------------------------------------------------------------
const heroData: StoriesHeroData = {
  title: 'Every classroom holds more than ',
  titleAccent: 'one story.',
  description: 'Meet the learners, teachers, schools and partners shaping Impact Bridge — one lesson, one voice and one classroom at a time.',
  imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80',
  imageAlt: 'Students in a classroom',
  primaryCta: { text: 'Watch the featured story', to: '#featured' },
  secondaryCta: { text: 'Read the story', to: '#stories' },
}

const featuredStory: StoriesFeaturedStory = {
  eyebrow: 'FEATURED STORY',
  title: 'The lesson that made science feel visible',
  summary: 'A learner and her teacher describe what changed when an offline simulation entered their classroom.',
  slug: 'science-simulation-lesson',
  mediaType: 'video',
  mediaDuration: '01:24',
  mediaUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80',
  imageAlt: 'Students exploring science',
}

const filters: StoriesFilterItem[] = [
  { label: 'All Stories', value: 'all' },
  { label: 'Learners', value: 'learner' },
  { label: 'Teachers', value: 'teacher' },
  { label: 'Classrooms', value: 'school' },
  { label: 'Communities', value: 'community' },
  { label: 'Partnerships', value: 'partner' },
]

const mockStories: StoriesStoryItem[] = [
  {
    id: '1',
    slug: 'now-i-can-see',
    title: '"Now I can see what the teacher is explaining."',
    summary: 'Digital lessons help one student understand science in a way she never could before.',
    type: 'learner',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
    imageAlt: 'Student in classroom',
    mediaType: 'video',
    mediaDuration: '03:12',
    mediaUrl: 'https://www.youtube.com/watch?v=YO-XQGDqxJc',
  },
  {
    id: '2',
    slug: 'from-demonstration-to-confidence',
    title: 'From demonstration to confidence',
    summary: 'How a Champion Teacher moved from learning the system to supporting colleagues.',
    type: 'teacher',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    imageAlt: 'Teacher training',
    mediaType: 'video',
    mediaDuration: '02:37',
    mediaUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  },
  {
    id: '3',
    slug: 'lesson-everyone-wanted-to-join',
    title: 'A lesson everyone wanted to join',
    summary: 'Inside a primary class where participation and questions have grown.',
    type: 'school',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80',
    imageAlt: 'Active classroom',
    mediaType: 'photo',
  },
  {
    id: '4',
    slug: 'building-a-system-that-lasts',
    title: 'Building a system that lasts',
    summary: 'How school leaders prepared for the hub and are embedding it into daily life.',
    type: 'school',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80',
    imageAlt: 'School leadership',
    mediaType: 'article',
    readTime: '5 min read',
  },
  {
    id: '5',
    slug: 'when-the-whole-community-shows-up',
    title: 'When the whole community shows up',
    summary: 'Parents and leaders are proud of what their children are learning.',
    type: 'community',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80',
    imageAlt: 'Community gathering',
    mediaType: 'article',
    readTime: '4 min read',
  },
  {
    id: '6',
    slug: 'from-donated-laptops-to-real-learning',
    title: 'From donated laptops to real learning',
    summary: "How one corporate partner's equipment donation became a functioning learning solution.",
    type: 'partner',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80',
    imageAlt: 'Partnership collaboration',
    mediaType: 'video',
    mediaDuration: '02:58',
    mediaUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  },
]

const voices: StoriesVoiceItem[] = [
  {
    id: 'v1',
    quote: '"I understood it differently when I could see it move."',
    author: 'Sarah, Grade 6 Learner',
    role: 'Talking about a science simulation lesson.',
    description: 'Talking about a science simulation lesson.',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
    imageAlt: 'Sarah',
    audioUrl: '#',
    audioDuration: '00:26',
    storyUrl: '#',
    variant: 'learner',
  },
  {
    id: 'v2',
    quote: '"The resource helps, but the lesson still depends on how I guide it."',
    author: 'Mr. James, Champion Teacher',
    role: 'On preparing and delivering engaging lessons.',
    description: 'On preparing and delivering engaging lessons.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    imageAlt: 'Mr. James',
    audioUrl: '#',
    audioDuration: '00:34',
    storyUrl: '#',
    variant: 'teacher',
  },
]

const photoEssay: StoriesPhotoEssay = {
  title: 'A hub enters a classroom',
  ctaText: 'See the full photo essay',
  ctaTo: '#',
  steps: [
    { number: 1, title: 'School readiness', description: 'Leaders and teachers plan for success.', imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=200&q=80', imageAlt: 'Planning' },
    { number: 2, title: 'Equipment preparation', description: 'Devices are assessed, configured and secured.', imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=200&q=80', imageAlt: 'Equipment' },
    { number: 3, title: 'Teacher training', description: 'Hands-on practice builds confidence.', imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=200&q=80', imageAlt: 'Training' },
    { number: 4, title: 'Installation day', description: 'The hub is set up and ready to use.', imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=200&q=80', imageAlt: 'Installation' },
    { number: 5, title: 'First lesson', description: 'Learners explore, ask questions and engage.', imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&q=80', imageAlt: 'First lesson' },
    { number: 6, title: 'Follow-up & support', description: 'Mentors visit, listen and help improve.', imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=200&q=80', imageAlt: 'Support' },
  ],
}

const latestUpdates: StoriesUpdateItem[] = [
  { id: 'u1', title: 'Teachers request more math visual resources', date: 'May 20, 2025', readTime: '2 min read', imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300&q=80', imageAlt: 'Math resources', slug: 'math-visual-resources' },
  { id: 'u2', title: 'New content set for primary science', date: 'May 30, 2025', readTime: '2 min read', imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=300&q=80', imageAlt: 'Science content', slug: 'primary-science-content' },
  { id: 'u3', title: 'Champion Teachers peer learning session', date: 'May 12, 2025', readTime: '2 min read', imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=300&q=80', imageAlt: 'Peer learning', slug: 'peer-learning-session' },
]

const ctaData: StoriesCtaData = {
  title: 'Help create the next story of change.',
  description: 'Your support funds the tools, teacher preparation and ongoing support behind every classroom.',
  primaryCta: { text: 'Fund now', to: '/donate' },
  secondaryCta: { text: 'Partner with us', to: '/corporate-partnerships' },
}
</script>

<template>
  <div class="page-stories">
    <!-- Hero Section -->
    <StoriesHero :hero="heroData" :featured-story="featuredStory" />

    <!-- Filter Tabs -->
    <StoriesFilter
      :filters="filters"
      v-model:active-filter="activeFilter"
    />

    <!-- Stories Grid -->
    <div v-if="isFiltering" class="py-16 text-center font-sans text-gray-500">
      Loading stories…
    </div>
    <template v-else>
      <StoriesGrid :stories="visibleStories">
        <template v-if="activeFilter !== 'all'" #empty-action>
          <UiButton variant="outline" size="sm" class="mt-4" @click="activeFilter = 'all'">
            Show all stories
          </UiButton>
        </template>
      </StoriesGrid>

      <!-- Infinite scroll sentinel (cursor pagination via the API's nextCursor) -->
      <div v-if="nextCursor" ref="sentinelEl" class="h-px w-full" aria-hidden="true">
        <span v-if="isLoadingMore" class="block py-8 text-center font-sans text-sm text-gray-500">
          Loading more stories…
        </span>
      </div>

      <!-- Fallback for browsers without IntersectionObserver -->
      <LayoutContainer v-if="nextCursor && !supportsInfiniteScroll">
        <div class="flex justify-center pb-8">
          <UiButton variant="outline" :loading="isLoadingMore" @click="loadMore">
            Load more stories
          </UiButton>
        </div>
      </LayoutContainer>
    </template>

    <!-- Hear it in their own words -->
    <StoriesVoices :voices="voices" />

    <!-- Photo Essay -->
    <StoriesPhotoEssay :data="photoEssay" />

    <!-- Insight Bar -->
    <StoriesInsightBar />

    <!-- Latest Updates -->
    <StoriesLatestUpdates :updates="latestUpdates" />

    <!-- Bottom CTA -->
    <StoriesCTA :data="ctaData" />
  </div>
</template>
