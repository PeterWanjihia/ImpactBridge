<script setup lang="ts">
import { Server, Users, User, Calendar, Building2 } from '@lucide/vue'
import type {
  ImpactOverview,
  ImpactHeroData,
  ImpactMetricItem,
  ImpactEvidenceItem,
  ProgrammeContext,
} from '~/types'

useHead({
  title: 'Impact - Impact Bridge',
  meta: [
    { name: 'description', content: 'Measurable evidence of how offline learning hubs transform classrooms.' }
  ]
})

// ──────────────────────────────────────────────
// Data fetching
// ──────────────────────────────────────────────

const { getOverview } = useImpact()

/**
 * Fetch the full impact page overview from the Go API.
 * Falls back to null on error so the page still renders with static defaults.
 */
const { data: overview } = await useAsyncData<ImpactOverview | null>(
  'impact-overview',
  () => getOverview(),
)

// ──────────────────────────────────────────────
// Derived data — fall back to sensible static defaults when the backend isn't ready
// ──────────────────────────────────────────────

const heroData = computed<Partial<ImpactHeroData>>(() => overview.value?.hero ?? {})

const pilotProgramme = computed<Partial<ProgrammeContext>>(() => overview.value?.programme ?? {})

const earlyResultMetrics = computed<ImpactMetricItem[]>(() => overview.value?.metrics ?? [
  {
    value: '50+',
    label: 'Learners reached',
    description: 'Students are accessing curriculum-aligned content in core subjects.',
    icon: 'users',
  },
  {
    value: '2',
    label: 'Teachers prepared',
    description: 'Champion Teachers trained and using the hub to lead interactive lessons.',
    icon: 'graduation',
  },
  {
    value: '100%',
    label: 'Want more digital learning',
    description: 'Every respondent said they want more technology-enhanced learning in class.',
    icon: 'heart',
  },
  {
    value: '90%',
    label: 'Report greater confidence',
    description: 'Learners felt more confident in their understanding after using digital resources.',
    icon: 'trending',
  },
])

const testimonials = computed(() => overview.value?.testimonials ?? {
  learner: {
    heading: 'Behind every number is a learner.',
    quote: '"I feel like I can now finish my schooling."',
    description: 'Digital lessons help me understand better because I can see and interact with the learning.',
    attribution: '- Learner, Grade 6',
    imageUrl: 'https://img.magnific.com/free-photo/african-american-woman-wearing-student-backpack-holding-books-smiling-happy-pointing-with-hand-finger-side_839833-34702.jpg?semt=ais_hybrid&w=740&q=80',
    imageAlt: 'Student smiling in classroom',
    mediaType: 'audio' as const,
    mediaDuration: '0:20',
    storyUrl: '/stories/learner-grade-6',
    variant: 'learner' as const,
  },
  teacher: {
    heading: 'Teachers are leading the change.',
    quote: '"The hub has changed the way I teach."',
    description: 'Lessons are more engaging, students participate more, and I now plan with better resources.',
    attribution: '- Champion Teacher',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=700&fit=crop&crop=face',
    imageAlt: 'Teacher in classroom',
    mediaType: 'video' as const,
    mediaDuration: '0:32',
    mediaUrl: '#',
    variant: 'teacher' as const,
  },
})

const evidenceItems = computed(() => overview.value?.evidence ?? ([
  {
    icon: 'wrench' as const,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    observed: 'The original hardware needed greater protection and reliability.',
    changed: 'The hub architecture was refined.',
  },
  {
    icon: 'user' as const,
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-500',
    observed: 'Teachers needed more than an initial demonstration.',
    changed: 'Training expanded into guided practice and continued support.',
  },
  {
    icon: 'book' as const,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    observed: 'Content needed stronger classroom alignment.',
    changed: 'The content-review and curriculum-alignment process was strengthened.',
  },
] as ImpactEvidenceItem[]))

const stillLearningItems = computed(() => overview.value?.stillLearning ?? [
  {
    question: 'Will teachers continue using the hub across full terms?',
    description: 'We are tracking adoption over time.',
    icon: 'calendar' as const,
  },
  {
    question: 'Will peer adoption grow as more teachers get involved?',
    description: 'We are measuring how Champion Teachers influence others.',
    icon: 'users' as const,
  },
  {
    question: 'Will the revised hardware remain reliable long-term?',
    description: 'We are monitoring uptime and support needs.',
    icon: 'shield' as const,
  },
  {
    question: 'Will learner gains persist and deepen over time?',
    description: 'We are introducing assessments to learn more.',
    icon: 'graduation' as const,
  },
])

const progressChapterData = computed(() => overview.value?.progressChapter ?? {
  completedItems: [
    { text: '1 pilot hub' },
    { text: '2 Champion Teachers' },
    { text: '50+ learners reached' },
    { text: 'Early data collected' },
  ],
  nextTargetItems: [
    { text: '10 additional hubs' },
    { text: 'Expanded teacher development' },
    { text: 'Full impact evaluation' },
    { text: 'Stronger evidence of learning' },
  ],
})

const reportItems = computed(() => overview.value?.reports ?? [
  {
    title: 'Pilot Impact Summary',
    description: 'What we observed, what it means and what comes next.',
    pdfSize: '2.1 MB',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop&crop=center',
    imageAlt: 'Students working in classroom',
    pdfUrl: '/reports/pilot-impact-summary.pdf',
  },
  {
    title: 'Measurement Approach',
    description: 'How we collect, validate and use data responsibly.',
    pdfSize: '1.4 MB',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=center',
    imageAlt: 'Document with charts and data',
    pdfUrl: '/reports/measurement-approach.pdf',
  },
  {
    title: 'Latest Programme Update',
    description: 'Recent activities, refinements and upcoming milestones.',
    pdfSize: '1.2 MB',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop&crop=center',
    imageAlt: 'Teacher leading a lesson',
    pdfUrl: '/reports/latest-programme-update.pdf',
  },
])
</script>

<template>
  <div class="page-impact">
    <!-- Hero Section -->
    <HeroOverlay
      :image-url="heroData.imageUrl || 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&h=800&fit=crop&crop=center'"
      overlay="gradient"
      :image-alt="heroData.imageAlt || 'Students and teacher in a classroom using offline learning technology'"
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
            <div
              v-for="(stat, idx) in heroData.stats ?? [
                { value: '1', label: 'Pilot hub implemented', icon: 'server' },
                { value: '2', label: 'Champion Teachers', icon: 'user' },
                { value: '50+', label: 'Learners reached', icon: 'users' },
              ]"
              :key="idx"
              class="impact-hero-card-stat"
            >
              <component :is="stat.icon === 'users' ? Users : stat.icon === 'user' ? User : Server" class="impact-hero-card-stat-icon" />
              <div class="impact-hero-card-stat-content">
                <span class="impact-hero-card-stat-value">{{ stat.value }}</span>
                <span class="impact-hero-card-stat-label">{{ stat.label }}</span>
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
      :school-name="pilotProgramme.schoolName || 'Our Lady Seat of Wisdom'"
      :location="pilotProgramme.location || 'Kansanga, Kampala, Uganda'"
      :launch-date="pilotProgramme.launchDate || 'April 2025'"
      :image-url="pilotProgramme.imageUrl || 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop&crop=center'"
      :image-alt="pilotProgramme.imageAlt || 'Our Lady Seat of Wisdom school building in Kampala, Uganda'"
      :pilot-period="pilotProgramme.pilotPeriod || 'April – June 2025 (initial review)'"
      :teachers="pilotProgramme.teachers || '2 Champion Teachers'"
      :learners="pilotProgramme.learners || '50+ students across primary grades'"
      :focus="pilotProgramme.focus || 'Offline learning, teacher adoption, learner engagement'"
      :subjects="pilotProgramme.subjects || 'Science, Mathematics, English & Integrated Studies'"
      :status="pilotProgramme.status || 'Pilot and refinement'"
    />

    <!-- Early Results Section -->
    <EarlyResults :metrics="earlyResultMetrics" />

    <!-- Testimonial Quotes Section -->
    <TestimonialQuotes
      :learner="testimonials.learner"
      :teacher="testimonials.teacher"
    />

    <!-- Evidence Changes Section -->
    <EvidenceChanges :items="evidenceItems" />

    <!-- Still Learning + Progress Chapter (Side by Side) -->
    <section class="findings-row">
      <LayoutContainer>
        <div class="findings-row-content">
          <div class="findings-row-left">
            <StillLearning :items="stillLearningItems" />
          </div>
          <div class="findings-row-right">
            <ProgressChapter
              :completed-items="progressChapterData.completedItems"
              :next-target-items="progressChapterData.nextTargetItems"
            />
          </div>
        </div>
      </LayoutContainer>
    </section>

    <!-- Reports Explore Section -->
    <ReportsExplore :reports="reportItems" />

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
  @apply italic font-serif text-blue-500;
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
