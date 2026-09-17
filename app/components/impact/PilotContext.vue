<script setup lang="ts">
import { MapPin, Calendar, BookOpen, Users, GraduationCap, Target, Flag } from '@lucide/vue'

interface Props {
  schoolName: string
  location: string
  launchDate: string
  imageUrl?: string
  imageAlt?: string
  pilotPeriod: string
  teachers: string
  learners: string
  focus: string
  subjects: string
  status: string
}

const props = defineProps<Props>()
</script>

<template>
  <LayoutSection background="white">
    <LayoutContainer>
      <div class="pilot-context">
        <!-- Section Label -->
        <div class="pilot-context-label">
          <div class="pilot-context-label-icon">
            <span class="text-white text-sm font-bold">1</span>
          </div>
          <span class="pilot-context-label-text">THE PILOT IN CONTEXT</span>
        </div>

        <div class="pilot-context-grid">
          <!-- School Image -->
          <div class="pilot-context-media">
            <NuxtImg
              :src="imageUrl"
              :alt="imageAlt || schoolName"
              class="pilot-context-image"
              width="800"
              height="600"
              loading="lazy"
              sizes="sm:100vw lg:50vw"
            />
          </div>

          <!-- School Details -->
          <div class="pilot-context-details">
            <h2 class="pilot-context-school-name">{{ schoolName }}</h2>

            <div class="pilot-context-meta">
              <div class="pilot-context-meta-item">
                <MapPin class="w-4 h-4 text-gray-500" />
                <span>{{ location }}</span>
              </div>
              <div class="pilot-context-meta-item">
                <Calendar class="w-4 h-4 text-gray-500" />
                <span>Launched {{ launchDate }}</span>
              </div>
            </div>

            <div class="pilot-context-info-grid">
              <div class="pilot-context-info-item">
                <div class="pilot-context-info-icon">
                  <Calendar class="w-5 h-5" />
                </div>
                <div>
                  <span class="pilot-context-info-label">Pilot period</span>
                  <span class="pilot-context-info-value">{{ pilotPeriod }}</span>
                </div>
              </div>

              <div class="pilot-context-info-item">
                <div class="pilot-context-info-icon">
                  <GraduationCap class="w-5 h-5" />
                </div>
                <div>
                  <span class="pilot-context-info-label">Teachers</span>
                  <span class="pilot-context-info-value">{{ teachers }}</span>
                </div>
              </div>

              <div class="pilot-context-info-item">
                <div class="pilot-context-info-icon">
                  <Users class="w-5 h-5" />
                </div>
                <div>
                  <span class="pilot-context-info-label">Learners</span>
                  <span class="pilot-context-info-value">{{ learners }}</span>
                </div>
              </div>

              <div class="pilot-context-info-item">
                <div class="pilot-context-info-icon">
                  <Target class="w-5 h-5" />
                </div>
                <div>
                  <span class="pilot-context-info-label">Focus</span>
                  <span class="pilot-context-info-value">{{ focus }}</span>
                </div>
              </div>

              <div class="pilot-context-info-item">
                <div class="pilot-context-info-icon">
                  <BookOpen class="w-5 h-5" />
                </div>
                <div>
                  <span class="pilot-context-info-label">Subjects introduced</span>
                  <span class="pilot-context-info-value">{{ subjects }}</span>
                </div>
              </div>

              <div class="pilot-context-info-item">
                <div class="pilot-context-info-icon">
                  <Flag class="w-5 h-5" />
                </div>
                <div>
                  <span class="pilot-context-info-label">Status</span>
                  <span class="pilot-context-info-value">{{ status }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Disclaimer Banner -->
        <div class="pilot-context-disclaimer">
          <div class="pilot-context-disclaimer-icon">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p class="pilot-context-disclaimer-text">
            The findings on this page come from this early pilot. We are still learning and will continue to measure as we expand.
          </p>
        </div>
      </div>
    </LayoutContainer>
  </LayoutSection>
</template>

<style scoped>
.pilot-context {
  @apply space-y-8;
}

.pilot-context-label {
  @apply flex items-center gap-3;
}

.pilot-context-label-icon {
  @apply w-8 h-8 rounded-full bg-cobalt flex items-center justify-center;
}

.pilot-context-label-text {
  @apply text-2xs font-sans font-bold text-navy tracking-eyebrow uppercase;
}

.pilot-context-grid {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start;
}

.pilot-context-media {
  @apply relative;
}

.pilot-context-image {
  @apply w-full rounded-xl shadow-elevation-2;
  aspect-ratio: 4/3;
  object-fit: cover;
}

.pilot-context-details {
  @apply space-y-6;
}

.pilot-context-school-name {
  @apply text-3xl md:text-4xl font-display font-bold text-navy;
}

.pilot-context-meta {
  @apply flex flex-wrap gap-4 text-sm text-gray-600;
}

.pilot-context-meta-item {
  @apply flex items-center gap-2;
}

.pilot-context-info-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6;
}

.pilot-context-info-item {
  @apply flex items-start gap-3 p-3 rounded-lg bg-gray-50;
}

.pilot-context-info-icon {
  @apply flex-shrink-0 w-10 h-10 rounded-lg bg-white flex items-center justify-center text-cobalt shadow-elevation-1;
}

.pilot-context-info-label {
  @apply block text-2xs font-sans font-semibold text-cobalt uppercase tracking-eyebrow;
}

.pilot-context-info-value {
  @apply block text-sm font-sans text-gray-700 mt-0.5;
}

.pilot-context-disclaimer {
  @apply flex items-start gap-3 p-4 rounded-lg bg-cobalt/5 border border-cobalt/10;
}

.pilot-context-disclaimer-icon {
  @apply flex-shrink-0 w-6 h-6 rounded-full bg-cobalt/10 flex items-center justify-center text-cobalt;
}

.pilot-context-disclaimer-text {
  @apply text-sm font-sans text-gray-700 leading-relaxed;
}
</style>
