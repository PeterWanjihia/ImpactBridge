<script setup lang="ts">
import { PiggyBank, Wallet, TrendingUp, ArrowRight } from '@lucide/vue'
import type { Component } from 'vue'
import type { TransparencyFinancials } from '~/types'
import { chartSeriesByMeaning } from '~/utils/designTokens'

const props = defineProps<{
  financials: TransparencyFinancials
}>()

// Slice colours for the donut stroke - sourced from the design tokens so the
// chart can never drift from the palette declared in tailwind.config.ts
const sliceColors: Record<TransparencyFinancials['spend'][number]['color'], string> = {
  cobalt: chartSeriesByMeaning.cobalt,
  teal: chartSeriesByMeaning.teal,
  aqua: chartSeriesByMeaning.aqua,
  warning: chartSeriesByMeaning.warning,
}

/** Fallback for any slice whose colour key is not recognised. */
const defaultSliceColor = sliceColors.cobalt

// Donut geometry
const radius = 64
const circumference = 2 * Math.PI * radius

/** stroke-dasharray for a slice of the given percentage */
function sliceDash(percentage: number): string {
  return `${(percentage / 100) * circumference} ${circumference}`
}

/** cumulative stroke-dashoffset so slices run around the ring */
function sliceOffset(index: number): number {
  let offset = 0
  for (let i = 0; i < index; i++) {
    offset += (props.financials.spend[i]?.percentage ?? 0) / 100 * circumference
  }
  return -offset
}

const headlineItems = computed(() => [
  { icon: PiggyBank as Component, label: `Total income (${props.financials.year})`, value: props.financials.headline.totalIncome },
  { icon: Wallet as Component, label: `Total expenditure (${props.financials.year})`, value: props.financials.headline.totalExpenditure },
  { icon: TrendingUp as Component, label: `Surplus (${props.financials.year})`, value: props.financials.headline.surplus },
])
</script>

<template>
  <section id="financials" class="fin-section">
    <LayoutContainer>
      <div class="fin-header">
        <div class="fin-header__copy">
          <h2 class="fin-header__title">Where your support goes</h2>
          <p class="fin-header__description">
            We are committed to using resources responsibly to create lasting
            impact in classrooms.
          </p>
          <NuxtLink :to="financials.reportsLinkTo" class="fin-header__link">
            {{ financials.reportsLinkText }}
            <ArrowRight class="w-4 h-4" />
          </NuxtLink>
        </div>
      </div>

      <div class="fin-card">
        <div class="fin-card__main">
          <!-- Donut chart -->
          <div class="fin-donut" role="img" :aria-label="`Expenditure breakdown for ${financials.year}: ${financials.spend.map((s) => `${s.percentage}% ${s.label}`).join(', ')}`">
            <svg viewBox="0 0 160 160" class="fin-donut__svg">
              <g transform="rotate(-90 80 80)">
                <circle
                  v-for="(slice, index) in financials.spend"
                  :key="slice.label"
                  cx="80"
                  cy="80"
                  :r="radius"
                  fill="none"
                  :stroke="sliceColors[slice.color] ?? defaultSliceColor"
                  stroke-width="22"
                  :stroke-dasharray="sliceDash(slice.percentage)"
                  :stroke-dashoffset="sliceOffset(index)"
                />
              </g>
            </svg>
            <div class="fin-donut__center">
              <span class="fin-donut__year">{{ financials.year }}</span>
              <span class="fin-donut__note">{{ financials.expenditureNote }}</span>
              <span class="fin-donut__amount">{{ formatCurrency(financials.headline.totalExpenditure, financials.currency) }}</span>
            </div>
          </div>

          <!-- Legend -->
          <ul class="fin-legend">
            <li v-for="slice in financials.spend" :key="slice.label" class="fin-legend__item">
              <span
                class="fin-legend__dot"
                :style="{ backgroundColor: sliceColors[slice.color] ?? defaultSliceColor }"
              />
              <span class="fin-legend__label">{{ slice.label }}</span>
              <span class="fin-legend__value">{{ slice.percentage }}%</span>
            </li>
          </ul>
        </div>

        <!-- Headline figures -->
        <div class="fin-headlines">
          <div v-for="item in headlineItems" :key="item.label" class="fin-headline">
            <span class="fin-headline__icon">
              <component :is="item.icon" class="w-5 h-5" />
            </span>
            <div>
              <div class="fin-headline__label">{{ item.label }}</div>
              <div class="fin-headline__value">{{ formatCurrency(item.value, financials.currency) }}</div>
            </div>
          </div>
        </div>
      </div>

      <p class="fin-disclaimer">{{ financials.disclaimer }}</p>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.fin-section {
  @apply bg-white py-section-md md:py-section border-b border-gray-100;
}

.fin-header {
  @apply mb-8;
}

.fin-header__title {
  @apply text-2xl md:text-3xl font-display font-bold text-ink;
}

.fin-header__description {
  @apply mt-3 text-sm font-sans leading-relaxed text-gray-500 max-w-md;
}

.fin-header__link {
  @apply mt-3 inline-flex items-center gap-2 text-sm font-sans font-bold text-cobalt-600 hover:text-cobalt-700 hover:underline;
}

/* Card */
.fin-card {
  @apply flex flex-col lg:flex-row gap-8 lg:gap-12 rounded-card border border-gray-200 bg-gray-50/60 p-card md:p-card-lg;
}

.fin-card__main {
  @apply flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-10 flex-1;
}

/* Donut */
.fin-donut {
  @apply relative w-44 h-44 flex-shrink-0;
}

.fin-donut__svg {
  @apply w-full h-full;
}

.fin-donut__center {
  @apply absolute inset-0 flex flex-col items-center justify-center text-center;
}

.fin-donut__year {
  @apply text-lg font-sans font-bold text-ink leading-none;
}

.fin-donut__note {
  @apply mt-1 text-2xs font-sans text-gray-500 leading-tight max-w-[80px];
}

.fin-donut__amount {
  @apply mt-1 text-xs font-sans font-bold text-ink;
}

/* Legend */
.fin-legend {
  @apply flex flex-col gap-3 min-w-0 flex-1;
}

.fin-legend__item {
  @apply flex items-center gap-2.5;
}

.fin-legend__dot {
  @apply w-2.5 h-2.5 rounded-full flex-shrink-0;
}

.fin-legend__label {
  @apply text-label font-sans text-gray-700 leading-snug;
}

.fin-legend__value {
  @apply ml-auto text-label font-sans font-semibold text-ink tabular-nums;
}

/* Headline figures */
.fin-headlines {
  @apply flex flex-col gap-4 lg:w-[260px] flex-shrink-0;
}

.fin-headline {
  @apply flex items-center gap-4 rounded-card border border-gray-200 bg-white p-card-sm;
}

.fin-headline__icon {
  @apply w-10 h-10 rounded-full bg-teal-50 text-teal-600 border border-teal-100;
  @apply flex items-center justify-center flex-shrink-0;
}

.fin-headline__label {
  @apply text-2xs font-sans text-gray-500 leading-tight;
}

.fin-headline__value {
  @apply mt-0.5 text-lg font-sans font-bold text-ink tabular-nums;
}

/* Disclaimer */
.fin-disclaimer {
  @apply mt-4 text-2xs font-sans text-gray-400;
}
</style>
