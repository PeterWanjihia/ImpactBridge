<script setup lang="ts">
import {
  Laptop,
  Cpu,
  Projector,
  Monitor,
  Router,
  Smartphone,
  ArrowRight,
} from '@lucide/vue'
import type { Component } from 'vue'

/**
 * Equipment need categories (design-mirrored).
 *
 * TODO(backend): Replace static defaults with a single server fetch of
 * GET /v1/equipment-requirements (Go API) when the backend is live, via
 * useAsyncData in the page. Status/summary copy is content data (CMS).
 */
interface EquipmentNeed {
  key: string
  title: string
  description: string
  icon: Component
  status: 'active' | 'conditional' | 'not-needed'
}

const needs: EquipmentNeed[] = [
  {
    key: 'laptops',
    title: 'Business-class laptops',
    description: 'For teachers and student access to offline resources.',
    icon: Laptop,
    status: 'active',
  },
  {
    key: 'mini-pcs',
    title: 'Mini PCs',
    description: 'For offline content delivery and hub management.',
    icon: Cpu,
    status: 'active',
  },
  {
    key: 'projectors',
    title: 'Portable projectors',
    description: 'For whole-class instruction and presentations.',
    icon: Projector,
    status: 'active',
  },
  {
    key: 'monitors',
    title: 'Monitors & displays',
    description: 'For small-group or teacher use where suitable.',
    icon: Monitor,
    status: 'conditional',
  },
  {
    key: 'networking',
    title: 'Networking equipment',
    description: 'For local offline access and content sharing.',
    icon: Router,
    status: 'conditional',
  },
  {
    key: 'smartphones',
    title: 'Smartphones',
    description: 'Not part of current hub design and support plan.',
    icon: Smartphone,
    status: 'not-needed',
  },
]

const statusMeta: Record<
  EquipmentNeed['status'],
  { label: string; badgeClass: string }
> = {
  active: {
    label: 'Actively needed',
    badgeClass: 'bg-success-50 text-success-700 ring-success-600/20',
  },
  conditional: {
    label: 'Conditionally considered',
    badgeClass: 'bg-warning-50 text-warning-700 ring-warning-600/20',
  },
  'not-needed': {
    label: 'Not currently required',
    badgeClass: 'bg-danger-50 text-danger-700 ring-danger-600/20',
  },
}
</script>

<template>
  <section id="requirements" class="needs-section">
    <LayoutContainer>
      <div class="needs-section__header">
        <div>
          <h2 class="needs-section__title">What we currently need</h2>
          <p class="needs-section__subtitle">
            Our needs change as schools are assessed and hubs are planned.
          </p>
        </div>
        <a href="#requirements-detail" class="needs-section__link">
          See full guidelines
          <ArrowRight class="w-4 h-4" />
        </a>
      </div>

      <div class="needs-section__grid">
        <div v-for="need in needs" :key="need.key" class="need-card group">
          <div class="need-card__icon">
            <component :is="need.icon" class="w-7 h-7" />
          </div>

          <h3 class="need-card__title">{{ need.title }}</h3>

          <span class="need-card__badge" :class="statusMeta[need.status].badgeClass">
            {{ statusMeta[need.status].label }}
          </span>

          <p class="need-card__description">{{ need.description }}</p>

          <a href="#offer-equipment" class="need-card__link">
            View details
            <ArrowRight
              class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.needs-section {
  @apply bg-white py-section-md md:py-section;
}

.needs-section__header {
  @apply flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4;
}

.needs-section__title {
  @apply text-2xl md:text-3xl font-display font-bold text-ink;
}

.needs-section__subtitle {
  @apply mt-2 text-sm font-sans text-gray-500;
}

.needs-section__link {
  @apply inline-flex items-center gap-2 text-sm font-sans font-semibold text-cobalt-600 hover:text-cobalt-700 flex-shrink-0;
}

.needs-section__grid {
  @apply mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5;
}

.need-card {
  @apply flex flex-col bg-white border border-gray-200 rounded-xl p-6;
  @apply transition-shadow hover:shadow-elevation-1;
}

.need-card__icon {
  @apply w-12 h-12 rounded-lg border border-gray-200 flex items-center justify-center text-navy-700;
}

.need-card__title {
  @apply mt-5 text-body font-sans font-bold text-ink leading-snug;
}

.need-card__badge {
  @apply mt-3 inline-flex w-fit items-center rounded-full px-2.5 py-1 text-2xs font-sans font-semibold ring-1 ring-inset;
}

.need-card__description {
  @apply mt-3 text-label font-sans leading-relaxed text-gray-500;
}

.need-card__link {
  @apply mt-auto pt-5 inline-flex items-center gap-1.5 text-label font-sans font-semibold text-cobalt-600;
}
</style>
