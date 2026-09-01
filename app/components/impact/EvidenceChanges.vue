<script setup lang="ts">
import { Wrench, Users, BookOpen, Star, ArrowRight } from '@lucide/vue'

interface EvidenceItem {
  icon: 'wrench' | 'users' | 'book'
  observed: string
  changed: string
}

interface Props {
  sectionNumber?: number
  items?: EvidenceItem[]
}

const props = withDefaults(defineProps<Props>(), {
  sectionNumber: 4,
  items: () => [
    {
      icon: 'wrench',
      observed: 'The original hardware needed greater protection and reliability.',
      changed: 'The hub architecture was refined.'
    },
    {
      icon: 'users',
      observed: 'Teachers needed more than an initial demonstration.',
      changed: 'Training expanded into guided practice and continued support.'
    },
    {
      icon: 'book',
      observed: 'Content needed stronger classroom alignment.',
      changed: 'The content-review and curriculum-alignment process was strengthened.'
    }
  ]
})

const iconMap = {
  wrench: Wrench,
  users: Users,
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
            <span class="text-white text-sm font-bold">{{ sectionNumber }}</span>
          </div>
          <span class="evidence-changes-label-text">EVIDENCE THAT CHANGED OUR PROGRAMME</span>
        </div>

        <!-- Evidence Flow -->
        <div class="evidence-changes-flow">
          <!-- Evidence Cards -->
          <div class="evidence-changes-cards">
            <template v-for="(item, index) in items" :key="index">
              <div class="evidence-card">
                <div class="evidence-card-icon">
                  <component :is="iconMap[item.icon]" class="w-6 h-6 text-navy" />
                </div>
                <div class="evidence-card-content">
                  <div class="evidence-card-section">
                    <span class="evidence-card-label evidence-card-label--observed">We observed</span>
                    <p class="evidence-card-text">{{ item.observed }}</p>
                  </div>
                  <div class="evidence-card-section">
                    <span class="evidence-card-label evidence-card-label--changed">We changed</span>
                    <p class="evidence-card-text">{{ item.changed }}</p>
                  </div>
                </div>
              </div>
              <ArrowRight
                v-if="index < items.length - 1"
                class="evidence-changes-arrow hidden lg:block w-6 h-6 text-gray-300 flex-shrink-0"
              />
            </template>
          </div>

          <!-- Callout Box -->
          <div class="evidence-changes-callout">
            <Star class="w-8 h-8 text-cobalt mb-3" />
            <p class="evidence-changes-callout-text">
              We do not collect evidence only to report success.
            </p>
            <p class="evidence-changes-callout-highlight">
              We use it to improve the model.
            </p>
          </div>
        </div>
      </div>
    </LayoutContainer>
  </LayoutSection>
</template>

<style scoped>
.evidence-changes {
  @apply space-y-8;
}

.evidence-changes-label {
  @apply flex items-center gap-3;
}

.evidence-changes-label-icon {
  @apply w-8 h-8 rounded-full bg-cobalt flex items-center justify-center;
}

.evidence-changes-label-text {
  @apply text-sm font-sans font-bold text-navy tracking-widest uppercase;
}

.evidence-changes-flow {
  @apply flex flex-col lg:flex-row lg:items-start gap-6;
}

.evidence-changes-cards {
  @apply flex flex-col lg:flex-row lg:items-stretch gap-4 lg:gap-2 flex-1;
}

.evidence-card {
  @apply flex-1 bg-white rounded-xl p-5 border border-gray-100 shadow-sm;
}

.evidence-card-icon {
  @apply w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-4;
}

.evidence-card-content {
  @apply space-y-4;
}

.evidence-card-section {
  @apply space-y-1;
}

.evidence-card-label {
  @apply text-xs font-sans font-bold uppercase tracking-wide;
}

.evidence-card-label--observed {
  @apply text-gray-500;
}

.evidence-card-label--changed {
  @apply text-cobalt;
}

.evidence-card-text {
  @apply text-sm font-sans text-gray-700 leading-relaxed;
}

.evidence-changes-arrow {
  @apply self-center;
}

.evidence-changes-callout {
  @apply bg-cobalt/5 border border-cobalt/10 rounded-xl p-6 lg:w-64 flex-shrink-0;
}

.evidence-changes-callout-text {
  @apply text-sm font-sans text-gray-700 leading-relaxed mb-2;
}

.evidence-changes-callout-highlight {
  @apply text-sm font-sans font-bold text-cobalt;
}
</style>
