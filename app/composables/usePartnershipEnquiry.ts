/**
 * Composable for the partnership enquiry workflow
 */
export function usePartnershipEnquiry() {
  const config = useRuntimeConfig()

  interface PartnershipEnquiry {
    organisationName: string
    contactName: string
    contactEmail: string
    contactPhone?: string
    contributionType: string
    estimatedValue?: string
    goals: string
    source?: string
  }

  /**
   * Fetch partnership options
   */
  async function getPartnershipOptions() {
    try {
      const data = await $fetch(`${config.public.apiUrl}/v1/partnerships/options`)
      return data
    } catch (error) {
      console.error('Failed to fetch partnership options:', error)
      return null
    }
  }

  /**
   * Create a partnership enquiry
   */
  async function createEnquiry(enquiry: PartnershipEnquiry) {
    try {
      const data = await $fetch(`${config.public.apiUrl}/v1/partnership-enquiries`, {
        method: 'POST',
        body: enquiry
      })
      return data
    } catch (error) {
      console.error('Failed to create partnership enquiry:', error)
      throw error
    }
  }

  return {
    getPartnershipOptions,
    createEnquiry
  }
}
