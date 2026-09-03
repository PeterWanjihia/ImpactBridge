<script setup lang="ts">
import { Play } from '@lucide/vue'

interface Props {
  imageUrl: string
  imageAlt?: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="video-thumbnail relative group cursor-pointer rounded-lg overflow-hidden shadow-lg">
    <img :src="imageUrl" :alt="imageAlt" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
    <div class="absolute inset-0 bg-navy/20 group-hover:bg-navy/40 transition-colors duration-300" />
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
        <Play class="w-8 h-8 text-cobalt ml-1" fill="currentColor" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.video-thumbnail {
  aspect-ratio: 16 / 9;
}
</style>
