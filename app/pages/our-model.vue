<script setup lang="ts">

import { WifiOff, MapPin, ArrowDown, ArrowRight, User2 } from '@lucide/vue'
import { svgToVNode } from '~/utils/svg'
import bookOpenSvg from '~/assets/icons/book-open.svg?raw'
import barChartSvg from '~/assets/icons/bar-chart.svg?raw'
import serverSvg from '~/assets/icons/server.svg?raw'
import schoolSvg from '~/assets/icons/school.svg?raw'
import groupSvg from '~/assets/icons/group-of-people.svg?raw'
import handshakeSvg from '~/assets/icons/handshake.svg?raw'
import supportSvg from '~/assets/icons/support.svg?raw'
import searchSvg from '~/assets/icons/search.svg?raw'
import folderSvg from '~/assets/icons/folder.svg?raw'
import classroomSvg from '~/assets/icons/classroom.svg?raw'
import biometricSvg from '~/assets/icons/Biometric.svg?raw'

const BookOpenIcon = svgToVNode(bookOpenSvg)
const BarChartIcon = svgToVNode(barChartSvg)
const ServerIcon = svgToVNode(serverSvg)
const SchoolIcon = svgToVNode(schoolSvg)
const GroupIcon = svgToVNode(groupSvg)
const HandshakeIcon = svgToVNode(handshakeSvg)
const SupportIcon = svgToVNode(supportSvg)
const SearchIcon = svgToVNode(searchSvg)
const FolderIcon = svgToVNode(folderSvg)
const ClassroomIcon = svgToVNode(classroomSvg)
const BiometricIcon = svgToVNode(biometricSvg)

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
  { icon: GroupIcon, label: 'Teacher-led' },
  { icon: BookOpenIcon, label: 'Curriculum-aligned' },
  { icon: MapPin, label: 'Locally implemented' },
  { icon: SupportIcon, label: 'Continuously supported' },
  { icon: BarChartIcon, label: 'Transparently measured' },
]

const modelSteps = [
  { title: 'Appropriate infrastructure', description: 'Reliable technology built for real classroom conditions.', icon: ServerIcon },
  { title: 'Curated offline content', description: 'Curriculum-relevant resources available without the internet.', icon: BookOpenIcon },
  { title: 'Prepared teachers', description: 'Teachers trained to integrate technology into lessons.', icon: User2 },
  { title: 'Classroom practice', description: 'Interactive teaching that engages and deepens learning.', icon: ClassroomIcon },
  { title: 'Local ownership and support', description: 'Champion teachers and school leaders carry it forward.', icon: GroupIcon },
  { title: 'Measurement and improvement', description: 'We monitor, learn and make the model stronger.', icon: BarChartIcon },
]

const readinessCards = [
  {
    title: 'Leadership commitment',
    description: 'School leaders understand and support the vision.',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&q=80',
    alt: 'School leader discussing partnership plans',
  },
  {
    title: 'Teacher readiness',
    description: 'Teachers are ready to learn, lead and integrate.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80',
    alt: 'Teacher training session in progress',
  },
  {
    title: 'Classroom suitability',
    description: 'Space, security and power are assessed and prepared.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80',
    alt: 'Classroom space being assessed for hub setup',
  },
  {
    title: 'Curriculum needs',
    description: 'We understand the subjects and topics that matter most.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80',
    alt: 'Students engaged with curriculum materials',
  },
  {
    title: 'Local support capacity',
    description: 'Communities and partners help sustain the hub.',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&q=80',
    alt: 'Community members supporting the learning hub',
  },
]

const hubComponents = [
  {
    name: 'Microcomputer',
    description: 'Low-power, reliable and easy to maintain.',
    side: 'left' as const,
  },
  {
    name: 'Offline content storage',
    description: 'Stores months of curriculum resources.',
    side: 'left' as const,
  },
  {
    name: 'Protective enclosure',
    description: 'Shields against dust, heat and damage.',
    side: 'left' as const,
  },
  {
    name: 'Teacher laptop',
    description: 'Easy access to lessons, resources and tools.',
    side: 'right' as const,
  },
  {
    name: 'Projector / display',
    description: 'Shares content with the entire class.',
    side: 'right' as const,
  },
  {
    name: 'Power & accessories',
    description: 'Reliable power and connectivity components.',
    side: 'right' as const,
  },
]

const hubFeatures = [
  'Works offline without internet',
  'Built for low power use',
  'Designed for classroom use',
  'Easy to service and update',
  'Secure storage when not in use',
]

const contentCategories = [
  {
    title: 'Mathematics',
    count: '1,300+ resources',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80',
    alt: 'Mathematics learning resources with graphs and equations',
  },
  {
    title: 'Science',
    count: '1,000+ resources',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&q=80',
    alt: 'Science learning resources with planets and space imagery',
  },
  {
    title: 'English & Literacy',
    count: '900+ resources',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=80',
    alt: 'English and literacy learning resources with text documents',
  },
  {
    title: 'Simulations',
    count: '700+ resources',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80',
    alt: 'Interactive science simulations with molecular models',
  },
  {
    title: 'Teacher Guides',
    count: '300+ resources',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80',
    alt: 'Teacher guides with checklists and lesson plans',
  },
  {
    title: 'Local & AlloUg',
    count: '800+ resources',
    image: 'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?w=400&q=80',
    alt: 'Local cultural and historical learning resources',
  },
]

const championQualities = [
  'Selected for commitment',
  'Trained deeply and practically',
  'Supported continuously',
  'Recognised and connected',
]

const teacherJourney = [
  'Orientation',
  'Demonstration',
  'Co-planning',
  'Guided practice',
  'Feedback & reflection',
  'Independent use',
  'Peer support',
]

const lessonSteps = [
  {
    number: 1,
    title: 'Prepare',
    description: 'Teacher selects a resource and plans the lesson.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80',
    alt: 'Teacher planning and preparing lesson resources',
  },
  {
    number: 2,
    title: 'Introduce',
    description: 'Connects to prior knowledge and set the learning goal.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80',
    alt: 'Teacher introducing the lesson to students',
  },
  {
    number: 3,
    title: 'Explore',
    description: 'Learners interact with content and simulations.',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&q=80',
    alt: 'Students exploring interactive content on devices',
  },
  {
    number: 4,
    title: 'Discuss',
    description: 'Learners share, ask questions and reflect.',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&q=80',
    alt: 'Students discussing and sharing their findings',
  },
  {
    number: 5,
    title: 'Reflect',
    description: 'Teacher reinforces key concepts and next steps.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80',
    alt: 'Teacher reflecting with students on lesson outcomes',
  },
]

const timelineSteps = [
  { phase: 'PREPARE', title: 'School identified', icon: SchoolIcon },
  { phase: 'PREPARE', title: 'Readiness assessed', icon: SearchIcon },
  { phase: 'PREPARE', title: 'Partnership agreed', icon: HandshakeIcon },
  { phase: 'BUILD', title: 'Hardware inspected', icon: ServerIcon },
  { phase: 'BUILD', title: 'Content prepared', icon: FolderIcon },
  { phase: 'LAUNCH', title: 'Teachers trained', icon: ClassroomIcon },
  { phase: 'LAUNCH', title: 'Hub installed', icon: ServerIcon },
  { phase: 'LAUNCH', title: 'First lessons supported', icon: BookOpenIcon },
  { phase: 'SUSTAIN', title: 'Ongoing support', icon: SupportIcon },
  { phase: 'SUSTAIN', title: 'Monitor & measure', icon: BarChartIcon },
  { phase: 'SUSTAIN', title: 'Improve & grow', icon: BiometricIcon },
]
</script>

<template>
  <div class="page-our-model">
    <!-- Hero Section -->
    <section class="model-hero">
      <div class="model-hero-bg">
        <ClientOnly>
          <img
            src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1920&q=80"
            alt="Teacher guiding students in a classroom using digital learning resources"
            class="model-hero-image"
            width="1920"
            height="1080"
          />
          <template #fallback>
            <div class="model-hero-image model-hero-image--placeholder" />
          </template>
        </ClientOnly>
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

            <!-- Connecting Lines from first/last step to badge -->
            <svg class="model-glance-connect-lines" viewBox="0 0 1200 160" preserveAspectRatio="none" aria-hidden="true">
              <!-- Left line: from first step down and right to badge -->
              <path d="M 100 0 L 100 100 Q 100 130 130 130 L 430 130" fill="none" stroke="#cbd5e1" stroke-width="2" />
              <!-- Right line: from last step down and left to badge -->
              <path d="M 1100 0 L 1100 100 Q 1100 130 1070 130 L 770 130" fill="none" stroke="#cbd5e1" stroke-width="2" />
            </svg>

            <!-- Functioning Classroom Badge -->
            <div class="model-glance-result">
              <div class="model-glance-result-icon">
                <GroupIcon />
              </div>
              <span class="model-glance-result-label">A functioning classroom.</span>
              <div class="model-glance-result-fingerprint">
                <BiometricIcon />
              </div>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>

    <!-- Readiness Assessment -->
    <section class="model-readiness">
      <LayoutContainer>
        <div class="model-readiness-layout">
          <!-- Header -->
          <div class="model-readiness-header">
            <span class="model-readiness-number">02</span>
            <h2 class="model-readiness-title">The model begins with a school—not a device.</h2>
            <p class="model-readiness-description">
              We assess readiness in partnership with school leaders to ensure the hub will be used, protected and sustained.
            </p>
            <NuxtLink to="/transparency" class="model-readiness-link">
              Readiness assessment framework
              <ArrowRight class="w-4 h-4" />
            </NuxtLink>
          </div>

          <!-- Cards -->
          <div class="model-readiness-cards">
            <div v-for="card in readinessCards" :key="card.title" class="model-readiness-card">
              <ClientOnly>
                <div class="model-readiness-card-image">
                  <img
                    :src="card.image"
                    :alt="card.alt"
                    class="model-readiness-card-img"
                    loading="lazy"
                  />
                </div>
                <template #fallback>
                  <div class="model-readiness-card-image model-readiness-card-image--placeholder" />
                </template>
              </ClientOnly>
              <h3 class="model-readiness-card-title">{{ card.title }}</h3>
              <p class="model-readiness-card-description">{{ card.description }}</p>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>

    <!-- Inside the Learning Hub -->
    <section id="inside-the-hub" class="model-hub">
      <LayoutContainer>
        <div class="model-hub-layout">
          <!-- Header -->
          <div class="model-hub-header">
            <span class="model-hub-number">03</span>
            <h2 class="model-hub-title">Inside the<br />learning hub</h2>
            <p class="model-hub-description">
              Every component is chosen for a reason—solving a real classroom constraint.
            </p>
            <UiButton variant="outline-white" size="md" class="mt-6">
              <NuxtLink to="/transparency" class="flex items-center gap-2" aria-label="View technical specifications for the learning hub">
                View technical specifications
                <ArrowRight class="w-4 h-4" />
              </NuxtLink>
            </UiButton>
          </div>

          <!-- Hub Diagram -->
          <div class="model-hub-diagram">
            <div class="model-hub-image-wrap">
              <ClientOnly>
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80"
                  alt="Impact Bridge learning hub equipment including microcomputer, projector, laptop and protective enclosure"
                  class="model-hub-image"
                  loading="lazy"
                />
                <template #fallback>
                  <div class="model-hub-image model-hub-image--placeholder" />
                </template>
              </ClientOnly>

              <!-- Callout Lines (decorative SVG) -->
              <svg class="model-hub-callouts" viewBox="0 0 600 400" fill="none" aria-hidden="true">
                <!-- Left side lines -->
                <line x1="180" y1="120" x2="120" y2="80" stroke="white" stroke-width="1" opacity="0.4" />
                <line x1="180" y1="200" x2="120" y2="180" stroke="white" stroke-width="1" opacity="0.4" />
                <line x1="180" y1="280" x2="120" y2="280" stroke="white" stroke-width="1" opacity="0.4" />
                <!-- Right side lines -->
                <line x1="420" y1="120" x2="480" y2="80" stroke="white" stroke-width="1" opacity="0.4" />
                <line x1="420" y1="200" x2="480" y2="200" stroke="white" stroke-width="1" opacity="0.4" />
                <line x1="420" y1="280" x2="480" y2="300" stroke="white" stroke-width="1" opacity="0.4" />
              </svg>
            </div>

            <!-- Component Labels -->
            <div class="model-hub-labels">
              <!-- Left column -->
              <div class="model-hub-labels-col model-hub-labels-col--left">
                <div v-for="comp in hubComponents.filter(c => c.side === 'left')" :key="comp.name" class="model-hub-label">
                  <h3 class="model-hub-label-name">{{ comp.name }}</h3>
                  <p class="model-hub-label-description">{{ comp.description }}</p>
                </div>
              </div>

              <!-- Right column -->
              <div class="model-hub-labels-col model-hub-labels-col--right">
                <div v-for="comp in hubComponents.filter(c => c.side === 'right')" :key="comp.name" class="model-hub-label">
                  <h3 class="model-hub-label-name">{{ comp.name }}</h3>
                  <p class="model-hub-label-description">{{ comp.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Hub Features Strip -->
        <div class="model-hub-features">
          <div v-for="feature in hubFeatures" :key="feature" class="model-hub-feature">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="model-hub-feature-icon">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span class="model-hub-feature-label">{{ feature }}</span>
          </div>
        </div>
      </LayoutContainer>
    </section>

    <!-- Offline Content Library -->
    <section class="model-content">
      <LayoutContainer>
        <div class="model-content-layout">
          <!-- Header -->
          <div class="model-content-header">
            <span class="model-content-number">04</span>
            <h2 class="model-content-title">Offline does<br />not mean limited.</h2>
            <p class="model-content-description">
              Our hubs include thousands of high-quality, curriculum-aligned resources.
            </p>
            <NuxtLink to="/transparency" class="model-content-link">
              Explore content library
              <ArrowRight class="w-4 h-4" />
            </NuxtLink>
          </div>

          <!-- Content Cards -->
          <div class="model-content-cards">
            <div v-for="category in contentCategories" :key="category.title" class="model-content-card">
              <div class="model-content-card-info">
                <h3 class="model-content-card-title">{{ category.title }}</h3>
                <span class="model-content-card-count">{{ category.count }}</span>
              </div>
              <ClientOnly>
                <div class="model-content-card-image">
                  <img
                    :src="category.image"
                    :alt="category.alt"
                    class="model-content-card-img"
                    loading="lazy"
                  />
                </div>
                <template #fallback>
                  <div class="model-content-card-image model-content-card-image--placeholder" />
                </template>
              </ClientOnly>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>

    <!-- Teacher Development -->
    <section id="teacher-development" class="model-teacher">
      <LayoutContainer>
        <div class="model-teacher-layout">
          <!-- Header -->
          <div class="model-teacher-header">
            <span class="model-teacher-number">05</span>
            <h2 class="model-teacher-title">The teacher is<br />at the centre.</h2>
            <p class="model-teacher-description">
              We train teachers to confidently use technology to improve how they teach and how learners learn.
            </p>
            <NuxtLink to="/our-story" class="model-teacher-link">
              Our teacher development
              <ArrowRight class="w-4 h-4" />
            </NuxtLink>
          </div>

          <!-- Video Thumbnail -->
          <div class="model-teacher-video">
            <ClientOnly>
              <div class="model-teacher-video-wrap">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80"
                  alt="Teacher leading a classroom training session"
                  class="model-teacher-video-img"
                  loading="lazy"
                />
                <button class="model-teacher-play" aria-label="Play teacher training video">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </button>
                <span class="model-teacher-duration">0:45</span>
              </div>
              <template #fallback>
                <div class="model-teacher-video-wrap model-teacher-video-wrap--placeholder" />
              </template>
            </ClientOnly>
          </div>

          <!-- Champion Teacher Model -->
          <div class="model-teacher-champion">
            <h3 class="model-teacher-champion-title">The Champion Teacher model</h3>
            <p class="model-teacher-champion-description">
              We empower local educators to lead adoption and support their peers—driving lasting change from within.
            </p>
            <ul class="model-teacher-champion-list">
              <li v-for="quality in championQualities" :key="quality" class="model-teacher-champion-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="model-teacher-champion-check">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{{ quality }}</span>
              </li>
            </ul>
            <NuxtLink to="/our-story" class="model-teacher-champion-link">
              Meet a Champion Teacher
              <ArrowRight class="w-4 h-4" />
            </NuxtLink>
          </div>

          <!-- Teacher Journey -->
          <div class="model-teacher-journey">
            <h3 class="model-teacher-journey-title">Teacher journey</h3>
            <ol class="model-teacher-journey-list">
              <li v-for="step in teacherJourney" :key="step" class="model-teacher-journey-step">
                <span class="model-teacher-journey-dot" />
                <span class="model-teacher-journey-label">{{ step }}</span>
              </li>
            </ol>
          </div>
        </div>
      </LayoutContainer>
    </section>

    <!-- Deployment: What One Lesson Looks Like -->
    <section id="deployment" class="model-lesson">
      <LayoutContainer>
        <div class="model-lesson-layout">
          <!-- Header -->
          <div class="model-lesson-header">
            <span class="model-lesson-number">06</span>
            <h2 class="model-lesson-title">What one lesson<br />looks like impact.</h2>
            <p class="model-lesson-description">
              Technology supports the lesson.<br />The teacher leads it.
            </p>
            <NuxtLink to="/our-story" class="model-lesson-link">
              Watch a lesson in action
              <ArrowRight class="w-4 h-4" />
            </NuxtLink>
          </div>

          <!-- Lesson Steps -->
          <div class="model-lesson-steps">
            <div v-for="step in lessonSteps" :key="step.number" class="model-lesson-step">
              <div class="model-lesson-step-badge">
                <span class="model-lesson-step-num">{{ step.number }}</span>
                <span class="model-lesson-step-title">{{ step.title }}</span>
              </div>
              <p class="model-lesson-step-description">{{ step.description }}</p>
              <ClientOnly>
                <div class="model-lesson-step-image">
                  <img
                    :src="step.image"
                    :alt="step.alt"
                    class="model-lesson-step-img"
                    loading="lazy"
                  />
                </div>
                <template #fallback>
                  <div class="model-lesson-step-image model-lesson-step-image--placeholder" />
                </template>
              </ClientOnly>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>

    <!-- Our Model sections will be built here -->

    <!-- From Preparation to Long-Term Impact -->
    <section class="model-timeline">
      <LayoutContainer>
        <div class="model-timeline-layout">
          <!-- Header -->
          <div class="model-timeline-header">
            <span class="model-timeline-number">07</span>
            <h2 class="model-timeline-title">From preparation<br />to long-term<br />impact.</h2>
            <p class="model-timeline-description">
              A proven process we follow for every hub.
            </p>
          </div>

          <!-- Timeline -->
          <div class="model-timeline-track">
            <!-- Phase Labels -->
            <div class="model-timeline-phases">
              <div
                v-for="phase in ['PREPARE', 'BUILD', 'LAUNCH', 'SUSTAIN']"
                :key="phase"
                class="model-timeline-phase"
              >
                <span class="model-timeline-phase-label">{{ phase }}</span>
              </div>
            </div>

            <!-- Timeline Line -->
            <div class="model-timeline-line" aria-hidden="true">
              <svg class="model-timeline-line-svg" viewBox="0 0 1000 4" preserveAspectRatio="none">
                <line x1="0" y1="2" x2="1000" y2="2" stroke="#9fb3c8" stroke-width="2" stroke-dasharray="8 4" />
              </svg>
            </div>

            <!-- Steps -->
            <div class="model-timeline-steps">
              <div v-for="step in timelineSteps" :key="step.title" class="model-timeline-step">
                <div class="model-timeline-step-dot" />
                <div class="model-timeline-step-icon">
                  <component :is="step.icon" />
                </div>
                <span class="model-timeline-step-label">{{ step.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>
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

.model-hero-image--placeholder {
  @apply bg-navy-800;
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

.model-glance-connect-lines {
  @apply w-full h-28 relative z-0;
}

.model-glance-result {
  @apply relative z-10 flex items-center gap-4 mt-4 py-4 px-8 bg-cobalt/5 border border-cobalt/20 rounded-full w-fit mx-auto;
}

.model-glance-result-icon {
  @apply w-10 h-10 rounded-full border-2 border-cobalt flex items-center justify-center text-cobalt;
}

.model-glance-result-label {
  @apply text-base font-sans font-bold text-cobalt;
}

.model-glance-result-fingerprint {
  @apply w-12 h-12 text-cobalt;
}

/* Readiness Assessment */
.model-readiness {
  @apply py-16 md:py-24 bg-white;
}

.model-readiness-layout {
  @apply grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16 items-start;
}

.model-readiness-header {
  @apply lg:sticky lg:top-8;
}

.model-readiness-number {
  @apply inline-flex items-center justify-center w-10 h-10 rounded-full bg-cobalt/10 text-cobalt font-sans font-bold text-sm;
}

.model-readiness-title {
  @apply mt-4 text-3xl md:text-4xl font-serif font-bold text-navy leading-tight;
}

.model-readiness-description {
  @apply mt-4 text-gray-600;
}

.model-readiness-link {
  @apply mt-6 inline-flex items-center gap-2 text-cobalt font-sans font-semibold text-sm hover:text-cobalt/80 transition-colors;
}

.model-readiness-cards {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5;
}

.model-readiness-card {
  @apply flex flex-col;
}

.model-readiness-card-image {
  @apply relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4;
}

.model-readiness-card-image--placeholder {
  @apply bg-gray-200;
}

.model-readiness-card-img {
  @apply w-full h-full object-cover;
}

.model-readiness-card-title {
  @apply text-base font-sans font-bold text-navy leading-snug;
}

.model-readiness-card-description {
  @apply mt-2 text-sm text-gray-500 leading-relaxed;
}

/* Inside the Learning Hub */
.model-hub {
  @apply py-16 md:py-24 bg-navy;
}

.model-hub-layout {
  @apply grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-8 items-start;
}

.model-hub-header {
  @apply lg:sticky lg:top-8;
}

.model-hub-number {
  @apply inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-cobalt-400 font-sans font-bold text-sm;
}

.model-hub-title {
  @apply mt-4 text-3xl md:text-4xl font-serif font-bold text-white leading-tight;
}

.model-hub-description {
  @apply mt-4 text-gray-300;
}

.model-hub-diagram {
  @apply relative;
}

.model-hub-image-wrap {
  @apply relative;
}

.model-hub-image {
  @apply w-full rounded-xl;
}

.model-hub-image--placeholder {
  @apply bg-navy-700 aspect-[4/3] rounded-xl;
}

.model-hub-callouts {
  @apply absolute inset-0 w-full h-full pointer-events-none;
}

.model-hub-labels {
  @apply grid grid-cols-2 gap-6 mt-8;
}

.model-hub-labels-col {
  @apply flex flex-col gap-6;
}

.model-hub-labels-col--left {
  @apply items-start;
}

.model-hub-labels-col--right {
  @apply items-end text-right;
}

.model-hub-label-name {
  @apply text-sm font-sans font-bold text-white;
}

.model-hub-label-description {
  @apply mt-1 text-sm text-gray-400;
}

.model-hub-features {
  @apply flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-12 pt-8 border-t border-white/10;
}

.model-hub-feature {
  @apply flex items-center gap-2;
}

.model-hub-feature-icon {
  @apply text-cobalt-400 flex-shrink-0;
}

.model-hub-feature-label {
  @apply text-sm font-sans text-gray-300;
}

/* Offline Content Library */
.model-content {
  @apply py-16 md:py-24 bg-white;
}

.model-content-layout {
  @apply grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-8 items-start;
}

.model-content-header {
  @apply lg:sticky lg:top-8;
}

.model-content-number {
  @apply inline-flex items-center justify-center w-10 h-10 rounded-full bg-cobalt/10 text-cobalt font-sans font-bold text-sm;
}

.model-content-title {
  @apply mt-4 text-3xl md:text-4xl font-serif font-bold text-navy leading-tight;
}

.model-content-description {
  @apply mt-4 text-gray-600;
}

.model-content-link {
  @apply mt-6 inline-flex items-center gap-2 text-cobalt font-sans font-semibold text-sm hover:text-cobalt/80 transition-colors;
}

.model-content-cards {
  @apply grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4;
}

.model-content-card {
  @apply flex flex-col;
}

.model-content-card-info {
  @apply mb-3;
}

.model-content-card-title {
  @apply text-sm font-sans font-bold text-navy;
}

.model-content-card-count {
  @apply text-xs font-sans text-cobalt mt-0.5 block;
}

.model-content-card-image {
  @apply relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-navy/5;
}

.model-content-card-image--placeholder {
  @apply bg-gray-200;
}

.model-content-card-img {
  @apply w-full h-full object-cover mix-blend-multiply;
  filter: hue-rotate(200deg) saturate(1.2);
}

/* Teacher Development */
.model-teacher {
  @apply py-16 md:py-24 bg-gray-50;
}

.model-teacher-layout {
  @apply grid grid-cols-1 lg:grid-cols-[220px_1fr_280px_220px] gap-8 items-start;
}

.model-teacher-header {
  @apply lg:sticky lg:top-8;
}

.model-teacher-number {
  @apply inline-flex items-center justify-center w-10 h-10 rounded-full bg-cobalt/10 text-cobalt font-sans font-bold text-sm;
}

.model-teacher-title {
  @apply mt-4 text-3xl md:text-4xl font-serif font-bold text-navy leading-tight;
}

.model-teacher-description {
  @apply mt-4 text-gray-600;
}

.model-teacher-link {
  @apply mt-6 inline-flex items-center gap-2 text-cobalt font-sans font-semibold text-sm hover:text-cobalt/80 transition-colors;
}

/* Video */
.model-teacher-video {
  @apply lg:col-span-1;
}

.model-teacher-video-wrap {
  @apply relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-navy-800;
}

.model-teacher-video-wrap--placeholder {
  @apply bg-gray-300;
}

.model-teacher-video-img {
  @apply w-full h-full object-cover;
}

.model-teacher-play {
  @apply absolute inset-0 flex items-center justify-center w-full h-full bg-navy/30 hover:bg-navy/40 transition-colors cursor-pointer;
}

.model-teacher-play svg {
  @apply text-white drop-shadow-lg;
}

.model-teacher-duration {
  @apply absolute bottom-3 right-3 px-2 py-0.5 bg-navy/80 text-white text-xs font-sans font-medium rounded;
}

/* Champion Teacher */
.model-teacher-champion {
  @apply bg-white rounded-xl p-6 shadow-sm border border-gray-100;
}

.model-teacher-champion-title {
  @apply text-lg font-sans font-bold text-navy;
}

.model-teacher-champion-description {
  @apply mt-3 text-sm text-gray-600 leading-relaxed;
}

.model-teacher-champion-list {
  @apply mt-4 space-y-2 list-none p-0 m-0;
}

.model-teacher-champion-item {
  @apply flex items-center gap-2 text-sm text-gray-700;
}

.model-teacher-champion-check {
  @apply text-cobalt flex-shrink-0;
}

.model-teacher-champion-link {
  @apply mt-4 inline-flex items-center gap-2 text-cobalt font-sans font-semibold text-sm hover:text-cobalt/80 transition-colors;
}

/* Teacher Journey */
.model-teacher-journey {
  @apply lg:sticky lg:top-8;
}

.model-teacher-journey-title {
  @apply text-sm font-sans font-bold text-navy mb-4;
}

.model-teacher-journey-list {
  @apply space-y-3 list-none p-0 m-0;
}

.model-teacher-journey-step {
  @apply flex items-center gap-3;
}

.model-teacher-journey-dot {
  @apply w-3 h-3 rounded-full bg-cobalt flex-shrink-0;
}

.model-teacher-journey-label {
  @apply text-sm font-sans text-gray-700;
}

/* Deployment: What One Lesson Looks Like */
.model-lesson {
  @apply py-16 md:py-24 bg-white;
}

.model-lesson-layout {
  @apply grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-8 items-start;
}

.model-lesson-header {
  @apply lg:sticky lg:top-8;
}

.model-lesson-number {
  @apply inline-flex items-center justify-center w-10 h-10 rounded-full bg-cobalt/10 text-cobalt font-sans font-bold text-sm;
}

.model-lesson-title {
  @apply mt-4 text-3xl md:text-4xl font-serif font-bold text-navy leading-tight;
}

.model-lesson-description {
  @apply mt-4 text-gray-600;
}

.model-lesson-link {
  @apply mt-6 inline-flex items-center gap-2 text-cobalt font-sans font-semibold text-sm hover:text-cobalt/80 transition-colors;
}

/* Lesson Steps */
.model-lesson-steps {
  @apply grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5;
}

.model-lesson-step {
  @apply flex flex-col;
}

.model-lesson-step-badge {
  @apply flex items-center gap-2 mb-2;
}

.model-lesson-step-num {
  @apply inline-flex items-center justify-center w-7 h-7 rounded-full bg-cobalt text-white text-xs font-sans font-bold flex-shrink-0;
}

.model-lesson-step-title {
  @apply text-base font-sans font-bold text-navy;
}

.model-lesson-step-description {
  @apply text-xs text-gray-500 leading-relaxed mb-3;
}

.model-lesson-step-image {
  @apply relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-100;
}

.model-lesson-step-image--placeholder {
  @apply bg-gray-200;
}

.model-lesson-step-img {
  @apply w-full h-full object-cover;
}

/* From Preparation to Long-Term Impact */
.model-timeline {
  @apply py-16 md:py-24 bg-white;
}

.model-timeline-layout {
  @apply grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-8 items-start;
}

.model-timeline-header {
  @apply lg:sticky lg:top-8;
}

.model-timeline-number {
  @apply inline-flex items-center justify-center w-10 h-10 rounded-full bg-cobalt/10 text-cobalt font-sans font-bold text-sm;
}

.model-timeline-title {
  @apply mt-4 text-3xl md:text-4xl font-serif font-bold text-navy leading-tight;
}

.model-timeline-description {
  @apply mt-4 text-gray-600;
}

.model-timeline-track {
  @apply relative pt-8 pb-12;
}

/* Phase Labels */
.model-timeline-phases {
  @apply grid grid-cols-4 gap-0 mb-8;
}

.model-timeline-phase {
  @apply text-center border-l border-gray-200 first:border-l-0;
}

.model-timeline-phase-label {
  @apply text-xs font-sans font-bold text-cobalt tracking-wider;
}

/* Timeline Line */
.model-timeline-line {
  @apply relative mb-6;
}

.model-timeline-line-svg {
  @apply w-full h-1;
}

/* Steps */
.model-timeline-steps {
  @apply grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-11 gap-4 relative z-10;
}

.model-timeline-step {
  @apply flex flex-col items-center text-center;
}

.model-timeline-step-dot {
  @apply w-3 h-3 rounded-full bg-cobalt mb-3 flex-shrink-0;
}

.model-timeline-step-icon {
  @apply w-14 h-14 rounded-full border-2 border-cobalt/20 bg-white flex items-center justify-center text-cobalt mb-3;
}

.model-timeline-step-label {
  @apply text-xs font-sans font-bold text-navy leading-snug;
}
</style>
