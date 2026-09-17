<script setup lang="ts">
interface JourneyMilestone {
  date: string
  title: string
  description: string
}

const milestones: JourneyMilestone[] = [
  {
    date: 'Aug 2023 – Jan 2025',
    title: 'The vision',
    description: 'We identified the gap, designed the offline microcomputer hub concept and built early partnerships.'
  },
  {
    date: 'April 2025',
    title: 'Pilot launch',
    description: 'The first hub was installed at Our Lady Seat of Wisdom in Kansanga. Teachers and students experienced digital learning for the first time.'
  },
  {
    date: 'June 2025',
    title: 'Pilot review',
    description: 'We collected feedback, refined the hardware, improved content and strengthened teacher support.'
  },
  {
    date: 'July 2025 – Beyond',
    title: 'The next chapter',
    description: 'Expanding subjects, launching 10 more hubs by 2026, scaling teacher training and publishing an impact report.'
  }
]
</script>

<template>
  <section class="py-section-sm md:py-section bg-white border-t border-gray-100">
    <LayoutContainer>
      <!-- Section Header with Continuous Timeline Track Bar -->
      <div class="relative mb-12">
        <!-- Header Eyebrow -->
        <div class="flex items-center gap-2 mb-8">
          <span
            class="w-6 h-6 rounded-full border border-cobalt/30 text-cobalt text-xs font-bold flex items-center justify-center bg-white">
            07
          </span>
          <span class="text-2xs font-bold tracking-eyebrow text-cobalt uppercase">
            OUR JOURNEY SO FAR
          </span>
        </div>

        <!-- Horizontal Timeline Bar (Desktop Grid Aligned) -->
        <div class="hidden lg:block relative w-full pt-4">
          <!-- Continuous Blue Line -->
          <div class="absolute top-1/2 left-0 right-0 h-[2px] bg-cobalt -translate-y-1/2" />

          <!-- Timeline Node Dots Grid -->
          <div class="grid grid-cols-4 gap-8 relative z-10">
            <div v-for="(_, index) in milestones" :key="index" class="flex items-center">
              <div class="w-5 h-5 rounded-full bg-white border-4 border-cobalt shadow-elevation-1 ring-4 ring-white" />
            </div>
          </div>
        </div>
      </div>

      <!-- Timeline Content Columns -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-gray-200/80">
        <div v-for="(item, index) in milestones" :key="index" class="flex flex-col lg:px-6 first:lg:pl-0 last:lg:pr-0">
          <!-- Date Range Tag -->
          <span class="text-xs font-bold text-gray-800 mb-2">
            {{ item.date }}
          </span>

          <!-- Milestone Title -->
          <h3 class="text-lg font-bold text-ink mb-3">
            {{ item.title }}
          </h3>

          <!-- Milestone Description -->
          <p class="text-xs text-gray-600 leading-relaxed font-sans">
            {{ item.description }}
          </p>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>
