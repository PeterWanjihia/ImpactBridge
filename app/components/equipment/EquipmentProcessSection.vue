<script setup lang="ts">
import {
  ClipboardList,
  Search,
  BadgeCheck,
  FileText,
  Truck,
  ArrowDownToLine,
  ClipboardCheck,
  Settings,
  Landmark,
  ChartLine,
} from '@lucide/vue'
import type { Component } from 'vue'

/**
 * The four public phases of the equipment offer lifecycle, mirroring the
 * equipment state machine in the architecture spec (SUBMITTED → … → DEPLOYED)
 * without exposing internal states like NEEDS_INFORMATION or REJECTED.
 *
 * TODO(backend): Phase copy and step counts are CMS content; the state machine
 * itself lives in the Go equipment module.
 */
interface ProcessStep {
  title: string
  description: string
  icon: Component
}

interface ProcessPhase {
  number: number
  name: string
  colorClass: string
  steps: ProcessStep[]
}

const phases: ProcessPhase[] = [
  {
    number: 1,
    name: 'Qualify & approve',
    colorClass: 'text-teal-600',
    steps: [
      {
        title: 'Offer submitted',
        description: 'You share inventory and specifications.',
        icon: ClipboardList,
      },
      {
        title: 'Reviewed',
        description: 'We compare to current needs.',
        icon: Search,
      },
      {
        title: 'Provisional decision',
        description: 'We approve or request more information.',
        icon: BadgeCheck,
      },
    ],
  },
  {
    number: 2,
    name: 'Transfer & receive',
    colorClass: 'text-cobalt-600',
    steps: [
      {
        title: 'Prepare transfer',
        description: 'Dates eased, ownership confirmed, logistics agreed.',
        icon: FileText,
      },
      {
        title: 'Equipment received',
        description: "Arrives at our inspection and preparation facility.",
        icon: Truck,
      },
    ],
  },
  {
    number: 3,
    name: 'Inspect & prepare',
    colorClass: 'text-violet-600',
    steps: [
      {
        title: 'Inspect & assess',
        description: 'Each item inspected and tested.',
        icon: ClipboardCheck,
      },
      {
        title: 'Prepare & configure',
        description: 'Repaired if needed, configured and inventoried.',
        icon: Settings,
      },
    ],
  },
  {
    number: 4,
    name: 'Deploy & report',
    colorClass: 'text-teal-600',
    steps: [
      {
        title: 'Deploy to school',
        description: 'Assigned to a school and installed with teacher support.',
        icon: Landmark,
      },
      {
        title: 'Impact & reporting',
        description: 'You receive updates on impact and stewardship.',
        icon: ChartLine,
      },
    ],
  },
]

// Flatten steps for a single 9-node timeline with connectors between them.
const timelineSteps = phases.flatMap((phase) =>
  phase.steps.map((step) => ({ ...step, phase })),
)
</script>

<template>
  <section class="process-section">
    <LayoutContainer>
      <h2 class="process-section__title">From offer to classroom</h2>
      <p class="process-section__subtitle">
        A responsible journey from your organisation to a classroom where
        learners thrive.
      </p>

      <!-- Phase headings with underlines -->
      <div class="process-section__phases hidden lg:grid">
        <template v-for="(phase, index) in phases" :key="phase.number">
          <div class="process-phase">
            <span class="process-phase__name" :class="phase.colorClass">
              {{ phase.number }}. {{ phase.name }}
            </span>
            <span
              class="process-phase__line"
              :class="phase.colorClass"
              aria-hidden="true"
            />
          </div>
          <span v-if="index < phases.length - 1" class="process-phase__gap" />
        </template>
      </div>

      <!-- Desktop: connected 9-step timeline -->
      <div class="process-section__timeline hidden lg:flex">
        <template v-for="(step, index) in timelineSteps" :key="step.title">
          <div class="process-step">
            <span class="process-step__icon">
              <component :is="step.icon" class="w-6 h-6" />
            </span>
            <h3 class="process-step__title">{{ step.title }}</h3>
            <p class="process-step__description">{{ step.description }}</p>
          </div>
          <span v-if="index < timelineSteps.length - 1" class="process-step__connector" aria-hidden="true" />
        </template>
      </div>

      <!-- Mobile / tablet: phases as cards -->
      <div class="mt-10 flex flex-col gap-10 lg:hidden">
        <div v-for="phase in phases" :key="phase.number">
          <span class="process-phase__name" :class="phase.colorClass">
            {{ phase.number }}. {{ phase.name }}
          </span>
          <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div v-for="step in phase.steps" :key="step.title" class="flex gap-4">
              <span class="process-step__icon flex-shrink-0">
                <component :is="step.icon" class="w-6 h-6" />
              </span>
              <div>
                <h3 class="process-step__title">{{ step.title }}</h3>
                <p class="process-step__description mt-1">{{ step.description }}</p>
              </div>
            </div>
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
  @apply text-2xl md:text-3xl font-serif font-bold text-slate-900;
}

.process-section__subtitle {
  @apply mt-2 text-sm font-sans text-slate-500;
}

.process-section__phases {
  @apply mt-10 grid-cols-4 items-end gap-0;
}

.process-phase {
  @apply flex flex-col items-center;
}

.process-phase__name {
  @apply text-[13px] font-sans font-bold tracking-wide uppercase whitespace-nowrap;
}

.process-phase__line {
  @apply mt-2 h-0.5 w-full max-w-[220px] bg-current opacity-60 rounded-full;
}

.process-phase__gap {
  @apply w-0;
}

.process-section__timeline {
  @apply mt-6 items-start;
}

.process-step {
  @apply flex-1 min-w-0 flex flex-col items-center text-center;
}

.process-step__icon {
  @apply w-14 h-14 rounded-full bg-white border border-slate-200 text-navy-600 flex items-center justify-center shadow-sm flex-shrink-0;
}

.process-step__title {
  @apply mt-3 text-[13px] font-sans font-bold text-slate-900 leading-snug;
}

.process-step__description {
  @apply mt-1.5 text-[11px] font-sans leading-snug text-slate-500;
}

.process-step__connector {
  @apply flex-1 min-w-[16px] max-w-[44px] border-t-2 border-dotted border-slate-300 relative top-7 flex-shrink;
}

.process-phase__line + .process-phase__line {
  @apply mt-0;
}
</style>
