<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import {
  ArrowRight,
  CirclePlay,
  WifiOff,
  BookOpen,
  BookX,
  UserX,
  Play
} from '@lucide/vue'

useHead({
  title: 'Our Story - Impact Bridge',
  meta: [
    { name: 'description', content: 'Learn about our mission to bring offline digital learning to schools without reliable connectivity.' }
  ]
})

// ---------------------------------------------------------------------------
// Data layer — fetch narrative content from CMS
// ---------------------------------------------------------------------------
const { getPage } = useContent()

// TODO: When CMS is ready, replace with:
// const { data: page } = await useAsyncData('our-story', () => getPage('our-story'))
const pageData = ref<any>(null)

onMounted(async () => {
  try {
    pageData.value = await getPage('our-story')
  } catch {
    // Use defaults
  }
})

const isPlaying = ref(false)
const videoRef = ref<HTMLVideoElement | null>(null)

// Direct video MP4 link (Replace with your uploaded video asset/R2 link)
const videoUrl = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
const posterUrl = 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop&crop=center'

function handlePlayVideo() {
  isPlaying.value = true
  // Small tick delay to ensure video element is mounted before calling .play()
  nextTick(() => {
    videoRef.value?.play()
  })
}

const realityConstraints = [
  {
    icon: WifiOff,
    label: 'Unreliable connectivity'
  },
  {
    icon: BookOpen,
    label: 'Limited learning materials'
  },
  {
    icon: BookX,
    label: 'Outdated or scarce resources'
  },
  {
    icon: UserX,
    label: 'Teachers unsupported in using technology'
  }
]
</script>

<template>
  <div class="page-our-story">
    <HeroOverlay
      image-url="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1920&h=900&fit=crop&crop=center"
      image-alt="Teacher explaining a lesson in a classroom" overlay="gradient" tag="OUR STORY">
      <template #default>
        <h1 class="hero-title">
          <span>Potential is everywhere,</span><br />
          <span class="text-cobalt">Access is not.</span>
        </h1>
        <p class="hero-subtitle">
          In classrooms across Uganda, learners are ready to explore and
          teachers are ready to lead. But unreliable connectivity and limited
          educational resources still determine how far that curiosity can travel.
        </p>
      </template>

      <template #actions>
        <div class="hero-actions">
          <UiButton variant="primary" size="lg">
            <CirclePlay class="w-5 h-5" />
            Watch the 90-second story
          </UiButton>
          <UiButton variant="ghost" size="lg" class="text-white hover:text-white hover:bg-white/10">
            Read our story
            <ArrowRight class="w-4 h-4" />
          </UiButton>
        </div>
      </template>

      <template #bottom>
        <div class="hero-bottom-bar">
          <div class="hero-bottom-left">
            <div class="hero-avatars">
              <div class="hero-avatar" />
              <div class="hero-avatar" />
              <div class="hero-avatar" />
            </div>
            <span class="hero-bottom-text">Real stories. Real classrooms. Real change.</span>
          </div>
          <div class="hero-bottom-right">
            <span class="hero-still-building">still being<br />built</span>
          </div>
        </div>
      </template>
    </HeroOverlay>


    <!-- Our Reality Section -->
    <!-- The Reality Section -->
    <section class="py-16 md:py-24 bg-slate-50/50">
      <LayoutContainer>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          <!-- Interactive Media Column -->
          <div class="lg:col-span-5 relative overflow-hidden rounded-2xl shadow-md bg-slate-900 aspect-[4/3]">

            <!-- Native HTML5 Video Player -->
            <video v-if="isPlaying" ref="videoRef" :src="videoUrl" controls autoplay class="w-full h-full object-cover">
              Your browser does not support the video tag.
            </video>

            <!-- Video Thumbnail & Play Overlay Button -->
            <template v-else>
              <img :src="posterUrl" alt="Classroom learning environment"
                class="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />

              <button type="button" aria-label="Play video" @click="handlePlayVideo"
                class="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group cursor-pointer">
                <div
                  class="w-16 h-16 rounded-full bg-white text-cobalt flex items-center justify-center shadow-xl transition-transform group-hover:scale-110">
                  <Play class="w-7 h-7 fill-cobalt text-cobalt translate-x-0.5" />
                </div>
              </button>
            </template>

          </div>

          <!-- Content Column -->
          <div class="lg:col-span-7 flex flex-col justify-center">
            <div class="flex items-center gap-2 mb-3">
              <span
                class="w-6 h-6 rounded-full border border-cobalt/30 text-cobalt text-xs font-semibold flex items-center justify-center">
                01
              </span>
              <span class="text-xs font-bold tracking-wider text-cobalt uppercase">
                THE REALITY
              </span>
            </div>

            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
              The desire to learn was never missing.
            </h2>

            <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              A teacher enters a room full of questions. The learners are curious.
              The lesson has ambition. But textbooks are limited, digital resources
              are hard to reach, and web-dependent classrooms cannot function
              reliably.
            </p>

            <!-- Key Constraints Grid -->
            <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-6 border-t border-slate-200/80">
              <div v-for="(item, index) in realityConstraints" :key="index" class="flex items-start gap-3">
                <div class="p-2 rounded-lg bg-blue-50/80 text-cobalt shrink-0">
                  <component :is="item.icon" class="w-5 h-5 text-cobalt" />
                </div>
                <span class="text-sm font-medium text-slate-700 leading-snug pt-1">
                  {{ item.label }}
                </span>
              </div>
            </div>
          </div>

        </div>
      </LayoutContainer>
    </section>

  </div>
</template>

<style scoped>
.hero-title {
  @apply text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight;
}

.hero-subtitle {
  @apply mt-6 text-base md:text-lg text-gray-200 max-w-xl leading-relaxed;
}

.hero-actions {
  @apply flex flex-col sm:flex-row gap-4 mt-8;
}

.hero-bottom-bar {
  @apply flex items-center justify-between pt-8 mt-8 border-t border-white/20;
}

.hero-bottom-left {
  @apply flex items-center gap-3;
}

.hero-avatars {
  @apply flex -space-x-2;
}

.hero-avatar {
  @apply w-8 h-8 rounded-full bg-white/30 border-2 border-white/50;
}

.hero-bottom-text {
  @apply text-sm text-gray-300;
}

.hero-bottom-right {
  @apply flex items-center;
}

.hero-still-building {
  @apply text-xs text-gray-400 italic font-serif text-right leading-tight;
}
</style>
