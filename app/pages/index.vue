<script setup lang="ts">
import {
  Heart,
  Building2,
  MapPin,
  Laptop,
  Box,
  Monitor,
  Users,
  FileText,
  ArrowRight,
  ChevronRight,
  WifiOff,
  User,
  CheckCircle2,
  ChartNoAxesColumnIncreasing,
  ShieldCheck,
  Check,
  GraduationCap,
  ClipboardList,
  PieChart,
  Shield,
} from '@lucide/vue'
import type { Component } from 'vue'

import IconUsers from '~icons/fa6-solid/users'

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
  offline: WifiOff,
  teacher: User,
  community: MapPin,
  measure: ChartNoAxesColumnIncreasing,
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
  userGroup: IconUsers,
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
  {
    number: 1,
    title: 'Offline Learning Hub',
    description: 'Local curriculum and resources without continuous internet.',
    icon: Laptop
  },
  {
    number: 2,
    title: 'Trained Teacher',
    description: 'A supported teacher leads and maintains the programme.',
    icon: User
  },
  {
    number: 3,
    title: 'Engaged Classroom',
    description: 'Lessons become interactive and collaborative.',
    icon: IconUsers
  },
  {
    number: 4,
    title: 'Confident Learners',
    description: 'Understanding, participation and confidence improve.',
    icon: Heart
  },
  {
    number: 5,
    title: 'Stronger Communities',
    description: 'Local ownership sustains educational access.',
    icon: MapPin
  }
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
                    <Box class="w-4 h-4 text-blue-600 flex-shrink-0" />
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
                  <User class="w-8 h-8" />
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
    <LayoutSection class="model-section">
      <LayoutContainer>
        <div class="model-grid">
          <!-- Left Content Column -->
          <div class="model-content">
            <div class="model-header">
              <p class="model-eyebrow">OUR MODEL</p>
              <h2 class="model-title">A simple model. Lasting change.</h2>
            </div>

            <div class="model-timeline">
              <div v-for="(step, index) in modelSteps" :key="index" class="model-step">
                <div class="model-step-wrapper">
                  <!-- Circular Icon Badge -->
                  <div class="model-step-icon-badge">
                    <component :is="step.icon" class="w-6 h-6 text-blue-600" />
                  </div>

                  <!-- Arrow between items -->
                  <ArrowRight v-if="index < modelSteps.length - 1" class="model-step-arrow" />
                </div>

                <h3 class="model-step-title">
                  <span class="model-step-number">{{ step.number }}. </span>{{ step.title }}
                </h3>
                <p class="model-step-description">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </LayoutSection>

    <!-- Early Evidence -->
    <LayoutSection class="bg-white py-12 lg:py-16">
      <LayoutContainer>
        <h2 class="evidence-title">Early evidence. Real lives.</h2>

        <div class="evidence-grid">
          <!-- Left Box: Stats Container -->
          <div class="evidence-stats-card">
            <div>
              <div class="evidence-pilot-label">
                <span class="evidence-pilot-badge">PILOT PERIOD: JAN–JUNE 2026</span>
                <span class="evidence-pilot-dot">•</span>
                <span class="evidence-pilot-location">KIRYANDONGO DISTRICT</span>
              </div>

              <div class="evidence-stats">
                <div v-for="(stat, index) in pilotStats" :key="index" class="evidence-stat-tile">
                  <div class="evidence-stat-value">{{ stat.value }}</div>
                  <div class="evidence-stat-label">{{ stat.label }}</div>
                </div>
              </div>
            </div>

            <NuxtLink to="/impact" class="evidence-link" aria-label="Learn how we measure impact">
              <span>How we measure impact</span>
              <ArrowRight class="w-4 h-4 ml-1" />
            </NuxtLink>
          </div>

          <!-- Right Box: Testimonial Card -->
          <div class="evidence-testimonial">
            <img src="/images/namulava-portrait.jpg" alt="Namulava" class="evidence-testimonial-bg" />
            <div class="evidence-testimonial-overlay"></div>

            <div class="evidence-testimonial-inner">
              <blockquote class="evidence-quote">
                &ldquo;I feel like I can now finish my schooling.&rdquo;
              </blockquote>

              <div class="evidence-attribution">
                <span class="evidence-author">— Namulava, P7 Student</span>
              </div>

              <p class="evidence-story">
                Namulava is part of our pilot at Bwikya Primary School. With offline lessons and a supportive teacher,
                she’s gaining the confidence to learn and lead.
              </p>

              <NuxtLink to="/stories/namulava" class="evidence-story-link" aria-label="Read Namulava's full story">
                <span>Read Namulava's story</span>
                <ArrowRight class="w-4 h-4 ml-1" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </LayoutSection>

    <!-- Two Ways to Give -->
    <LayoutSection class="bg-white py-12 lg:py-16">
      <LayoutContainer>
        <h2 class="ways-title">Two ways to build brighter futures.</h2>

        <div class="ways-grid">
          <!-- Card 1: Give as an Individual -->
          <div class="ways-card">
            <div class="ways-card-content">
              <div class="ways-card-header">
                <Heart class="w-6 h-6 text-blue-600" />
                <h3 class="ways-card-title text-blue-600">Give as an individual</h3>
              </div>

              <p class="ways-card-description">
                Your support today helps a child learn, a teacher teach and a community grow.
              </p>

              <ul class="ways-card-list">
                <li class="ways-card-item">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>One-time or monthly giving</span>
                </li>
                <li class="ways-card-item">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Secure payments</span>
                </li>
                <li class="ways-card-item">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Instant receipt</span>
                </li>
                <li class="ways-card-item">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Direct classroom support</span>
                </li>
              </ul>

              <NuxtLink to="/donate" class="ways-btn ways-btn-blue">
                <span>Give Personally</span>
                <ArrowRight class="w-4 h-4 ml-1" />
              </NuxtLink>
            </div>

            <!-- Image Container with White Fade Gradient -->
            <div class="ways-card-image-wrap">
              <div class="ways-card-fade"></div>
              <img src="/images/children-learning.jpg" alt="Children in classroom" class="ways-card-img" />
            </div>
          </div>

          <!-- Card 2: Partner as a Company -->
          <div class="ways-card">
            <div class="ways-card-content">
              <div class="ways-card-header">
                <Building2 class="w-6 h-6 text-[#0d5c45]" />
                <h3 class="ways-card-title text-[#0d5c45]">Partner as a company</h3>
              </div>

              <p class="ways-card-description">
                Work with us to expand access to learning and create long-term impact.
              </p>

              <ul class="ways-card-list">
                <li class="ways-card-item">
                  <CheckCircle2 class="w-4 h-4 text-[#0d5c45] flex-shrink-0" />
                  <span>Fund or sponsor learning hubs</span>
                </li>
                <li class="ways-card-item">
                  <CheckCircle2 class="w-4 h-4 text-[#0d5c45] flex-shrink-0" />
                  <span>Donate suitable technology</span>
                </li>
                <li class="ways-card-item">
                  <CheckCircle2 class="w-4 h-4 text-[#0d5c45] flex-shrink-0" />
                  <span>Employee giving & volunteering</span>
                </li>
                <li class="ways-card-item">
                  <CheckCircle2 class="w-4 h-4 text-[#0d5c45] flex-shrink-0" />
                  <span>Strategic partnerships & reporting</span>
                </li>
              </ul>

              <p class="ways-card-note">
                Receive a clear proposal, implementation plan, donation acknowledgement and impact report.
              </p>

              <NuxtLink to="/corporate-partnerships" class="ways-btn ways-btn-green">
                <span>Start a Corporate Partnership</span>
                <ArrowRight class="w-4 h-4 ml-1" />
              </NuxtLink>
            </div>

            <!-- Image Container with White Fade Gradient -->
            <div class="ways-card-image-wrap">
              <div class="ways-card-fade"></div>
              <img src="/images/corporate-partner.jpg" alt="Corporate partner working" class="ways-card-img" />
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
              <Shield class="w-6 h-6" />
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
              <IconUsers class="w-6 h-6" />
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
      <!-- Geometric Wireframe Illustration on the Left -->
      <div class="bridge-cta-graphic">
        <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full opacity-35">
          <path d="M0 300L100 120L200 300L300 80L400 300" stroke="#2563eb" stroke-width="1.5" />
          <path d="M50 300L150 180L250 300L350 140" stroke="#1d4ed8" stroke-width="1.5" />
          <path d="M100 120L300 80" stroke="#2563eb" stroke-width="1.5" />
          <path d="M0 200L400 200" stroke="#1e40af" stroke-width="1" />
          <path d="M0 250L400 250" stroke="#1e40af" stroke-width="1" />
          <circle cx="100" cy="120" r="3" fill="#60a5fa" />
          <circle cx="300" cy="80" r="3" fill="#60a5fa" />
        </svg>
      </div>

      <div class="bridge-cta-inner">
        <div class="bridge-cta-content">
          <h2 class="bridge-cta-title">Be the bridge.</h2>
          <p class="bridge-cta-description">Help us launch the next 10 learning hubs.</p>
        </div>

        <div class="bridge-cta-actions">
          <!-- Donate Now Button (Vibrant Blue Fill, Outlined Heart Icon) -->
          <NuxtLink to="/donate" class="bridge-btn bridge-btn-primary"
            aria-label="Donate now to support offline learning hubs">
            <Heart class="w-5 h-5 text-white stroke-[2]" />
            <span>Donate Now</span>
          </NuxtLink>

          <!-- Partner With Us Button (Cyan/Teal Outline Border) -->
          <NuxtLink to="/corporate-partnerships" class="bridge-btn bridge-btn-outline"
            aria-label="Partner with us — corporate partnership opportunities">
            <Building2 class="w-5 h-5 text-white" />
            <span>Partner With Us</span>
          </NuxtLink>
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
  @apply hidden justify-self-end ml-auto lg:block max-w-[300px];
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
.model-section {
  @apply relative bg-white py-16 lg:py-24;
}

.model-header {
  @apply text-center mb-16;
}

.model-eyebrow {
  @apply text-xs font-sans font-bold text-blue-600 uppercase tracking-widest mb-2;
}

.model-title {
  @apply text-3xl md:text-4xl font-serif font-bold text-gray-900 tracking-tight;
}

/* 5-Column Grid spanning full width */
.model-timeline {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 items-start w-full;
}

.model-step {
  @apply flex flex-col items-center text-center relative px-2;
}

.model-step-wrapper {
  @apply relative flex items-center justify-center w-full mb-5;
}

.model-step-icon-badge {
  @apply w-16 h-16 rounded-full bg-blue-50/80 flex items-center justify-center flex-shrink-0 transition-transform duration-200 hover:scale-105;
}

/* Centered horizontal arrow pointing to the next step */
.model-step-arrow {
  @apply hidden lg:block w-4 h-4 text-blue-500 absolute -right-2 top-1/2 -translate-y-1/2 z-10;
}

.model-step-title {
  @apply text-[15px] font-sans font-bold text-gray-900 leading-snug;
}

.model-step-number {
  @apply font-bold text-gray-900;
}

.model-step-description {
  @apply mt-2 text-[13px] font-sans text-gray-600 leading-relaxed max-w-[200px] mx-auto;
}

.evidence-title {
  @apply text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 tracking-tight;
}

.evidence-grid {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch;
}

/* Left Card (Stats Container) */
.evidence-stats-card {
  @apply bg-[#f0f5fe] rounded-2xl p-6 md:p-8 flex flex-col justify-between;
}

.evidence-pilot-label {
  @apply flex items-center gap-2 text-[11px] font-sans font-bold text-blue-500 tracking-wider uppercase mb-6;
}

.evidence-pilot-dot {
  @apply text-blue-400;
}

.evidence-stats {
  @apply grid grid-cols-5 gap-2 md:gap-3 my-auto;
}

.evidence-stat-tile {
  @apply bg-white rounded-xl p-3 md:p-4 text-center flex flex-col justify-between shadow-sm min-h-[110px];
}

.evidence-stat-value {
  @apply text-2xl md:text-3xl font-serif font-bold text-blue-700 leading-none mb-2;
}

.evidence-stat-label {
  @apply text-[11px] font-sans text-gray-600 leading-tight font-medium;
}

.evidence-link {
  @apply mt-6 inline-flex items-center text-[13px] font-sans font-bold text-blue-600 hover:text-blue-800 transition-colors;
}

/* Right Card (Testimonial with Image) */
.evidence-title {
  @apply text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 tracking-tight;
}

.evidence-grid {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch;
}

/* Left Card (Stats Container) */
.evidence-stats-card {
  @apply bg-[#f0f5fe] rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full;
}

.evidence-pilot-label {
  @apply flex items-center gap-2 text-[11px] font-sans font-bold text-blue-500 tracking-wider uppercase mb-6;
}

.evidence-pilot-dot {
  @apply text-blue-400;
}

/* 5-Column layout for metric boxes */
.evidence-stats {
  @apply grid grid-cols-5 gap-2.5 my-auto;
}

.evidence-stat-tile {
  @apply bg-white rounded-xl p-3 md:py-5 md:px-3 text-center flex flex-col items-center justify-between shadow-sm min-h-[120px];
}

.evidence-stat-value {
  @apply text-2xl md:text-3xl font-serif font-bold text-blue-700 leading-none mb-2;
}

.evidence-stat-label {
  @apply text-[11px] font-sans text-gray-600 leading-snug font-medium max-w-[85px] mx-auto;
}

.evidence-link {
  @apply mt-6 inline-flex items-center text-[13px] font-sans font-bold text-blue-600 hover:text-blue-800 transition-colors;
}

/* Right Card (Testimonial with Image Overlay) */
.evidence-testimonial {
  @apply relative rounded-2xl overflow-hidden min-h-[360px] flex items-center p-6 md:p-8 bg-gray-900 text-white;
}

.evidence-testimonial-bg {
  @apply absolute inset-0 w-full h-full object-cover object-right z-0;
}

.evidence-testimonial-overlay {
  @apply absolute inset-0 bg-gradient-to-r from-[#030d1a] via-[#030d1a]/80 to-transparent z-10;
}

.evidence-testimonial-inner {
  @apply relative z-20 max-w-[65%] flex flex-col justify-center;
}

.evidence-quote {
  @apply text-2xl md:text-3xl font-serif font-bold text-white leading-tight tracking-tight;
}

.evidence-attribution {
  @apply mt-2 mb-4;
}

.evidence-author {
  @apply text-[13px] font-sans font-semibold text-gray-300;
}

.evidence-story {
  @apply text-[12px] font-sans text-gray-300 leading-relaxed max-w-[280px];
}

.evidence-story-link {
  @apply mt-6 inline-flex items-center text-[13px] font-sans font-bold text-white hover:underline transition-all;
}

/* Two Ways to Give */
.ways-title {
  @apply text-3xl md:text-4xl font-serif font-bold text-gray-900 text-center mb-10 tracking-tight;
}

.ways-grid {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch;
}

.ways-card {
  @apply relative bg-white border border-gray-200/80 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-sm min-h-[380px];
}

.ways-card-content {
  @apply relative z-20 flex-1 p-6 md:p-8 flex flex-col justify-between max-w-full md:max-w-[62%];
}

.ways-card-header {
  @apply flex items-center gap-2.5 mb-2;
}

.ways-card-title {
  @apply text-xl font-serif font-bold tracking-tight;
}

.ways-card-description {
  @apply text-[13px] font-sans text-gray-600 leading-snug mb-5;
}

.ways-card-list {
  @apply space-y-2.5 mb-4;
}

.ways-card-item {
  @apply flex items-center gap-2.5 text-[12px] font-sans font-medium text-gray-800;
}

.ways-card-note {
  @apply text-[11px] font-sans text-gray-500 leading-relaxed mb-4;
}

.ways-btn {
  @apply inline-flex items-center justify-center px-5 py-2.5 rounded-full text-[13px] font-sans font-semibold text-white transition-all whitespace-nowrap self-start mt-auto;
}

.ways-btn-blue {
  @apply bg-blue-600 hover:bg-blue-700;
}

.ways-btn-green {
  @apply bg-[#0d5c45] hover:bg-[#094231];
}

/* Image & Gradient Fade */
.ways-card-image-wrap {
  @apply relative md:absolute md:right-0 md:top-0 md:bottom-0 md:w-[48%] h-48 md:h-full z-10 overflow-hidden;
}

.ways-card-fade {
  @apply hidden md:block absolute inset-0 z-10 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none;
}

.ways-card-img {
  @apply w-full h-full object-cover object-center;
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

.bridge-cta-section {
  @apply relative overflow-hidden bg-gradient-to-r from-[#011438] via-[#032363] to-[#011233] text-white py-12 md:py-16;
}

.bridge-cta-graphic {
  @apply absolute left-0 top-0 bottom-0 w-[45%] pointer-events-none z-0 mix-blend-screen;
}

.bridge-cta-inner {
  @apply max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10;
}

.bridge-cta-content {
  @apply text-left max-w-xl;
}

.bridge-cta-title {
  @apply text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-white leading-tight;
}

.bridge-cta-description {
  @apply mt-2 text-base md:text-lg font-sans text-gray-200 font-normal opacity-90;
}

.bridge-cta-actions {
  @apply flex flex-wrap items-center gap-4;
}

/* Button Base Class */
.bridge-btn {
  @apply inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-sans text-sm font-semibold transition-all duration-200 shadow-md;
}

/* Primary Donate Button */
.bridge-btn-primary {
  @apply bg-[#1450f5] hover:bg-[#0f43d4] text-white border border-transparent;
}

/* Teal/Cyan Outlined Partner Button */
.bridge-btn-outline {
  @apply bg-transparent text-white border-2 border-[#00c4cc] hover:bg-[#00c4cc]/10;
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
