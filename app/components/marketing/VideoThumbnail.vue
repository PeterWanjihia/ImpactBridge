<script setup lang="ts">
interface Props {
  imageUrl: string
  imageAlt?: string
  videoUrl?: string
}

defineProps<Props>()
</script>

<template>
  <!-- Real inline player: plays in place, never opens a new tab -->
  <video
    v-if="videoUrl"
    class="video-thumbnail video-thumbnail--player"
    :src="videoUrl"
    :poster="imageUrl"
    :aria-label="imageAlt"
    controls
    playsinline
    preload="metadata"
  >
    Your browser does not support embedded video.
  </video>
  <NuxtImg
    v-else
    :src="imageUrl"
    :alt="imageAlt"
    class="video-thumbnail"
    width="1200"
    height="675"
    sizes="sm:100vw md:50vw"
    loading="lazy"
  />
</template>

<style scoped>
.video-thumbnail {
  @apply relative block aspect-video w-full overflow-hidden rounded-lg object-cover;
}

.video-thumbnail--player {
  @apply bg-navy-900 shadow-elevation-2;
}
</style>
