<script setup lang="ts">
import {
  Heart,
  Building2,
  MapPin,
  Laptop,
  Users,
  FileText,
  ArrowRight,
  Box,
} from '@lucide/vue'

defineProps<{
  hero: {
    imageUrl: string
    imageAlt: string
    eyebrow: string
    title: string
    titleAccent?: string
    subtitle: string
    note?: string
    primaryCta: { text: string; to: string }
    secondaryCta: { text: string; to: string }
    campaign: {
      title: string
      raised: number
      goal: number
      hubsFunded: number
      devicesCommitted: number
      learnersExpected: number
    }
  }
}>()
</script>

<template>
  <section class="hero">
    <div class="hero-bg">
      <NuxtImg
        :src="hero.imageUrl"
        :alt="hero.imageAlt"
        class="hero-bg-image"
        width="1920"
        height="1080"
        fetchpriority="high"
        preload
      />
      <div class="hero-bg-overlay" />
    </div>
    <div class="hero-content">
      <LayoutContainer>
        <div class="hero-grid">
          <div class="hero-text">
            <p class="hero-eyebrow">{{ hero.eyebrow }}</p>
            <h1 class="hero-title">
              {{ hero.title }}<span class="hero-title-accent">{{ hero.titleAccent }}</span>
            </h1>
            <p class="hero-subtitle">{{ hero.subtitle }}</p>
            <div class="hero-actions">
              <UiButton
                :to="hero.primaryCta.to"
                variant="primary"
                size="lg"
              >
                <Heart class="w-5 h-5" />
                {{ hero.primaryCta.text }}
              </UiButton>
              <UiButton
                :to="hero.secondaryCta.to"
                variant="outline-white"
                class="border-white/80"
                size="lg"
              >
                <Building2 class="w-5 h-5" />
                {{ hero.secondaryCta.text }}
              </UiButton>
            </div>
            <p v-if="hero.note" class="hero-note">{{ hero.note }}</p>
          </div>

          <!-- Campaign Card -->
          <div class="hero-card">
            <div class="hero-card-inner">
              <h3 class="hero-card-title">{{ hero.campaign.title }}</h3>

              <div class="hero-card-amount">
                <span class="hero-card-currency">£</span>{{ hero.campaign.raised.toLocaleString() }}
              </div>
              <p class="hero-card-goal">
                raised of £{{ hero.campaign.goal.toLocaleString() }} goal
              </p>

              <CampaignProgress
                :current="hero.campaign.raised"
                :goal="hero.campaign.goal"
                :show-labels="false"
                class="mt-3 mb-6"
              />

              <div class="hero-card-stats">
                <div class="hero-card-stat">
                  <div class="hero-card-stat-icon">
                    <MapPin class="w-5 h-5 text-cobalt-600" />
                  </div>
                  <div class="hero-card-stat-content">
                    <span class="hero-card-stat-value">{{ hero.campaign.hubsFunded }}</span>
                    <span class="hero-card-stat-label">hubs funded</span>
                  </div>
                </div>
                <div class="hero-card-stat">
                  <div class="hero-card-stat-icon">
                    <Laptop class="w-5 h-5 text-cobalt-600" />
                  </div>
                  <div class="hero-card-stat-content">
                    <span class="hero-card-stat-value">{{ hero.campaign.devicesCommitted }}</span>
                    <span class="hero-card-stat-label">suitable devices<br />committed</span>
                  </div>
                </div>
                <div class="hero-card-stat">
                  <div class="hero-card-stat-icon">
                    <Users class="w-5 h-5 text-cobalt-600" />
                  </div>
                  <div class="hero-card-stat-content">
                    <span class="hero-card-stat-value">{{ hero.campaign.learnersExpected }}</span>
                    <span class="hero-card-stat-label">learners expected<br />to benefit</span>
                  </div>
                </div>
              </div>

              <div class="hero-card-links">
                <NuxtLink to="/corporate-partnerships" class="hero-card-link">
                  <FileText class="w-4 h-4 text-cobalt-600 flex-shrink-0" />
                  <span>View corporate partnership pack</span>
                  <ArrowRight class="w-4 h-4 ml-auto text-cobalt-600" />
                </NuxtLink>
                <NuxtLink to="/donate-equipment" class="hero-card-link">
                  <Box class="w-4 h-4 text-cobalt-600 flex-shrink-0" />
                  <span>View equipment donation guidelines</span>
                  <ArrowRight class="w-4 h-4 ml-auto text-cobalt-600" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </div>
  </section>
</template>

<style scoped>
.hero {
  @apply relative min-h-[85vh] flex items-center overflow-hidden;
}
.hero-bg {
  @apply absolute inset-0;
}
.hero-bg-image {
  @apply w-full h-full object-cover;
}
.hero-bg-overlay {
  @apply absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/50;
}
.hero-content {
  @apply relative z-10 w-full py-section-lg md:py-section-xl;
}
.hero-grid {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center;
}
.hero-eyebrow {
  @apply text-2xs font-sans font-semibold text-cobalt uppercase tracking-eyebrow mb-4;
}
.hero-title {
  @apply text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight;
}
.hero-title-accent {
  @apply italic text-cobalt relative;
}
.hero-title-accent::after {
  content: '';
  @apply absolute -bottom-1 left-0 right-0 h-[3px] bg-cobalt rounded-full transform -rotate-1;
}
.hero-subtitle {
  @apply mt-6 text-lg text-gray-300 max-w-xl;
}
.hero-actions {
  @apply mt-8 flex flex-wrap gap-4;
}
.hero-note {
  @apply mt-4 text-sm text-gray-400;
}
.hero-card {
  @apply hidden justify-self-end ml-auto lg:block max-w-[300px];
}
.hero-card-inner {
  @apply bg-white rounded-card p-card shadow-elevation-3 border border-gray-100;
}
.hero-card-title {
  @apply text-2xl font-display font-bold text-ink leading-tight tracking-tight;
}
.hero-card-amount {
  @apply text-3xl font-sans font-bold text-ink mt-4 leading-none;
}
.hero-card-currency {
  @apply font-sans;
}
.hero-card-goal {
  @apply text-xs font-sans text-gray-600 mt-1.5 font-medium;
}
.hero-card-stats {
  @apply space-y-0;
}
.hero-card-stat {
  @apply flex items-center gap-4 py-3 border-t border-gray-100/80;
}
.hero-card-stat-icon {
  @apply w-12 h-12 flex items-center justify-center bg-cobalt-50/80 rounded-card flex-shrink-0;
}
.hero-card-stat-content {
  @apply flex flex-col justify-center;
}
.hero-card-stat-value {
  @apply text-xl font-sans font-bold text-ink leading-tight;
}
.hero-card-stat-label {
  @apply text-xs font-sans text-gray-600 leading-snug mt-0.5;
}
.hero-card-links {
  @apply mt-2 pt-4 border-t border-gray-100 space-y-3;
}
.hero-card-link {
  @apply flex items-center gap-2.5 text-label font-sans font-semibold text-cobalt-600 hover:text-cobalt-800 transition-colors;
}

/* Accessibility: focus-visible */
.hero :deep(a:focus-visible),
.hero :deep(button:focus-visible) {
  @apply outline-2 outline-offset-2 outline-cobalt ring-2 ring-cobalt/50;
}

/* Touch targets ≥ 44px */
.hero-card-link {
  @apply min-h-[44px] flex items-center;
}
</style>
