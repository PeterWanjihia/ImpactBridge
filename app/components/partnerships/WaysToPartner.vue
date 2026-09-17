<script setup lang="ts">
import {
  Landmark,
  Users,
  Monitor,
  UserRound,
  HeartHandshake,
  ArrowRight,
} from '@lucide/vue'
import type { Component } from 'vue'

interface PartnershipWay {
  title: string
  description: string
  icon: Component
  iconClass: string
}

const ways: PartnershipWay[] = [
  {
    title: 'Fund complete learning hubs',
    description:
      'Sponsor end-to-end hub deployments, including technology, content, training and support.',
    icon: Landmark,
    iconClass: 'bg-navy-800 text-white',
  },
  {
    title: 'Support teacher development',
    description:
      'Invest in Champion Teacher programmes, training materials and ongoing professional support.',
    icon: Users,
    iconClass: 'bg-success-600 text-white',
  },
  {
    title: 'Donate suitable technology',
    description:
      'Provide laptops, projectors or other equipment that meets our suitability criteria.',
    icon: Monitor,
    iconClass: 'bg-cobalt-500 text-white',
  },
  {
    title: 'Contribute expertise & services',
    description:
      'Share professional skills in areas like tech, content, monitoring, logistics or strategy.',
    icon: UserRound,
    iconClass: 'bg-warning-500 text-white',
  },
  {
    title: 'Mobilise your employees',
    description:
      'Inspire employees through volunteering, fundraising or matched giving programmes.',
    icon: HeartHandshake,
    iconClass: 'bg-teal-600 text-white',
  },
]
</script>

<template>
  <section class="ways-section">
    <LayoutContainer>
      <h2 class="ways-section__title">Ways to partner</h2>
      <p class="ways-section__subtitle">
        Choose how your organisation can create lasting change with Impact Bridge.
      </p>

      <div class="ways-section__grid">
        <NuxtLink
          v-for="way in ways"
          :key="way.title"
          to="#begin-the-conversation"
          class="ways-card group"
        >
          <div class="ways-card__icon" :class="way.iconClass">
            <component :is="way.icon" class="w-7 h-7" />
          </div>

          <h3 class="ways-card__title">{{ way.title }}</h3>
          <p class="ways-card__description">{{ way.description }}</p>

          <span class="ways-card__link">
            Learn more
            <ArrowRight
              class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
            />
          </span>
        </NuxtLink>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.ways-section {
  @apply bg-white py-section-md md:py-section;
}

.ways-section__title {
  @apply text-2xl md:text-3xl font-display font-bold text-ink;
}

.ways-section__subtitle {
  @apply mt-2 text-sm font-sans text-gray-500;
}

.ways-section__grid {
  @apply mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5;
}

.ways-card {
  @apply flex flex-col items-center text-center bg-white border border-gray-200 rounded-xl p-6;
  @apply transition-shadow hover:shadow-elevation-1 focus:outline-none focus:ring-2 focus:ring-cobalt-500;
}

.ways-card__icon {
  @apply w-14 h-14 rounded-full flex items-center justify-center;
}

.ways-card__title {
  @apply mt-5 text-base font-sans font-bold text-ink leading-snug;
}

.ways-card__description {
  @apply mt-3 text-label font-sans leading-relaxed text-gray-500;
}

.ways-card__link {
  @apply mt-auto pt-5 inline-flex items-center gap-1.5 text-label font-sans font-semibold text-cobalt-600;
}
</style>
