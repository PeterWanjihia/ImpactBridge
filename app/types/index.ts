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
export type StoryType = 'learner' | 'teacher' | 'school' | 'community' | 'partner'

/** Response shape of GET /v1/stories (story index with type/cursor filters). */
export interface StoriesIndexResponse {
  stories: StoriesStoryItem[]
  nextCursor?: string | null
}

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
  mediaType?: 'video' | 'audio' | 'photo' | 'article'
  mediaUrl?: string
  mediaDuration?: string
  readTime?: string
  seo?: SeoMetadata
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
  currency?: string
  presets?: number[]
  /** Crypto asset/network pairs offered on the donate page */
  cryptoAssets?: CryptoAssetOption[]
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
  /** Small badge next to the campaign title (e.g. "Active campaign") */
  label?: string
  /** Verified delivery stats shown under the progress bar */
  stats?: CampaignStat[]
  detailsText?: string
  detailsTo?: string
}

/** One verified delivery stat under the campaign progress bar */
export interface CampaignStat {
  icon: 'hubs' | 'devices' | 'schools' | 'deployed'
  value: number | string
  label: string
}

// ---------------------------------------------------------------------------
// Donate Page
// ---------------------------------------------------------------------------

/**
 * Donate page composite.
 * Campaign + funds + payment configuration come from the Go API
 * (GET /v1/campaigns/active, GET /v1/donation-options); editorial copy and
 * FAQs are CMS-owned (architecture spec: content vs. transactional data).
 */
export interface DonatePageData {
  hero: DonateHeroData
  assurances: DonationAssurance[]
  crypto: DonateCryptoSection
  campaign: Campaign
  otherWays: OtherWayToGive[]
  faqs: FaqItem[]
  cta: DonateCtaData
}

export interface DonateHeroData {
  eyebrow: string
  title: string
  subtitle: string
  videoDuration: string
  trustItems: DonateHeroTrustItem[]
}

export interface DonateHeroTrustItem {
  icon: 'shield' | 'receipt' | 'lock'
  label: string
}

/** Reassurance strip under the hero */
export interface DonationAssurance {
  icon: 'shield' | 'receipt' | 'chart' | 'lock'
  title: string
  description: string
}

/** Crypto asset + network option (GET /v1/donation-options) */
export interface CryptoAssetOption {
  symbol: string
  name: string
  network: string
  /** Icon key resolved by the section component */
  icon: 'usdt' | 'eth' | 'usdc' | 'btc' | 'trx' | 'matic'
  /** Tailwind-ish token for the icon disc */
  color: 'teal' | 'navy' | 'cobalt' | 'amber' | 'red' | 'purple'
}

export interface DonateCryptoSection {
  title: string
  titleAccent: string
  description: string
  linkText: string
  linkTo: string
  panelLabel: string
  assets: CryptoAssetOption[]
  viewAllText: string
}

/** "Other ways to give" cards next to the campaign panel */
export interface OtherWayToGive {
  icon: 'building' | 'laptop'
  title: string
  description: string
  linkText: string
  linkTo: string
}

/** Single FAQ item (CMS `faqs` collection, page/category = donate) */
export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface DonateCtaData {
  title: string
  titleAccent: string
  description: string
  imageUrl?: string
  imageAlt?: string
  primaryText: string
  primaryTo: string
  secondaryText: string
  secondaryTo: string
}

// Donation workflow state (multi-step form on /donate)

/** Step 1 method tabs */
export type PaymentMethodTab = PaymentMethod

/** Give once vs give monthly (Stripe Checkout + Billing) */
export type DonationFrequency = 'once' | 'monthly'

export type DonationStep = 'choose' | 'details' | 'payment'

/** Step 2 payload collected from the donor */
export interface DonorDetails {
  email: string
  name: string
  note?: string
}

/**
 * Donation intent created via POST /v1/donations.
 * fundId references a Fund from GET /v1/donation-options.
 */
export interface DonationIntent {
  fundId: string
  amount: number
  currency: string
  recurring: boolean
  donor?: {
    email: string
    name?: string
  }
}

/** Response of POST /v1/donations — exposes only the donor-facing public ID */
export interface CreateDonationResponse {
  /** Opaque donor-facing reference (never a sequential DB id, per spec) */
  publicId: string
  /** Opaque id used for POST /v1/donations/:id/checkout */
  donationId?: string
  status: DonationStatus
}

/** Response of POST /v1/donations/:id/checkout — Stripe-hosted checkout */
export interface CheckoutSession {
  id: string
  /** Redirect target for the browser (Stripe-hosted page, per security spec) */
  url: string
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
  contactPhone?: string
  country?: string
  jobTitle?: string
  status: EquipmentStatus
  items: EquipmentItem[]
  logisticsNotes?: string
  ownershipConfirmed?: boolean
  dataErasureConfirmed?: boolean
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

// Transparency / Accountability

/**
 * Full transparency page composite.
 * Editorial content is CMS-owned (pages/people/policies collections);
 * financials and the impact snapshot come from the Go governance/impact
 * modules via GET /v1/transparency/summary (approved data only).
 */
export interface TransparencyData {
  seo?: SeoMetadata
  hero: TransparencyHero
  financials: TransparencyFinancials
  trustees: TransparencyTrustees
  governance: TransparencyGovernance
  impact: TransparencyImpact
  newsletter: TransparencyNewsletter
}

export interface TransparencyHero {
  tag: string
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  ctaText: string
  ctaTo: string
  commitments: TransparencyCommitment[]
}

export interface TransparencyCommitment {
  icon: 'shield' | 'scale' | 'eye' | 'heart'
  title: string
  description: string
}

/** One spending slice of the donut chart */
export interface TransparencySpendSlice {
  label: string
  /** Whole-number share; percentages must total 100 */
  percentage: number
  /** Tailwind-ish colour token used by the donut component */
  color: 'cobalt' | 'teal' | 'purple' | 'amber'
}

export interface TransparencyFinancials {
  year: number
  expenditureNote: string
  disclaimer: string
  reportsLinkText: string
  reportsLinkTo: string
  /** Spending slices — must sum to 100 for the donut to render correctly */
  spend: TransparencySpendSlice[]
  headline: {
    totalIncome: number
    totalExpenditure: number
    surplus: number
  }
  currency: string
}

export interface TransparencyTrustees {
  title: string
  description: string
  ctaText: string
  ctaTo: string
  /** Trustee portrait cards, in display order */
  members: TransparencyTrustee[]
}

export interface TransparencyTrustee {
  name: string
  role: string
  bio: string
  imageUrl: string
  imageAlt: string
}

export interface TransparencyGovernanceCard {
  icon: 'building' | 'shield' | 'scale'
  title: string
  description: string
  items: string[]
}

export interface TransparencyGovernance {
  cards: TransparencyGovernanceCard[]
}

export interface TransparencyImpactMetric {
  icon: 'building' | 'server' | 'school' | 'laptop' | 'graduation' | 'users'
  value: string
  label: string
}

export interface TransparencyImpact {
  title: string
  asOf: string
  metrics: TransparencyImpactMetric[]
}

export interface TransparencyNewsletter {
  title: string
  description: string
  placeholder: string
  buttonText: string
  successText: string
  privacyNote: string
  imageUrl: string
  imageAlt: string
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
  mediaUrl?: string
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
  mediaUrl?: string
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
