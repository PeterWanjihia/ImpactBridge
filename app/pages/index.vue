<script setup lang="ts">
import {
  Heart,
  Building2,
  MapPin,
  Monitor,
  Users,
  FileText,
  ChevronRight,
  CircleCheck,
  User,
  ChartNoAxesCombined,
  ShieldCheck,
  Check,
  GraduationCap,
  ClipboardList,
  PieChart,
  Shield,
} from '@lucide/vue'
import type { Component } from 'vue'

useHead({
  title: 'Impact Bridge - Offline Learning Hubs for Schools Without Connectivity',
  meta: [
    { name: 'description', content: 'We bring offline digital learning hubs, teacher training and resources to schools without reliable connectivity—so every child can learn, no matter where they are.' }
  ]
})

const campaign = {
  title: 'Launch 10 Learning Hubs',
  raised: 18450,
  goal: 30000,
  hubsFunded: 6,
  devicesCommitted: 38,
  learnersExpected: '500+'
}

const iconMap: Record<string, Component> = {
  offline: CircleCheck,
  teacher: User,
  community: Building2,
  measure: ChartNoAxesCombined,
  school: GraduationCap,
  heart: Heart,
  building: Building2,
  check: Check,
  fileText: FileText,
  chevronRight: ChevronRight,
  laptop: Monitor,
  pieChart: PieChart,
  shield: Shield,
  shieldCheck: ShieldCheck,
  clipboard: ClipboardList,
  mapPin: MapPin,
  users: Users,
}

const valueProps = [
  {
    iconKey: 'offline',
    title: 'Offline-First',
    description: 'Learning that works without internet.'
  },
  {
    iconKey: 'teacher',
    title: 'Teacher-Led',
    description: 'Teachers at the centre of every classroom.'
  },
  {
    iconKey: 'community',
    title: 'Locally Owned',
    description: 'Built with communities, for communities.'
  },
  {
    iconKey: 'measure',
    title: 'Transparently Measured',
    description: 'We track what matters and share our results.'
  }
]

const challengeStats = [
  { value: '60%', label: 'of Ugandan schools lack reliable internet access' },
  { value: '1 in 3', label: 'teachers lack access to digital teaching resources' },
  { iconKey: 'school', label: 'Rural classrooms remain underserved by digital learning tools' }
]

const modelSteps = [
  { number: 1, title: 'Offline Learning Hub', description: 'Local curriculum and resources without continuous internet.' },
  { number: 2, title: 'Trained Teacher', description: 'A supported teacher leads and maintains the programme.' },
  { number: 3, title: 'Engaged Classroom', description: 'Lessons become interactive and collaborative.' },
  { number: 4, title: 'Confident Learners', description: 'Understanding, participation and confidence improve.' },
  { number: 5, title: 'Stronger Communities', description: 'Local ownership sustains educational access.' }
]

const pilotStats = [
  { value: '52', label: 'learners enrolled' },
  { value: '2', label: 'teachers trained' },
  { value: '1', label: 'learning hub operating' },
  { value: '85%', label: 'improved assessment scores' },
  { value: '90%', label: 'reported greater confidence' }
]
</script>

<template>
  <div class="page-home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg">
        <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1920&q=80"
          alt="Students in a classroom using offline digital learning resources" class="hero-bg-image" width="1920"
          height="1080" fetchpriority="high" />
        <div class="hero-bg-overlay" />
      </div>
      <div class="hero-content">
        <LayoutContainer>
          <div class="hero-grid">
            <div class="hero-text">
              <p class="hero-eyebrow">EVERY CHILD. EVERY CLASS. EVERYWHERE.</p>
              <h1 class="hero-title">
                The internet should not decide who gets to <span class="hero-title-accent">learn.</span>
              </h1>
              <p class="hero-subtitle">
                We bring offline digital learning hubs, teacher training and resources to schools without reliable
                internet—so every child can learn, no matter where they are.
              </p>
              <div class="hero-actions">
                <UiButton variant="primary" size="lg">
                  <NuxtLink to="/donate" aria-label="Fund the Next Classroom — donate to support offline learning"
                    class="flex items-center gap-2">
                    <Heart class="w-5 h-5" />
                    Fund the Next Classroom
                  </NuxtLink>
                </UiButton>
                <UiButton variant="outline-white" class="border-1 border-white-900" size="lg">
                  <NuxtLink to="/corporate-partnerships"
                    aria-label="Partner as a Company — corporate partnership opportunities"
                    class="flex items-center gap-2">
                    <Building2 class="w-5 h-5" />
                    Partner as a Company
                  </NuxtLink>
                </UiButton>
              </div>
              <p class="hero-note">
                Fund learning hubs, donate suitable technology or contribute expertise.
              </p>
            </div>

            <div class="hero-card">
              <div class="hero-card-inner">
                <h3 class="hero-card-title">{{ campaign.title }}</h3>

                <div class="hero-card-amount">
                  <span class="hero-card-currency">£</span>{{ campaign.raised.toLocaleString() }}
                </div>

                <p class="hero-card-goal">raised of £{{ campaign.goal.toLocaleString() }} goal</p>

                <CampaignProgress :current="campaign.raised" :goal="campaign.goal" :show-labels="false"
                  class="mt-3 mb-6" />

                <div class="hero-card-stats">
                  <div class="hero-card-stat">
                    <div class="hero-card-stat-icon">
                      <MapPin class="w-5 h-5 text-blue-600" />
                    </div>
                    <div class="hero-card-stat-content">
                      <span class="hero-card-stat-value">{{ campaign.hubsFunded }}</span>
                      <span class="hero-card-stat-label">hubs funded</span>
                    </div>
                  </div>

                  <div class="hero-card-stat">
                    <div class="hero-card-stat-icon">
                      <Laptop class="w-5 h-5 text-blue-600" />
                    </div>
                    <div class="hero-card-stat-content">
                      <span class="hero-card-stat-value">{{ campaign.devicesCommitted }}</span>
                      <span class="hero-card-stat-label">suitable devices<br />committed</span>
                    </div>
                  </div>

                  <div class="hero-card-stat">
                    <div class="hero-card-stat-icon">
                      <Users class="w-5 h-5 text-blue-600" />
                    </div>
                    <div class="hero-card-stat-content">
                      <span class="hero-card-stat-value">{{ campaign.learnersExpected }}</span>
                      <span class="hero-card-stat-label">learners expected<br />to benefit</span>
                    </div>
                  </div>
                </div>

                <div class="hero-card-links">
                  <NuxtLink to="/corporate-partnerships" class="hero-card-link"
                    aria-label="View corporate partnership pack">
                    <FileText class="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>View corporate partnership pack</span>
                    <ArrowRight class="w-4 h-4 ml-auto text-blue-600" />
                  </NuxtLink>

                  <NuxtLink to="/donate-equipment" class="hero-card-link"
                    aria-label="View equipment donation guidelines">
                    <Package class="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>View equipment donation guidelines</span>
                    <ArrowRight class="w-4 h-4 ml-auto text-blue-600" />
                  </NuxtLink>
                </div>
              </div>
            </div>

          </div>
        </LayoutContainer>
      </div>
    </section>

    <!-- Value Propositions Strip -->
    <LayoutSection background="white">
      <LayoutContainer>
        <div class="value-props-grid">
          <div v-for="(prop, index) in valueProps" :key="index" class="value-prop">
            <div class="value-prop-icon">
              <component :is="iconMap[prop.iconKey]" class="w-8 h-8" />
            </div>
            <div>
              <h3 class="value-prop-title">{{ prop.title }}</h3>
              <p class="value-prop-description">{{ prop.description }}</p>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </LayoutSection>

    <!-- The Challenge -->
    <LayoutSection background="white">
      <LayoutContainer>
        <div class="challenge-grid">
          <div class="challenge-content">
            <p class="challenge-eyebrow">The Challenge</p>
            <h2 class="challenge-title">Too many learners are left behind.</h2>
            <p class="challenge-description">
              In too many schools, unreliable internet and a lack of digital resources leave children without the
              opportunity to learn and grow.
            </p>
            <div class="challenge-stats">
              <div v-for="(stat, index) in challengeStats" :key="index" class="challenge-stat">
                <div v-if="stat.value" class="challenge-stat-value">{{ stat.value }}</div>
                <div v-else class="challenge-stat-icon">
                  <GraduationCap class="w-8 h-8" />
                </div>
                <p class="challenge-stat-label">{{ stat.label }}</p>
              </div>
            </div>
            <p class="challenge-source">*Sources: UNESCO (2023), MICS (2023)</p>
          </div>
          <div class="challenge-media"><img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80"
              alt="Students sitting in rows in a rural Ugandan school classroom" class="challenge-image" loading="lazy"
              width="800" height="600" />
          </div>
        </div>
      </LayoutContainer>
    </LayoutSection>

    <!-- Our Model -->
    <LayoutSection background="gray">
      <LayoutContainer>
        <div class="model-header">
          <p class="model-eyebrow">Our Model</p>
          <h2 class="model-title">A simple model. Lasting change.</h2>
        </div>
        <div class="model-timeline">
          <div v-for="(step, index) in modelSteps" :key="index" class="model-step">
            <div class="model-step-number">{{ step.number }}</div>
            <h3 class="model-step-title">{{ step.title }}</h3>
            <p class="model-step-description">{{ step.description }}</p>
            <ChevronRight v-if="index < modelSteps.length - 1" class="model-step-arrow" />
          </div>
        </div>
      </LayoutContainer>
    </LayoutSection>

    <!-- Early Evidence -->
    <LayoutSection background="white">
      <LayoutContainer>
        <div class="evidence-grid">
          <div class="evidence-content">
            <h2 class="evidence-title">Early evidence. Real lives.</h2>
            <div class="evidence-pilot-label">
              <span class="evidence-pilot-badge">Pilot Period: Jan – June 2026</span>
              <span class="evidence-pilot-location">Kiryandongo District</span>
            </div>
            <div class="evidence-stats">
              <div v-for="(stat, index) in pilotStats" :key="index" class="evidence-stat">
                <div class="evidence-stat-value">{{ stat.value }}</div>
                <div class="evidence-stat-label">{{ stat.label }}</div>
              </div>
            </div>
            <NuxtLink to="/impact" class="evidence-link" aria-label="Learn how we measure impact">
              How we measure impact
              <ChevronRight class="w-4 h-4" />
            </NuxtLink>
          </div>
          <div class="evidence-testimonial">
            <div class="evidence-testimonial-inner">
              <blockquote class="evidence-quote">
                <span aria-hidden="true">&ldquo;</span>I feel like I can now finish my schooling.<span
                  aria-hidden="true">&rdquo;</span>
              </blockquote>
              <div class="evidence-attribution">
                <span class="evidence-author">— Namulowa, P7 Student</span>
              </div>
              <p class="evidence-story">
                Namulowa is part of our pilot at Bwalya Primary School. With offline lessons and a trained teacher, she
                is gaining the confidence to learn and lead.
              </p>
              <NuxtLink to="/stories/namulowa" class="evidence-story-link" aria-label="Read Namulowa's full story">
                Read Namulowa's story
                <ChevronRight class="w-4 h-4" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </LayoutSection>

    <!-- Two Ways to Give -->
    <LayoutSection background="white">
      <LayoutContainer>
        <h2 class="ways-title">Two ways to build brighter futures.</h2>
        <div class="ways-grid">
          <div class="ways-card">
            <div class="ways-card-inner">
              <div class="ways-card-text">
                <div class="ways-card-header">
                  <Heart class="ways-card-icon" fill="currentColor" />
                  <h3 class="ways-card-title">Give as an individual</h3>
                </div>
                <p class="ways-card-description">
                  Your support today helps a child learn, a teacher teach, and a community grow.
                </p>
                <ul class="ways-card-list">
                  <li class="ways-card-item">
                    <Check class="ways-card-check" />
                    One-time or monthly giving
                  </li>
                  <li class="ways-card-item">
                    <Check class="ways-card-check" />
                    Secure payments
                  </li>
                  <li class="ways-card-item">
                    <Check class="ways-card-check" />
                    Instant receipt
                  </li>
                  <li class="ways-card-item">
                    <Check class="ways-card-check" />
                    Direct classroom support
                  </li>
                </ul>
                <UiButton variant="primary" size="md" class="mt-6">
                  <NuxtLink to="/donate" class="flex items-center gap-2"
                    aria-label="Give personally — make a personal donation">
                    Give Personally
                    <ChevronRight class="w-4 h-4" />
                  </NuxtLink>
                </UiButton>
              </div>
              <div class="ways-card-image">
                <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80"
                  alt="Children in a classroom learning together" class="ways-card-img" loading="lazy" width="600"
                  height="400" />
              </div>
            </div>
          </div>
          <div class="ways-card">
            <div class="ways-card-inner">
              <div class="ways-card-text">
                <div class="ways-card-header">
                  <Building2 class="ways-card-icon" />
                  <h3 class="ways-card-title">Partner as a company</h3>
                </div>
                <p class="ways-card-description">
                  Work with us to expand access to learning and create long-term impact.
                </p>
                <ul class="ways-card-list">
                  <li class="ways-card-item">
                    <Check class="ways-card-check" />
                    Fund or sponsor learning hubs
                  </li>
                  <li class="ways-card-item">
                    <Check class="ways-card-check" />
                    Donate suitable technology
                  </li>
                  <li class="ways-card-item">
                    <Check class="ways-card-check" />
                    Enable teacher development
                  </li>
                  <li class="ways-card-item">
                    <Check class="ways-card-check" />
                    Strategic partnerships & reporting
                  </li>
                </ul>
                <p class="ways-card-note">
                  Receive a clear proposal, implementation plan, donation acknowledgement and impact report.
                </p>
                <UiButton variant="secondary" size="md" class="mt-6">
                  <NuxtLink to="/corporate-partnerships" class="flex items-center gap-2"
                    aria-label="Start a corporate partnership">
                    Start a Corporate Partnership
                    <ChevronRight class="w-4 h-4" />
                  </NuxtLink>
                </UiButton>
              </div>
              <div class="ways-card-image">
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80"
                  alt="Students working together with laptops in a corporate learning environment" class="ways-card-img"
                  loading="lazy" width="600" height="400" />
              </div>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </LayoutSection>

    <!-- Built for Responsible Implementation -->
    <LayoutSection background="white">
      <LayoutContainer>
        <h2 class="implementation-title">Built for responsible implementation</h2>
        <div class="implementation-grid">
          <NuxtLink to="/corporate-partnerships" class="implementation-card"
            aria-label="View Corporate Partnership Pack">
            <div class="implementation-card-icon">
              <FileText class="w-6 h-6" />
            </div>
            <h3 class="implementation-card-title">Corporate Partnership Pack</h3>

            <p class="implementation-card-description">Learn our approach, impact framework and partnership
              opportunities.</p>
            <span class="implementation-card-link">View the pack
              <ChevronRight class="w-4 h-4" />
            </span>
          </NuxtLink>
          <NuxtLink to="/donate-equipment" class="implementation-card" aria-label="View Equipment Donation Guidelines">
            <div class="implementation-card-icon">
              <Monitor class="w-6 h-6" />
            </div>
            <h3 class="implementation-card-title">Equipment Donation Guidelines</h3>
            <p class="implementation-card-description">Assessment criteria and conditions that ensure meaningful impact.
            </p>
            <span class="implementation-card-link">View guidelines
              <ChevronRight class="w-4 h-4" />
            </span>
          </NuxtLink>
          <NuxtLink to="/transparency" class="implementation-card" aria-label="View Governance and Financial Reports">
            <div class="implementation-card-icon">
              <PieChart class="w-6 h-6" />
            </div>
            <h3 class="implementation-card-title">Governance & Financial Reports</h3>
            <p class="implementation-card-description">Financial reporting and responsible stewardship.</p>
            <span class="implementation-card-link">View reports
              <ChevronRight class="w-4 h-4" />
            </span>
          </NuxtLink>
          <NuxtLink to="/transparency#safeguarding" class="implementation-card"
            aria-label="View Safeguarding and Complaints information">
            <div class="implementation-card-icon">
              <ShieldCheck class="w-6 h-6" />
            </div>
            <h3 class="implementation-card-title">Safeguarding & Complaints</h3>
            <p class="implementation-card-description">Our commitment to child safety and accountability.</p>
            <span class="implementation-card-link">Learn more
              <ChevronRight class="w-4 h-4" />
            </span>
          </NuxtLink>
        </div>
      </LayoutContainer>
    </LayoutSection>

    <!-- Be the Bridge CTA -->
    <section class="bridge-cta-section">
      <div class="bridge-cta-inner">
        <div class="bridge-cta-content">
          <h2 class="bridge-cta-title">Be the bridge.</h2>
          <p class="bridge-cta-description">Help us launch the next 10 learning hubs.</p>
        </div>
        <div class="bridge-cta-actions">
          <UiButton variant="primary" size="lg">
            <NuxtLink to="/donate" class="flex items-center gap-2"
              aria-label="Donate now to support offline learning hubs">
              <Heart class="w-5 h-5" fill="currentColor" />
              Donate Now
            </NuxtLink>
          </UiButton>
          <UiButton variant="outline-white" size="lg">
            <NuxtLink to="/corporate-partnerships" class="flex items-center gap-2"
              aria-label="Partner with us — corporate partnership opportunities">
              <Building2 class="w-5 h-5" />
              Partner With Us
            </NuxtLink>
          </UiButton>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero Section */
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
  @apply relative z-10 w-full py-20 md:py-24;
}

.hero-grid {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center;
}

.hero-eyebrow {
  @apply text-sm font-sans font-semibold text-cobalt uppercase tracking-wider mb-4;
}

.hero-title {
  @apply text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight;
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
  @apply hidden lg:block max-w-[340px];
}

.hero-card-inner {
  @apply bg-white rounded-2xl p-6 shadow-2xl border border-gray-100;
}

.hero-card-title {
  @apply text-2xl font-serif font-bold text-gray-900 leading-tight tracking-tight;
}

.hero-card-amount {
  @apply text-3xl font-serif font-bold text-gray-900 mt-4 leading-none;
}

.hero-card-currency {
  @apply font-serif;
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
  @apply w-12 h-12 flex items-center justify-center bg-blue-50/80 rounded-2xl flex-shrink-0;
}

.hero-card-stat-content {
  @apply flex flex-col justify-center;
}

.hero-card-stat-value {
  @apply text-xl font-serif font-bold text-gray-900 leading-tight;
}

.hero-card-stat-label {
  @apply text-[12px] font-sans text-gray-600 leading-snug mt-0.5;
}

.hero-card-links {
  @apply mt-2 pt-4 border-t border-gray-100 space-y-3;
}

.hero-card-link {
  @apply flex items-center gap-2.5 text-[13px] font-sans font-semibold text-blue-600 hover:text-blue-800 transition-colors;
}

/* Value Propositions */
.value-props-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6;
}

.value-prop {
  @apply flex items-start gap-3;
}

.value-prop-icon {
  @apply flex-shrink-0 w-10 h-10 flex items-center justify-center bg-cobalt/10 rounded-lg text-cobalt;
}

.value-prop-title {
  @apply text-base font-sans font-bold text-navy;
}

.value-prop-description {
  @apply mt-1 text-sm text-gray-600;
}

/* The Challenge */
.challenge-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center;
}

.challenge-eyebrow {
  @apply text-sm font-sans font-semibold text-cobalt uppercase tracking-wider mb-3;
}

.challenge-title {
  @apply text-3xl md:text-4xl font-serif font-bold text-navy;
}

.challenge-description {
  @apply mt-4 text-gray-600;
}

.challenge-stats {
  @apply mt-8 grid grid-cols-3 gap-4;
}

.challenge-stat {
  @apply bg-gray-50 rounded-lg p-4;
}

.challenge-stat-value {
  @apply text-2xl font-sans font-bold text-navy;
}

.challenge-stat-icon {
  @apply text-2xl;
}

.challenge-stat-label {
  @apply mt-2 text-xs text-gray-600;
}

.challenge-source {
  @apply mt-4 text-xs text-gray-400;
}

.challenge-image {
  @apply w-full rounded-lg shadow-lg;
}

/* Our Model */
.model-header {
  @apply text-center mb-12;
}

.model-eyebrow {
  @apply text-sm font-sans font-semibold text-cobalt uppercase tracking-wider mb-3;
}

.model-title {
  @apply text-3xl md:text-4xl font-serif font-bold text-navy;
}

.model-timeline {
  @apply flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0;
}

.model-step {
  @apply flex-1 relative text-center px-4;
}

.model-step-number {
  @apply w-10 h-10 mx-auto flex items-center justify-center bg-cobalt text-white rounded-full font-sans font-bold text-sm;
}

.model-step-title {
  @apply mt-3 text-sm font-sans font-bold text-navy;
}

.model-step-description {
  @apply mt-1 text-xs text-gray-600;
}

.model-step-arrow {
  @apply hidden md:block w-6 h-6 text-gray-400 absolute -right-3 top-3;
}

/* Early Evidence */
.evidence-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start;
}

.evidence-title {
  @apply text-3xl md:text-4xl font-serif font-bold text-navy;
}

.evidence-pilot-label {
  @apply mt-4 flex flex-wrap items-center gap-3;
}

.evidence-pilot-badge {
  @apply text-xs font-sans font-semibold text-cobalt uppercase tracking-wider;
}

.evidence-pilot-location {
  @apply text-xs text-gray-500;
}

.evidence-stats {
  @apply mt-8 grid grid-cols-5 gap-4;
}

.evidence-stat {
  @apply text-center;
}

.evidence-stat-value {
  @apply text-2xl md:text-3xl font-sans font-bold text-navy;
}

.evidence-stat-label {
  @apply mt-1 text-xs text-gray-600;
}

.evidence-link {
  @apply mt-6 inline-flex items-center gap-2 text-sm font-sans font-semibold text-cobalt hover:text-navy transition-colors;
}

.evidence-testimonial {
  @apply rounded-xl p-8 bg-gradient-to-br from-navy to-teal;
}

.evidence-testimonial-inner {
  @apply relative;
}

.evidence-quote {
  @apply text-2xl md:text-3xl font-serif font-bold text-white leading-snug;
}

.evidence-attribution {
  @apply mt-4;
}

.evidence-author {
  @apply text-sm font-sans font-semibold text-gray-200;
}

.evidence-story {
  @apply mt-4 text-sm text-gray-300;
}

.evidence-story-link {
  @apply mt-4 inline-flex items-center gap-2 text-sm font-sans font-semibold text-cobalt-300 hover:text-white transition-colors;
}

/* Two Ways to Give */
.ways-title {
  @apply text-3xl md:text-4xl font-serif font-bold text-navy text-center mb-12;
}

.ways-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-8;
}

.ways-card {
  @apply bg-white border border-gray-200 rounded-xl overflow-hidden;
}

.ways-card-inner {
  @apply flex flex-col md:flex-row;
}

.ways-card-text {
  @apply flex-1 p-8;
}

.ways-card-image {
  @apply md:w-2/5 flex-shrink-0;
}

.ways-card-img {
  @apply w-full h-full object-cover;
}

.ways-card-header {
  @apply flex items-center gap-3;
}

.ways-card-icon {
  @apply w-6 h-6 text-cobalt;
}

.ways-card-title {
  @apply text-xl font-serif font-bold text-navy;
}

.ways-card-description {
  @apply mt-4 text-sm text-gray-600;
}

.ways-card-list {
  @apply mt-6 space-y-3;
}

.ways-card-item {
  @apply flex items-start gap-2 text-sm text-gray-700;
}

.ways-card-check {
  @apply w-4 h-4 text-green-500 mt-0.5 flex-shrink-0;
}

.ways-card-note {
  @apply mt-4 text-xs text-gray-500;
}

/* Built for Responsible Implementation */
.implementation-title {
  @apply text-3xl md:text-4xl font-serif font-bold text-navy text-center mb-12;
}

.implementation-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6;
}

.implementation-card {
  @apply block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow;
}

.implementation-card-icon {
  @apply w-10 h-10 flex items-center justify-center bg-cobalt/10 rounded-lg text-cobalt;
}

.implementation-card-title {
  @apply mt-4 text-base font-serif font-bold text-navy;
}

.implementation-card-description {
  @apply mt-2 text-sm text-gray-600;
}

.implementation-card-link {
  @apply mt-4 inline-flex items-center gap-1 text-sm font-sans font-semibold text-cobalt hover:text-navy transition-colors;
}

/* Be the Bridge CTA */
.bridge-cta-section {
  @apply bg-navy text-white;
  @apply relative overflow-hidden;
}

.bridge-cta-section::before {
  content: '';
  @apply absolute inset-0 opacity-10;
  background-image: url('/logo.png');
  background-size: 400px;
  background-position: right center;
  background-repeat: no-repeat;
}

.bridge-cta-inner {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  @apply flex flex-col md:flex-row items-center justify-between gap-8 py-16;
  @apply relative z-10;
}

.bridge-cta-content {
  @apply text-left;
}

.bridge-cta-title {
  @apply text-3xl md:text-4xl font-serif font-bold;
}

.bridge-cta-description {
  @apply mt-4 text-lg opacity-90;
}

.bridge-cta-actions {
  @apply flex flex-wrap gap-4;
}

/* UI/UX Pro Max Priority 1: Focus-visible for keyboard navigation */
.page-home :deep(a:focus-visible),
.page-home :deep(button:focus-visible) {
  @apply outline-2 outline-offset-2 outline-cobalt ring-2 ring-cobalt/50;
}

/* UI/UX Pro Max Priority 2: Min touch target 44x44px on interactive elements */
.hero-card-link {
  @apply min-h-[44px] flex items-center;
}

.evidence-link,
.evidence-story-link {
  @apply min-h-[44px] inline-flex items-center;
}

.implementation-card {
  @apply min-h-[44px];
}
</style>
