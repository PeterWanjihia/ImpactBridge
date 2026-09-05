<script setup lang="ts">
import { ShieldCheck, UserCheck, Laptop, Users } from '@lucide/vue'

interface EvidenceItem {
  title: string
  description: string
  icon: any
  image: string
  alt: string
}

const evidenceList: EvidenceItem[] = [
  {
    title: 'Hardware must survive reality',
    description: 'We refined the system for reliability, protection and the conditions in which it operates.',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    alt: 'Impact Bridge rugged hardware unit'
  },
  {
    title: 'Teachers determine adoption',
    description: 'A device cannot transform a classroom unless teachers understand, trust and use it.',
    icon: UserCheck,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop',
    alt: 'Students learning with teacher in classroom'
  },
  {
    title: 'Offline still needs to feel rich',
    description: 'Removing internet dependency cannot mean stale, irrelevant or difficult-to-navigate content.',
    icon: Laptop,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
    alt: 'Rich offline learning application interface'
  },
  {
    title: 'Local ownership drives longevity',
    description: 'The hub must become part of the school’s teaching culture—not remain an external project.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop',
    alt: 'School leaders and teachers in a planning session'
  }
]
</script>

<template>
  <section class="py-16 md:py-24 bg-blue-50/60">
    <LayoutContainer>
      <!-- Section Header (Centered) -->
      <div class="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <div class="inline-flex items-center gap-2 mb-3">
          <span class="w-6 h-6 rounded-full border border-cobalt/30 text-cobalt text-xs font-bold flex items-center justify-center bg-white/80">
            05
          </span>
          <span class="text-xs font-bold tracking-wider text-cobalt uppercase">
            WHAT WE LEARNED
          </span>
        </div>

        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
          The pilot gave us evidence to improve.
        </h2>
      </div>

      <!-- 4-Column Evidence Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-blue-200/80">
        <div 
          v-for="(item, index) in evidenceList" 
          :key="index"
          class="flex flex-col justify-between h-full lg:px-6 first:lg:pl-0 last:lg:pr-0 group"
        >
          <!-- Text Content -->
          <div class="mb-6">
            <!-- Icon Badge -->
            <div class="w-11 h-11 rounded-full bg-white text-cobalt border border-blue-100 shadow-sm flex items-center justify-center mb-4">
              <component :is="item.icon" class="w-5 h-5 text-cobalt" />
            </div>

            <!-- Title -->
            <h3 class="text-base font-bold text-slate-900 mb-2 leading-snug">
              {{ item.title }}
            </h3>

            <!-- Description -->
            <p class="text-xs text-slate-600 leading-relaxed font-sans">
              {{ item.description }}
            </p>
          </div>

          <!-- Bottom Image Card -->
          <div class="mt-auto rounded-2xl overflow-hidden bg-slate-200 aspect-[4/3] shadow-sm">
            <img
              :src="item.image"
              :alt="item.alt"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>