<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  ArrowRight,
  CirclePlay,
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

    <RealitySection />
    <QuestionSection />
    <SolutionSection />
    <FirstClassroomSection />
    <PilotSection />
    <EarlyResultsSection />
    <JourneyTimeline />
    <SupportSection />
    <FinalCTA />
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
