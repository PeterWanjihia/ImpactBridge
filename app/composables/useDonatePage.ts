import type { DonatePageData, PaymentMethod } from '~/types'

/**
 * Hardcoded defaults — used when the backend / CMS is not yet connected.
 * Mirrors the approved donate design; each section is individually
 * overridable by live data once available.
 */
const DEFAULTS: DonatePageData = {
  hero: {
    eyebrow: 'YOUR CONTRIBUTION. REAL CLASSROOMS.',
    title: 'Fund the next classroom.',
    subtitle:
      'Help bring offline learning resources, prepared teachers and ongoing support to schools where connectivity should not limit opportunity.',
    videoSrc:
      'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    videoPoster:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    videoDuration: '1:29',
    trustItems: [
      { icon: 'shield', label: 'Secure & trusted payments' },
      { icon: 'receipt', label: "You'll get a receipt by email" },
      { icon: 'lock', label: 'We respect your privacy' },
    ],
  },

  assurances: [
    {
      icon: 'shield',
      title: 'Secure payment rails',
      description: 'Processed by trusted partners (Stripe, crypto processors).',
    },
    {
      icon: 'receipt',
      title: 'Clear confirmation',
      description: "You'll receive a reference and receipt after payment.",
    },
    {
      icon: 'chart',
      title: 'Real impact',
      description: 'Funds support the complete learning system, not just devices.',
    },
    {
      icon: 'lock',
      title: 'Your privacy',
      description: 'We never sell your data. You choose what we share.',
    },
  ],

  crypto: {
    title: 'Give with the assets',
    titleAccent: 'you already hold',
    description:
      'Contribute using stablecoins and cryptocurrencies across multiple blockchain networks. Choose your asset and network, get an exact invoice and track confirmation in real time.',
    linkText: 'How crypto donations work',
    linkTo: '/transparency#faqs',
    panelLabel: 'Popular options',
    assets: [
      { symbol: 'USDT', name: 'USDT', network: 'TRON (TRC-20)', icon: 'usdt', color: 'teal' },
      { symbol: 'USDT', name: 'USDT', network: 'Ethereum (ERC-20)', icon: 'eth', color: 'navy' },
      { symbol: 'USDC', name: 'USDC', network: 'Solana', icon: 'usdc', color: 'cobalt' },
      { symbol: 'BTC', name: 'Bitcoin', network: 'Bitcoin', icon: 'btc', color: 'amber' },
      { symbol: 'TRX', name: 'TRX', network: 'TRON', icon: 'trx', color: 'red' },
      { symbol: 'USDC', name: 'USDC', network: 'Polygon', icon: 'matic', color: 'purple' },
    ],
    viewAllText: 'View all assets and networks',
  },

  campaign: {
    id: 'next-ten-hubs',
    name: 'The next ten hubs',
    label: 'Active campaign',
    goal: 30000,
    current: 18450,
    currency: 'GBP',
    status: 'active',
    stats: [
      { icon: 'hubs', value: 6, label: "Hubs funded" },
      { icon: 'devices', value: 38, label: 'Suitable devices committed' },
      { icon: 'schools', value: 2, label: 'Schools in preparation' },
      { icon: 'deployed', value: 1, label: 'Hub deployed' },
    ],
    detailsText: 'See campaign details',
    detailsTo: '/impact',
  },

  otherWays: [
    {
      icon: 'building',
      title: 'Representing an organisation?',
      description:
        'Partner with us to fund complete hubs, support teachers, engage employees or share expertise.',
      linkText: 'Explore Corporate Partnerships',
      linkTo: '/corporate-partnerships',
    },
    {
      icon: 'laptop',
      title: 'Have equipment to offer?',
      description:
        'Help us turn suitable technology into powerful learning tools for classrooms.',
      linkText: 'Donate Equipment',
      linkTo: '/donate-equipment',
    },
  ],

  faqs: [
    {
      id: 'faq-currencies',
      question: 'Which cryptocurrencies do you accept?',
      answer:
        'We accept major assets across several networks, including USDT and USDC on TRON, Ethereum, Solana and Polygon, plus Bitcoin. The live list is shown in the popular options above.',
    },
    {
      id: 'faq-usdt-tron',
      question: 'Can I donate USDT using TRON?',
      answer:
        'Yes. TRON (TRC-20) is one of the most common networks for USDT giving and is fully supported. Select USDT — TRON (TRC-20) and we will generate an exact invoice.',
    },
    {
      id: 'faq-valuation',
      question: 'How are crypto contributions valued?',
      answer:
        'Crypto gifts are valued at the market rate at the moment your invoice is issued, and the invoice is fixed in your chosen asset for its validity period.',
    },
    {
      id: 'faq-receipt',
      question: 'Do I receive a receipt for crypto donations?',
      answer:
        'Yes. Once the transaction is confirmed on-chain, you receive a receipt by email with a reference you can use for your records.',
    },
    {
      id: 'faq-expiry',
      question: 'Why does the crypto invoice expire?',
      answer:
        'Invoices lock in an exact amount and wallet address for a short window so your payment can be matched reliably. If yours expires, simply request a new one.',
    },
    {
      id: 'faq-secure',
      question: 'Is my payment secure?',
      answer:
        'Card and wallet payments are processed by Stripe on their hosted checkout. We never see or store your card details.',
    },
    {
      id: 'faq-monthly',
      question: 'Can I donate monthly?',
      answer:
        'Yes — choose "Give monthly" in the donation widget and your gift is set up as a recurring subscription you can pause or cancel at any time.',
    },
    {
      id: 'faq-bank',
      question: 'Can I make a bank transfer?',
      answer:
        'Yes. Choose Bank Transfer in the widget and we will email you the account details and a payment reference.',
    },
    {
      id: 'faq-match',
      question: 'Can my employer match my donation?',
      answer:
        'Many employers match charitable gifts. After donating, request a match from your HR team — we are happy to provide confirmation of your donation.',
    },
    {
      id: 'faq-refund',
      question: 'What if I need a refund?',
      answer:
        'Contact us with your donation reference and we will work with our payment partners to resolve it fairly. Card refunds return to the original payment method.',
    },
  ],

  cta: {
    title: 'Every gift becomes part of',
    titleAccent: 'a bigger change.',
    description:
      "After your contribution, you'll receive confirmation and can choose how you'd like to hear about the impact you're making.",
    primaryText: 'Fund the next classroom',
    primaryTo: '#top',
    secondaryText: 'See the impact',
    secondaryTo: '/impact',
  },
}

/**
 * Composable for the donate page.
 *
 * Data flow (architecture spec):
 *   1. Start with hardcoded defaults so the page works without a backend.
 *   2. GET /v1/campaigns/active  → campaign progress + delivery stats (Go API).
 *   3. GET /v1/donation-options  → funds, payment methods, currency, presets
 *      and crypto asset list (Go API).
 *   4. CMS `faqs` collection     → FAQ items (category = donate).
 *
 * Editorial copy (hero, assurances, other ways, CTA) stays in the CMS once
 * live; transactional state (campaign totals, funds, payment config) always
 * comes from the Go API — never from the CMS (spec rule).
 */
export function useDonatePage() {
  const config = useRuntimeConfig()
  const { getActiveCampaign, getDonationOptions, DEFAULT_FUNDS, DEFAULT_CRYPTO_ASSETS } =
    useDonation()
  const { getFaqs } = useContent()

  const data = ref<DonatePageData>({ ...DEFAULTS })
  const loading = ref(true)

  /** Live donation options for the widget (funds, methods, presets). */
  const funds = ref(DEFAULT_FUNDS)
  const paymentMethods = ref<PaymentMethod[]>(['card', 'crypto', 'bank_transfer'])
  const currency = ref('GBP')
  const presets = ref([25, 50, 100, 250, 500])

  async function load() {
    loading.value = true
    try {
      const [campaign, options, faqResult] = await Promise.allSettled([
        getActiveCampaign(),
        getDonationOptions(),
        getFaqs('donate'),
      ])

      // --- Campaign progress (Go API: GET /v1/campaigns/active) --------------
      if (campaign.status === 'fulfilled' && campaign.value) {
        const c = campaign.value
        data.value.campaign = {
          ...data.value.campaign,
          ...c,
          // Preserve presentation fields the API does not own
          label: c.label ?? data.value.campaign.label,
          stats: c.stats?.length ? c.stats : data.value.campaign.stats,
          detailsText: c.detailsText ?? data.value.campaign.detailsText,
          detailsTo: c.detailsTo ?? data.value.campaign.detailsTo,
        }
      }

      // --- Donation options (Go API: GET /v1/donation-options) ---------------
      if (options.status === 'fulfilled' && options.value) {
        const o = options.value
        if (o.funds?.length) funds.value = o.funds
        if (o.paymentMethods?.length) paymentMethods.value = o.paymentMethods
        if (o.currency) currency.value = o.currency
        if (o.presets?.length) presets.value = o.presets
        if (o.cryptoAssets?.length) {
          data.value.crypto.assets = o.cryptoAssets
        }
      }

      // --- FAQs (CMS: faqs collection, category = donate) ---------------------
      if (faqResult.status === 'fulfilled' && Array.isArray(faqResult.value)) {
        const res = faqResult.value as any
        const rows = Array.isArray(res) ? res : res?.data ?? []
        if (rows.length) {
          data.value.faqs = rows.map((row: any) => ({
            id: String(row.id),
            question: row.question,
            answer: row.answer,
          }))
        }
      }
    } finally {
      loading.value = false
    }
  }

  return {
    data,
    funds,
    paymentMethods,
    currency,
    presets,
    loading,
    load,
  }
}
