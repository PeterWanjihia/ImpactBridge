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
