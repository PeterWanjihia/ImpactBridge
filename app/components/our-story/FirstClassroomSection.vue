<script setup lang="ts">
import { Play } from '@lucide/vue'

interface PhotoItem {
  src: string
  alt: string
  class?: string
}

const photos: PhotoItem[] = [
  {
    src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop',
    alt: 'Teachers examining hardware hub'
  },
  {
    src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop',
    alt: 'Teacher presenting to classroom',
  },
  {
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop',
    alt: 'Students collaborating around table',
  },
  {
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
    alt: 'Teacher interacting with tech',
  },
  {
    src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop',
    alt: 'Student looking at digital screen display',
  }
]
</script>

<template>
  <section class="py-12 md:py-16 bg-slate-50/50">
    <LayoutContainer>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        <!-- Left Content Column -->
        <div class="lg:col-span-5 flex flex-col justify-center">
          <div class="flex items-center gap-2 mb-3">
            <span class="w-6 h-6 rounded-full border border-cobalt/30 text-cobalt text-xs font-semibold flex items-center justify-center">
              04
            </span>
            <span class="text-xs font-bold tracking-wider text-cobalt uppercase">
              THE FIRST CLASSROOM
            </span>
          </div>

          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-[1.15]">
            Then the idea entered a real classroom.
          </h2>

          <p class="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            In April 2025, the first hub was installed at Our Lady Seat of Wisdom in Kansanga. 
            Two Champion Teachers were trained, and a two-day CPD program introduced the 
            system to teachers and learners.
          </p>

          <div class="mt-8">
            <UiButton 
              variant="primary" 
              class="inline-flex items-center gap-2 bg-cobalt hover:bg-cobalt/90 text-white font-medium rounded-lg px-5 py-3 shadow-sm transition-colors text-sm"
            >
              <div class="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <Play class="w-3 h-3 fill-white text-white translate-x-0.5" />
              </div>
              <span>Watch the first installation</span>
            </UiButton>
          </div>
        </div>

        <!-- Right Photo Gallery Bento Grid -->
        <div class="lg:col-span-7 grid grid-cols-4 grid-rows-2 gap-3 aspect-[16/9] sm:aspect-[2/1] lg:aspect-[16/9]">
          <div
            v-for="(photo, index) in photos"
            :key="index"
            :class="[
              'relative overflow-hidden rounded-lg group',
              index === 0 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
            ]"
          >
            <img
              :src="photo.src"
              :alt="photo.alt"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </LayoutContainer>
  </section>
</template>