<script setup lang="ts">
import {
  ArrowRight,
  Download,
  Truck,
  ShieldCheck,
  Lock,
  Wrench,
  ChartColumn,
  Monitor,
} from '@lucide/vue'
import type { Component } from 'vue'

interface Props {
  preload?: boolean
}

withDefaults(defineProps<Props>(), { preload: true })

// Left image (Technician repairing hardware)
const leftImage =
  'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=900&fit=crop&crop=center'

// Right image (Teacher and students using laptops in classroom)
const rightImage =
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=900&fit=crop&crop=center'

const trustItems: { icon: Component; title: string; description: string }[] = [
  {
    icon: ShieldCheck,
    title: 'Careful assessment',
    description: 'We accept only what is safe, useful and supportable.',
  },
  {
    icon: Lock,
    title: 'Data security first',
    description: 'All devices must be securely erased before transfer.',
  },
  {
    icon: Wrench,
    title: 'Prepared for learning',
    description: 'Every device is configured, tested and tracked.',
  },
  {
    icon: ChartColumn,
    title: 'Impact you can see',
    description: 'Receive updates on where your donation makes a difference.',
  },
]
</script>

<template>
  <section class="equipment-hero">
    <!-- Two-image split background layer -->
    <div class="equipment-hero__bg-wrapper" aria-hidden="true">
      <!-- Left Background Image -->
      <div class="equipment-hero__left-bg">
        <img
          :src="leftImage"
          alt=""
          class="equipment-hero__image"
          :loading="preload ? 'eager' : 'lazy'"
        />
        <div class="equipment-hero__left-overlay" />
      </div>

      <!-- Right Curved Background Image (Clipping Path) -->
      <div class="equipment-hero__right-bg">
        <img
          :src="rightImage"
          alt=""
          class="equipment-hero__image"
          :loading="preload ? 'eager' : 'lazy'"
        />
      </div>

      <!-- Curved White Divider Border -->
      <svg
        class="equipment-hero__divider-stroke"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M 68,0 Q 62,50 100,100"
          fill="none"
          stroke="white"
          stroke-width="0.8"
        />
      </svg>
    </div>

    <LayoutContainer class="equipment-hero__container">
      <div class="equipment-hero__grid">
        <!-- Left Column: Copy + Buttons -->
        <div class="equipment-hero__copy">
          <span class="equipment-hero__eyebrow">Donate Equipment</span>

          <h1 class="equipment-hero__title">
            Turn suitable technology into supported learning.
          </h1>

          <p class="equipment-hero__subtitle">
            We assess, prepare and deploy suitable computers, displays and
            supporting equipment as part of complete teacher-led learning hubs.
          </p>

          <div class="equipment-hero__actions">
            <NuxtLink
              to="#offer-equipment"
              class="equipment-hero__cta equipment-hero__cta--primary"
            >
              Offer equipment
              <ArrowRight class="w-4 h-4" />
            </NuxtLink>
            <NuxtLink
              to="#requirements"
              class="equipment-hero__cta equipment-hero__cta--secondary"
            >
              View requirements
              <Download class="w-4 h-4" />
            </NuxtLink>
          </div>
        </div>

        <!-- Right Column: Shipping Warning Floating Card -->
        <div class="equipment-hero__aside">
          <div class="equipment-hero__warning">
            <Truck class="equipment-hero__warning-icon" />
            <div>
              <h2 class="equipment-hero__warning-title">
                Do not ship before approval
              </h2>
              <p class="equipment-hero__warning-text">
                Please get written approval before sending any equipment.
              </p>
              <NuxtLink to="#requirements" class="equipment-hero__warning-link">
                Why this matters
                <ArrowRight class="w-3.5 h-3.5" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Center Floating Icon Badge on Seam -->
      <div class="equipment-hero__center-badge" aria-hidden="true">
        <Monitor class="w-6 h-6 text-white" />
      </div>

      <!-- Bottom Floating Trust Bar -->
      <div class="equipment-hero__trust-card">
        <div class="equipment-hero__trust-grid">
          <div
            v-for="(item, index) in trustItems"
            :key="item.title"
            class="equipment-hero__trust-item"
            :class="{ 'lg:border-r lg:border-white/10': index < trustItems.length - 1 }"
          >
            <span class="equipment-hero__trust-icon">
              <component :is="item.icon" class="w-5 h-5" />
            </span>
            <div>
              <h3 class="equipment-hero__trust-title">{{ item.title }}</h3>
              <p class="equipment-hero__trust-description">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.equipment-hero {
  @apply relative bg-[#071324] overflow-hidden;
}

.equipment-hero__bg-wrapper {
  @apply absolute inset-0 z-0 pointer-events-none;
}

/* Left Image Panel & Dark Gradient Overlay */
.equipment-hero__left-bg {
  @apply absolute inset-0 w-full h-full;
}

.equipment-hero__left-overlay {
  @apply absolute inset-0;
  background: linear-gradient(
    to right,
    rgba(7, 19, 36, 0.98) 0%,
    rgba(8, 22, 42, 0.92) 35%,
    rgba(10, 26, 50, 0.65) 55%,
    rgba(10, 26, 50, 0.1) 100%
  );
}

/* Right Curved Image Panel using CSS clip-path */
.equipment-hero__right-bg {
  @apply hidden lg:block absolute top-0 right-0 w-[42%] h-full;
  clip-path: path('M 60 0 Q 0 250 160 500 L 600 500 L 600 0 Z');
}

.equipment-hero__image {
  @apply w-full h-full object-cover object-center;
}

/* Curved White Border Line between images */
.equipment-hero__divider-stroke {
  @apply hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-10;
}

.equipment-hero__container {
  @apply relative z-10 pt-12 pb-8 lg:pt-16;
}

.equipment-hero__grid {
  @apply flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-12 mb-10 lg:mb-14;
}

.equipment-hero__copy {
  @apply max-w-xl;
}

.equipment-hero__eyebrow {
  @apply inline-block text-[#00a896] font-sans font-semibold text-xs tracking-[0.14em] uppercase mb-4;
}

.equipment-hero__title {
  @apply text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-[1.15];
}

.equipment-hero__subtitle {
  @apply mt-5 text-sm md:text-base leading-relaxed text-slate-300 max-w-lg;
}

.equipment-hero__actions {
  @apply mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3;
}

.equipment-hero__cta {
  @apply inline-flex items-center justify-between gap-3 px-5 py-2.5 rounded-lg text-xs md:text-sm font-sans font-medium whitespace-nowrap;
  @apply transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 focus:ring-offset-navy-900;
}

.equipment-hero__cta--primary {
  @apply bg-[#00a896] hover:bg-[#009182] text-white;
}

.equipment-hero__cta--secondary {
  @apply bg-white/10 border border-white/20 hover:bg-white/20 text-white;
}

.equipment-hero__aside {
  @apply lg:flex-shrink-0 lg:w-[320px] relative z-20;
}

.equipment-hero__warning {
  @apply flex items-start gap-3.5 rounded-xl bg-white p-4 md:p-5 shadow-2xl;
}

.equipment-hero__warning-icon {
  @apply w-6 h-6 text-[#0d213a] flex-shrink-0 mt-0.5;
}

.equipment-hero__warning-title {
  @apply text-sm font-sans font-bold text-slate-900;
}

.equipment-hero__warning-text {
  @apply mt-1 text-xs font-sans leading-snug text-slate-600;
}

.equipment-hero__warning-link {
  @apply mt-2.5 inline-flex items-center gap-1 text-xs font-sans font-bold text-blue-600 hover:text-blue-700;
}

/* Center Badge over the curve seam */
.equipment-hero__center-badge {
  @apply hidden lg:flex absolute top-[38%] right-[38%] w-13 h-13 rounded-full bg-[#00a896];
  @apply items-center justify-center shadow-xl ring-4 ring-white/30 z-20;
}

/* Bottom Trust Bar Card */
.equipment-hero__trust-card {
  @apply rounded-xl border border-white/15 bg-[#061121]/90 backdrop-blur-md p-4 lg:p-5 shadow-2xl;
}

.equipment-hero__trust-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0;
}

.equipment-hero__trust-item {
  @apply flex items-start gap-3 lg:px-4;
}

.equipment-hero__trust-icon {
  @apply w-9 h-9 rounded-lg border border-white/20 flex items-center justify-center text-white flex-shrink-0 bg-white/5;
}

.equipment-hero__trust-title {
  @apply text-xs md:text-sm font-sans font-bold text-white;
}

.equipment-hero__trust-description {
  @apply mt-0.5 text-[11px] font-sans leading-tight text-slate-300 max-w-[210px];
}
</style>