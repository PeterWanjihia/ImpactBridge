<script setup lang="ts">
import { CheckCircle, Target, ArrowRight } from '@lucide/vue'

interface ProgressItem {
  text: string
}

interface Props {
  sectionNumber?: number
  completedItems?: ProgressItem[]
  nextTargetItems?: ProgressItem[]
}

const props = withDefaults(defineProps<Props>(), {
  sectionNumber: 6,
  completedItems: () => [
    { text: '1 pilot hub' },
    { text: '2 Champion Teachers' },
    { text: '50+ learners reached' },
    { text: 'Early data collected' }
  ],
  nextTargetItems: () => [
    { text: '10 additional hubs' },
    { text: 'Expanded teacher development' },
    { text: 'Full impact evaluation' },
    { text: 'Stronger evidence of learning' }
  ]
})
</script>

<template>
  <LayoutSection background="white">
    <LayoutContainer>
      <div class="progress-chapter">
        <!-- Section Label -->
        <div class="progress-chapter-label">
          <div class="progress-chapter-label-icon">
            <span class="text-white text-sm font-bold">{{ sectionNumber }}</span>
          </div>
          <span class="progress-chapter-label-text">PROGRESS TOWARD THE NEXT CHAPTER</span>
        </div>

        <!-- Progress Layout -->
        <div class="progress-chapter-content">
          <!-- Completed Column -->
          <div class="progress-column progress-column--completed">
            <div class="progress-column-header">
              <CheckCircle class="w-6 h-6 text-green-600" />
              <span class="progress-column-title progress-column-title--completed">Completed</span>
            </div>
            <ul class="progress-column-list">
              <li
                v-for="(item, index) in completedItems"
                :key="index"
                class="progress-column-item"
              >
                {{ item.text }}
              </li>
            </ul>
          </div>

          <!-- Arrow -->
          <div class="progress-arrow">
            <ArrowRight class="w-8 h-8 text-gray-400" />
          </div>

          <!-- Next Target Column -->
          <div class="progress-column progress-column--target">
            <div class="progress-column-header">
              <Target class="w-6 h-6 text-cobalt" />
              <span class="progress-column-title progress-column-title--target">Next target</span>
            </div>
            <ul class="progress-column-list">
              <li
                v-for="(item, index) in nextTargetItems"
                :key="index"
                class="progress-column-item"
              >
                {{ item.text }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Footer Note -->
        <div class="progress-chapter-footer">
          <p class="progress-chapter-footer-text">
            <strong>Targets are our north star.</strong>
            We will measure and share our progress.
          </p>
        </div>
      </div>
    </LayoutContainer>
  </LayoutSection>
</template>

<style scoped>
.progress-chapter {
  @apply space-y-8;
}

.progress-chapter-label {
  @apply flex items-center gap-3;
}

.progress-chapter-label-icon {
  @apply w-8 h-8 rounded-full bg-cobalt flex items-center justify-center;
}

.progress-chapter-label-text {
  @apply text-sm font-sans font-bold text-navy tracking-widest uppercase;
}

.progress-chapter-content {
  @apply flex flex-col md:flex-row items-stretch gap-6;
}

.progress-column {
  @apply flex-1 bg-white rounded-xl p-6 border border-gray-200 shadow-sm;
}

.progress-column--target {
  @apply border-dashed border-cobalt/30;
}

.progress-column-header {
  @apply flex items-center gap-3 mb-5;
}

.progress-column-title {
  @apply text-lg font-sans font-bold;
}

.progress-column-title--completed {
  @apply text-green-600;
}

.progress-column-title--target {
  @apply text-cobalt;
}

.progress-column-list {
  @apply space-y-3;
}

.progress-column-item {
  @apply text-sm font-sans text-gray-700 pl-1;
}

.progress-column-item::before {
  content: '';
  @apply inline-block w-1.5 h-1.5 rounded-full bg-gray-300 mr-3 align-middle;
}

.progress-column--completed .progress-column-item::before {
  @apply bg-green-500;
}

.progress-column--target .progress-column-item::before {
  @apply bg-cobalt/40;
}

.progress-arrow {
  @apply flex items-center justify-center md:mt-16;
}

.progress-chapter-footer {
  @apply pt-4 border-t border-gray-200;
}

.progress-chapter-footer-text {
  @apply text-sm font-sans text-gray-600 leading-relaxed;
}
</style>
