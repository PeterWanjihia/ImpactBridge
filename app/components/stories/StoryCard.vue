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
  school: 'bg-green-100 text-green-700',
  partner: 'bg-purple-100 text-purple-700'
}
</script>

<template>
  <NuxtLink :to="`/stories/${slug}`" class="story-card">
    <div v-if="imageUrl" class="story-card-image">
      <img :src="imageUrl" :alt="imageAlt || title" class="story-card-img" />
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
  @apply block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow;
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
  @apply text-lg font-serif font-semibold text-navy line-clamp-2;
}

.story-card-summary {
  @apply mt-2 text-sm text-gray-600 line-clamp-2;
}

.story-card-date {
  @apply mt-3 text-xs text-gray-400;
}
</style>
