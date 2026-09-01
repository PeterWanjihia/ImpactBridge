import type {
  ImpactOverview,
  ImpactSnapshot,
  ImpactReportItem,
  ProgrammeContext,
  Measurement,
  PaginatedResponse,
  Story,
} from '~/types'

/**
 * Composable for fetching impact data from the Go API.
 *
 * API endpoints used:
 *   GET /v1/impact/overview        – full impact page aggregate
 *   GET /v1/impact/snapshot        – organisation-level approved metrics
 *   GET /v1/programmes/:slug       – programme + hub/school context
 *   GET /v1/programmes/:slug/measurements – approved measurements
 *   GET /v1/reports                – published reports and filters
 *   GET /v1/stories                – story index for testimonials
 */
export function useImpact() {
  const config = useRuntimeConfig()

  /**
   * Fetch the full impact page overview.
   * Returns hero, programme context, metrics, testimonials, evidence, reports.
   */
  async function getOverview(): Promise<ImpactOverview | null> {
    try {
      const data = await $fetch<ImpactOverview>(
        `${config.public.apiUrl}/v1/impact/overview`,
      )
      return data
    } catch (error) {
      console.error('Failed to fetch impact overview:', error)
      return null
    }
  }

  /**
   * Fetch organisation-level approved impact snapshot.
   */
  async function getSnapshot(): Promise<ImpactSnapshot | null> {
    try {
      const data = await $fetch<ImpactSnapshot>(
        `${config.public.apiUrl}/v1/impact/snapshot`,
      )
      return data
    } catch (error) {
      console.error('Failed to fetch impact snapshot:', error)
      return null
    }
  }

  /**
   * Fetch programme context (school, hub, deployment status) by slug.
   */
  async function getProgramme(slug: string): Promise<ProgrammeContext | null> {
    try {
      const data = await $fetch<ProgrammeContext>(
        `${config.public.apiUrl}/v1/programmes/${slug}`,
      )
      return data
    } catch (error) {
      console.error('Failed to fetch programme:', error)
      return null
    }
  }

  /**
   * Fetch approved measurements for a programme.
   */
  async function getProgrammeMeasurements(slug: string): Promise<Measurement[]> {
    try {
      const data = await $fetch<Measurement[]>(
        `${config.public.apiUrl}/v1/programmes/${slug}/measurements`,
      )
      return data
    } catch (error) {
      console.error('Failed to fetch programme measurements:', error)
      return []
    }
  }

  /**
   * Fetch published reports, optionally filtered by type.
   */
  async function getReports(type?: string): Promise<ImpactReportItem[]> {
    try {
      const params: Record<string, string> = {}
      if (type) params.type = type

      const data = await $fetch<ImpactReportItem[]>(
        `${config.public.apiUrl}/v1/reports`,
        { params },
      )
      return data
    } catch (error) {
      console.error('Failed to fetch reports:', error)
      return []
    }
  }

  /**
   * Fetch stories for the impact testimonials section.
   * Returns learner and teacher stories that can be used as testimonials.
   */
  async function getImpactStories(): Promise<Story[]> {
    try {
      const data = await $fetch<PaginatedResponse<Story>>(
        `${config.public.apiUrl}/v1/stories`,
        { params: { limit: 10 } },
      )
      return data.data ?? []
    } catch (error) {
      console.error('Failed to fetch impact stories:', error)
      return []
    }
  }

  return {
    getOverview,
    getSnapshot,
    getProgramme,
    getProgrammeMeasurements,
    getReports,
    getImpactStories,
  }
}
