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
// Data layer
// ---------------------------------------------------------------------------
const { getStories } = useStories()

const stories = ref<StoriesStoryItem[]>([])
const loading = ref(true)
const activeFilter = ref('all')

// TODO: When backend is ready, replace with real API calls
// const { data } = await useAsyncData('stories', () => getStories({ limit: 20 }))

onMounted(async () => {
  try {
    const result = await getStories({ limit: 20 })
    stories.value = (result as any)?.stories ?? []
  } catch {
    // Defaults to empty — page renders with mock data
  } finally {
    loading.value = false
  }
})

// ---------------------------------------------------------------------------
// Filtered stories list
// ---------------------------------------------------------------------------
const allStories = computed<StoriesStoryItem[]>(() => {
  return stories.value.length ? stories.value : mockStories
})

const filteredStories = computed<StoriesStoryItem[]>(() => {
  if (activeFilter.value === 'all') return allStories.value
  return allStories.value.filter(s => s.type === activeFilter.value)
})

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
    <StoriesGrid :stories="filteredStories">
      <template v-if="activeFilter !== 'all'" #empty-action>
        <UiButton variant="outline" size="sm" class="mt-4" @click="activeFilter = 'all'">
          Show all stories
        </UiButton>
      </template>
    </StoriesGrid>

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
