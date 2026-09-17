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
            <div class="process-step">
              <!-- Stacked Icon + Overlapping Badge -->
              <div class="process-step__icon-wrapper">
                <div class="process-step__icon">
                  <component :is="step.icon" class="w-6 h-6 stroke-[1.75]" />
                </div>
                <span class="process-step__number">{{ index + 1 }}</span>
              </div>

              <!-- Content -->
              <h3 class="process-step__title">{{ step.title }}</h3>
              <p class="process-step__description">{{ step.description }}</p>
            </div>

            <!-- Connector Arrow -->
            <div
              v-if="index < steps.length - 1"
              class="process-connector"
              aria-hidden="true"
            >
              <div class="process-connector__line"></div>
              <span class="process-connector__arrow">›</span>
            </div>
          </template>
        </div>
      </div>

      <!-- Mobile / tablet: simple grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 lg:hidden">
        <div v-for="(step, index) in steps" :key="step.title" class="flex flex-col items-center text-center">
          <div class="process-step__icon-wrapper">
            <div class="process-step__icon">
              <component :is="step.icon" class="w-6 h-6 stroke-[1.75]" />
            </div>
            <span class="process-step__number">{{ index + 1 }}</span>
          </div>
          <h3 class="process-step__title">{{ step.title }}</h3>
          <p class="process-step__description">{{ step.description }}</p>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.process-section {
  @apply bg-white py-section-md md:py-section;
}

.process-section__title {
  @apply text-2xl md:text-3xl font-display font-bold text-ink-mid mb-12;
}

.process-step {
  @apply flex-1 flex flex-col items-center text-center px-1 min-w-0;
}

.process-step__icon-wrapper {
  @apply relative inline-flex flex-col items-center mb-3;
}

.process-step__icon {
  @apply w-16 h-16 rounded-full bg-cobalt-50 text-cobalt-700 flex items-center justify-center flex-shrink-0;
}

.process-step__number {
  @apply absolute -bottom-2 w-5 h-5 rounded-full bg-bridge text-white text-2xs font-bold flex items-center justify-center z-10 shadow-elevation-1;
}

.process-step__title {
  @apply mt-2 text-sm font-sans font-bold text-ink leading-tight;
}

.process-step__description {
  @apply mt-2 text-xs font-sans leading-snug text-gray-500 max-w-[140px];
}

.process-connector {
  @apply flex items-center justify-center gap-1 mt-7 flex-shrink-0 min-w-[32px];
}

.process-connector__line {
  @apply w-full border-t border-dashed border-cobalt-300;
}

.process-connector__arrow {
  @apply text-cobalt-400 text-xs font-bold -ml-1 -mt-[1px];
}
</style>