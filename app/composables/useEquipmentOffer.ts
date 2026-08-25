/**
 * Composable for the equipment offer workflow
 */
export function useEquipmentOffer() {
  const config = useRuntimeConfig()

  interface EquipmentOffer {
    organisation: string
    contactName: string
    contactEmail: string
    contactPhone?: string
    items: Array<{
      category: string
      manufacturer?: string
      model?: string
      quantity: number
      condition: string
      specifications?: string
    }>
    logisticsNotes?: string
  }

  /**
   * Fetch equipment requirements/needs
   */
  async function getEquipmentRequirements() {
    try {
      const data = await $fetch(`${config.public.apiUrl}/v1/equipment-requirements`)
      return data
    } catch (error) {
      console.error('Failed to fetch equipment requirements:', error)
      return null
    }
  }

  /**
   * Create an equipment offer draft
   */
  async function createOffer(offer: EquipmentOffer) {
    try {
      const data = await $fetch(`${config.public.apiUrl}/v1/equipment-offers`, {
        method: 'POST',
        body: offer
      })
      return data
    } catch (error) {
      console.error('Failed to create equipment offer:', error)
      throw error
    }
  }

  /**
   * Update an equipment offer draft
   */
  async function updateOffer(offerId: string, updates: Partial<EquipmentOffer>) {
    try {
      const data = await $fetch(`${config.public.apiUrl}/v1/equipment-offers/${offerId}`, {
        method: 'PATCH',
        body: updates
      })
      return data
    } catch (error) {
      console.error('Failed to update equipment offer:', error)
      throw error
    }
  }

  /**
   * Submit an equipment offer
   */
  async function submitOffer(offerId: string) {
    try {
      const data = await $fetch(`${config.public.apiUrl}/v1/equipment-offers/${offerId}/submit`, {
        method: 'POST'
      })
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
