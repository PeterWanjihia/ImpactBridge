<script setup lang="ts">
import { Building2, Users, UserCheck, Calendar } from '@lucide/vue'

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
          Our first pilot is helping us understand how offline learning, prepared teachers and
          sustained classroom support can improve access, participation and confidence.
        </p>
        <div class="impact-hero-actions">
          <UiButton variant="primary" size="lg">
            <NuxtLink to="/impact/reach">Explore the results</NuxtLink>
            <span class="ml-1">→</span>
          </UiButton>
          <UiButton variant="outline-white" size="lg">
            <NuxtLink to="/impact/reports">Read the pilot report</NuxtLink>
          </UiButton>
        </div>
      </template>

      <template #aside>
        <!-- Pilot Stats Card -->
        <div class="impact-hero-card">
          <h3 class="impact-hero-card-title">FIRST PILOT</h3>

          <div class="impact-hero-card-stats">
            <div class="impact-hero-card-stat">
              <div class="impact-hero-card-stat-icon">
                <Building2 class="w-5 h-5" />
              </div>
              <div class="impact-hero-card-stat-content">
                <span class="impact-hero-card-stat-value">1</span>
                <span class="impact-hero-card-stat-label">Pilot hub<br />implemented</span>
              </div>
            </div>

            <div class="impact-hero-card-stat">
              <div class="impact-hero-card-stat-icon">
                <UserCheck class="w-5 h-5" />
              </div>
              <div class="impact-hero-card-stat-content">
                <span class="impact-hero-card-stat-value">2</span>
                <span class="impact-hero-card-stat-label">Champion<br />Teachers</span>
              </div>
            </div>

            <div class="impact-hero-card-stat">
              <div class="impact-hero-card-stat-icon">
                <Users class="w-5 h-5" />
              </div>
              <div class="impact-hero-card-stat-content">
                <span class="impact-hero-card-stat-value">50+</span>
                <span class="impact-hero-card-stat-label">Learners<br />reached</span>
              </div>
            </div>
          </div>

          <div class="impact-hero-card-footer">
            <Calendar class="w-4 h-4 text-gray-400 flex-shrink-0" />
            <span class="impact-hero-card-footer-text">
              April – June 2025<br />
              <span class="text-gray-400">Early pilot findings</span>
            </span>
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
  @apply inline-block text-teal font-sans font-semibold text-sm tracking-wide uppercase mb-4;
}

.impact-hero-title {
  @apply text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight;
}

.impact-hero-title-accent {
  @apply italic;
}

.impact-hero-description {
  @apply mt-6 text-lg text-gray-300 max-w-xl leading-relaxed;
}

.impact-hero-actions {
  @apply mt-8 flex flex-wrap gap-4;
}

/* Pilot Stats Card */
.impact-hero-card {
  @apply bg-white rounded-xl shadow-xl p-6 w-72;
}

.impact-hero-card-title {
  @apply text-xs font-sans font-bold text-navy tracking-widest uppercase mb-5;
}

.impact-hero-card-stats {
  @apply space-y-4;
}

.impact-hero-card-stat {
  @apply flex items-center gap-3;
}

.impact-hero-card-stat-icon {
  @apply flex-shrink-0 w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-navy;
}

.impact-hero-card-stat-content {
  @apply flex items-baseline gap-2;
}

.impact-hero-card-stat-value {
  @apply text-xl font-sans font-bold text-navy;
}

.impact-hero-card-stat-label {
  @apply text-xs font-sans text-gray-600 leading-tight;
}

.impact-hero-card-footer {
  @apply mt-5 pt-4 border-t border-gray-100 flex items-start gap-2;
}

.impact-hero-card-footer-text {
  @apply text-xs font-sans text-gray-700 leading-tight;
}

/* Findings Row - Sections 5 & 6 side by side */
.findings-row {
  @apply py-12 md:py-16 lg:py-20;
}

.findings-row-content {
  @apply flex flex-col lg:flex-row gap-0 overflow-hidden rounded-xl;
}

.findings-row-left {
  @apply flex-1 bg-navy p-8 lg:p-10;
}

.findings-row-right {
  @apply flex-1 bg-gray-50 p-8 lg:p-10;
}
</style>
