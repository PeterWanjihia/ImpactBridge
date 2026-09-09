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
              <component :is="trustIcons[item.icon]" class="w-5 h-5" />
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
  @apply relative z-10 py-12 lg:py-20;
}

.donate-hero__grid {
  @apply grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(380px,460px)] gap-10 lg:gap-16 items-stretch;
}

.donate-hero__copy {
  @apply flex max-w-[30rem] flex-col justify-center;
}

.donate-hero__eyebrow {
  @apply text-cobalt-300 text-[11px] font-sans font-semibold tracking-[0.14em] uppercase mb-4;
}

.donate-hero__title {
  @apply text-4xl md:text-5xl font-serif font-bold text-white leading-[1.06] tracking-tight;
}

.donate-hero__subtitle {
  @apply mt-5 max-w-[28rem] text-sm md:text-base text-slate-300 leading-[1.5];
}

.donate-hero__video {
  @apply mt-7 inline-flex items-center gap-3 text-white;
}

.donate-hero__play {
  @apply flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-navy-900 hover:bg-white/90 transition-colors;
}

.donate-hero__video-label {
  @apply block text-sm font-sans font-semibold leading-tight;
}

.donate-hero__video-duration {
  @apply block text-xs font-sans text-slate-400 leading-tight mt-0.5;
}

.donate-hero__trust {
  @apply mt-14 grid grid-cols-3 list-none border-t border-white/15 pt-5 p-0;
}

.donate-hero__trust-item {
  @apply flex min-w-0 items-center gap-2 px-3 text-[11px] font-sans leading-[1.3] text-slate-300;
}

.donate-hero__trust-item + .donate-hero__trust-item {
  @apply border-l border-white/20;
}

.donate-hero__trust-item :deep(svg) {
  @apply h-5 w-5 shrink-0;
}

/* Widget card */
.donate-hero__widget {
  @apply rounded-xl bg-white shadow-2xl p-5 md:p-6 lg:p-7;
}
</style>
