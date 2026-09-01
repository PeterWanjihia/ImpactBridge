<script setup lang="ts">
import { BookOpen } from '@lucide/vue'

interface LearningItem {
  question: string
  description: string
}

interface Props {
  sectionNumber?: number
  items?: LearningItem[]
}

const props = withDefaults(defineProps<Props>(), {
  sectionNumber: 5,
  items: () => [
    {
      question: 'Will teachers continue using the hub across full terms?',
      description: 'We are tracking adoption over time.'
    },
    {
      question: 'Will peer adoption grow as more teachers get involved?',
      description: 'We are measuring how Champion Teachers influence others.'
    },
    {
      question: 'Will the revised hardware remain reliable long-term?',
      description: 'We are monitoring uptime and support needs.'
    },
    {
      question: 'Will learner gains persist and deepen over time?',
      description: 'We are introducing assessments to learn more.'
    }
  ]
})
</script>

<template>
  <LayoutSection background="navy">
    <LayoutContainer>
      <div class="still-learning">
        <!-- Section Label -->
        <div class="still-learning-label">
          <div class="still-learning-label-icon">
            <span class="text-white text-sm font-bold">{{ sectionNumber }}</span>
          </div>
          <span class="still-learning-label-text">WHAT WE ARE STILL LEARNING</span>
        </div>

        <!-- Learning Questions Grid -->
        <div class="still-learning-grid">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="learning-card"
          >
            <div class="learning-card-icon">
              <BookOpen class="w-5 h-5 text-teal" />
            </div>
            <div class="learning-card-content">
              <h4 class="learning-card-question">{{ item.question }}</h4>
              <p class="learning-card-description">{{ item.description }}</p>
            </div>
          </div>
        </div>

        <!-- Methodology Link -->
        <div class="still-learning-footer">
          <NuxtLink to="/impact/methodology" class="still-learning-link">
            Read our methodology and limitations
            <span class="ml-1">→</span>
          </NuxtLink>
        </div>
      </div>
    </LayoutContainer>
  </LayoutSection>
</template>

<style scoped>
.still-learning {
  @apply space-y-8;
}

.still-learning-label {
  @apply flex items-center gap-3;
}

.still-learning-label-icon {
  @apply w-8 h-8 rounded-full bg-cobalt flex items-center justify-center;
}

.still-learning-label-text {
  @apply text-sm font-sans font-bold text-white tracking-widest uppercase;
}

.still-learning-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6;
}

.learning-card {
  @apply bg-white/5 rounded-xl p-6 border border-white/10;
}

.learning-card-icon {
  @apply w-10 h-10 rounded-lg bg-teal/20 flex items-center justify-center mb-4;
}

.learning-card-content {
  @apply space-y-3;
}

.learning-card-question {
  @apply text-base font-sans font-bold text-white leading-snug;
}

.learning-card-description {
  @apply text-sm font-sans text-gray-300 leading-relaxed;
}

.still-learning-footer {
  @apply pt-4 border-t border-white/10;
}

.still-learning-link {
  @apply text-teal font-sans font-semibold text-sm hover:underline inline-flex items-center;
}
</style>
