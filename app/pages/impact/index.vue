<script setup lang="ts">
import { Server, Users, Calendar, Building2 } from '@lucide/vue'

useHead({
  title: 'Impact - Impact Bridge',
  meta: [
    { name: 'description', content: 'Measurable evidence of how offline learning hubs transform classrooms.' }
  ]
})
</script>

<template>
  <div class="page-impact">
    <!-- Hero Section -->
    <HeroOverlay
      image-url="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&h=800&fit=crop&crop=center"
      overlay="gradient"
      image-alt="Students and teacher in a classroom using offline learning technology"
    >
      <template #default>
        <span class="impact-hero-tag">EARLY EVIDENCE</span>
        <h1 class="impact-hero-title">
          One classroom.<br />
          Early evidence of<br />
          <em class="impact-hero-title-accent">what could grow.</em>
        </h1>
        <p class="impact-hero-description">
          Our first pilot is helping us understand how offline
          learning, prepared teachers and sustained classroom
          support can improve access, participation and
          confidence.
        </p>
        <div class="impact-hero-actions">
          <UiButton variant="primary" size="lg" class="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3 font-semibold">
            <NuxtLink to="/impact/reach" class="flex items-center gap-2">
              <span>Explore the results</span>
              <span>→</span>
            </NuxtLink>
          </UiButton>
          <UiButton variant="outline-white" size="lg" class="border border-white/80 text-white hover:bg-white/10 rounded-lg px-6 py-3 font-semibold">
            <NuxtLink to="/impact/reports" class="flex items-center gap-2">
              <span>Read the pilot report</span>
              <Building2 class="w-4 h-4" />
            </NuxtLink>
          </UiButton>
        </div>
      </template>

      <template #aside>
        <!-- Pilot Stats Card -->
        <div class="impact-hero-card">
          <h3 class="impact-hero-card-title">FIRST PILOT</h3>

          <div class="impact-hero-card-stats">
            <div class="impact-hero-card-stat">
              <Server class="impact-hero-card-stat-icon" />
              <div class="impact-hero-card-stat-content">
                <span class="impact-hero-card-stat-value">1</span>
                <span class="impact-hero-card-stat-label">Pilot hub<br />implemented</span>
              </div>
            </div>

            <div class="impact-hero-card-stat">
              <Users class="impact-hero-card-stat-icon" />
              <div class="impact-hero-card-stat-content">
                <span class="impact-hero-card-stat-value">2</span>
                <span class="impact-hero-card-stat-label">Champion<br />Teachers</span>
              </div>
            </div>

            <div class="impact-hero-card-stat">
              <Users class="impact-hero-card-stat-icon" />
              <div class="impact-hero-card-stat-content">
                <span class="impact-hero-card-stat-value">50+</span>
                <span class="impact-hero-card-stat-label">Learners<br />reached</span>
              </div>
            </div>
          </div>

          <div class="impact-hero-card-footer">
            <Calendar class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div class="impact-hero-card-footer-text">
              <span class="font-bold text-blue-950 block">April – June 2025</span>
              <span class="text-gray-500 block">Early pilot findings</span>
            </div>
          </div>
        </div>
      </template>
    </HeroOverlay>

    <!-- Pilot in Context Section -->
    <PilotContext
      school-name="Our Lady Seat of Wisdom"
      location="Kansanga, Kampala, Uganda"
      launch-date="April 2025"
      image-url="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop&crop=center"
      image-alt="Our Lady Seat of Wisdom school building in Kampala, Uganda"
      pilot-period="April – June 2025 (initial review)"
      teachers="2 Champion Teachers"
      learners="50+ students across primary grades"
      focus="Offline learning, teacher adoption, learner engagement"
      subjects="Science, Mathematics, English & Integrated Studies"
      status="Pilot and refinement"
    />

    <!-- Early Results Section -->
    <EarlyResults />

    <!-- Testimonial Quotes Section -->
    <TestimonialQuotes />

    <!-- Evidence Changes Section -->
    <EvidenceChanges />

    <!-- Still Learning + Progress Chapter (Side by Side) -->
    <section class="findings-row">
      <LayoutContainer>
        <div class="findings-row-content">
          <div class="findings-row-left">
            <StillLearning />
          </div>
          <div class="findings-row-right">
            <ProgressChapter />
          </div>
        </div>
      </LayoutContainer>
    </section>

    <!-- Reports Explore Section -->
    <ReportsExplore />

    <!-- Impact CTA Section -->
    <ImpactCTA />
  </div>
</template>

<style scoped>
.impact-hero-tag {
  @apply inline-block text-blue-500 font-sans font-bold text-xs tracking-wider uppercase mb-3;
}

.impact-hero-title {
  @apply text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.15];
}

.impact-hero-title-accent {
  @apply italic font-serif text-blue-500 not-italic;
}

.impact-hero-description {
  @apply mt-6 text-base text-gray-200 max-w-lg leading-relaxed font-sans;
}

.impact-hero-actions {
  @apply mt-8 flex flex-wrap gap-4 items-center;
}

/* Pilot Stats Card */
.impact-hero-card {
  @apply bg-white rounded-2xl shadow-2xl p-7 w-80;
}

.impact-hero-card-title {
  @apply text-xs font-sans font-extrabold text-blue-700 tracking-wider uppercase mb-6;
}

.impact-hero-card-stats {
  @apply space-y-6 relative;
}

/* Subtle separator lines between stats */
.impact-hero-card-stat {
  @apply flex items-center gap-4 relative pb-5 border-b border-gray-100 last:border-b-0 last:pb-0;
}

.impact-hero-card-stat-icon {
  @apply flex-shrink-0 w-6 h-6 text-blue-600;
}

.impact-hero-card-stat-content {
  @apply flex items-center gap-3;
}

.impact-hero-card-stat-value {
  @apply text-2xl font-sans font-bold text-blue-900 min-w-[2rem];
}

.impact-hero-card-stat-label {
  @apply text-xs font-sans text-gray-600 leading-tight font-medium;
}

.impact-hero-card-footer {
  @apply mt-6 pt-5 border-t border-gray-200 flex items-start gap-3;
}

.impact-hero-card-footer-text {
  @apply text-xs font-sans leading-tight;
}

/* Findings Row - Sections 5 & 6 side by side */
.findings-row {
  @apply py-12 md:py-16 lg:py-20;
}

.findings-row-content {
  @apply flex flex-col lg:flex-row gap-0 overflow-hidden rounded-xl;
}

.findings-row-left {
  @apply flex-[3] bg-navy p-6 lg:p-8;
}

.findings-row-right {
  @apply flex-[2] bg-gray-50 p-6 lg:p-8;
}
</style>