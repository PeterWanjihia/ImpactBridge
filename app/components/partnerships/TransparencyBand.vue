<script setup lang="ts">
import {
  Lock,
  Users,
  Banknote,
  FileText,
  Database,
  ArrowRight,
} from '@lucide/vue'
import type { Component } from 'vue'

interface TransparencyLink {
  title: string
  description: string
  icon: Component
  to: string
}

const links: TransparencyLink[] = [
  {
    title: 'Governance',
    description: 'Meet our board and leadership.',
    icon: Users,
    to: '/transparency',
  },
  {
    title: 'Financials',
    description: 'Annual reports and statements.',
    icon: Banknote,
    to: '/transparency',
  },
  {
    title: 'Policies',
    description: 'Safeguarding, anti-fraud, data protection.',
    icon: FileText,
    to: '/transparency',
  },
  {
    title: 'Impact measurement',
    description: 'Our methodology and evidence principles.',
    icon: Database,
    to: '/impact',
  },
]
</script>

<template>
  <section class="transparency-band">
    <LayoutContainer>
      <div class="transparency-band__grid">
        <!-- Intro -->
        <div class="transparency-band__intro">
          <div class="transparency-band__lock">
            <Lock class="w-5 h-5" />
          </div>
          <div>
            <h2 class="transparency-band__title">Transparency you can trust</h2>
            <p class="transparency-band__description">
              We welcome due diligence and are committed to responsible
              stewardship at every step.
            </p>
            <NuxtLink to="/transparency" class="transparency-band__cta">
              View our transparency page
              <ArrowRight class="w-4 h-4" />
            </NuxtLink>
          </div>
        </div>

        <!-- Links -->
        <div class="transparency-band__links">
          <NuxtLink
            v-for="link in links"
            :key="link.title"
            :to="link.to"
            class="transparency-link group"
          >
            <component :is="link.icon" class="transparency-link__icon" />
            <h3 class="transparency-link__title">{{ link.title }}</h3>
            <p class="transparency-link__description">{{ link.description }}</p>
          </NuxtLink>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.transparency-band {
  @apply bg-navy-800 text-white py-section-sm;
}

.transparency-band__grid {
  @apply flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-12;
}

.transparency-band__intro {
  @apply flex items-start gap-4 max-w-md flex-shrink-0;
}

.transparency-band__lock {
  @apply w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0;
}

.transparency-band__title {
  @apply text-xl font-display font-bold text-white;
}

.transparency-band__description {
  @apply mt-2 text-sm font-sans text-gray-300 leading-relaxed;
}

.transparency-band__cta {
  @apply mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/40;
  @apply text-sm font-sans font-semibold text-white hover:bg-white hover:text-navy-800 transition-colors;
}

.transparency-band__links {
  @apply flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x lg:divide-white/15;
}

.transparency-link {
  @apply flex flex-col lg:px-6 first:lg:pl-0 last:lg:pr-0;
}

.transparency-link__icon {
  @apply w-5 h-5 text-cobalt-300 mb-3;
}

.transparency-link__title {
  @apply text-body font-sans font-bold text-white;
}

.transparency-link__description {
  @apply mt-1.5 text-xs font-sans leading-relaxed text-gray-400;
}
</style>
