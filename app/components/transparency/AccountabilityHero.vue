<script setup lang="ts">
import { Scale, Eye, ShieldCheck, Heart, ArrowRight } from '@lucide/vue'
import type { Component } from 'vue'
import type { TransparencyHero } from '~/types'

const props = defineProps<{
  hero: TransparencyHero
}>()

const iconMap: Record<string, Component> = {
  shield: ShieldCheck,
  scale: Scale,
  eye: Eye,
  heart: Heart,
}
</script>

<template>
  <section class="account-hero">
    <!-- Background image + navy gradient -->
    <div class="account-hero__bg">
      <img
        :src="hero.imageUrl"
        :alt="hero.imageAlt"
        class="account-hero__image"
      />
      <div class="account-hero__overlay" />
    </div>

    <LayoutContainer class="account-hero__container">
      <div class="account-hero__grid">
        <!-- Left: copy + CTA -->
        <div class="account-hero__copy">
          <span class="account-hero__tag">{{ hero.tag }}</span>

          <h1 class="account-hero__title">{{ hero.title }}</h1>

          <p class="account-hero__description">{{ hero.description }}</p>

          <div class="account-hero__cta-row">
            <span class="account-hero__cta-label">{{ hero.ctaText }}</span>
            <NuxtLink :to="hero.ctaTo" class="account-hero__cta">
              Contact our team
              <ArrowRight class="w-4 h-4" />
            </NuxtLink>
          </div>
        </div>

        <!-- Right: accountability commitment card -->
        <aside class="account-hero__panel">
          <h2 class="account-hero__panel-title">Our accountability commitment</h2>

          <ul class="account-hero__commitments">
            <li
              v-for="commitment in hero.commitments"
              :key="commitment.title"
              class="account-commitment"
            >
              <span class="account-commitment__icon">
                <component :is="iconMap[commitment.icon] ?? ShieldCheck" class="w-4 h-4" />
              </span>
              <div>
                <h3 class="account-commitment__title">{{ commitment.title }}</h3>
                <p class="account-commitment__description">{{ commitment.description }}</p>
              </div>
            </li>
          </ul>
        </aside>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.account-hero {
  @apply relative overflow-hidden bg-navy-900;
}

.account-hero__bg {
  @apply absolute inset-0 pointer-events-none;
}

.account-hero__image {
  @apply w-full h-full object-cover object-center;
}

.account-hero__overlay {
  @apply absolute inset-0;
  background: linear-gradient(
    to right,
    rgba(7, 19, 36, 0.97) 0%,
    rgba(7, 19, 36, 0.93) 42%,
    rgba(7, 19, 36, 0.72) 68%,
    rgba(7, 19, 36, 0.35) 100%
  );
}

.account-hero__container {
  @apply relative z-10 py-14 md:py-20;
}

.account-hero__grid {
  @apply flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14;
}

.account-hero__copy {
  @apply max-w-xl;
}

.account-hero__tag {
  @apply inline-block text-[#00a896] font-sans font-semibold text-xs tracking-[0.14em] uppercase mb-4;
}

.account-hero__title {
  @apply text-4xl md:text-5xl font-serif font-bold text-white leading-[1.12];
}

.account-hero__description {
  @apply mt-5 text-sm md:text-base leading-relaxed text-slate-300 max-w-lg;
}

.account-hero__cta-row {
  @apply mt-7 inline-flex items-center bg-white rounded-lg p-1.5 pl-4 shadow-xl w-fit;
}

.account-hero__cta-label {
  @apply text-sm font-sans font-bold text-slate-900 mr-4 whitespace-nowrap;
}

.account-hero__cta {
  @apply inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-sm font-sans font-bold text-slate-900 hover:bg-slate-100 transition-colors;
}

/* Commitment panel */
.account-hero__panel {
  @apply w-full lg:w-[320px] flex-shrink-0 bg-white rounded-xl p-6 shadow-2xl;
}

.account-hero__panel-title {
  @apply text-base font-serif font-bold text-slate-900 pb-4 border-b border-slate-200;
}

.account-hero__commitments {
  @apply mt-2 flex flex-col;
}

.account-commitment {
  @apply flex items-start gap-3.5 py-4 border-b border-slate-100 last:border-b-0;
}

.account-commitment__icon {
  @apply w-8 h-8 rounded-full bg-teal-50 text-teal-600 border border-teal-100;
  @apply flex items-center justify-center flex-shrink-0;
}

.account-commitment__title {
  @apply text-[13px] font-sans font-bold text-slate-900;
}

.account-commitment__description {
  @apply mt-0.5 text-xs font-sans leading-snug text-slate-500;
}
</style>
