/**
 * Composable for the donation workflow
 */
export function useDonation() {
  const config = useRuntimeConfig()

  interface DonationIntent {
    fundId: string
    amount: number
    currency: string
    recurring: boolean
    donor?: {
      email: string
      name?: string
    }
  }

  /**
   * Fetch donation options (funds, payment methods)
   */
  async function getDonationOptions() {
    try {
      const data = await $fetch(`${config.public.apiUrl}/v1/donation-options`)
      return data
    } catch (error) {
      console.error('Failed to fetch donation options:', error)
      return null
    }
  }

  /**
   * Create a donation intent
   */
  async function createDonation(intent: DonationIntent) {
    try {
      const data = await $fetch(`${config.public.apiUrl}/v1/donations`, {
        method: 'POST',
        body: intent
      })
      return data
    } catch (error) {
      console.error('Failed to create donation:', error)
      throw error
    }
  }

  /**
   * Create a Stripe checkout session
   */
  async function createCheckout(donationId: string) {
    try {
      const data = await $fetch(`${config.public.apiUrl}/v1/donations/${donationId}/checkout`, {
        method: 'POST'
      })
      return data
    } catch (error) {
      console.error('Failed to create checkout:', error)
      throw error
    }
  }

  /**
   * Get donation status
   */
  async function getDonationStatus(publicId: string) {
    try {
      const data = await $fetch(`${config.public.apiUrl}/v1/donations/${publicId}`)
      return data
    } catch (error) {
      console.error('Failed to fetch donation status:', error)
      return null
    }
  }

  return {
    getDonationOptions,
    createDonation,
    createCheckout,
    getDonationStatus
  }
}
