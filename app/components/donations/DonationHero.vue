<script setup lang="ts">
import { Play, ShieldCheck, ReceiptText, Lock } from '@lucide/vue'
import type { Component } from 'vue'
import type { DonateHeroData, Fund, PaymentMethod } from '~/types'

/**
 * Donate hero: full-bleed classroom photo with the donation widget floating
 * as a white card (per design). The widget is the transactional heart —
 * everything else on the page supports it.
 */
interface Props {
  hero: DonateHeroData
  funds?: Fund[]
  paymentMethods?: PaymentMethod[]
  currency?: string
  presets?: number[]
}

withDefaults(defineProps<Props>(), {
  funds: () => [],
  paymentMethods: () => ['card', 'crypto', 'bank_transfer'],
  currency: 'GBP',
  presets: () => [25, 50, 100, 250, 500],
})

const heroImage =
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80'

const trustIcons: Record<DonateHeroData['trustItems'][number]['icon'], Component> = {
  shield: ShieldCheck,
  receipt: ReceiptText,
  lock: Lock,
}
</script>

<template>
  <section class="donate-hero">
    <div class="donate-hero__bg" aria-hidden="true">
      <img
        :src="heroImage"
        alt=""
        class="donate-hero__image"
        width="1920"
        height="1080"
        fetchpriority="high"
      />
      <div class="donate-hero__overlay" />
    </div>

    <LayoutContainer class="donate-hero__container">
      <div class="donate-hero__grid">
        <!-- Left: copy -->
        <div class="donate-hero__copy">
          <p class="donate-hero__eyebrow">{{ hero.eyebrow }}</p>
          <h1 class="donate-hero__title">{{ hero.title }}</h1>
          <p class="donate-hero__subtitle">{{ hero.subtitle }}</p>

          <a href="#how-it-works" class="donate-hero__video">
            <span class="donate-hero__play">
              <Play class="w-4 h-4 ml-0.5" fill="currentColor" />
            </span>
            <span>
              <span class="donate-hero__video-label">See how your support changes lives</span>
              <span class="donate-hero__video-duration">{{ hero.videoDuration }}</span>
            </span>
          </a>

          <ul class="donate-hero__trust">
            <li
              v-for="item in hero.trustItems"
              :key="item.label"
              class="donate-hero__trust-item"
            >
              <component :is="trustIcons[item.icon]" class="w-5 h-5 shrink-0 text-gray-300" />
              <span>{{ item.label }}</span>
            </li>
          </ul>
        </div>

        <!-- Right: floating donation widget -->
        <div class="donate-hero__widget">
          <DonationWidget
            :funds="funds"
            :payment-methods="paymentMethods"
            :currency="currency"
            :presets="presets"
          />
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.donate-hero {
  @apply relative bg-navy-900 overflow-hidden;
}

.donate-hero__bg {
  @apply absolute inset-0;
}

.donate-hero__image {
  @apply w-full h-full object-cover;
}

.donate-hero__overlay {
  @apply absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-800/80 to-navy-700/40;
}

.donate-hero__container {
  @apply relative z-10 py-section-xs lg:py-section max-w-container mx-auto px-gutter-sm sm:px-gutter lg:px-gutter-lg;
}

.donate-hero__grid {
  @apply grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center;
}

.donate-hero__copy {
  @apply lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-6;
}

.donate-hero__eyebrow {
  @apply text-cobalt-400 text-2xs font-sans font-bold tracking-eyebrow uppercase mb-4;
}

.donate-hero__title {
  @apply text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-display tracking-tight;
}

.donate-hero__subtitle {
  @apply mt-6 text-base sm:text-lg text-gray-200 leading-relaxed max-w-xl;
}

.donate-hero__video {
  @apply mt-8 inline-flex items-center gap-3.5 text-white hover:text-gray-200 transition-colors w-max;
}

.donate-hero__play {
  @apply flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-navy-900 hover:bg-gray-100 transition-all shadow-elevation-2;
}

.donate-hero__video-label {
  @apply block text-sm font-sans font-semibold leading-tight;
}

.donate-hero__video-duration {
  @apply block text-xs font-sans text-gray-400 leading-tight mt-0.5;
}

.donate-hero__trust {
  @apply mt-12 grid grid-cols-3 list-none border-t border-white/20 pt-6 p-0 gap-2;
}

.donate-hero__trust-item {
  @apply flex items-center gap-2.5 text-xs font-sans leading-snug text-gray-300 pr-2;
}

.donate-hero__trust-item + .donate-hero__trust-item {
  @apply border-l border-white/20 pl-4;
}

/* Widget Card Container */
.donate-hero__widget {
  @apply lg:col-span-5 rounded-2xl bg-white shadow-elevation-3 p-6 sm:p-8;
}
</style>
