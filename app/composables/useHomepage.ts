import type {
  HomepageData,
  Campaign,
  ImpactSnapshot,
  Story,
  PaginatedResponse,
} from '~/types'

/**
 * Hardcoded defaults — used when the backend / CMS is not yet connected.
 * Each section can be individually overridden by live data once available.
 */
const DEFAULTS: HomepageData = {
  hero: {
    eyebrow: 'EVERY CHILD. EVERY CLASS. EVERYWHERE.',
    title: 'The internet should not decide who gets to ',
    titleAccent: 'learn.',
    subtitle:
      'We bring offline digital learning hubs, teacher training and resources to schools without reliable internet—so every child can learn, no matter where they are.',
    imageUrl:
      'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1920&q=80',
    imageAlt:
      'Students in a classroom using offline digital learning resources',
    primaryCta: { text: 'Fund the Next Classroom', to: '/donate', icon: 'heart' },
    secondaryCta: { text: 'Partner as a Company', to: '/corporate-partnerships', icon: 'building' },
    note: 'Fund learning hubs, donate suitable technology or contribute expertise.',
    campaign: {
      title: 'Launch 10 Learning Hubs',
      raised: 18450,
      goal: 30000,
      currency: 'GBP',
      hubsFunded: 6,
      devicesCommitted: 38,
      learnersExpected: '500+',
    },
  },

  valueProps: [
    {
      iconKey: 'offline',
      title: 'Offline-First',
      description: 'Learning that works without internet.',
    },
    {
      iconKey: 'teacher',
      title: 'Teacher-Led',
      description: 'Teachers at the centre of every classroom.',
    },
    {
      iconKey: 'community',
      title: 'Locally Owned',
      description: 'Built with communities, for communities.',
    },
    {
      iconKey: 'measure',
      title: 'Transparently Measured',
      description: 'We track what matters and share our results.',
    },
  ],

  challenge: {
    eyebrow: 'The Challenge',
    title: 'Too many learners are left behind.',
    description:
      'In too many schools, unreliable internet and a lack of digital resources leave children without the opportunity to learn and grow.',
    stats: [
      { value: '60%', label: 'of Ugandan schools lack reliable internet access' },
      { value: '1 in 3', label: 'teachers lack access to digital teaching resources' },
      { iconKey: 'school', label: 'Rural classrooms remain underserved by digital learning tools' },
    ],
    source: '*Sources: UNESCO (2023), MICS (2023)',
    imageUrl:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
    imageAlt: 'Students sitting in rows in a rural Ugandan school classroom',
  },

  modelSteps: [
    { number: 1, title: 'Offline Learning Hub', description: 'Local curriculum and resources without continuous internet.', iconKey: 'laptop' },
    { number: 2, title: 'Trained Teacher', description: 'A supported teacher leads and maintains the programme.', iconKey: 'teacher' },
    { number: 3, title: 'Engaged Classroom', description: 'Lessons become interactive and collaborative.', iconKey: 'userGroup' },
    { number: 4, title: 'Confident Learners', description: 'Understanding, participation and confidence improve.', iconKey: 'heart' },
    { number: 5, title: 'Stronger Communities', description: 'Local ownership sustains educational access.', iconKey: 'community' },
  ],

  evidence: {
    title: 'Early evidence. Real lives.',
    pilotLabel: 'PILOT PERIOD: JAN–JUNE 2026',
    pilotLocation: 'KIRYANDONGO DISTRICT',
    stats: [
      { value: '52', label: 'learners enrolled' },
      { value: '2', label: 'teachers trained' },
      { value: '1', label: 'learning hub operating' },
      { value: '85%', label: 'improved assessment scores' },
      { value: '90%', label: 'reported greater confidence' },
    ],
    testimonial: {
      quote: 'I feel like I can now finish my schooling.',
      author: 'Namulava, P7 Student',
      story:
        'Namulava is part of our pilot at Bwikya Primary School. With offline lessons and a supportive teacher, she\u2019s gaining the confidence to learn and lead.',
      imageUrl:
        'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&q=80',
      imageAlt: 'Namulava',
      storyUrl: '/stories/namulava',
    },
    impactLink: { text: 'How we measure impact', to: '/impact' },
  },

  waysToGive: {
    title: 'Two ways to build brighter futures.',
    individual: {
      iconKey: 'heart',
      title: 'Give as an individual',
      description: 'Your support today helps a child learn, a teacher teach and a community grow.',
      items: [
        'One-time or monthly giving',
        'Secure payments',
        'Instant receipt',
        'Direct classroom support',
      ],
      cta: { text: 'Give Personally', to: '/donate' },
      imageUrl:
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80',
      imageAlt: 'Children in classroom',
      color: 'blue',
    },
    corporate: {
      iconKey: 'building',
      title: 'Partner as a company',
      description: 'Work with us to expand access to learning and create long-term impact.',
      items: [
        'Fund or sponsor learning hubs',
        'Donate suitable technology',
        'Employee giving & volunteering',
        'Strategic partnerships & reporting',
      ],
      note: 'Receive a clear proposal, implementation plan, donation acknowledgement and impact report.',
      cta: { text: 'Start a Corporate Partnership', to: '/corporate-partnerships' },
      imageUrl:
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80',
      imageAlt: 'Corporate partner working',
      color: 'green',
    },
  },

  implementationLinks: [
    {
      iconKey: 'fileText',
      title: 'Corporate Partnership Pack',
      description: 'Learn our approach, impact framework and partnership opportunities.',
      to: '/corporate-partnerships',
      linkText: 'View the pack',
    },
    {
      iconKey: 'monitor',
      title: 'Equipment Donation Guidelines',
      description: 'Assessment criteria and conditions that ensure meaningful impact.',
      to: '/donate-equipment',
      linkText: 'View guidelines',
    },
    {
      iconKey: 'shield',
      title: 'Governance & Financial Reports',
      description: 'Financial reporting and responsible stewardship.',
      to: '/transparency',
      linkText: 'View reports',
    },
    {
      iconKey: 'users',
      title: 'Safeguarding & Complaints',
      description: 'Our commitment to child safety and accountability.',
      to: '/transparency#safeguarding',
      linkText: 'Learn more',
    },
  ],

  cta: {
    title: 'Be the bridge.',
    description: 'Help us launch the next 10 learning hubs.',
    primaryCta: { text: 'Donate Now', to: '/donate', icon: 'heart' },
    secondaryCta: { text: 'Partner With Us', to: '/corporate-partnerships', icon: 'building' },
  },
}

/**
 * Composable for fetching homepage data.
 *
 * Data flow:
 *   1. Start with hardcoded defaults (so the page works without a backend).
 *   2. Attempt to fetch CMS content for editorial sections (value props, challenge copy, model steps).
 *   3. Attempt to fetch campaign progress from the Go API.
 *   4. Attempt to fetch impact snapshot from the Go API.
 *   5. Merge live data over defaults where available.
 *
 * Once the backend is ready, add a dedicated GET /v1/homepage endpoint that returns
 * the full HomepageData shape, and simplify this composable to a single call.
 */
export function useHomepage() {
  const config = useRuntimeConfig()
  const { getPage } = useContent()
  const { getSnapshot } = useImpact()

  const data = ref<HomepageData>({ ...DEFAULTS })
  const loading = ref(true)
  const error = ref<string | null>(null)

  /**
   * Load all homepage data in parallel.
   * Failures in individual sections are swallowed — the page always renders with defaults.
   */
  async function load() {
    loading.value = true
    error.value = null

    try {
      const [cmsPage, impactSnapshot] = await Promise.allSettled([
        getPage('home'),
        getSnapshot(),
      ])

      // --- CMS editorial content ---------------------------------------------------
      // Directus returns { data: [{ ...pageObject }] } for collection queries.
      if (cmsPage.status === 'fulfilled' && cmsPage.value) {
        const res = cmsPage.value as any
        const page = Array.isArray(res?.data) ? res.data[0] : res?.data ?? res
        const sections = page?.sections ?? []

        for (const section of sections) {
          switch (section.type) {
            case 'value_props':
              if (Array.isArray(section.data?.items)) {
                data.value.valueProps = section.data.items
              }
              break
            case 'challenge':
              if (section.data) {
                data.value.challenge = {
                  ...data.value.challenge,
                  ...section.data,
                }
              }
              break
            case 'model_steps':
              if (Array.isArray(section.data?.steps)) {
                data.value.modelSteps = section.data.steps
              }
              break
            case 'evidence':
              if (section.data) {
                data.value.evidence = {
                  ...data.value.evidence,
                  ...section.data,
                }
              }
              break
            case 'ways_to_give':
              if (section.data) {
                data.value.waysToGive = section.data
              }
              break
            case 'implementation':
              if (Array.isArray(section.data?.links)) {
                data.value.implementationLinks = section.data.links
              }
              break
            case 'cta':
              if (section.data) {
                data.value.cta = section.data
              }
              break
          }
        }
      }

      // --- Campaign progress (Go API) ---------------------------------------------
      // When the campaign endpoint is ready, replace this with:
      //
      //   const campaign = await $fetch<Campaign>(
      //     `${config.public.apiUrl}/v1/campaigns/active`
      //   )
      //   data.value.hero.campaign = {
      //     ...data.value.hero.campaign,
      //     raised: campaign.current,
      //     goal: campaign.goal,
      //   }
      //
      // For now, the hardcoded defaults in hero.campaign are used.

      // --- Impact snapshot (Go API) ------------------------------------------------
      // When ready, map live totals into evidence stats:
      //
      //   if (impactSnapshot.status === 'fulfilled' && impactSnapshot.value) {
      //     const snapshot = impactSnapshot.value as ImpactSnapshot
      //     data.value.evidence.stats[0].value = String(snapshot.totalStudentsReached)
      //     data.value.evidence.stats[1].value = String(snapshot.totalTeachersTrained)
      //     data.value.evidence.stats[3].value = String(snapshot.totalHubsDeployed)
      //   }
    } catch (e: any) {
      error.value = e?.message ?? 'Failed to load homepage data'
      console.error('useHomepage error:', e)
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
