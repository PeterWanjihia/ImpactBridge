<script setup lang="ts">
import type { MediaAsset } from '~/types'

interface Props {
  /** CMS media reference, resolved through ~/utils/media. */
  media: MediaAsset
}

defineProps<Props>()
</script>

<template>
  <!-- Real inline player: plays in place, never opens a new tab -->
  <video
    v-if="media.kind === 'video'"
    class="video-thumbnail video-thumbnail--player"
    :src="media.url"
    :poster="media.poster"
    :aria-label="media.alt ?? media.caption"
    controls
    playsinline
    preload="metadata"
  >
    Your browser does not support embedded video.
  </video>
  <NuxtImg
    v-else
    :src="media.poster ?? media.url"
    :alt="media.alt"
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
