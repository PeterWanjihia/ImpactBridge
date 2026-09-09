import type {
  DonationOptions,
  DonationIntent,
  CreateDonationResponse,
  CheckoutSession,
  Donation,
  Fund,
  PaymentMethod,
  CryptoAssetOption,
  Campaign,
} from '~/types'

/**
 * Composable for the donation workflow.
 *
 * Architecture spec mapping (Appendix A — public API inventory):
 *   GET  /v1/donation-options           → funds, payment method configuration
 *   POST /v1/donations                  → create donation intent
 *   POST /v1/donations/:id/checkout     → create Stripe checkout session
 *   GET  /v1/donations/:publicId        → read donor-facing status
 *   GET  /v1/campaigns/active           → current fundraising campaign
 *
 * Rules honoured here (architecture spec):
 *   - Transactional writes always go through the Go API; the CMS never owns
 *     donation/payment truth.
 *   - Checkout is Stripe-hosted; the browser is redirected to the provider and
 *     never decides that a payment succeeded.
 *   - Only opaque public IDs are exposed to the donor — never sequential ids.
 */
export function useDonation() {
  const config = useRuntimeConfig()

  /** Step 1 of the widget: method + frequency + amount + fund. */
  interface DonationChoice {
    method: PaymentMethod
    frequency: 'once' | 'monthly'
    amount: number
    fundId: string
  }

  /**
   * Fetch donation options (funds, payment methods, currency, presets).
   * Returns null when the API is unavailable so callers can keep defaults.
   */
  async function getDonationOptions(): Promise<DonationOptions | null> {
    try {
      return await $fetch<DonationOptions>(
        `${config.public.apiUrl}/v1/donation-options`,
      )
    } catch (error) {
      console.error('Failed to fetch donation options:', error)
      return null
    }
  }

  /**
   * Fetch the active campaign shown in the donate page progress panel.
   * Returns null when the API is unavailable so callers can keep defaults.
   */
  async function getActiveCampaign(): Promise<Campaign | null> {
    try {
      return await $fetch<Campaign>(
        `${config.public.apiUrl}/v1/campaigns/active`,
      )
    } catch (error) {
      console.error('Failed to fetch active campaign:', error)
      return null
    }
  }

  /**
   * Step 1 → Step 2: create the donation intent.
   * The Go API persists the intent and returns the donor-facing public ID.
   */
  async function createDonation(
    intent: DonationIntent,
  ): Promise<CreateDonationResponse | null> {
    try {
      return await $fetch<CreateDonationResponse>(
        `${config.public.apiUrl}/v1/donations`,
        { method: 'POST', body: intent },
      )
    } catch (error) {
      console.error('Failed to create donation:', error)
      return null
    }
  }

  /**
   * Step 3: create the Stripe-hosted checkout session and redirect.
   * Per spec, payment truth lives with the provider + webhooks — the browser
   * is only ever redirected to the hosted page.
   */
  async function startCheckout(donationId: string): Promise<void> {
    try {
      const session = await $fetch<CheckoutSession>(
        `${config.public.apiUrl}/v1/donations/${donationId}/checkout`,
        { method: 'POST' },
      )
      if (session?.url) {
        window.location.assign(session.url)
      }
    } catch (error) {
      console.error('Failed to start checkout:', error)
      throw error
    }
  }

  /**
   * Donation completion page: authoritative lookup after the provider redirect.
   * The browser never decides that a payment succeeded — this read model does.
   */
  async function getDonationStatus(publicId: string): Promise<Donation | null> {
    try {
      return await $fetch<Donation>(
        `${config.public.apiUrl}/v1/donations/${publicId}`,
      )
    } catch (error) {
      console.error('Failed to fetch donation status:', error)
      return null
    }
  }

  /**
   * Full Step 1 → 2 → 3 flow used by the donate page widget:
   * create the intent, then redirect to the provider-hosted checkout.
   * For crypto/bank transfer the Go API returns its own hosted instructions
   * URL (crypto invoice / transfer details) through the same checkout call.
   */
  async function donate(choice: DonationChoice): Promise<void> {
    const donation = await createDonation({
      fundId: choice.fundId,
      amount: choice.amount,
      currency: 'GBP',
      recurring: choice.frequency === 'monthly',
    })
    if (!donation) {
      throw new Error('Could not start your donation. Please try again.')
    }
    const id = donation.donationId ?? donation.publicId
    await startCheckout(id)
  }

  /**
   * Default funds used until GET /v1/donation-options is live.
   * Keys mirror the "Where should your contribution go?" radio list.
   */
  const DEFAULT_FUNDS: Fund[] = [
    { id: 'where-needed', name: 'Where it is needed most', description: "We'll use your gift where the need is greatest." },
    { id: 'next-hub', name: 'The next learning hub', description: 'Fund the equipment, preparation and deployment of the next hub.' },
    { id: 'teacher-development', name: 'Teacher development', description: 'Train and support Champion Teachers in partner schools.' },
    { id: 'content-support', name: 'Content and continued support', description: 'Keep curriculum content and hub support up to date.' },
  ]

  /** Default crypto assets shown until the API serves the real list. */
  const DEFAULT_CRYPTO_ASSETS: CryptoAssetOption[] = [
    { symbol: 'USDT', name: 'USDT', network: 'TRON (TRC-20)', icon: 'usdt', color: 'teal' },
    { symbol: 'USDT', name: 'USDT', network: 'Ethereum (ERC-20)', icon: 'eth', color: 'navy' },
    { symbol: 'USDC', name: 'USDC', network: 'Solana', icon: 'usdc', color: 'cobalt' },
    { symbol: 'BTC', name: 'Bitcoin', network: 'Bitcoin', icon: 'btc', color: 'amber' },
    { symbol: 'TRX', name: 'TRX', network: 'TRON', icon: 'trx', color: 'red' },
    { symbol: 'USDC', name: 'USDC', network: 'Polygon', icon: 'matic', color: 'purple' },
  ]

  return {
    getDonationOptions,
    getActiveCampaign,
    createDonation,
    startCheckout,
    getDonationStatus,
    donate,
    DEFAULT_FUNDS,
    DEFAULT_CRYPTO_ASSETS,
  }
}
