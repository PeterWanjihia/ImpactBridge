<script setup lang="ts">
import { ShieldCheck, Leaf, ArrowRight, CircleCheck, CircleX } from '@lucide/vue'

/**
 * Suitability criteria and exclusions (design-mirrored).
 *
 * TODO(backend): These lists are content data — source from the CMS
 * `resources` collection ("equipment guidelines") or
 * GET /v1/equipment-requirements when live.
 */
const suitableItems = [
  'Good working condition and safe to use',
  'Meets minimum technical specifications',
  'Can be supported and repaired locally',
  'Includes essential accessories (chargers, cables)',
  'Ownership is clear and transferable',
  'Data is securely erased and locks removed',
  'Transport and repair are cost-effective',
]

const cannotAcceptItems = [
  'Non-functional or unusable equipment',
  'Obsolete devices with no support path',
  'Devices locked to organisations or accounts',
  'Missing proprietary chargers or critical parts',
  'Equipment with recoverable data',
  'Large quantities shipped without approval',
  'Items that are uneconomical to transport',
]
</script>

<template>
  <section id="why-this-matters" class="suitability-section">
    <LayoutContainer>
      <div class="suitability-section__grid">
        <!-- What makes equipment suitable -->
        <div class="suitability-card">
          <h2 class="suitability-card__title">What makes equipment suitable</h2>
          <ul class="suitability-card__list">
            <li v-for="item in suitableItems" :key="item" class="suitability-item">
              <CircleCheck class="suitability-item__icon suitability-item__icon--check" />
              <span>{{ item }}</span>
            </li>
          </ul>
          <a href="#requirements-detail" class="suitability-card__link">
            See detailed requirements
            <ArrowRight class="w-4 h-4" />
          </a>
        </div>

        <!-- What we cannot accept -->
        <div class="suitability-card">
          <h2 class="suitability-card__title">What we cannot accept</h2>
          <ul class="suitability-card__list">
            <li v-for="item in cannotAcceptItems" :key="item" class="suitability-item">
              <CircleX class="suitability-item__icon suitability-item__icon--x" />
              <span>{{ item }}</span>
            </li>
          </ul>
          <a href="#requirements-detail" class="suitability-card__link">
            Full exclusion list
            <ArrowRight class="w-4 h-4" />
          </a>
        </div>

        <!-- Data security & environment -->
        <div class="flex flex-col gap-6">
          <div class="assurance-card">
            <span class="assurance-card__icon assurance-card__icon--teal">
              <ShieldCheck class="w-6 h-6" />
            </span>
            <h3 class="assurance-card__title">Data security &amp; ownership</h3>
            <p class="assurance-card__description">
              Secure data erasure and proof of ownership are required before
              transfer of any equipment.
            </p>
            <a href="#requirements-detail" class="assurance-card__link">
              Learn more
              <ArrowRight class="w-4 h-4" />
            </a>
          </div>

          <div class="assurance-card">
            <span class="assurance-card__icon assurance-card__icon--green">
              <Leaf class="w-6 h-6" />
            </span>
            <h3 class="assurance-card__title">Environmental responsibility</h3>
            <p class="assurance-card__description">
              We do not accept equipment for disposal. We prioritise meaningful
              reuse and responsible end-of-life management.
            </p>
            <a href="/transparency" class="assurance-card__link">
              Our commitment
              <ArrowRight class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.suitability-section {
  @apply bg-white pb-14 md:pb-16;
}

.suitability-section__grid {
  @apply grid grid-cols-1 lg:grid-cols-3 gap-6;
}

.suitability-card {
  @apply bg-slate-50 border border-slate-200 rounded-xl p-7;
}

.suitability-card__title {
  @apply text-lg font-serif font-bold text-slate-900;
}

.suitability-card__list {
  @apply mt-5 space-y-3.5;
}

.suitability-item {
  @apply flex items-start gap-3 text-[13px] font-sans leading-snug text-slate-700;
}

.suitability-item__icon {
  @apply w-[18px] h-[18px] flex-shrink-0 mt-0.5;
}

.suitability-item__icon--check {
  @apply text-emerald-600;
}

.suitability-item__icon--x {
  @apply text-red-500;
}

.suitability-card__link {
  @apply mt-6 inline-flex items-center gap-2 text-[13px] font-sans font-semibold text-cobalt-600 hover:text-cobalt-700;
}

.assurance-card {
  @apply flex-1 bg-white border border-slate-200 rounded-xl p-7;
}

.assurance-card__icon {
  @apply w-12 h-12 rounded-full flex items-center justify-center;
}

.assurance-card__icon--teal {
  @apply bg-teal-50 text-teal-600;
}

.assurance-card__icon--green {
  @apply bg-emerald-50 text-emerald-600;
}

.assurance-card__title {
  @apply mt-4 text-[15px] font-sans font-bold text-slate-900;
}

.assurance-card__description {
  @apply mt-2 text-[13px] font-sans leading-relaxed text-slate-500;
}

.assurance-card__link {
  @apply mt-4 inline-flex items-center gap-2 text-[13px] font-sans font-semibold text-cobalt-600 hover:text-cobalt-700;
}
</style>
