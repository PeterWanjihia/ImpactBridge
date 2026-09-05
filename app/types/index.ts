/**
 * Base types for Impact Bridge frontend
 */

// Common
export interface ApiResponse<T> {
  data: T
  meta?: {
    total?: number
    page?: number
    limit?: number
  }
}

export interface PaginatedResponse<T> {
  data: T[]
  nextCursor?: string | null
}

// Content
export interface Page {
  id: string
  routeKey: string
  title: string
  description?: string
  seo?: SeoMetadata
  sections?: PageSection[]
}

export interface SeoMetadata {
  title?: string
  description?: string
  canonicalUrl?: string
  ogImage?: string
  noindex?: boolean
}

export interface PageSection {
  id: string
  type: string
  data: Record<string, any>
}

// Stories
export type StoryType = 'learner' | 'teacher' | 'school' | 'partner'

export interface Story {
  id: string
  slug: string
  title: string
  type: StoryType
  summary?: string
  body?: string
  imageUrl?: string
  imageAlt?: string
  quote?: string
  transcript?: string
  publishedAt?: string
  programme?: Programme
  school?: School
}

// Impact
export interface MetricDefinition {
  id: string
  name: string
  unit: string
  description?: string
}

export interface Measurement {
  id: string
  metric: MetricDefinition
  value: number
  period: string
  methodology?: string
  programme?: Programme
  school?: School
  hub?: Hub
}

export interface ImpactSnapshot {
  totalStudentsReached: number
  totalTeachersTrained: number
  totalSchoolsServed: number
  totalHubsDeployed: number
}

// Impact Page

/**
 * Impact overview returned by GET /v1/impact/overview
 * Aggregates hero, programme context, metrics, testimonials, evidence, reports
 */
export interface ImpactOverview {
  hero: ImpactHeroData
  programme: ProgrammeContext
  metrics: ImpactMetricItem[]
  testimonials: { learner: ImpactTestimonial; teacher: ImpactTestimonial }
  evidence: ImpactEvidenceItem[]
  stillLearning: ImpactStillLearningItem[]
  progressChapter: ImpactProgressChapter
  reports: ImpactReportItem[]
  cta?: ImpactCtaData
}

/** Hero section data */
export interface ImpactHeroData {
  tag?: string
  title: string
  titleAccent?: string
  description: string
  imageUrl?: string
  imageAlt?: string
  primaryCtaText?: string
  primaryCtaTo?: string
  secondaryCtaText?: string
  secondaryCtaTo?: string
  stats: ImpactHeroStat[]
  pilotLabel?: string
  pilotPeriod?: string
  pilotPeriodNote?: string
}

export interface ImpactHeroStat {
  value: string | number
  label: string
  icon?: string
}

/** Programme / pilot context data */
export interface ProgrammeContext {
  programmeId?: string
  programmeSlug?: string
  schoolName: string
  location: string
  launchDate: string
  imageUrl?: string
  imageAlt?: string
  pilotPeriod: string
  teachers: string
  learners: string
  focus: string
  subjects: string
  status: string
  disclaimer?: string
}

/** Individual metric shown in the early results section */
export interface ImpactMetricItem {
  value: string
  label: string
  description: string
  icon: 'users' | 'graduation' | 'heart' | 'trending'
}

/** Testimonial quote from a learner or teacher */
export interface ImpactTestimonial {
  heading: string
  quote: string
  description: string
  attribution: string
  imageUrl?: string
  imageAlt?: string
  mediaType?: 'audio' | 'video'
  mediaDuration?: string
  mediaUrl?: string
  storyUrl?: string
  variant: 'learner' | 'teacher'
}

/** Evidence item showing observation and change */
export interface ImpactEvidenceItem {
  icon: 'wrench' | 'user' | 'book'
  iconBg: string
  iconColor: string
  observed: string
  changed: string
}

/** Open question in the "Still Learning" section */
export interface ImpactStillLearningItem {
  question: string
  description: string
  icon: 'calendar' | 'users' | 'shield' | 'graduation'
}

/** Progress chapter — completed milestones and next targets */
export interface ImpactProgressChapter {
  completedItems: { text: string }[]
  nextTargetItems: { text: string }[]
}

/** Report item for the reports explore section */
export interface ImpactReportItem {
  id?: string
  title: string
  description: string
  pdfSize?: string
  imageUrl?: string
  imageAlt?: string
  pdfUrl: string
  type?: 'pilot' | 'annual' | 'measurement' | 'governance'
  period?: string
  publishedAt?: string
}

/** CTA section data */
export interface ImpactCtaData {
  title: string
  description: string
  imageUrl?: string
  imageAlt?: string
  primaryButtonText?: string
  primaryButtonTo?: string
  secondaryButtonText?: string
  secondaryButtonTo?: string
}

// Programmes & Schools
export interface Programme {
  id: string
  slug: string
  name: string
  description?: string
  status: 'active' | 'completed' | 'planned'
  hubs?: Hub[]
  schools?: School[]
}

export interface Hub {
  id: string
  name: string
  status: 'deployed' | 'maintenance' | 'decommissioned'
  programme?: Programme
  school?: School
}

export interface School {
  id: string
  name: string
  location?: string
  programme?: Programme
  hub?: Hub
}

// Donations
export type DonationStatus = 'pending' | 'processing' | 'completed' | 'failed' | 'refunded'
export type PaymentMethod = 'card' | 'wallet' | 'crypto' | 'bank_transfer'

export interface Donation {
  id: string
  publicId: string
  amount: number
  currency: string
  status: DonationStatus
  recurring: boolean
  fund?: Fund
  createdAt: string
}

export interface Fund {
  id: string
  name: string
  description?: string
  programme?: Programme
}

export interface DonationOptions {
  funds: Fund[]
  paymentMethods: PaymentMethod[]
}

// Campaign
export interface Campaign {
  id: string
  name: string
  goal: number
  currency: string
  current: number
  status: 'active' | 'completed' | 'paused'
  programme?: Programme
}

// Equipment
export type EquipmentStatus = 
  | 'submitted'
  | 'under_review'
  | 'needs_information'
  | 'provisionally_accepted'
  | 'transfer_arranged'
  | 'received'
  | 'inspection'
  | 'prepared'
  | 'deployed'
  | 'closed'
  | 'rejected'
  | 'withdrawn'

export interface EquipmentOffer {
  id: string
  organisation: string
  contactName: string
  contactEmail: string
  status: EquipmentStatus
  items: EquipmentItem[]
  createdAt: string
}

export interface EquipmentItem {
  id: string
  category: string
  manufacturer?: string
  model?: string
  quantity: number
  condition: string
  specifications?: string
}

// Partnerships
export type PartnershipStage = 
  | 'new'
  | 'contacted'
  | 'discovery'
  | 'qualified'
  | 'proposal'
  | 'partner'
  | 'declined'
  | 'dormant'

export interface PartnershipEnquiry {
  id: string
  organisationName: string
  contactName: string
  contactEmail: string
  contributionType: string
  estimatedValue?: string
  goals: string
  stage: PartnershipStage
  createdAt: string
}

// Transparency
export interface TransparencySummary {
  financials: {
    totalReceived: number
    totalSpent: number
    programmePercentage: number
  }
  trustees: Trustee[]
  reports: Report[]
}

export interface Trustee {
  id: string
  name: string
  role: string
  bio?: string
  imageUrl?: string
}

export interface Report {
  id: string
  title: string
  type: 'pilot' | 'annual' | 'measurement' | 'governance'
  period?: string
  summary?: string
  fileUrl?: string
  publishedAt: string
}

// People
export interface Person {
  id: string
  name: string
  role: string
  bio?: string
  imageUrl?: string
  displayOrder?: number
}

// ---------------------------------------------------------------------------
// Stories Page
// ---------------------------------------------------------------------------

/** Stories page composite returned by backend */
export interface StoriesPageData {
  hero: StoriesHeroData
  filters: StoriesFilterItem[]
  featuredStory: StoriesFeaturedStory
  stories: StoriesStoryItem[]
  voices: StoriesVoiceItem[]
  photoEssay: StoriesPhotoEssay
  latestUpdates: StoriesUpdateItem[]
  cta: StoriesCtaData
}

/** Hero section data */
export interface StoriesHeroData {
  title: string
  titleAccent: string
  description: string
  imageUrl: string
  imageAlt: string
  primaryCta: { text: string; to: string }
  secondaryCta: { text: string; to: string }
}

/** Filter tab item */
export interface StoriesFilterItem {
  label: string
  value: string
  icon?: string
}

/** Featured story shown in hero card */
export interface StoriesFeaturedStory {
  eyebrow: string
  title: string
  summary: string
  slug: string
  mediaType: 'video' | 'photo' | 'article'
  mediaDuration?: string
  imageUrl: string
  imageAlt: string
}

/** Individual story card item */
export interface StoriesStoryItem {
  id: string
  slug: string
  title: string
  summary: string
  type: StoryType
  imageUrl: string
  imageAlt: string
  mediaType?: 'video' | 'photo' | 'article'
  mediaDuration?: string
  readTime?: string
}

/** Voice / testimonial quote */
export interface StoriesVoiceItem {
  id: string
  quote: string
  author: string
  role: string
  description: string
  imageUrl: string
  imageAlt: string
  audioUrl?: string
  audioDuration?: string
  storyUrl?: string
  variant: 'learner' | 'teacher'
}

/** Photo essay section */
export interface StoriesPhotoEssay {
  title: string
  ctaText: string
  ctaTo: string
  steps: StoriesPhotoEssayStep[]
}

export interface StoriesPhotoEssayStep {
  number: number
  title: string
  description: string
  imageUrl: string
  imageAlt: string
}

/** Latest update item */
export interface StoriesUpdateItem {
  id: string
  title: string
  date: string
  readTime: string
  imageUrl: string
  imageAlt: string
  slug: string
}

/** CTA section data */
export interface StoriesCtaData {
  title: string
  description: string
  primaryCta: { text: string; to: string; icon?: string }
  secondaryCta: { text: string; to: string; icon?: string }
}

// ---------------------------------------------------------------------------
// Homepage
// ---------------------------------------------------------------------------

/**
 * Homepage composite returned by GET /v1/homepage
 * Aggregates hero, value props, challenge, model, evidence, ways to give, and CTA.
 */
export interface HomepageData {
  hero: HomepageHero
  valueProps: HomepageValueProp[]
  challenge: HomepageChallenge
  modelSteps: HomepageModelStep[]
  evidence: HomepageEvidence
  waysToGive: HomepageGiveWays
  implementationLinks: HomepageImplementationLink[]
  cta: HomepageCta
}

/** Hero section with campaign card */
export interface HomepageHero {
  eyebrow: string
  title: string
  titleAccent?: string
  subtitle: string
  imageUrl: string
  imageAlt: string
  primaryCta: { text: string; to: string; icon?: string }
  secondaryCta: { text: string; to: string; icon?: string }
  note?: string
  campaign: HomepageCampaignCard
}

/** Campaign card shown in the hero */
export interface HomepageCampaignCard {
  title: string
  raised: number
  goal: number
  currency?: string
  hubsFunded: number
  devicesCommitted: number
  learnersExpected: string
}

/** Single value proposition item */
export interface HomepageValueProp {
  iconKey: string
  title: string
  description: string
}

/** Challenge section */
export interface HomepageChallenge {
  eyebrow: string
  title: string
  description: string
  stats: HomepageChallengeStat[]
  source?: string
  imageUrl: string
  imageAlt: string
}

export interface HomepageChallengeStat {
  value?: string
  iconKey?: string
  label: string
}

/** Model steps */
export interface HomepageModelStep {
  number: number
  title: string
  description: string
  iconKey: string
}

/** Evidence / early results section */
export interface HomepageEvidence {
  title: string
  pilotLabel: string
  pilotLocation: string
  stats: HomepageEvidenceStat[]
  testimonial: HomepageFeaturedTestimonial
  impactLink?: { text: string; to: string }
}

export interface HomepageEvidenceStat {
  value: string
  label: string
}

export interface HomepageFeaturedTestimonial {
  quote: string
  author: string
  story: string
  imageUrl: string
  imageAlt: string
  storyUrl: string
}

/** Ways to give section */
export interface HomepageGiveWays {
  title: string
  individual: HomepageGiveWayCard
  corporate: HomepageGiveWayCard
}

export interface HomepageGiveWayCard {
  iconKey: string
  title: string
  description: string
  items: string[]
  note?: string
  cta: { text: string; to: string }
  imageUrl: string
  imageAlt: string
  color: string
}

/** Implementation / responsibility links */
export interface HomepageImplementationLink {
  iconKey: string
  title: string
  description: string
  to: string
  linkText: string
}

/** Bottom CTA */
export interface HomepageCta {
  title: string
  description: string
  primaryCta: { text: string; to: string; icon?: string }
  secondaryCta: { text: string; to: string; icon?: string }
}

// ---------------------------------------------------------------------------
// Our Model Page
// ---------------------------------------------------------------------------

export interface OurModelData {
  seo?: SeoMetadata
  hero: OurModelHero
  overview: OurModelOverview
  readiness: OurModelReadiness
  hub: OurModelHub
  content: OurModelContent
  teacher: OurModelTeacher
  lesson: OurModelLesson
  timeline: OurModelTimeline
}

export interface OurModelHeroTab {
  label: string
  href: string
  active?: boolean
}

export interface OurModelHeroFeature {
  iconKey: string
  label: string
}

export interface OurModelHero {
  title: string
  titleAccent: string
  description: string
  imageUrl: string
  imageAlt: string
  tabs: OurModelHeroTab[]
  features: OurModelHeroFeature[]
  primaryCta: { text: string; to: string }
  secondaryCta: { text: string; to: string }
}

export interface OurModelOverviewStep {
  title: string
  description: string
  iconKey: string
}

export interface OurModelOverview {
  number: string
  title: string
  description: string
  steps: OurModelOverviewStep[]
  resultLabel: string
}

export interface OurModelReadinessCard {
  title: string
  description: string
  image: string
  alt: string
}

export interface OurModelReadiness {
  number: string
  title: string
  description: string
  linkText: string
  linkTo: string
  cards: OurModelReadinessCard[]
}

export interface OurModelHubFeature {
  label: string
  iconKey: string
}

export interface OurModelHub {
  number: string
  title: string
  description: string
  ctaText: string
  ctaTo: string
  features: OurModelHubFeature[]
  imageUrl?: string
  imageAlt?: string
}

export interface OurModelContentCategory {
  title: string
  count: string
  image: string
  alt: string
}

export interface OurModelContent {
  number: string
  title: string
  description: string
  linkText: string
  linkTo: string
  categories: OurModelContentCategory[]
}

export interface OurModelTeacher {
  number: string
  title: string
  description: string
  linkText: string
  linkTo: string
  championTitle: string
  championDescription: string
  championQualities: string[]
  journeySteps: string[]
  videoUrl?: string
  videoAlt?: string
  videoDuration?: string
}

export interface OurModelLessonStep {
  number: number
  title: string
  description: string
  image: string
  alt: string
}

export interface OurModelLesson {
  number: string
  title: string
  description: string
  linkText: string
  linkTo: string
  steps: OurModelLessonStep[]
}

export interface OurModelTimelineStep {
  phase: string
  title: string
  iconKey: string
}

export interface OurModelTimeline {
  number: string
  title: string
  description: string
  phases: string[]
  steps: OurModelTimelineStep[]
}
