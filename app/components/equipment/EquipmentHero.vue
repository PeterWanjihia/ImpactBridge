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
  /** Preload the hero image (it is the largest contentful element on this page) */
  preload?: boolean
}

const props = withDefaults(defineProps<Props>(), { preload: true })

const heroImage =
  'https://images.unsplash.com/photo-1591522810850-0f4716e37a56?w=1920&h=1080&fit=crop&crop=center'

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
    <!-- Split background: navy copy panel + photo -->
    <div class="equipment-hero__bg" aria-hidden="true">
      <img
        :src="heroImage"
        alt=""
        class="equipment-hero__image"
        :loading="preload ? 'eager' : 'lazy'"
        fetchpriority="high"
      />
      <div class="equipment-hero__mask" />
    </div>

    <LayoutContainer class="equipment-hero__container">
      <div class="equipment-hero__grid">
        <!-- Left: copy + CTAs -->
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

        <!-- Right: approval warning card -->
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
    </LayoutContainer>

    <!-- Floating teal icon badge over the image seam -->
    <div class="equipment-hero__badge" aria-hidden="true">
      <Monitor class="w-6 h-6" />
    </div>

    <!-- Trust strip along the bottom -->
    <div class="equipment-hero__trust">
      <LayoutContainer>
        <div class="equipment-hero__trust-grid">
          <div
            v-for="item in trustItems"
            :key="item.title"
            class="equipment-hero__trust-item"
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
      </LayoutContainer>
    </div>
  </section>
</template>

<style scoped>
.equipment-hero {
  @apply relative bg-navy-900;
}

.equipment-hero__bg {
  @apply absolute inset-0;
}

.equipment-hero__image {
  @apply w-full h-full object-cover object-center;
}

.equipment-hero__mask {
  @apply absolute inset-0;
  background: linear-gradient(
    to right,
    rgba(10, 26, 48, 0.98) 0%,
    rgba(12, 30, 55, 0.94) 38%,
    rgba(15, 38, 66, 0.72) 62%,
    rgba(15, 38, 66, 0.3) 100%
  );
}

.equipment-hero__container {
  @apply relative z-10 pt-14 pb-40 md:pt-16 md:pb-44;
}

.equipment-hero__grid {
  @apply flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-12;
}

.equipment-hero__copy {
  @apply max-w-xl;
}

.equipment-hero__eyebrow {
  @apply inline-block text-teal-300 font-sans font-semibold text-xs tracking-[0.14em] uppercase mb-5;
}

.equipment-hero__title {
  @apply text-4xl md:text-[44px] lg:text-5xl font-serif font-bold text-white leading-[1.15];
}

.equipment-hero__subtitle {
  @apply mt-6 text-base md:text-[17px] leading-relaxed text-slate-200 max-w-lg;
}

.equipment-hero__actions {
  @apply mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3;
}

.equipment-hero__cta {
  @apply inline-flex items-center justify-between gap-3 px-5 py-2.5 rounded-lg text-sm font-sans font-medium whitespace-nowrap;
  @apply transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 focus:ring-offset-navy-900;
}

.equipment-hero__cta--primary {
  @apply bg-teal-600 hover:bg-teal-500 text-white;
}

.equipment-hero__cta--secondary {
  @apply bg-white/10 border border-white/25 hover:bg-white/20 text-white;
}

.equipment-hero__aside {
  @apply lg:flex-shrink-0 lg:w-[320px] relative z-20;
}

.equipment-hero__warning {
  @apply flex items-start gap-4 rounded-xl bg-white p-5 shadow-lg;
}

.equipment-hero__warning-icon {
  @apply w-7 h-7 text-navy-700 flex-shrink-0;
}

.equipment-hero__warning-title {
  @apply text-[15px] font-sans font-bold text-slate-900;
}

.equipment-hero__warning-text {
  @apply mt-1 text-[13px] font-sans leading-snug text-slate-500;
}

.equipment-hero__warning-link {
  @apply mt-3 inline-flex items-center gap-1.5 text-[13px] font-sans font-semibold text-cobalt-600 hover:text-cobalt-700;
}

.equipment-hero__badge {
  @apply hidden lg:flex absolute z-20 top-[248px] right-[352px] w-14 h-14 rounded-full bg-teal-600;
  @apply items-center justify-center text-white shadow-lg ring-4 ring-white/20;
}

.equipment-hero__trust {
  @apply relative z-10 pb-10;
}

.equipment-hero__trust-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6;
}

.equipment-hero__trust-item {
  @apply flex items-start gap-3.5;
}

.equipment-hero__trust-icon {
  @apply w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white flex-shrink-0;
}

.equipment-hero__trust-title {
  @apply text-sm font-sans font-bold text-white;
}

.equipment-hero__trust-description {
  @apply mt-1 text-xs font-sans leading-snug text-slate-300 max-w-[220px];
}
</style>
