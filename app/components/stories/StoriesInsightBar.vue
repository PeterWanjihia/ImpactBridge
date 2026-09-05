<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'
</script>

<template>
  <div class="insight-banner">
    <!-- Background Faded Watermark Icon (Left) -->
    <div class="watermark-bg">
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M50,15 C30,15 15,30 15,50 C15,70 30,85 50,85 C70,85 85,70 85,50" stroke-dasharray="3 3"/>
        <path d="M50,25 C36,25 25,36 25,50 C25,64 36,75 50,75 C64,75 75,64 75,50"/>
        <path d="M50,35 C42,35 35,42 35,50 C35,58 42,65 50,65"/>
        <path d="M50,45 C47,45 45,47 45,50 C45,53 47,55 50,55"/>
      </svg>
    </div>

    <div class="banner-content">
      <!-- Left Section: Text -->
      <div class="section-text">
        <h2 class="title">Stories show<br />experience.</h2>
        <p class="description">
          Each story reflects a real person's journey and perspective.
        </p>
      </div>

      <!-- Center Visual Group: Avatar + Dashed Line + Fingerprint + Dashed Line -->
      <div class="visual-center">
        <!-- Profile Image Avatar -->
        <div class="avatar-wrapper">
          <img
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=250"
            alt="Person profile"
            class="avatar-img"
          />
        </div>

        <!-- Left Dashed Connector Line -->
        <div class="connector-line">
          <span class="dot"></span>
          <div class="dash-line"></div>
        </div>

        <!-- Main Blue Fingerprint Icon -->
        <div class="fingerprint-icon">
          <svg viewBox="0 0 64 64" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round">
            <path d="M32 8c-13.25 0-24 10.75-24 24 0 10 5 18 12 22" />
            <path d="M32 14c-9.94 0-18 8.06-18 18 0 8 4 14 9 17" />
            <path d="M32 20c-6.63 0-12 5.37-12 12 0 6 3 10 7 12" />
            <path d="M32 26c-3.31 0-6 2.69-6 6 0 4 2 7 5 8" />
            <path d="M32 32v2" />
            <path d="M38 52c4-3 6-7.5 6-12 0-3.31-1.34-6.31-3.5-8.5" />
            <path d="M44 47c3.5-3.5 5-8.5 5-15 0-9.94-8.06-18-18-18" />
            <path d="M50 40c2-2.5 3-5.5 3-8 0-13.25-10.75-24-24-24" />
          </svg>
        </div>

        <!-- Right Dashed Connector Line -->
        <div class="connector-line">
          <div class="dash-line"></div>
          <span class="dot"></span>
        </div>
      </div>

      <!-- Right Section: Text & CTA Link -->
      <div class="section-text">
        <h2 class="title">Evidence shows pattern.</h2>
        <p class="description">
          Our Impact page brings together the data that many stories help explain.
        </p>
        <NuxtLink to="/impact" class="cta-link">
          See the evidence <ArrowRight class="w-4 h-4" />
        </NuxtLink>
      </div>

      <!-- Right Analytics Graph Badge -->
      <div class="analytics-badge">
        <svg viewBox="0 0 64 64" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <!-- Bar Chart Lines -->
          <line x1="20" y1="44" x2="20" y2="38" />
          <line x1="28" y1="44" x2="28" y2="30" />
          <line x1="36" y1="44" x2="36" y2="24" />
          <line x1="44" y1="44" x2="44" y2="20" />
          <!-- Trend Line & Point -->
          <path d="M18 36l8-8 8 4 10-12" />
          <circle cx="44" cy="20" r="2" fill="#2563eb" />
          <!-- Base Line -->
          <line x1="16" y1="44" x2="48" y2="44" />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.insight-banner {
  @apply relative w-full rounded-2xl bg-[#f0f5ff] p-6 lg:p-8 overflow-hidden border border-blue-50/50 shadow-sm;
}

.watermark-bg {
  @apply absolute -left-10 -top-6 w-56 h-56 text-blue-300/25 pointer-events-none select-none;
}

.banner-content {
  @apply relative z-10 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto] gap-6 lg:gap-8 items-center;
}

.section-text {
  @apply space-y-2;
}

.title {
  @apply text-xl lg:text-2xl font-bold text-[#0f172a] leading-tight tracking-tight;
}

.description {
  @apply text-xs lg:text-sm text-slate-600 leading-relaxed max-w-xs;
}

.visual-center {
  @apply flex items-center gap-3 justify-center my-4 md:my-0;
}

.avatar-wrapper {
  @apply w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm;
}

.avatar-img {
  @apply w-full h-full object-cover;
}

.connector-line {
  @apply hidden lg:flex items-center gap-1.5 w-16 shrink-0;
}

.dash-line {
  @apply flex-1 border-b-2 border-dashed border-blue-300 h-0;
}

.dot {
  @apply w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0;
}

.fingerprint-icon {
  @apply w-12 h-12 lg:w-16 lg:h-16 shrink-0 flex items-center justify-center;
}

.cta-link {
  @apply mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors;
}

.analytics-badge {
  @apply flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-blue-100/60 border border-blue-200/50 shrink-0 mx-auto md:mx-0;
}

.analytics-badge svg {
  @apply w-10 h-10 lg:w-12 lg:h-12;
}
</style>