/**
 * Composable for fetching impact data from the Go API
 */
export function useImpact() {
  const config = useRuntimeConfig()

  /**
   * Fetch impact overview
   */
  async function getOverview() {
    try {
      const data = await $fetch(`${config.public.apiUrl}/v1/impact/overview`)
      return data
    } catch (error) {
      console.error('Failed to fetch impact overview:', error)
      return null
    }
  }

  /**
   * Fetch impact snapshot (organisation-level metrics)
   */
  async function getSnapshot() {
    try {
      const data = await $fetch(`${config.public.apiUrl}/v1/impact/snapshot`)
      return data
    } catch (error) {
      console.error('Failed to fetch impact snapshot:', error)
      return null
    }
  }

  /**
   * Fetch measurements for a programme
   */
  async function getProgrammeMeasurements(slug: string) {
    try {
      const data = await $fetch(`${config.public.apiUrl}/v1/programmes/${slug}/measurements`)
      return data
    } catch (error) {
      console.error('Failed to fetch programme measurements:', error)
      return []
    }
  }

  return {
    getOverview,
    getSnapshot,
    getProgrammeMeasurements
  }
}
