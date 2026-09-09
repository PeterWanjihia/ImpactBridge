import type { TransparencyData } from '~/types'

/**
 * Hardcoded defaults for the Transparency (Accountability) page.
 * Used when the backend / CMS is not yet connected.
 */
const DEFAULTS: TransparencyData = {
  seo: {
    title: 'Accountability',
    description:
      'Clear about what we do. Accountable in how we do it. See how Impact Bridge is governed, how funds and resources are used, and how we stay accountable to communities, partners and supporters.',
  },
  hero: {
    tag: 'ACCOUNTABILITY',
    title: 'Clear about what\nwe do. Accountable\nin how we do it.',
    description:
      'Trust is earned through honesty, accountability and consistent action. On this page you can see how Impact Bridge is governed, how funds and resources are used, how our trustees provide oversight, and how we stay accountable to communities, partners and supporters.',
    imageUrl:
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1920&h=900&fit=crop&crop=center',
    imageAlt: 'Impact Bridge team working with teachers around a laptop',
    ctaText: 'Have a question?',
    ctaTo: '/corporate-partnerships#begin-the-conversation',
    commitments: [
      {
        icon: 'shield',
        title: 'Honesty',
        description: 'We share what we know, including our challenges.',
      },
      {
        icon: 'scale',
        title: 'Accountability',
        description: 'We take responsibility for our decisions and results.',
      },
      {
        icon: 'eye',
        title: 'Transparency',
        description: 'We provide clear, accessible and regular information.',
      },
      {
        icon: 'heart',
        title: 'Respect',
        description:
          'We respect the communities, partners and supporters we work with.',
      },
    ],
  },

  financials: {
    year: 2024,
    expenditureNote: 'Total expenditure',
    disclaimer: 'Figures are unaudited and may be subject to rounding.',
    reportsLinkText: 'View full financial reports',
    reportsLinkTo: '/impact/reports',
    spend: [
      { label: 'Programmes (Learning Hubs, Training & Support)', percentage: 72, color: 'cobalt' },
      { label: 'Equipment & Content', percentage: 14, color: 'teal' },
      { label: 'Operations & Administration', percentage: 8, color: 'purple' },
      { label: 'Fundraising', percentage: 6, color: 'amber' },
    ],
    headline: {
      totalIncome: 436210,
      totalExpenditure: 412786,
      surplus: 23424,
    },
    currency: 'GBP',
  },

  trustees: {
    title: 'Our Trustees',
    description:
      'Our board of trustees provides oversight, guidance and stewardship to ensure we deliver on our mission with integrity and impact. They bring a range of expertise and lived experience to support strong governance and accountability.',
    ctaText: 'Meet all trustees',
    ctaTo: '/our-story',
    members: [
      {
        name: 'Sarah Achieng',
        role: 'Chair of Trustees',
        bio: 'Non-executive director with 20+ years in education and social impact.',
        imageUrl:
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces',
        imageAlt: 'Portrait of Sarah Achieng',
      },
      {
        name: 'Daniel Okello',
        role: 'Trustee, Finance & Audit',
        bio: 'Chartered accountant with extensive experience in finance and governance.',
        imageUrl:
          'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces',
        imageAlt: 'Portrait of Daniel Okello',
      },
      {
        name: 'Ruth Nankya',
        role: 'Trustee, Education & Community Leadership',
        bio: 'Education leader and advocate for equitable learning opportunities.',
        imageUrl:
          'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces',
        imageAlt: 'Portrait of Ruth Nankya',
      },
      {
        name: 'Michael Ssemakula',
        role: 'Trustee, Safeguarding & Governance',
        bio: 'Governance professional focused on safeguarding and risk management.',
        imageUrl:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces',
        imageAlt: 'Portrait of Michael Ssemakula',
      },
    ],
  },

  governance: {
    cards: [
      {
        icon: 'building',
        title: 'How we are governed',
        description:
          'We operate under strong governance practices to protect our mission and the communities we serve.',
        items: ['Independent board oversight', 'Regular risk assessments', 'External audit and review'],
      },
      {
        icon: 'shield',
        title: 'Policies we follow',
        description:
          'We follow policies that ensure safeguarding, ethics and responsible use of resources.',
        items: ['Safeguarding & child protection', 'Data privacy & protection', 'Financial management policy'],
      },
      {
        icon: 'scale',
        title: 'How we make decisions',
        description:
          'Our decisions are informed by data, community needs and our long-term vision for lasting impact.',
        items: ['Evidence-based planning', 'Community consultation', 'Continuous learning'],
      },
    ],
  },

  impact: {
    title: 'Our impact at a glance',
    asOf: 'May 2025. Updated quarterly.',
    metrics: [
      { icon: 'building', value: '6', label: 'Hubs funded' },
      { icon: 'server', value: '1', label: 'Hub deployed' },
      { icon: 'school', value: '2', label: 'Schools in preparation' },
      { icon: 'laptop', value: '38', label: 'Devices committed' },
      { icon: 'graduation', value: '14', label: 'Teachers trained and supported' },
      { icon: 'users', value: '1,250+', label: 'Learners reached' },
    ],
  },

  newsletter: {
    title: 'Stay informed',
    description: 'Subscribe to receive our reports, updates and stories.',
    placeholder: 'Your email address',
    buttonText: 'Subscribe',
    successText: "You're subscribed — thank you! We'll be in touch.",
    privacyNote: 'We respect your privacy. You can unsubscribe at any time.',
    imageUrl:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop&crop=center',
    imageAlt: 'Smiling student in a classroom',
  },
}

/**
 * Composable for fetching Transparency (Accountability) page data.
 *
 * Data flow per the architecture blueprint:
 *   1. Start with hardcoded defaults.
 *   2. Go API aggregate: GET /v1/transparency/summary — published
 *      financial/governance summary owned by the governance module
 *      (approved metrics only; CMS never owns financial truth).
 *   3. CMS editorial merge: Directus `pages` sections (hero, trustees,
 *      governance, newsletter copy) fall on top of defaults.
 *   4. Merge live data over defaults where available.
 */
export function useTransparency() {
  const config = useRuntimeConfig()
  const { getPage } = useContent()

  const data = ref<TransparencyData>({ ...DEFAULTS })
  const loading = ref(true)
  const error = ref<string | null>(null)

  async function load() {
    loading.value = true
    error.value = null

    try {
      // --- Go API aggregate endpoint (governance module owns this data) ---
      try {
        const apiData = await $fetch<Partial<TransparencyData>>(
          `${config.public.apiUrl}/v1/transparency/summary`,
        )
        if (apiData) {
          data.value = {
            ...DEFAULTS,
            ...apiData,
            financials: { ...DEFAULTS.financials, ...apiData.financials },
            trustees: { ...DEFAULTS.trustees, ...apiData.trustees },
            governance: { ...DEFAULTS.governance, ...apiData.governance },
            impact: { ...DEFAULTS.impact, ...apiData.impact },
          }
        }
      } catch (apiError) {
        // API not deployed yet — fall through to CMS/static defaults.
        console.warn('Transparency API unavailable, falling back to CMS/static:', apiError)
      }

      // --- CMS editorial content (Directus page sections) ---
      const cmsPage = await getPage('transparency')

      if (cmsPage) {
        const res = cmsPage as any
        const page = Array.isArray(res?.data) ? res.data[0] : res?.data ?? res
        const sections = page?.sections ?? []

        if (page?.seo) {
          data.value.seo = { ...data.value.seo, ...page.seo }
        }

        for (const section of sections) {
          switch (section.type) {
            case 'hero':
              if (section.data) data.value.hero = { ...data.value.hero, ...section.data }
              break
            case 'financials':
              if (section.data) data.value.financials = { ...data.value.financials, ...section.data }
              break
            case 'trustees':
              if (section.data) data.value.trustees = { ...data.value.trustees, ...section.data }
              break
            case 'governance':
              if (section.data) data.value.governance = { ...data.value.governance, ...section.data }
              break
            case 'impact':
              if (section.data) data.value.impact = { ...data.value.impact, ...section.data }
              break
            case 'newsletter':
              if (section.data) data.value.newsletter = { ...data.value.newsletter, ...section.data }
              break
          }
        }
      }
    } catch (e: any) {
      error.value = e?.message ?? 'Failed to load transparency data'
      console.error('useTransparency error:', e)
    } finally {
      loading.value = false
    }
  }

  return {
    data,
    loading,
    error,
    load,
  }
}
