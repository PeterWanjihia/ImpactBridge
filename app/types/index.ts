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
