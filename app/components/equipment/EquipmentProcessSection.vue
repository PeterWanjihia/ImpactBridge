<script setup lang="ts">
import {
  ClipboardList,
  Search,
  BadgeCheck,
  Truck,
  ArrowDownToLine,
  ClipboardCheck,
  Settings,
  Landmark,
  ChartLine,
  ArrowRight
} from '@lucide/vue'
import type { Component } from 'vue'

interface ProcessStep {
  title: string
  description: string
  icon: Component
}

interface ProcessPhase {
  number: number
  name: string
  colorClass: string
  borderClass: string
  steps: ProcessStep[]
}

const phases: ProcessPhase[] = [
  {
    number: 1,
    name: 'QUALIFY & APPROVE',
    colorClass: 'text-success-600',
    borderClass: 'border-success-500',
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
    name: 'TRANSFER & RECEIVE',
    colorClass: 'text-cobalt-600',
    borderClass: 'border-cobalt-600',
    steps: [
      {
        title: 'Prepare transfer',
        description: 'Data erased, ownership confirmed, logistics agreed.',
        icon: Truck,
      },
      {
        title: 'Equipment received',
        description: 'Arrives at our inspection and preparation facility.',
        icon: ArrowDownToLine,
      },
    ],
  },
  {
    number: 3,
    name: 'INSPECT & PREPARE',
    colorClass: 'text-cobalt-600',
    borderClass: 'border-cobalt-600',
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
    name: 'DEPLOY & REPORT',
    colorClass: 'text-success-600',
    borderClass: 'border-success-500',
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

// Flatten steps into 9 items with indicator if it's the last step
const allSteps = phases.flatMap((phase) => phase.steps)
</script>

<template>
  <section class="py-section-sm px-6 max-w-container mx-auto bg-white">
    <h2 class="text-3xl font-display font-bold text-ink tracking-tight">
      From offer to classroom
    </h2>
    <p class="mt-2 text-sm text-gray-600">
      A responsible journey from your organisation to a classroom where learners thrive.
    </p>

    <!-- Desktop View: 9-column grid layout -->
    <div class="hidden lg:block mt-12">
      <!-- Top Phase Headers Span Across Step Columns -->
      <div class="grid grid-cols-9 gap-x-4 mb-8">
        <div 
          v-for="phase in phases" 
          :key="phase.number"
          :class="[
            phase.steps.length === 3 ? 'col-span-3' : 'col-span-2',
            'px-2'
          ]"
        >
          <div class="text-center pb-2 border-b-2" :class="[phase.borderClass, phase.colorClass]">
            <span class="text-2xs font-bold uppercase tracking-eyebrow">
              {{ phase.number }}. {{ phase.name }}
            </span>
          </div>
        </div>
      </div>

      <!-- 9 Timeline Steps -->
      <div class="grid grid-cols-9 gap-x-2 items-start text-center">
        <template v-for="(step, index) in allSteps" :key="step.title">
          <div class="flex flex-col items-center">
            <div class="relative flex items-center justify-center w-full">
              <!-- Step Icon Circle -->
              <div class="w-16 h-16 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-elevation-1 text-navy-950">
                <component :is="step.icon" class="w-7 h-7 stroke-[1.5]" />
              </div>

              <!-- Arrow Connector to Next Step -->
              <div 
                v-if="index < allSteps.length - 1" 
                class="absolute left-[calc(50%+2rem)] right-[-50%] flex items-center justify-center text-gray-400"
              >
                <ArrowRight class="w-4 h-4 stroke-[1.5]" />
              </div>
            </div>

            <!-- Title & Description -->
            <h3 class="mt-5 text-sm font-bold text-ink leading-snug">
              {{ step.title }}
            </h3>
            <p class="mt-2 text-xs text-gray-500 leading-relaxed max-w-[130px]">
              {{ step.description }}
            </p>
          </div>
        </template>
      </div>
    </div>

    <!-- Mobile/Tablet Layout -->
    <div class="lg:hidden mt-10 space-y-10">
      <div v-for="phase in phases" :key="phase.number">
        <div class="pb-2 border-b-2 mb-6" :class="[phase.borderClass, phase.colorClass]">
          <span class="text-2xs font-bold uppercase tracking-eyebrow">
            {{ phase.number }}. {{ phase.name }}
          </span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div v-for="step in phase.steps" :key="step.title" class="flex gap-4 items-start">
            <div class="w-12 h-12 rounded-full border border-gray-200 bg-white flex-shrink-0 flex items-center justify-center text-navy-950">
              <component :is="step.icon" class="w-5 h-5 stroke-[1.5]" />
            </div>
            <div>
              <h3 class="text-sm font-bold text-ink">{{ step.title }}</h3>
              <p class="text-xs text-gray-500 mt-1">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
