<script setup lang="ts">
import {
  WifiOff,
  Users,
  BookOpen,
  MapPin,
  Headphones,
  BarChart3,
  ArrowDown,
  ArrowRight,
} from '@lucide/vue'

useHead({
  title: 'Our Model - Impact Bridge',
  meta: [
    { name: 'description', content: 'How we combine offline learning technology, curated resources, trained teachers and local ownership into one practical model—designed for schools with limited connectivity.' }
  ]
})

const tabs = [
  { label: 'Overview', href: '#overview', active: true },
  { label: 'Inside the Hub', href: '#inside-the-hub' },
  { label: 'Teacher Development', href: '#teacher-development' },
  { label: 'Deployment', href: '#deployment' },
  { label: 'Support', href: '#support' },
  { label: 'Measurement', href: '#measurement' },
]

const features = [
  { icon: WifiOff, label: 'Offline-first' },
  { icon: Users, label: 'Teacher-led' },
  { icon: BookOpen, label: 'Curriculum-aligned' },
  { icon: MapPin, label: 'Locally implemented' },
  { icon: Headphones, label: 'Continuously supported' },
  { icon: BarChart3, label: 'Transparently measured' },
]

const modelSteps = [
  {
    title: 'Appropriate infrastructure',
    description: 'Reliable technology built for real classroom conditions.',
    icon: {
      template: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>`
    }
  },
  {
    title: 'Curated offline content',
    description: 'Curriculum-relevant resources available without the internet.',
    icon: {
      template: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>`
    }
  },
  {
    title: 'Prepared teachers',
    description: 'Teachers trained to integrate technology into lessons.',
    icon: {
      template: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>`
    }
  },
  {
    title: 'Classroom practice',
    description: 'Interactive teaching that engages and deepens learning.',
    icon: {
      template: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>`
    }
  },
  {
    title: 'Local ownership and support',
    description: 'Champion teachers and school leaders carry it forward.',
    icon: {
      template: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>`
    }
  },
  {
    title: 'Measurement and improvement',
    description: 'We monitor, learn and make the model stronger.',
    icon: {
      template: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>`
    }
  },
]
</script>

<template>
  <div class="page-our-model">
    <!-- Hero Section -->
    <section class="model-hero">
      <div class="model-hero-bg">
        <img
          src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1920&q=80"
          alt="Teacher guiding students in a classroom using digital learning resources"
          class="model-hero-image"
          width="1920"
          height="1080"
          fetchpriority="high"
        />
        <div class="model-hero-overlay" />
      </div>

      <!-- Tab Navigation -->
      <nav class="model-hero-tabs" aria-label="Model sections">
        <LayoutContainer>
          <ul class="model-hero-tab-list">
            <li v-for="tab in tabs" :key="tab.label">
              <a
                :href="tab.href"
                :class="['model-hero-tab', { 'model-hero-tab--active': tab.active }]"
              >
                {{ tab.label }}
              </a>
            </li>
          </ul>
        </LayoutContainer>
      </nav>

      <!-- Hero Content -->
      <div class="model-hero-content">
        <LayoutContainer>
          <div class="model-hero-inner">
            <h1 class="model-hero-title">
              A computer does not transform a classroom.
              <span class="model-hero-title-accent">A complete learning system can.</span>
            </h1>

            <p class="model-hero-description">
              Impact Bridge combines offline learning technology, curated resources, trained teachers
              and local ownership into one practical model—designed for schools with limited connectivity.
            </p>

            <div class="model-hero-actions">
              <UiButton variant="primary" size="lg">
                <NuxtLink to="/donate" class="flex items-center gap-2" aria-label="Explore the model — learn how our approach works">
                  Explore the model
                  <ArrowDown class="w-5 h-5" />
                </NuxtLink>
              </UiButton>

              <UiButton variant="outline-white" size="lg" class="border-1 border-white/90">
                <a href="#inside-the-hub" class="flex items-center gap-2" aria-label="See a hub in action — view how a learning hub operates">
                  See a hub in action
                  <ArrowRight class="w-5 h-5" />
                </a>
              </UiButton>
            </div>
          </div>
        </LayoutContainer>
      </div>

      <!-- Feature Badges Strip -->
      <div class="model-hero-features">
        <LayoutContainer>
          <ul class="model-hero-feature-list">
            <li v-for="feature in features" :key="feature.label" class="model-hero-feature-item">
              <component :is="feature.icon" class="w-4 h-4 text-cobalt-400 flex-shrink-0" />
              <span class="model-hero-feature-label">{{ feature.label }}</span>
            </li>
          </ul>
        </LayoutContainer>
      </div>
    </section>

    <!-- The Model at a Glance -->
    <section id="overview" class="model-glance">
      <LayoutContainer>
        <div class="model-glance-layout">
          <!-- Header -->
          <div class="model-glance-header">
            <span class="model-glance-number">01</span>
            <h2 class="model-glance-title">The model<br />at a glance</h2>
            <p class="model-glance-description">
              Every component is useful on its own. Real learning happens when they work together.
            </p>
          </div>

          <!-- Flow Diagram -->
          <div class="model-glance-flow">
            <div class="model-glance-steps">
              <div v-for="step in modelSteps" :key="step.title" class="model-glance-step">
                <div class="model-glance-step-icon">
                  <div class="model-glance-step-circle">
                    <component :is="step.icon" />
                  </div>
                </div>
                <h3 class="model-glance-step-title">{{ step.title }}</h3>
                <p class="model-glance-step-description">{{ step.description }}</p>
              </div>
            </div>

            <!-- Connecting Line -->
            <div class="model-glance-line" aria-hidden="true">
              <svg class="model-glance-line-svg" viewBox="0 0 1000 20" preserveAspectRatio="none">
                <line x1="0" y1="10" x2="1000" y2="10" stroke="#9fb3c8" stroke-width="2" stroke-dasharray="8 4" />
              </svg>
            </div>

            <!-- Functioning Classroom Badge -->
            <div class="model-glance-result">
              <div class="model-glance-result-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <span class="model-glance-result-label">A functioning classroom.</span>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>

    <!-- Our Model sections will be built here -->
  </div>
</template>

<style scoped>
/* Hero Section */
.model-hero {
  @apply relative min-h-[85vh] flex flex-col overflow-hidden;
}

.model-hero-bg {
  @apply absolute inset-0;
}

.model-hero-image {
  @apply w-full h-full object-cover;
}

.model-hero-overlay {
  @apply absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/50;
}

/* Tab Navigation */
.model-hero-tabs {
  @apply relative z-10 pt-6;
}

.model-hero-tab-list {
  @apply flex flex-wrap gap-1 list-none p-0 m-0;
}

.model-hero-tab {
  @apply px-4 py-2 text-sm font-sans font-medium text-gray-300 hover:text-white transition-colors rounded-md;
}

.model-hero-tab--active {
  @apply text-cobalt-400 font-semibold;
}

/* Hero Content */
.model-hero-content {
  @apply relative z-10 flex-1 flex items-center py-16 md:py-20;
}

.model-hero-inner {
  @apply max-w-3xl;
}

.model-hero-title {
  @apply text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight;
}

.model-hero-title-accent {
  @apply block mt-2 italic text-cobalt-400;
}

.model-hero-description {
  @apply mt-6 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed;
}

.model-hero-actions {
  @apply mt-8 flex flex-wrap gap-4;
}

/* Feature Badges Strip */
.model-hero-features {
  @apply relative z-10 border-t border-white/10 py-4;
}

.model-hero-feature-list {
  @apply flex flex-wrap items-center gap-x-6 gap-y-3 list-none p-0 m-0;
}

.model-hero-feature-item {
  @apply flex items-center gap-2;
}

.model-hero-feature-label {
  @apply text-sm font-sans text-gray-300;
}

/* The Model at a Glance */
.model-glance {
  @apply py-16 md:py-24 bg-gray-50;
}

.model-glance-layout {
  @apply grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16 items-start;
}

.model-glance-header {
  @apply lg:sticky lg:top-8;
}

.model-glance-number {
  @apply inline-flex items-center justify-center w-10 h-10 rounded-full bg-cobalt/10 text-cobalt font-sans font-bold text-sm;
}

.model-glance-title {
  @apply mt-4 text-3xl md:text-4xl font-serif font-bold text-navy leading-tight;
}

.model-glance-description {
  @apply mt-4 text-gray-600;
}

.model-glance-flow {
  @apply relative;
}

.model-glance-steps {
  @apply grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10;
}

.model-glance-step {
  @apply flex flex-col items-center text-center;
}

.model-glance-step-icon {
  @apply mb-4;
}

.model-glance-step-circle {
  @apply w-14 h-14 rounded-full border-2 border-cobalt/20 bg-white flex items-center justify-center text-cobalt;
}

.model-glance-step-title {
  @apply text-sm font-sans font-bold text-navy leading-snug;
}

.model-glance-step-description {
  @apply mt-2 text-xs text-gray-500 leading-relaxed;
}

.model-glance-line {
  @apply absolute top-7 left-0 right-0 z-0;
}

.model-glance-line-svg {
  @apply w-full h-5;
}

.model-glance-result {
  @apply flex items-center justify-center gap-3 mt-8 py-3 px-6 bg-cobalt/5 border border-cobalt/20 rounded-full w-fit mx-auto;
}

.model-glance-result-icon {
  @apply text-cobalt;
}

.model-glance-result-label {
  @apply text-sm font-sans font-bold text-cobalt;
}
</style>
