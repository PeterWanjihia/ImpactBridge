<script setup lang="ts">
import { Quote, Headphones, Play, ArrowRight } from '@lucide/vue'
import type { ImpactTestimonial } from '~/types'

interface Props {
  sectionNumber?: number
  learner?: ImpactTestimonial
  teacher?: ImpactTestimonial
}

const props = withDefaults(defineProps<Props>(), {
  sectionNumber: 3,
  learner: () => ({
    heading: 'Behind every number is a learner.',
    quote: '"I feel like I can now finish my schooling."',
    description: 'Digital lessons help me understand better because I can see and interact with the learning.',
    attribution: '- Learner, Grade 6',
    imageUrl: 'https://img.magnific.com/free-photo/african-american-woman-wearing-student-backpack-holding-books-smiling-happy-pointing-with-hand-finger-side_839833-34702.jpg?semt=ais_hybrid&w=740&q=80',
    imageAlt: 'Student smiling in classroom',
    mediaType: 'audio',
    mediaDuration: '0:20',
    storyUrl: '/stories/learner-grade-6',
    variant: 'learner'
  }),
  teacher: () => ({
    heading: 'Teachers are leading the change.',
    quote: '"The hub has changed the way I teach."',
    description: 'Lessons are more engaging, students participate more, and I now plan with better resources.',
    attribution: '- Champion Teacher',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=700&fit=crop&crop=face',
    imageAlt: 'Teacher in classroom',
    mediaType: 'video',
    mediaDuration: '0:32',
    mediaUrl: '#',
    variant: 'teacher'
  })
})
</script>

<template>
  <LayoutSection background="white">
    <LayoutContainer>
      <div class="testimonial-quotes">
        <!-- Section Label -->
        <div class="testimonial-quotes-label">
          <div class="testimonial-quotes-label-icon">
            <span class="text-white text-sm font-bold">{{ sectionNumber }}</span>
          </div>
          <span class="testimonial-quotes-label-text">VOICES FROM THE PILOT</span>
        </div>

        <!-- Testimonials Grid -->
        <div class="testimonial-quotes-grid">
          <!-- Learner Testimonial -->
          <div class="testimonial-card testimonial-card--learner">
            <div class="testimonial-card-content">
              <Quote class="testimonial-card-quote-icon w-8 h-8 text-teal" />
              <h3 class="testimonial-card-heading">{{ learner.heading }}</h3>
              <blockquote class="testimonial-card-quote">{{ learner.quote }}</blockquote>
              <p class="testimonial-card-description">{{ learner.description }}</p>
              <p class="testimonial-card-attribution">{{ learner.attribution }}</p>
              <div class="testimonial-card-actions">
                <UiButton variant="outline" size="sm">
                  <Headphones class="w-4 h-4" />
                  <span>Listen ({{ learner.mediaDuration }})</span>
                </UiButton>
                <UiButton variant="ghost" size="sm">
                  <NuxtLink :to="learner.storyUrl" class="flex items-center gap-1">
                    Read the full story
                    <ArrowRight class="w-4 h-4" />
                  </NuxtLink>
                </UiButton>
              </div>
            </div>
            <div class="testimonial-card-media">
              <img
                :src="learner.imageUrl"
                :alt="learner.imageAlt"
                class="testimonial-card-image"
              />
            </div>
          </div>

          <!-- Teacher Testimonial -->
          <div class="testimonial-card testimonial-card--teacher">
            <div class="testimonial-card-content">
              <h3 class="testimonial-card-heading testimonial-card-heading--teacher">
                {{ teacher.heading }}
              </h3>
              <blockquote class="testimonial-card-quote">{{ teacher.quote }}</blockquote>
              <p class="testimonial-card-description">{{ teacher.description }}</p>
              <p class="testimonial-card-attribution">{{ teacher.attribution }}</p>
              <div class="testimonial-card-actions">
                <UiButton variant="outline" size="sm">
                  <Play class="w-4 h-4" />
                  <span>Watch teacher story ({{ teacher.mediaDuration }})</span>
                </UiButton>
              </div>
            </div>
            <div class="testimonial-card-media">
              <img
                :src="teacher.imageUrl"
                :alt="teacher.imageAlt"
                class="testimonial-card-image"
              />
            </div>
          </div>
        </div>
      </div>
    </LayoutContainer>
  </LayoutSection>
</template>

<style scoped>
.testimonial-quotes {
  @apply space-y-8;
}

.testimonial-quotes-label {
  @apply flex items-center gap-3;
}

.testimonial-quotes-label-icon {
  @apply w-8 h-8 rounded-full bg-cobalt flex items-center justify-center;
}

.testimonial-quotes-label-text {
  @apply text-2xs font-sans font-bold text-navy tracking-eyebrow uppercase;
}

.testimonial-quotes-grid {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-6;
}

.testimonial-card {
  @apply flex flex-col md:flex-row bg-white rounded-xl overflow-hidden border border-gray-100 shadow-elevation-1;
}

.testimonial-card-content {
  @apply flex-1 p-6 flex flex-col;
}

.testimonial-card-quote-icon {
  @apply mb-3;
}

.testimonial-card-heading {
  @apply text-xl md:text-2xl font-display font-bold text-navy mb-4;
}

.testimonial-card-heading--teacher {
  @apply text-cobalt;
}

.testimonial-card-quote {
  @apply text-lg font-display text-gray-800 italic mb-3;
}

.testimonial-card-description {
  @apply text-sm font-sans text-gray-600 leading-relaxed mb-4;
}

.testimonial-card-attribution {
  @apply text-sm font-sans font-semibold text-gray-700 mt-auto mb-4;
}

.testimonial-card-actions {
  @apply flex flex-wrap gap-3;
}

.testimonial-card-media {
  @apply relative md:w-64 lg:w-72 flex-shrink-0;
}

.testimonial-card-image {
  @apply w-full h-48 md:h-full object-cover;
}
</style>
