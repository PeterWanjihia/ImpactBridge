<script setup lang="ts">
import {
  MessageCircle,
  Users,
  FileText,
  Handshake,
  Landmark,
  ChartLine,
  FileCheck,
  TrendingUp,
} from '@lucide/vue'
import type { Component } from 'vue'

interface PartnershipStep {
  title: string
  description: string
  icon: Component
}

const steps: PartnershipStep[] = [
  {
    title: 'Share your intent',
    description:
      'Tell us how you’d like to contribute and the impact you want to achieve.',
    icon: MessageCircle,
  },
  {
    title: 'Discovery conversation',
    description:
      'We explore alignment, possibilities and the best way to partner.',
    icon: Users,
  },
  {
    title: 'Due diligence',
    description:
      'We provide the information you need to make an informed decision.',
    icon: FileText,
  },
  {
    title: 'Partnership agreement',
    description: 'We agree scope, roles, timelines and reporting together.',
    icon: Handshake,
  },
  {
    title: 'Implementation & deployment',
    description:
      'Resources are deployed to schools with teacher support from day one.',
    icon: Landmark,
  },
  {
    title: 'Monitor & measure',
    description: 'We track progress and learning outcomes together.',
    icon: ChartLine,
  },
  {
    title: 'Report & communicate',
    description:
      'You receive clear, regular reports and impact stories.',
    icon: FileCheck,
  },
  {
    title: 'Review & grow',
    description: 'We reflect, learn and plan the next chapter together.',
    icon: TrendingUp,
  },
]
</script>

<template>
  <section class="process-section">
    <LayoutContainer>
      <h2 class="process-section__title">How a partnership works</h2>

      <!-- Desktop: connected timeline -->
      <div class="process-section__timeline hidden lg:block">
        <div class="flex items-start">
          <template v-for="(step, index) in steps" :key="step.title">
            <div class="process-step flex-1 min-w-0">
              <div class="process-step__icon">
                <component :is="step.icon" class="w-6 h-6" />
              </div>
              <span class="process-step__number">{{ index + 1 }}</span>
              <h3 class="process-step__title">{{ step.title }}</h3>
              <p class="process-step__description">{{ step.description }}</p>
            </div>

            <div
              v-if="index < steps.length - 1"
              class="process-connector"
              aria-hidden="true"
            />
          </template>
        </div>
      </div>

      <!-- Mobile / tablet: simple grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 lg:hidden">
        <div v-for="(step, index) in steps" :key="step.title" class="flex gap-4">
          <div class="flex flex-col items-center">
            <div class="process-step__icon">
              <component :is="step.icon" class="w-6 h-6" />
            </div>
            <span class="process-step__number mt-2">{{ index + 1 }}</span>
          </div>
          <div>
            <h3 class="process-step__title">{{ step.title }}</h3>
            <p class="process-step__description mt-1">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.process-section {
  @apply bg-white py-14 md:py-16 border-t border-slate-100;
}

.process-section__title {
  @apply text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-10;
}

.process-step {
  @apply flex flex-col;
}

.process-step__icon {
  @apply w-14 h-14 rounded-full bg-white border border-slate-200 text-cobalt-600 flex items-center justify-center shadow-sm flex-shrink-0;
}

.process-step__number {
  @apply mt-3 w-6 h-6 rounded-full bg-cobalt-600 text-white text-xs font-bold flex items-center justify-center;
}

.process-step__title {
  @apply mt-3 text-[15px] font-sans font-bold text-slate-900 leading-snug;
}

.process-step__description {
  @apply mt-2 text-xs font-sans leading-relaxed text-slate-500;
}

.process-connector {
  @apply flex-1 border-t-2 border-dashed border-slate-300 relative top-7 min-w-[24px] max-w-[56px];
}

.process-connector::after {
  content: '';
  @apply absolute right-0 -top-[5px] border-t-2 border-r-2 border-slate-300 w-2 h-2 rotate-45;
}
</style>
