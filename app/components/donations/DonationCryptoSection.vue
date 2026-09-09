<script setup lang="ts">
import { ArrowRight, Coins } from '@lucide/vue'
import type { DonateCryptoSection as CryptoData, CryptoAssetOption } from '~/types'

/**
 * Crypto giving section — "Give with the assets you already hold".
 * Asset/network pairs mirror GET /v1/donation-options; choosing an asset
 * starts the same Go-API donation workflow (the provider returns a crypto
 * invoice through the checkout call). Editorial copy is CMS-owned.
 */
interface Props {
  data: CryptoData
}

defineProps<Props>()

const iconColors: Record<CryptoAssetOption['color'], string> = {
  teal: 'bg-teal-500/15 text-teal-600',
  navy: 'bg-slate-500/15 text-slate-700',
  cobalt: 'bg-cobalt/10 text-cobalt',
  amber: 'bg-amber-500/15 text-amber-500',
  red: 'bg-red-500/10 text-red-600',
  purple: 'bg-purple-500/10 text-purple-600',
}
</script>

<template>
  <section class="crypto-section">
    <LayoutContainer>
      <div class="crypto-section__grid">
        <!-- Left: copy -->
        <div class="crypto-section__copy">
          <h2 class="crypto-section__title">
            {{ data.title }}
            <span class="crypto-section__title-accent">{{ data.titleAccent }}</span>
          </h2>
          <p class="crypto-section__description">{{ data.description }}</p>
          <NuxtLink :to="data.linkTo" class="crypto-section__link">
            {{ data.linkText }}
            <ArrowRight class="w-4 h-4" />
          </NuxtLink>
        </div>

        <!-- Right: asset/network panel -->
        <div class="crypto-section__panel">
          <p class="crypto-section__panel-label">{{ data.panelLabel }}</p>

          <div class="crypto-section__assets">
            <button
              v-for="asset in data.assets"
              :key="`${asset.symbol}-${asset.network}`"
              type="button"
              class="crypto-section__asset"
            >
              <span
                class="crypto-section__asset-icon"
                :class="iconColors[asset.color]"
              >
                <Coins class="w-5 h-5" />
              </span>
              <span class="crypto-section__asset-copy">
                <span class="crypto-section__asset-symbol">{{ asset.symbol }}</span>
                <span class="crypto-section__asset-network">{{ asset.network }}</span>
              </span>
            </button>

            <NuxtLink to="/#how-it-works" class="crypto-section__asset crypto-section__asset--more">
              <span class="crypto-section__asset-icon crypto-section__asset-icon--more">
                <Coins class="w-5 h-5" />
              </span>
              <span class="crypto-section__asset-copy">
                <span class="crypto-section__asset-network crypto-section__asset-network--link">
                  {{ data.viewAllText }}
                </span>
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.crypto-section {
  @apply py-14 md:py-16 bg-white;
}

.crypto-section__grid {
  @apply grid grid-cols-1 lg:grid-cols-[minmax(280px,380px)_1fr] gap-10 lg:gap-14 items-start;
}

/* Copy column */
.crypto-section__title {
  @apply text-3xl md:text-4xl font-serif font-bold text-navy leading-tight;
}

.crypto-section__title-accent {
  @apply block;
}

.crypto-section__description {
  @apply mt-4 text-sm md:text-base text-gray-600 leading-relaxed;
}

.crypto-section__link {
  @apply mt-5 inline-flex items-center gap-2 text-sm font-sans font-semibold text-cobalt hover:text-cobalt-700;
}

/* Panel */
.crypto-section__panel {
  @apply rounded-xl border border-gray-200 bg-gray-50/60 p-5 md:p-6;
}

.crypto-section__panel-label {
  @apply text-[11px] font-sans font-semibold tracking-[0.14em] uppercase text-gray-500 mb-4;
}

.crypto-section__assets {
  @apply grid grid-cols-2 sm:grid-cols-3 gap-3;
}

.crypto-section__asset {
  @apply flex items-center gap-3 p-3 rounded-lg border border-gray-200 bg-white text-left transition-colors hover:border-cobalt focus:outline-none focus:ring-2 focus:ring-cobalt;
}

.crypto-section__asset--more {
  @apply hover:border-cobalt;
}

.crypto-section__asset-icon {
  @apply flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0;
}

.crypto-section__asset-icon--more {
  @apply bg-gray-100 text-gray-500;
}

.crypto-section__asset-copy {
  @apply flex flex-col leading-tight;
}

.crypto-section__asset-symbol {
  @apply text-sm font-sans font-bold text-navy;
}

.crypto-section__asset-network {
  @apply text-xs font-sans text-gray-500 mt-0.5;
}

.crypto-section__asset-network--link {
  @apply text-cobalt font-semibold;
}
</style>
