<script setup lang="ts">
import { Play, ShieldCheck, ReceiptText, Lock } from '@lucide/vue'
import type { Component } from 'vue'
import type { DonateHeroData, Fund, PaymentMethod } from '~/types'

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
              <Play class="w-3.5 h-3.5 ml-0.5 fill-current" />
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
              <component :is="trustIcons[item.icon]" class="w-5 h-5 shrink-0" />
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
  @apply absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/80 to-transparent;
}

.donate-hero__container {
  @apply relative z-10 py-8 lg:py-10;
}

.donate-hero__grid {
  @apply grid grid-cols-1 lg:grid-cols-[minmax(0,420px)_1fr] gap-8 lg:gap-12 items-end;
}

.donate-hero__copy {
  @apply flex flex-col justify-end pb-2;
}

.donate-hero__eyebrow {
  @apply text-blue-400 text-[10px] font-sans font-bold tracking-widest uppercase mb-2.5;
}

.donate-hero__title {
  @apply text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-white leading-[1.08] tracking-tight;
}

.donate-hero__subtitle {
  @apply mt-3 text-xs sm:text-sm text-slate-300 leading-normal max-w-[340px];
}

.donate-hero__video {
  @apply mt-5 inline-flex items-center gap-3 text-white hover:text-slate-200 transition-colors w-max;
}

.donate-hero__play {
  @apply flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-slate-950 hover:bg-slate-100 transition-all;
}

.donate-hero__video-label {
  @apply block text-xs font-sans font-semibold leading-tight;
}

.donate-hero__video-duration {
  @apply block text-[11px] font-sans text-slate-400 leading-tight mt-0.5;
}

.donate-hero__trust {
  @apply mt-8 grid grid-cols-3 list-none border-t border-white/15 pt-4 p-0 gap-1;
}

.donate-hero__trust-item {
  @apply flex items-center gap-2 text-[11px] font-sans leading-tight text-slate-300 pr-2;
}

.donate-hero__trust-item + .donate-hero__trust-item {
  @apply border-l border-white/15 pl-3;
}

/* Widget Card Container */
.donate-hero__widget {
  @apply flex justify-end;
}
</style>