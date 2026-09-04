<script setup lang="ts">
import { ArrowRight, WifiOff, BookOpen, GraduationCap, Users, Smile } from '@lucide/vue'
import type { Component } from 'vue'

const steps = [
  {
    number: '01',
    title: 'Offline Hub ($68)',
    description: 'Low-power microcomputer with thousands of curriculum resources.',
    icon: WifiOff,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    alt: 'Impact Bridge offline learning hub device'
  },
  {
    number: '02',
    title: 'Curated Content',
    description: 'High-quality, curriculum-aligned resources available without the internet.',
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
    alt: 'Digital learning content interface'
  },
  {
    number: '03',
    title: 'Trained Teacher',
    description: 'Champion Teachers are trained, mentored and supported.',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop',
    alt: 'Teacher using laptop in classroom'
  },
  {
    number: '04',
    title: 'Interactive Classroom',
    description: 'Technology becomes a tool for active, collaborative learning.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop',
    alt: 'Students using tablets in classroom'
  },
  {
    number: '05',
    title: 'Confident Learners',
    description: 'Understanding deepens. Confidence grows. A brighter future opens.',
    icon: Smile,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop',
    alt: 'Student smiling in classroom'
  }
]
</script>

<template>
  <section class="solution-section">
    <LayoutContainer>
      <div class="solution-header">
        <div class="solution-eyebrow">
          <span class="solution-eyebrow-number">03</span>
          <span class="solution-eyebrow-label">A SOLUTION BUILT AROUND TEACHERS</span>
        </div>
        <h2 class="solution-title">
          Not a computer delivered to a school.<br />
          <span class="text-cobalt">A learning system built around a teacher.</span>
        </h2>
      </div>

      <div class="solution-steps">
        <div v-for="(step, index) in steps" :key="index" class="solution-step">
          <div class="solution-step-connector" v-if="index < steps.length - 1">
            <div class="solution-step-line" />
            <div class="solution-step-arrow">→</div>
          </div>
          
          <div class="solution-step-content">
            <div class="solution-step-meta">
              <div class="solution-step-icon">
                <component :is="step.icon" class="w-4 h-4" />
              </div>
              <span class="solution-step-number">{{ step.number }}</span>
            </div>
            <h3 class="solution-step-title">{{ step.title }}</h3>
            <p class="solution-step-desc">{{ step.description }}</p>
          </div>
          
          <div class="solution-step-media">
            <img
              :src="step.image"
              :alt="step.alt"
              class="solution-step-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div class="solution-footer">
        <UiButton variant="ghost" class="text-cobalt hover:bg-cobalt/5 group">
          Explore how our model works
          <ArrowRight class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </UiButton>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.solution-section {
  @apply py-16 md:py-24 bg-white;
}
.solution-header {
  @apply max-w-3xl mb-16;
}
.solution-eyebrow {
  @apply flex items-center gap-2 mb-4;
}
.solution-eyebrow-number {
  @apply w-6 h-6 rounded-full border border-cobalt/30 text-cobalt text-xs font-semibold flex items-center justify-center;
}
.solution-eyebrow-label {
  @apply text-xs font-bold tracking-wider text-cobalt uppercase;
}
.solution-title {
  @apply text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy leading-tight;
}

.solution-steps {
  @apply flex flex-col md:flex-row gap-8 lg:gap-4 overflow-x-auto pb-8 snap-x;
}
.solution-step {
  @apply flex-1 min-w-[280px] relative flex flex-col snap-start;
}
.solution-step-content {
  @apply flex flex-col flex-grow mb-6;
}
.solution-step-meta {
  @apply flex items-center gap-3 mb-3;
}
.solution-step-icon {
  @apply w-8 h-8 rounded-full bg-blue-50/80 text-cobalt flex items-center justify-center shrink-0;
}
.solution-step-number {
  @apply text-cobalt font-bold font-sans;
}
.solution-step-title {
  @apply text-xl font-bold text-navy mb-2;
}
.solution-step-desc {
  @apply text-sm text-slate-600 leading-relaxed;
}

.solution-step-media {
  @apply rounded-xl overflow-hidden shadow-sm aspect-[4/3] bg-slate-200;
}
.solution-step-image {
  @apply w-full h-full object-cover hover:scale-105 transition-transform duration-500;
}

/* Connector */
.solution-step-connector {
  @apply hidden md:flex absolute top-6 -right-4 w-8 items-center justify-center text-slate-300 z-10;
}
.solution-step-line {
  @apply w-full h-[1px] bg-slate-300;
}
.solution-step-arrow {
  @apply absolute bg-white px-1 text-slate-400;
}

.solution-footer {
  @apply mt-12 pt-8 border-t border-slate-200/80;
}
</style>
