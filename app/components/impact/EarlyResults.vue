<script setup lang="ts">
import { Users, GraduationCap, Heart, TrendingUp, MessageCircle } from '@lucide/vue'
import type { ImpactMetricItem } from '~/types'

interface Props {
  sectionNumber?: number
  metrics?: ImpactMetricItem[]
  surveyNote?: string
}

const props = withDefaults(defineProps<Props>(), {
  sectionNumber: 2,
  surveyNote: 'Self-reported learner feedback from post-session survey.',
  metrics: () => [
    {
      value: '50+',
      label: 'Learners reached',
      description: 'Students are accessing curriculum-aligned content in core subjects.',
      icon: 'users'
    },
    {
      value: '2',
      label: 'Teachers prepared',
      description: 'Champion Teachers trained and using the hub to lead interactive lessons.',
      icon: 'graduation'
    },
    {
      value: '100%',
      label: 'Want more digital learning',
      description: 'Every respondent said they want more technology-enhanced learning in class.',
      icon: 'heart'
    },
    {
      value: '90%',
      label: 'Report greater confidence',
      description: 'Learners felt more confident in their understanding after using digital resources.',
      icon: 'trending'
    }
  ]
})

const iconMap = {
  users: Users,
  graduation: GraduationCap,
  heart: Heart,
  trending: TrendingUp
}

const iconColorMap = {
  users: 'text-green-600 bg-green-50',
  graduation: 'text-orange-500 bg-orange-50',
  heart: 'text-cobalt bg-cobalt/10',
  trending: 'text-navy bg-navy/10'
}
</script>

<template>
  <LayoutSection background="gray">
    <LayoutContainer>
      <div class="early-results">
        <!-- Section Label -->
        <div class="early-results-label">
          <div class="early-results-label-icon">
            <span class="text-white text-sm font-bold">{{ sectionNumber }}</span>
          </div>
          <span class="early-results-label-text">FOUR EARLY RESULTS THAT MATTER</span>
        </div>

        <!-- Metrics Grid -->
        <div class="early-results-grid">
          <div
            v-for="(metric, index) in metrics"
            :key="index"
            class="early-results-card"
          >
            <div :class="['early-results-card-icon', iconColorMap[metric.icon]]">
              <component :is="iconMap[metric.icon]" class="w-6 h-6" />
            </div>
            <div class="early-results-card-content">
              <div class="early-results-card-value">{{ metric.value }}</div>
              <div class="early-results-card-label">{{ metric.label }}</div>
              <div class="early-results-card-description">{{ metric.description }}</div>
            </div>
          </div>
        </div>

        <!-- Survey Note -->
        <div class="early-results-survey">
          <MessageCircle class="w-5 h-5 text-cobalt flex-shrink-0" />
          <span class="early-results-survey-text">
            {{ surveyNote }}
            <NuxtLink to="/impact/methodology" class="early-results-survey-link">
              See sample questions and methodology →
            </NuxtLink>
          </span>
        </div>
      </div>
    </LayoutContainer>
  </LayoutSection>
</template>

<style scoped>
.early-results {
  @apply space-y-8;
}

.early-results-label {
  @apply flex items-center gap-3;
}

.early-results-label-icon {
  @apply w-8 h-8 rounded-full bg-cobalt flex items-center justify-center;
}

.early-results-label-text {
  @apply text-sm font-sans font-bold text-navy tracking-widest uppercase;
}

.early-results-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6;
}

.early-results-card {
  @apply bg-white rounded-xl p-6 shadow-sm border border-gray-100;
}

.early-results-card-icon {
  @apply w-12 h-12 rounded-full flex items-center justify-center mb-4;
}

.early-results-card-content {
  @apply space-y-2;
}

.early-results-card-value {
  @apply text-3xl md:text-4xl font-sans font-bold text-navy;
}

.early-results-card-label {
  @apply text-sm font-sans font-semibold text-gray-700;
}

.early-results-card-description {
  @apply text-sm font-sans text-gray-500 leading-relaxed;
}

.early-results-survey {
  @apply flex items-center gap-3 pt-4 border-t border-gray-200;
}

.early-results-survey-text {
  @apply text-sm font-sans text-gray-600;
}

.early-results-survey-link {
  @apply text-cobalt font-semibold hover:underline ml-1;
}
</style>
