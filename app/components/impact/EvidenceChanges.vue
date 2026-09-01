<script setup lang="ts">
import { Wrench, User, BookOpen, Star, ArrowRight } from '@lucide/vue'
import type { ImpactEvidenceItem } from '~/types'

interface Props {
  sectionNumber?: number
  items?: ImpactEvidenceItem[]
}

const props = withDefaults(defineProps<Props>(), {
  sectionNumber: 4,
  items: () => [
    {
      icon: 'wrench',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      observed: 'The original hardware needed greater protection and reliability.',
      changed: 'The hub architecture was refined.'
    },
    {
      icon: 'user',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-500',
      observed: 'Teachers needed more than an initial demonstration.',
      changed: 'Training expanded into guided practice and continued support.'
    },
    {
      icon: 'book',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      observed: 'Content needed stronger classroom alignment.',
      changed: 'The content-review and curriculum-alignment process was strengthened.'
    }
  ]
})

const iconMap = {
  wrench: Wrench,
  user: User,
  book: BookOpen
}
</script>

<template>
  <LayoutSection background="white">
    <LayoutContainer>
      <div class="evidence-changes">
        <!-- Section Label -->
        <div class="evidence-changes-label">
          <div class="evidence-changes-label-icon">
            <span class="text-white text-xs font-bold">{{ sectionNumber }}</span>
          </div>
          <span class="evidence-changes-label-text">EVIDENCE THAT CHANGED OUR PROGRAMME</span>
        </div>

        <!-- Evidence Flow -->
        <div class="evidence-changes-flow">
          <template v-for="(item, index) in items" :key="index">
            <div class="evidence-card">
              <div :class="['evidence-card-icon', item.iconBg]">
                <component :is="iconMap[item.icon]" :class="['w-5 h-5', item.iconColor]" />
              </div>
              <div class="evidence-card-content">
                <div class="evidence-card-section">
                  <span class="evidence-card-label">We observed</span>
                  <p class="evidence-card-text">{{ item.observed }}</p>
                </div>
                <div class="evidence-card-section">
                  <span class="evidence-card-label">We changed</span>
                  <p class="evidence-card-text">{{ item.changed }}</p>
                </div>
              </div>
            </div>

            <!-- Arrow Divider between cards -->
            <ArrowRight
              v-if="index < items.length - 1"
              class="evidence-changes-arrow hidden lg:block w-5 h-5 text-blue-900 flex-shrink-0"
            />
          </template>

          <!-- Callout Box -->
          <div class="evidence-changes-callout">
            <Star class="w-8 h-8 text-blue-600 flex-shrink-0" />
            <div class="evidence-changes-callout-content">
              <p class="evidence-changes-callout-text">
                We do not collect evidence only to report success.
              </p>
              <p class="evidence-changes-callout-highlight">
                We use it to improve the model.
              </p>
            </div>
          </div>
        </div>
      </div>
    </LayoutContainer>
  </LayoutSection>
</template>

<style scoped>
.evidence-changes {
  @apply space-y-6;
}

.evidence-changes-label {
  @apply flex items-center gap-3;
}

.evidence-changes-label-icon {
  @apply w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center flex-shrink-0;
}

.evidence-changes-label-text {
  @apply text-sm font-sans font-extrabold text-blue-700 tracking-wider uppercase;
}

.evidence-changes-flow {
  @apply flex flex-col lg:flex-row lg:items-stretch gap-4;
}

.evidence-card {
  @apply flex-1 bg-white rounded-xl p-5 border border-gray-200 flex items-start gap-4 shadow-sm;
}

.evidence-card-icon {
  @apply w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5;
}

.evidence-card-content {
  @apply space-y-3 flex-1;
}

.evidence-card-section {
  @apply space-y-0.5;
}

.evidence-card-label {
  @apply text-xs font-sans font-extrabold text-blue-900 block;
}

.evidence-card-text {
  @apply text-xs font-sans text-gray-600 leading-relaxed;
}

.evidence-changes-arrow {
  @apply self-center mx-1;
}

.evidence-changes-callout {
  @apply flex-1 bg-blue-50/50 rounded-xl p-5 flex items-center gap-4;
}

.evidence-changes-callout-content {
  @apply space-y-1;
}

.evidence-changes-callout-text {
  @apply text-xs font-sans font-bold text-blue-900 leading-snug;
}

.evidence-changes-callout-highlight {
  @apply text-xs font-sans font-bold text-blue-900 leading-snug;
}
</style>