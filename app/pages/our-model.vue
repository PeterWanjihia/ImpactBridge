<script setup lang="ts">
import { 
  ArrowDown, 
  ArrowRight, 
  WifiOff, 
  UserCheck, 
  BookOpen, 
  MapPin, 
  Clock, 
  BarChart3 
} from '@lucide/vue'

useHead({
  title: 'Our Model - Impact Bridge',
  meta: [
    { name: 'description', content: 'How we combine offline learning technology, curated resources, trained teachers and local ownership.' }
  ]
})

// Sub-navigation tabs
const navTabs = [
  { name: 'Overview', active: true },
  { name: 'Inside the Hub', active: false },
  { name: 'Teacher Development', active: false },
  { name: 'Deployment', active: false },
  { name: 'Support', active: false },
  { name: 'Measurement', active: false }
]

// Bottom feature badges
const features = [
  { icon: WifiOff, label: 'Offline-first' },
  { icon: UserCheck, label: 'Teacher-led' },
  { icon: BookOpen, label: 'Curriculum-aligned' },
  { icon: MapPin, label: 'Locally implemented' },
  { icon: Clock, label: 'Continuously supported' },
  { icon: BarChart3, label: 'Transparently measured' }
]
</script>

<template>
  <div class="page-our-model">
    <!-- Sub Navigation Bar -->
    <nav class="bg-white border-b border-gray-100 py-4 px-6 md:px-12">
      <div class="max-w-7xl mx-auto flex items-center justify-center gap-8 overflow-x-auto text-sm font-medium">
        <button
          v-for="tab in navTabs"
          :key="tab.name"
          :class="[
            'pb-1 transition-colors whitespace-nowrap',
            tab.active 
              ? 'text-blue-600 border-b-2 border-blue-600 font-semibold' 
              : 'text-gray-600 hover:text-gray-900'
          ]"
        >
          {{ tab.name }}
        </button>
      </div>
    </nav>

    <!-- Hero Overlay Component with Custom Image & Content -->
    <HeroOverlay
      title="A computer does not transform a classroom."
      image-url="/images/hero-classroom.jpg"
      image-alt="Classroom with interactive digital board"
      overlay="dark"
      class="relative overflow-hidden"
    >
      <template #default>
        <p class="mt-2 text-3xl md:text-4xl lg:text-5xl font-serif text-blue-400 italic">
          A complete learning system can.
        </p>
        <p class="mt-6 text-base md:text-lg text-gray-200 leading-relaxed max-w-xl">
          Impact Bridge combines offline learning technology, curated resources, trained teachers and local ownership into one practical model—designed for schools with limited connectivity.
        </p>

        <!-- CTA Buttons -->
        <div class="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#explore"
            class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors shadow-sm"
          >
            Explore the model
            <ArrowDown class="w-4 h-4" />
          </a>
          <a
            href="#see-hub"
            class="inline-flex items-center gap-2 px-6 py-3 bg-transparent hover:bg-white/10 text-white border border-white/40 rounded-md font-medium transition-colors"
          >
            See a hub in action
            <ArrowRight class="w-4 h-4" />
          </a>
        </div>

        <!-- Bottom Feature Bar -->
        <div class="mt-16 pt-6 border-t border-white/20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <div
            v-for="feature in features"
            :key="feature.label"
            class="flex items-center gap-2 text-white/90 text-xs sm:text-sm font-medium"
          >
            <component :is="feature.icon" class="w-4 h-4 shrink-0 text-white/80" />
            <span>{{ feature.label }}</span>
          </div>
        </div>
      </template>
    </HeroOverlay>

    <!-- Subsequent sections go here -->
  </div>
</template>