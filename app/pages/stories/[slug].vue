<script setup lang="ts">
import { CirclePlay, ChevronLeft, Clock, Volume2 } from '@lucide/vue'
import type { Story } from '~/types'

// ---------------------------------------------------------------------------
// Data layer — SSR via useAsyncData against GET /v1/stories/:slug
// Story content lives in the CMS; slugs are the stable public URLs.
// ---------------------------------------------------------------------------
const route = useRoute()

const slug = computed(() => route.params.slug as string)
const { getStory } = useStories()

const { data, status } = await useAsyncData<Story | null>(
  () => `story-${slug.value}`,
  async () => {
    const result = await getStory(slug.value)
    return (result as Story | null) ?? null
  },
  { watch: [slug] },
)

// TODO: Remove mock fallback once the backend/CMS is live.
// Mirrors the CMS `stories` collection shape from the architecture spec.
const fallbackStory: Story = {
  id: '1',
  slug: 'science-simulation-lesson',
  title: 'The lesson that made science feel visible',
  type: 'learner',
  summary: 'A learner and her teacher describe what changed when an offline simulation entered their classroom.',
  body: `<p>When the learning hub was installed at her school, Sarah had already decided science was not for her. "Everything happened on the blackboard," she says. "You believed the teacher, but you could not see it."</p><h2>Seeing it move</h2><p>That changed during a lesson on the water cycle. Instead of a static diagram, her teacher projected an offline simulation from the hub. Learners could watch evaporation happen, pause it, and predict what would come next.</p><p>"I understood it differently when I could see it move," Sarah says. "Now I can explain it to my brother at home."</p><h2>What the teacher noticed</h2><p>Her teacher, Mr. James, noticed the change immediately. "The resource helps, but the lesson still depends on how I guide it," he explains. "The difference is that now everyone has something to look at, think about and argue about."</p><p>By the end of the term, questions in her class had doubled — and Sarah had volunteered to demonstrate the next simulation herself.</p>`,
  imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80',
  imageAlt: 'Students exploring a science simulation',
  quote: 'I understood it differently when I could see it move.',
  transcript: 'Sarah: I understood it differently when I could see it move. Before, science was just words on the board.\n\nMr. James: The resource helps, but the lesson still depends on how I guide it. The difference is that now everyone has something to look at and think about.',
  publishedAt: '2025-05-20T09:00:00.000Z',
  readTime: '4 min read',
  mediaType: 'video',
  mediaUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  mediaDuration: '01:24',
  programme: {
    id: 'p1',
    slug: 'pilot-hub',
    name: 'Pilot Learning Hub Programme',
    status: 'active',
  },
  school: {
    id: 's1',
    name: 'Our Lady Seat of Wisdom',
    location: 'Kansanga, Kampala, Uganda',
  },
}

const story = computed<Story | null>(() => {
  if (data.value) return data.value
  if (status.value === 'error') return null
  if (status.value === 'success') return fallbackStory
  return null
})

// ---------------------------------------------------------------------------
// Media — lazy-loaded video/audio below the hero (spec: lazy-load story media)
// ---------------------------------------------------------------------------
const media = computed(() => {
  const s = story.value
  return {
    type: s?.mediaType ?? (s?.mediaUrl ? 'video' : s?.imageUrl ? 'photo' : 'article'),
    url: s?.mediaUrl,
    duration: s?.mediaDuration,
  }
})
const isVideo = computed(() => media.value.type === 'video' && !!media.value.url)
const isAudio = computed(() => media.value.type === 'audio' && !!media.value.url)

// ---------------------------------------------------------------------------
// SEO — structured article metadata + social cards generated from the story
// record (spec: CMS-managed title/description/canonical/OG, optional noindex)
// ---------------------------------------------------------------------------
const seoTitle = computed(() => story.value?.seo?.title ?? story.value?.title ?? 'Story')
const seoDescription = computed(() =>
  story.value?.seo?.description
  ?? story.value?.summary
  ?? 'Stories from Impact Bridge classrooms, teachers and partners.',
)
const ogImage = computed(() => story.value?.seo?.ogImage ?? story.value?.imageUrl)

const { canonicalUrl, siteUrl } = usePageSeo({
  title: seoTitle,
  description: seoDescription,
  path: computed(() => (story.value ? `/stories/${story.value.slug}` : route.path)),
  image: ogImage,
  type: 'article',
  noindex: computed(() => story.value?.seo?.noindex ?? false),
  publishedTime: computed(() => story.value?.publishedAt),
})

// Structured article + breadcrumb metadata for search engines
const articleJsonLd = computed(() => {
  if (!story.value) return null
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: story.value.title,
    description: seoDescription.value,
    image: ogImage.value ? [ogImage.value] : undefined,
    datePublished: story.value.publishedAt,
    dateModified: story.value.publishedAt,
    author: { '@type': 'Organization', name: 'Impact Bridge' },
    publisher: { '@type': 'Organization', name: 'Impact Bridge' },
    url: canonicalUrl.value,
    mainEntityOfPage: canonicalUrl.value,
  }).replace(/</g, '\\u003c')
})

const breadcrumbsJsonLd = computed(() => {
  if (!story.value) return null
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Stories', item: `${siteUrl}/stories` },
      { '@type': 'ListItem', position: 3, name: story.value.title, item: canonicalUrl.value },
    ],
  }).replace(/</g, '\\u003c')
})

// Title + canonical link are rendered by usePageSeo
useHead({
  script: [
    { type: 'application/ld+json', innerHTML: () => articleJsonLd.value ?? '' },
    { type: 'application/ld+json', innerHTML: () => breadcrumbsJsonLd.value ?? '' },
  ],
})

// ---------------------------------------------------------------------------
// Presentation helpers
// ---------------------------------------------------------------------------
const typeLabels: Record<Story['type'], string> = {
  learner: 'Learner story',
  teacher: 'Teacher story',
  school: 'Classroom story',
  community: 'Community story',
  partner: 'Partnership story',
}

const programmeStatusVariants: Record<NonNullable<Story['programme']>['status'], 'success' | 'info' | 'warning'> = {
  active: 'success',
  completed: 'info',
  planned: 'warning',
}

const publishedDate = computed(() => {
  if (!story.value?.publishedAt) return null
  const date = new Date(story.value.publishedAt)
  return Number.isNaN(date.getTime())
    ? null
    : new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(date)
})
</script>

<template>
  <div class="page-story-detail">
    <!-- Loading state -->
    <LayoutContainer v-if="!story">
      <div v-if="status === 'pending'" class="py-section-lg text-center font-sans text-gray-500">
        <p>Loading story...</p>
      </div>

      <!-- Not found -->
      <div v-else class="py-section-lg text-center">
        <p class="font-display text-lg text-navy">Story not found.</p>
        <NuxtLink to="/stories" class="mt-4 inline-block font-sans font-semibold text-cobalt hover:underline">
          ← Back to stories
        </NuxtLink>
      </div>
    </LayoutContainer>

    <template v-else>
      <!-- Hero -->
      <HeroOverlay
        :image-url="story.imageUrl"
        :image-alt="story.imageAlt"
        overlay="gradient"
        :class="{ 'bg-navy': !story.imageUrl }"
      >
        <template #default>
          <span class="story-hero-tag">{{ typeLabels[story.type] ?? 'Story' }}</span>
          <h1 class="story-hero-title">{{ story.title }}</h1>
          <p v-if="story.summary" class="story-hero-summary">{{ story.summary }}</p>
          <div class="story-hero-meta">
            <span v-if="publishedDate">{{ publishedDate }}</span>
            <span v-if="story.readTime" class="story-hero-meta-item">
              <Clock class="story-hero-meta-icon" />
              {{ story.readTime }}
            </span>
            <span v-if="media.duration" class="story-hero-meta-item">
              <CirclePlay class="story-hero-meta-icon" />
              {{ media.duration }}
            </span>
          </div>
        </template>
      </HeroOverlay>

      <LayoutContainer>
        <div class="story-detail">
          <!-- Main column -->
          <div class="story-detail-main">
            <NuxtLink to="/stories" class="story-back-link">
              <ChevronLeft class="w-4 h-4" />
              All stories
            </NuxtLink>

            <!-- Media: audio player -->
            <div v-if="isAudio" class="story-audio">
              <div class="story-audio-label">
                <Volume2 class="w-5 h-5 text-cobalt" />
                <span class="font-sans font-semibold text-navy">Listen to this story</span>
                <span v-if="media.duration" class="font-sans text-xs text-gray-500">{{ media.duration }}</span>
              </div>
              <!-- Lazy: no preload until the visitor presses play -->
              <audio controls preload="none" :src="media.url" class="story-audio-player" />
            </div>

            <!-- Pull quote -->
            <blockquote v-if="story.quote" class="story-quote">
              <p class="story-quote-text">“{{ story.quote }}”</p>
            </blockquote>

            <!-- Body (HTML from CMS) -->
            <div v-if="story.body" class="story-prose" v-html="story.body" />

            <!-- Media: video player -->
            <figure v-if="isVideo" class="story-video">
              <!-- Lazy: nothing is fetched until the visitor presses play -->
              <video
                controls
                preload="none"
                :poster="story.imageUrl"
                :src="media.url"
                class="story-video-player"
              >
                Your browser does not support embedded video.
              </video>
              <figcaption v-if="story.imageAlt" class="story-video-caption">
                {{ story.imageAlt }}
              </figcaption>
            </figure>

            <!-- Transcript -->
            <UiAccordion
              v-if="story.transcript"
              class="story-transcript"
              :items="[{ id: 'transcript', title: 'Read the transcript', content: story.transcript }]"
            />
          </div>

          <!-- Related programme / impact (spec dependency for story detail) -->
          <aside class="story-detail-aside">
            <div class="story-aside-card">
              <h2 class="story-aside-title">Related programme &amp; impact</h2>

              <NuxtLink
                v-if="story.programme"
                :to="`/impact`"
                class="story-aside-link group"
              >
                <span class="story-aside-link-label">{{ story.programme.name }}</span>
                <UiBadge :variant="programmeStatusVariants[story.programme.status]" size="sm">
                  {{ story.programme.status }}
                </UiBadge>
              </NuxtLink>

              <div v-if="story.school" class="story-aside-school">
                <span class="story-aside-link-label">{{ story.school.name }}</span>
                <span v-if="story.school.location" class="story-aside-school-location">
                  {{ story.school.location }}
                </span>
              </div>

              <NuxtLink to="/impact" class="story-aside-nav">
                Explore the impact data →
              </NuxtLink>
              <NuxtLink to="/our-model" class="story-aside-nav">
                How our model works →
              </NuxtLink>
            </div>

            <div class="story-aside-card story-aside-card--navy">
              <p class="story-aside-cta-title">Help create the next story of change.</p>
              <NuxtLink to="/donate" class="story-aside-cta-btn">Fund now</NuxtLink>
            </div>
          </aside>
        </div>
      </LayoutContainer>

      <!-- Bottom CTA -->
      <StoriesCTA />
    </template>
  </div>
</template>

<style scoped>
/* Hero */
.story-hero-tag {
  @apply inline-block text-teal font-sans font-semibold text-2xs tracking-eyebrow uppercase mb-4;
}

.story-hero-title {
  @apply text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight max-w-3xl;
}

.story-hero-summary {
  @apply mt-4 text-base md:text-lg text-gray-200 font-sans max-w-2xl leading-relaxed;
}

.story-hero-meta {
  @apply mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-cobalt-100/90 font-sans;
}

.story-hero-meta-item {
  @apply inline-flex items-center gap-1.5;
}

.story-hero-meta-icon {
  @apply w-4 h-4;
}

/* Layout */
.story-detail {
  @apply py-section-xs md:py-section-md grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10;
}

.story-back-link {
  @apply inline-flex items-center gap-1 font-sans text-sm font-semibold text-cobalt hover:text-cobalt/80 mb-8;
}

/* Audio */
.story-audio {
  @apply mb-8 rounded-lg border border-gray-200 bg-gray-50 p-4;
}

.story-audio-label {
  @apply flex items-center gap-2 mb-3;
}

.story-audio-player {
  @apply w-full;
}

/* Pull quote */
.story-quote {
  @apply mb-8 rounded-lg bg-navy-50 border-l-4 border-cobalt p-6;
}

.story-quote-text {
  @apply font-display text-xl md:text-2xl text-navy italic leading-snug;
}

/* Body prose (no typography plugin installed — hand-rolled article styles) */
.story-prose :deep(p) {
  @apply mb-5 font-sans text-base leading-relaxed text-gray-700;
}

.story-prose :deep(h2) {
  @apply mt-10 mb-4 font-display text-2xl font-bold text-navy;
}

.story-prose :deep(h3) {
  @apply mt-8 mb-3 font-display text-xl font-bold text-navy;
}

.story-prose :deep(ul) {
  @apply mb-5 list-disc pl-6 space-y-2 font-sans text-gray-700;
}

.story-prose :deep(ol) {
  @apply mb-5 list-decimal pl-6 space-y-2 font-sans text-gray-700;
}

.story-prose :deep(a) {
  @apply font-sans font-medium text-cobalt underline underline-offset-2 hover:text-cobalt/80;
}

.story-prose :deep(blockquote) {
  @apply my-6 border-l-4 border-cobalt pl-4 font-display text-lg text-navy italic;
}

.story-prose :deep(img) {
  @apply my-8 w-full rounded-lg;
}

.story-prose :deep(figcaption) {
  @apply mt-2 text-xs font-sans text-gray-500;
}

/* Video */
.story-video {
  @apply mt-10;
}

.story-video-player {
  @apply w-full aspect-video rounded-lg bg-navy-900 shadow-elevation-1;
}

.story-video-caption {
  @apply mt-2 text-xs font-sans text-gray-500;
}

/* Transcript */
.story-transcript {
  @apply mt-10;
}

/* Aside */
.story-detail-aside {
  @apply flex flex-col gap-6 lg:sticky lg:self-start lg:top-24;
}

.story-aside-card {
  @apply rounded-lg border border-gray-200 bg-white p-6;
}

.story-aside-card--navy {
  @apply bg-navy border-navy text-white;
}

.story-aside-title {
  @apply font-display text-lg font-bold text-navy mb-4;
}

.story-aside-link {
  @apply flex flex-col gap-1 py-2 border-b border-gray-100 last:border-b-0;
}

.story-aside-link-label {
  @apply font-sans font-semibold text-sm text-navy group-hover:text-cobalt transition-colors;
}

.story-aside-school {
  @apply flex flex-col gap-1 py-2 border-b border-gray-100;
}

.story-aside-school-location {
  @apply font-sans text-xs text-gray-500;
}

.story-aside-nav {
  @apply block mt-3 font-sans text-sm font-semibold text-cobalt hover:text-cobalt/80;
}

.story-aside-cta-title {
  @apply font-display text-lg font-semibold leading-snug;
}

.story-aside-cta-btn {
  @apply inline-block mt-3 px-4 py-2 rounded-md border border-white font-sans text-sm font-medium text-white hover:bg-white hover:text-navy transition-colors;
}
</style>
