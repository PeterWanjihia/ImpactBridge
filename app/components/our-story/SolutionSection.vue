<script setup lang="ts">
import { 
  ArrowRight, 
  WifiOff, 
  Laptop, 
  UserCheck, 
  Users, 
  Sparkles 
} from '@lucide/vue'

interface StepItem {
  title: string
  priceTag?: string
  description: string
  icon: any
  image: string
  alt: string
}

const steps: StepItem[] = [
  {
    title: 'Offline Hub',
    priceTag: '$68',
    description: 'Low-power microcomputer with thousands of curriculum resources.',
    icon: WifiOff,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    alt: 'Impact Bridge offline microcomputer learning hub device'
  },
  {
    title: 'Curated Content',
    description: 'High-quality, curriculum-aligned resources available without the internet.',
    icon: Laptop,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
    alt: 'Digital learning platform dashboard with educational content'
  },
  {
    title: 'Trained Teacher',
    description: 'Champion Teachers are trained, mentored and supported.',
    icon: UserCheck,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop',
    alt: 'Teacher using laptop computer in classroom'
  },
  {
    title: 'Interactive Classroom',
    description: 'Technology becomes a tool for active, collaborative learning.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop',
    alt: 'Students interacting with educational technology in classroom'
  },
  {
    title: 'Confident Learners',
    description: 'Understanding deepens. Confidence grows. A brighter future opens.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop',
    alt: 'Smiling student in classroom environment'
  }
]
</script>

<template>
  <section class="py-section-sm md:py-section bg-white">
    <LayoutContainer>
      <!-- Section Header -->
      <div class="max-w-3xl mb-12 md:mb-16">
        <div class="flex items-center gap-2 mb-3">
          <span class="w-6 h-6 rounded-full border border-cobalt/30 text-cobalt text-xs font-bold flex items-center justify-center">
            03
          </span>
          <span class="text-2xs font-bold tracking-eyebrow text-cobalt uppercase">
            A SOLUTION BUILT AROUND TEACHERS
          </span>
        </div>

        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-ink leading-heading">
          Not a computer delivered to a school.<br />
          <span class="text-ink">A learning system built around a teacher.</span>
        </h2>
      </div>

      <!-- Steps Flow Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-5 relative">
        <div 
          v-for="(step, index) in steps" 
          :key="index" 
          class="flex flex-col h-full group"
        >
          <!-- Top Info Card Header -->
          <div class="flex-1 flex flex-col mb-6">
            <!-- Header: Circular Icon + Step Link Arrow -->
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 rounded-full border border-cobalt-100 bg-cobalt-50/50 flex items-center justify-center text-cobalt shrink-0">
                <component :is="step.icon" class="w-5 h-5 text-cobalt" />
              </div>

              <!-- Connecting Arrow between step cards (hidden on last item & small screens) -->
              <div 
                v-if="index < steps.length - 1" 
                class="hidden lg:flex items-center text-cobalt/60 pl-2 pr-1"
              >
                <ArrowRight class="w-4 h-4" />
              </div>
            </div>

            <!-- Title & Optional Tag -->
            <h3 class="text-base font-bold text-ink mb-2 flex items-center gap-1.5 flex-wrap">
              <span>{{ step.title }}</span>
              <span 
                v-if="step.priceTag" 
                class="text-xs font-semibold text-gray-500 font-sans"
              >
                ({{ step.priceTag }})
              </span>
            </h3>

            <!-- Description -->
            <p class="text-xs text-gray-600 leading-relaxed font-sans">
              {{ step.description }}
            </p>
          </div>

          <!-- Bottom Media Image & Link (Aligned at bottom) -->
          <div class="mt-auto">
            <div class="rounded-2xl overflow-hidden shadow-elevation-1 aspect-[4/3] bg-gray-100 mb-4">
              <NuxtImg
                :src="step.image"
                :alt="step.alt"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width="600"
                height="400"
                sizes="sm:100vw md:50vw lg:20vw"
              />
            </div>

            <!-- Link CTA under the first image block as shown in mockup design -->
            <NuxtLink 
              v-if="index === 0" 
              to="/our-model" 
              class="inline-flex items-center gap-1.5 text-xs font-bold text-cobalt hover:underline group/link pt-1"
            >
              <span>Explore how our model works</span>
              <ArrowRight class="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>
