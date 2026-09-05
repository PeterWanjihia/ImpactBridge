<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'
</script>

<template>
  <div class="stories-banner">
    <!-- Left Faded Fingerprint Watermark -->
    <div class="watermark-container" aria-hidden="true">
      <svg viewBox="0 0 100 120" class="watermark-svg" fill="none" stroke="currentColor" stroke-width="1.2">
        <path d="M50 10 C25 10 10 30 10 60 C10 90 25 110 50 110 C75 110 90 90 90 60" stroke-dasharray="2 2" />
        <path d="M50 20 C30 20 18 35 18 60 C18 85 30 100 50 100 C70 100 82 85 82 60" />
        <path d="M50 30 C35 30 26 42 26 60 C26 78 35 90 50 90 C65 90 74 78 74 60" />
        <path d="M50 40 C41 40 34 48 34 60 C34 72 41 80 50 80 C59 80 66 72 66 60" />
        <path d="M50 50 C46 50 42 54 42 60 C42 66 46 70 50 70 C54 70 58 66 58 60" />
      </svg>
    </div>

    <div class="banner-content">
      <!-- Section 1: Left Text -->
      <div class="text-block">
        <h3 class="banner-title">
          Stories show<br />experience.
        </h3>
        <p class="banner-desc">
          Each story reflects a real person's journey and perspective.
        </p>
      </div>

      <!-- Section 2: Avatar & Center Visual Connector -->
      <div class="connector-group">
        <div class="avatar-ring">
          <img
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=250"
            alt="Student portrait"
            class="avatar-img"
          />
        </div>

        <div class="dash-connector">
          <span class="dot" />
          <span class="line" />
        </div>

        <!-- Center Detailed Fingerprint SVG -->
        <div class="fingerprint-wrapper">
          <svg viewBox="0 0 64 80" class="fingerprint-svg" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round">
            <path d="M32 6 C16 6 6 18 6 38 C6 58 16 70 32 70 C48 70 58 58 58 38" />
            <path d="M32 14 C20 14 12 24 12 38 C12 52 20 62 32 62 C44 62 52 52 52 38" />
            <path d="M32 22 C24 22 18 29 18 38 C18 47 24 54 32 54 C40 54 46 47 46 38" />
            <path d="M32 30 C27 30 24 33 24 38 C24 43 27 46 32 46 C37 46 40 43 40 38" />
            <path d="M32 36 v4" />
          </svg>
        </div>

        <div class="dash-connector">
          <span class="line" />
          <span class="dot" />
        </div>
      </div>

      <!-- Section 3: Right Text & Link -->
      <div class="text-block">
        <h3 class="banner-title">
          Evidence shows pattern.
        </h3>
        <p class="banner-desc">
          Our Impact page brings together the data that many stories help explain.
        </p>
        <NuxtLink to="/impact" class="action-link">
          See the evidence <ArrowRight class="w-4 h-4" />
        </NuxtLink>
      </div>

      <!-- Section 4: Analytics Circle Badge -->
      <div class="badge-wrapper">
        <div class="badge-circle">
          <svg viewBox="0 0 48 48" class="chart-svg" fill="none" stroke="#2563eb" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="14" y1="34" x2="14" y2="28" />
            <line x1="22" y1="34" x2="22" y2="22" />
            <line x1="30" y1="34" x2="30" y2="16" />
            <path d="M12 26 L20 18 L28 22 L36 12" />
            <circle cx="36" cy="12" r="1.8" fill="#2563eb" />
            <line x1="10" y1="34" x2="38" y2="34" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stories-banner {
  @apply relative w-full bg-[#f4f7fc] rounded-2xl p-6 md:p-8 overflow-hidden;
}

.watermark-container {
  @apply absolute -left-6 -top-4 w-48 h-48 text-blue-200/50 pointer-events-none select-none;
}

.watermark-svg {
  @apply w-full h-full;
}

.banner-content {
  @apply relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8;
}

.text-block {
  @apply space-y-1.5 max-w-xs;
}

.banner-title {
  @apply text-xl md:text-2xl font-sans font-bold text-[#0c1a30] leading-snug tracking-tight;
}

.banner-desc {
  @apply text-xs md:text-sm text-gray-600 leading-relaxed;
}

.connector-group {
  @apply flex items-center gap-3 shrink-0;
}

.avatar-ring {
  @apply w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm;
}

.avatar-img {
  @apply w-full h-full object-cover;
}

.dash-connector {
  @apply hidden sm:flex items-center gap-1 w-12 md:w-16;
}

.dash-connector .line {
  @apply flex-1 border-b-2 border-dashed border-blue-300;
}

.dash-connector .dot {
  @apply w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0;
}

.fingerprint-wrapper {
  @apply w-12 h-16 md:w-14 md:h-16 shrink-0 flex items-center justify-center;
}

.fingerprint-svg {
  @apply w-full h-full;
}

.action-link {
  @apply mt-2 inline-flex items-center gap-1.5 text-sm font-sans font-semibold text-blue-600 hover:text-blue-700 transition-colors;
}

.badge-wrapper {
  @apply shrink-0;
}

.badge-circle {
  @apply w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-100/70 border border-blue-200/60 flex items-center justify-center;
}

.chart-svg {
  @apply w-10 h-10;
}
</style>