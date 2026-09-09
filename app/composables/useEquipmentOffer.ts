/**
 * Composable for the equipment offer workflow.
 *
 * Routes per the architecture spec (Appendix A — Public API inventory):
 * - GET   /v1/equipment-requirements      Published equipment needs/criteria
 * - POST  /v1/equipment-offers            Create equipment offer draft
 * - PATCH /v1/equipment-offers/:id        Update draft
 * - POST  /v1/equipment-offers/:id/submit Submit offer
 *
 * Transactional writes always go through the Go API — the CMS never owns
 * equipment workflow state.
 */
export function useEquipmentOffer() {
  const config = useRuntimeConfig()

  /** Draft offer payload sent to POST /v1/equipment-offers. */
  interface EquipmentOfferPayload {
    organisation: string
    contactName: string
    contactEmail: string
    contactPhone?: string
    country?: string
    jobTitle?: string
    items: Array<{
      category: string
      manufacturer?: string
      model?: string
      quantity: number
      condition: string
      specifications?: string
    }>
    logisticsNotes?: string
    ownershipConfirmed?: boolean
    dataErasureConfirmed?: boolean
  }

  /** Record returned after creating an offer draft. */
  interface EquipmentOfferRecord {
    id: string
    status: string
  }

  /**
   * Fetch equipment requirements/needs
   */
  async function getEquipmentRequirements() {
    try {
      const data = await $fetch(
        `${config.public.apiUrl}/v1/equipment-requirements`
      )
      return data
    } catch (error) {
      console.error('Failed to fetch equipment requirements:', error)
      return null
    }
  }

  /**
   * Create an equipment offer draft
   */
  async function createOffer(
    offer: EquipmentOfferPayload
  ): Promise<EquipmentOfferRecord | null> {
    try {
      const data = await $fetch<EquipmentOfferRecord>(
        `${config.public.apiUrl}/v1/equipment-offers`,
        {
          method: 'POST',
          body: offer
        }
      )
      return data
    } catch (error) {
      console.error('Failed to create equipment offer:', error)
      throw error
    }
  }

  /**
   * Update an equipment offer draft
   */
  async function updateOffer(
    offerId: string,
    updates: Partial<EquipmentOfferPayload>
  ): Promise<EquipmentOfferRecord | null> {
    try {
      const data = await $fetch<EquipmentOfferRecord>(
        `${config.public.apiUrl}/v1/equipment-offers/${offerId}`,
        {
          method: 'PATCH',
          body: updates
        }
      )
      return data
    } catch (error) {
      console.error('Failed to update equipment offer:', error)
      throw error
    }
  }

  /**
   * Submit an equipment offer
   */
  async function submitOffer(
    offerId: string
  ): Promise<EquipmentOfferRecord | null> {
    try {
      const data = await $fetch<EquipmentOfferRecord>(
        `${config.public.apiUrl}/v1/equipment-offers/${offerId}/submit`,
        {
          method: 'POST'
        }
      )
      return data
    } catch (error) {
      console.error('Failed to submit equipment offer:', error)
      throw error
    }
  }

  return {
    getEquipmentRequirements,
    createOffer,
    updateOffer,
    submitOffer
  }
}
