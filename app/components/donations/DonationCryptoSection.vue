<script setup lang="ts">
import { ArrowRight, Grid } from '@lucide/vue'
import type { DonateCryptoSection as CryptoData, CryptoAssetOption } from '~/types'

interface Props {
  data: CryptoData
}

defineProps<Props>()

// Map crypto symbols or icons to SVG paths or image URLs
const cryptoIcons: Record<string, string> = {
  USDT: 'https://cryptologos.cc/logos/tether-usdt-logo.svg',
  TRX: 'https://cryptologos.cc/logos/tron-trx-logo.svg',
  USDC: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.svg',
  BTC: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg',
}
</script>

<template>
  <section class="crypto-section">
    <div class="crypto-section__container">
      <div class="crypto-section__grid">
        <!-- Left: Copy -->
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

        <!-- Right: Asset/Network Panel -->
        <div class="crypto-section__panel">
          <p class="crypto-section__panel-label">{{ data.panelLabel }}</p>

          <div class="crypto-section__assets">
            <button
              v-for="asset in data.assets"
              :key="`${asset.symbol}-${asset.network}`"
              type="button"
              class="crypto-section__asset"
            >
              <span class="crypto-section__asset-icon">
                <NuxtImg
                  v-if="cryptoIcons[asset.symbol]"
                  :src="cryptoIcons[asset.symbol]"
                  :alt="asset.symbol"
                  class="w-8 h-8 object-contain"
                  width="32"
                  height="32"
                />
              </span>
              <span class="crypto-section__asset-copy">
                <span class="crypto-section__asset-symbol">{{ asset.symbol }}</span>
                <span class="crypto-section__asset-network">{{ asset.network }}</span>
              </span>
            </button>

            <!-- View All Card -->
            <NuxtLink to="/#how-it-works" class="crypto-section__asset crypto-section__asset--more">
              <span class="crypto-section__asset-icon crypto-section__asset-icon--more">
                <Grid class="w-5 h-5 text-cobalt-600" />
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
    </div>
  </section>
</template>

<style scoped>
.crypto-section {
  @apply py-section-sm bg-white;
}

.crypto-section__container {
  @apply max-w-container mx-auto px-gutter-sm sm:px-gutter lg:px-gutter-lg;
}

.crypto-section__grid {
  @apply grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 lg:gap-12 items-center;
}

/* Copy Column */
.crypto-section__title {
  @apply text-3xl font-display font-bold text-ink leading-snug;
}

.crypto-section__title-accent {
  @apply block;
}

.crypto-section__description {
  @apply mt-4 text-sm text-gray-600 leading-relaxed;
}

.crypto-section__link {
  @apply mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cobalt-600 hover:text-cobalt-700 transition-colors;
}

/* Panel Column */
.crypto-section__panel {
  @apply rounded-card border border-cobalt-100/80 bg-cobalt-50/20 p-card sm:p-card-lg;
}

.crypto-section__panel-label {
  @apply text-2xs font-bold tracking-eyebrow uppercase text-gray-600 mb-5;
}

.crypto-section__assets {
  @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3;
}

.crypto-section__asset {
  @apply flex items-center gap-3 p-3.5 rounded-xl border border-gray-200/80 bg-white text-left transition-all hover:border-gray-300 hover:shadow-elevation-1 focus:outline-none focus:ring-2 focus:ring-cobalt-500;
}

.crypto-section__asset-icon {
  @apply flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 overflow-hidden;
}

.crypto-section__asset-icon--more {
  @apply bg-cobalt-50 w-8 h-8 rounded-full flex items-center justify-center;
}

.crypto-section__asset-copy {
  @apply flex flex-col justify-center leading-none;
}

.crypto-section__asset-symbol {
  @apply text-xs font-bold text-ink;
}

.crypto-section__asset-network {
  @apply text-2xs font-medium text-gray-500 mt-1;
}

.crypto-section__asset-network--link {
  @apply text-xs font-semibold text-gray-800 leading-tight;
}
</style>
