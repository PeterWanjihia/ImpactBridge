<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'
import type { TransparencyTrustees } from '~/types'

const props = defineProps<{
  trustees: TransparencyTrustees
}>()
</script>

<template>
  <section id="governance" class="trustees">
    <LayoutContainer>
      <div class="trustees__header">
        <div class="trustees__intro">
          <h2 class="trustees__title">{{ trustees.title }}</h2>
          <p class="trustees__description">{{ trustees.description }}</p>
        </div>
        <NuxtLink :to="trustees.ctaTo" class="trustees__cta">
          {{ trustees.ctaText }}
          <ArrowRight class="w-4 h-4" />
        </NuxtLink>
      </div>

      <div class="trustees__grid">
        <article
          v-for="member in trustees.members"
          :key="member.name"
          class="trustee-card"
        >
          <div class="trustee-card__media">
            <img
              :src="member.imageUrl"
              :alt="member.imageAlt"
              class="trustee-card__image"
              loading="lazy"
              width="400"
              height="400"
            />
          </div>

          <div class="trustee-card__content">
            <h3 class="trustee-card__name">{{ member.name }}</h3>
            <p class="trustee-card__role">{{ member.role }}</p>
            <p class="trustee-card__bio">{{ member.bio }}</p>
            <NuxtLink
              :to="trustees.ctaTo"
              class="trustee-card__link"
              :aria-label="`Read ${member.name}'s full profile`"
            >
              Read profile
              <ArrowRight class="w-3.5 h-3.5" />
            </NuxtLink>
          </div>
        </article>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.trustees {
  @apply bg-white py-14 md:py-16 border-b border-slate-100;
}

.trustees__header {
  @apply flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10;
}

.trustees__intro {
  @apply max-w-2xl;
}

.trustees__title {
  @apply text-2xl md:text-3xl font-serif font-bold text-slate-900;
}

.trustees__description {
  @apply mt-3 text-sm font-sans leading-relaxed text-slate-500;
}

.trustees__cta {
  @apply inline-flex items-center gap-2 text-sm font-sans font-bold text-blue-600 hover:text-blue-700 whitespace-nowrap lg:mt-2;
}

/* Grid */
.trustees__grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6;
}

/* Card */
.trustee-card {
  @apply flex flex-col rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm;
}

.trustee-card__media {
  @apply aspect-square overflow-hidden bg-slate-100;
}

.trustee-card__image {
  @apply w-full h-full object-cover;
}

.trustee-card__content {
  @apply flex flex-col flex-1 p-5;
}

.trustee-card__name {
  @apply text-base font-serif font-bold text-slate-900;
}

.trustee-card__role {
  @apply mt-1 text-[13px] font-sans font-bold text-blue-600 leading-snug;
}

.trustee-card__bio {
  @apply mt-2.5 text-[13px] font-sans leading-relaxed text-slate-500 flex-1;
}

.trustee-card__link {
  @apply mt-4 inline-flex items-center gap-1.5 text-[13px] font-sans font-bold text-blue-600 hover:text-blue-700 hover:underline;
}
</style>
