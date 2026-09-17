<script setup lang="ts">
interface Props {
  title: string
  slug: string
  summary?: string
  imageUrl?: string
  imageAlt?: string
  type?: 'learner' | 'teacher' | 'school' | 'community' | 'partner'
  date?: string
}

const props = defineProps<Props>()

const typeColors: Record<string, string> = {
  learner: 'bg-cobalt/10 text-cobalt',
  teacher: 'bg-teal/10 text-teal',
  school: 'bg-success-100 text-success-700',
  partner: 'bg-cobalt-100 text-cobalt-700'
}
</script>

<template>
  <NuxtLink :to="`/stories/${slug}`" class="story-card">
    <div v-if="imageUrl" class="story-card-image">
      <NuxtImg :src="imageUrl" :alt="imageAlt || title" class="story-card-img" width="640" height="360" sizes="sm:100vw md:50vw lg:33vw" loading="lazy" />
    </div>
    <div class="story-card-content">
      <div v-if="type" class="story-card-type">
        <UiBadge :class="typeColors[type]">{{ type }}</UiBadge>
      </div>
      <h3 class="story-card-title">{{ title }}</h3>
      <p v-if="summary" class="story-card-summary">{{ summary }}</p>
      <div v-if="date" class="story-card-date">{{ date }}</div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.story-card {
  @apply block bg-white rounded-card shadow-elevation-1 overflow-hidden hover:shadow-elevation-2 transition-shadow;
}

.story-card-image {
  @apply aspect-video overflow-hidden;
}

.story-card-img {
  @apply w-full h-full object-cover;
}

.story-card-content {
  @apply p-4;
}

.story-card-type {
  @apply mb-2;
}

.story-card-title {
  @apply text-lg font-display font-semibold text-navy line-clamp-2;
}

.story-card-summary {
  @apply mt-2 text-sm text-gray-600 line-clamp-2;
}

.story-card-date {
  @apply mt-3 text-xs text-gray-400;
}
</style>
