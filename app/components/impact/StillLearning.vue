<script setup lang="ts">
import { Calendar, Users, Shield, GraduationCap, CircleHelp } from '@lucide/vue'

interface LearningItem {
  question: string
  description: string
  icon: 'calendar' | 'users' | 'shield' | 'graduation'
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
      description: 'We are tracking adoption over time.',
      icon: 'calendar'
    },
    {
      question: 'Will peer adoption grow as more teachers get involved?',
      description: 'We are measuring how Champion Teachers influence others.',
      icon: 'users'
    },
    {
      question: 'Will the revised hardware remain reliable long-term?',
      description: 'We are monitoring uptime and support needs.',
      icon: 'shield'
    },
    {
      question: 'Will learner gains persist and deepen over time?',
      description: 'We are introducing assessments to learn more.',
      icon: 'graduation'
    }
  ]
})

const iconMap = {
  calendar: Calendar,
  users: Users,
  shield: Shield,
  graduation: GraduationCap
}
</script>

<template>
  <div class="still-learning">
    <!-- Section Label -->
    <div class="still-learning-label">
      <div class="still-learning-label-icon">
        <span class="text-white text-xs font-bold">{{ sectionNumber }}</span>
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
        <component :is="iconMap[item.icon] ?? CircleHelp" class="learning-card-icon" />
        <h4 class="learning-card-question">{{ item.question }}</h4>
        <p class="learning-card-description">{{ item.description }}</p>
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
</template>

<style scoped>
.still-learning {
  @apply space-y-5;
}

.still-learning-label {
  @apply flex items-center gap-2;
}

.still-learning-label-icon {
  @apply w-6 h-6 rounded-full bg-cobalt flex items-center justify-center;
}

.still-learning-label-text {
  @apply text-[11px] font-sans font-bold text-white tracking-widest uppercase;
}

.still-learning-grid {
  @apply grid grid-cols-2 lg:grid-cols-4 gap-3;
}

.learning-card {
  @apply flex flex-col;
}

.learning-card-icon {
  @apply w-5 h-5 text-teal mb-2;
}

.learning-card-question {
  @apply text-[13px] font-sans font-semibold text-white leading-snug mb-1;
}

.learning-card-description {
  @apply text-[12px] font-sans text-gray-400 leading-snug;
}

.still-learning-footer {
  @apply pt-3 border-t border-white/10 flex justify-end;
}

.still-learning-link {
  @apply text-teal font-sans font-semibold text-sm hover:underline inline-flex items-center;
}
</style>
