import type { OurModelData } from '~/types'

/**
 * Hardcoded defaults for the Our Model page.
 * Used when the backend / CMS is not yet connected.
 */
const DEFAULTS: OurModelData = {
  hero: {
    title: 'A computer does not transform a classroom.\n',
    titleAccent: 'A complete learning system can.',
    description:
      'Impact Bridge combines offline learning technology, curated resources, trained teachers and local ownership into one practical model—designed for schools with limited connectivity.',
    imageUrl:
      'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1920&q=80',
    imageAlt:
      'Teacher guiding students in a classroom using digital learning resources',
    tabs: [
      { label: 'Overview', href: '#overview', active: true },
      { label: 'Inside the Hub', href: '#inside-the-hub' },
      { label: 'Teacher Development', href: '#teacher-development' },
      { label: 'Deployment', href: '#deployment' },
      { label: 'Support', href: '#support' },
      { label: 'Measurement', href: '#measurement' },
    ],
    features: [
      { iconKey: 'offline', label: 'Offline-first' },
      { iconKey: 'teacher', label: 'Teacher-led' },
      { iconKey: 'book', label: 'Curriculum-aligned' },
      { iconKey: 'community', label: 'Locally implemented' },
      { iconKey: 'handshake', label: 'Continuously supported' },
      { iconKey: 'chart', label: 'Transparently measured' },
    ],
    primaryCta: { text: 'Explore the model', to: '#overview' },
    secondaryCta: { text: 'See a hub in action', to: '#inside-the-hub' },
  },

  overview: {
    number: '01',
    title: 'The model\nat a glance',
    description:
      'Every component is useful on its own. Real learning happens when they work together.',
    steps: [
      { title: 'Appropriate infrastructure', description: 'Reliable technology built for real classroom conditions.', iconKey: 'server' },
      { title: 'Curated offline content', description: 'Curriculum-relevant resources available without the internet.', iconKey: 'book' },
      { title: 'Prepared teachers', description: 'Teachers trained to integrate technology into lessons.', iconKey: 'teacher' },
      { title: 'Classroom practice', description: 'Interactive teaching that engages and deepens learning.', iconKey: 'classroom' },
      { title: 'Local ownership and support', description: 'Champion teachers and school leaders carry it forward.', iconKey: 'group' },
      { title: 'Measurement and improvement', description: 'We monitor, learn and make the model stronger.', iconKey: 'chart' },
    ],
    resultLabel: 'A functioning classroom.',
  },

  readiness: {
    number: '02',
    title: 'The model begins with a school—not a device.',
    description:
      'We assess readiness in partnership with school leaders to ensure the hub will be used, protected and sustained.',
    linkText: 'Readiness assessment framework',
    linkTo: '/transparency',
    cards: [
      { title: 'Leadership commitment', description: 'School leaders understand and support the vision.', image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&q=80', alt: 'School leader discussing partnership plans' },
      { title: 'Teacher readiness', description: 'Teachers are ready to learn, lead and integrate.', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80', alt: 'Teacher training session in progress' },
      { title: 'Classroom suitability', description: 'Space, security and power are assessed and prepared.', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80', alt: 'Classroom space being assessed for hub setup' },
      { title: 'Curriculum needs', description: 'We understand the subjects and topics that matter most.', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80', alt: 'Students engaged with curriculum materials' },
      { title: 'Local support capacity', description: 'Communities and partners help sustain the hub.', image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&q=80', alt: 'Community members supporting the learning hub' },
    ],
  },

  hub: {
    number: '03',
    title: 'Inside the\nlearning hub',
    description:
      'Every component is chosen for a reason—solving a real classroom constraint.',
    ctaText: 'View technical specifications',
    ctaTo: '/transparency',
    features: [
      { label: 'Works offline without internet', iconKey: 'offline' },
      { label: 'Built for low power use', iconKey: 'zap' },
      { label: 'Designed for classroom use', iconKey: 'presentation' },
      { label: 'Easy to service and update', iconKey: 'wrench' },
      { label: 'Secure storage when not in use', iconKey: 'lock' },
    ],
  },

  content: {
    number: '04',
    title: 'Offline does\nnot mean limited.',
    description:
      'Our hubs include thousands of high-quality, curriculum-aligned resources.',
    linkText: 'Explore content library',
    linkTo: '/transparency',
    categories: [
      { title: 'Mathematics', count: '1,300+ resources', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80', alt: 'Mathematics learning resources' },
      { title: 'Science', count: '1,000+ resources', image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&q=80', alt: 'Science learning resources' },
      { title: 'English & Literacy', count: '900+ resources', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=80', alt: 'English and literacy resources' },
      { title: 'Simulations', count: '700+ resources', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80', alt: 'Interactive science simulations' },
      { title: 'Teacher Guides', count: '300+ resources', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80', alt: 'Teacher guides with lesson plans' },
      { title: 'Local & AlloUg', count: '800+ resources', image: 'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?w=400&q=80', alt: 'Local cultural learning resources' },
    ],
  },

  teacher: {
    number: '05',
    title: 'The teacher is\nat the centre.',
    description:
      'We train teachers to confidently use technology to improve how they teach and how learners learn.',
    linkText: 'Our teacher development',
    linkTo: '/our-story',
    championTitle: 'The Champion Teacher model',
    championDescription:
      'We empower local educators to lead adoption and support their peers—driving lasting change from within.',
    championQualities: [
      'Selected for commitment',
      'Trained deeply and practically',
      'Supported continuously',
      'Recognised and connected',
    ],
    journeySteps: [
      'Orientation',
      'Demonstration',
      'Co-planning',
      'Guided practice',
      'Feedback & reflection',
      'Independent use',
      'Peer support',
    ],
    videoUrl:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    videoAlt: 'Teacher leading a classroom training session',
    videoDuration: '0:45',
  },

  lesson: {
    number: '06',
    title: 'What one lesson\nlooks like impact.',
    description: 'Technology supports the lesson.\nThe teacher leads it.',
    linkText: 'Watch a lesson in action',
    linkTo: '/our-story',
    steps: [
      { number: 1, title: 'Prepare', description: 'Teacher selects a resource and plans the lesson.', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80', alt: 'Teacher planning lesson resources' },
      { number: 2, title: 'Introduce', description: 'Connects to prior knowledge and set the learning goal.', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80', alt: 'Teacher introducing the lesson' },
      { number: 3, title: 'Explore', description: 'Learners interact with content and simulations.', image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&q=80', alt: 'Students exploring interactive content' },
      { number: 4, title: 'Discuss', description: 'Learners share, ask questions and reflect.', image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&q=80', alt: 'Students discussing findings' },
      { number: 5, title: 'Reflect', description: 'Teacher reinforces key concepts and next steps.', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80', alt: 'Teacher reflecting with students' },
    ],
  },

  timeline: {
    number: '07',
    title: 'From preparation\nto long-term\nimpact.',
    description: 'A proven process we follow for every hub.',
    phases: ['PREPARE', 'BUILD', 'LAUNCH', 'SUSTAIN'],
    steps: [
      { phase: 'PREPARE', title: 'School identified', iconKey: 'school' },
      { phase: 'PREPARE', title: 'Readiness assessed', iconKey: 'search' },
      { phase: 'PREPARE', title: 'Partnership agreed', iconKey: 'handshake' },
      { phase: 'BUILD', title: 'Hardware inspected', iconKey: 'server' },
      { phase: 'BUILD', title: 'Content prepared', iconKey: 'folder' },
      { phase: 'LAUNCH', title: 'Teachers trained', iconKey: 'classroom' },
      { phase: 'LAUNCH', title: 'Hub installed', iconKey: 'server' },
      { phase: 'LAUNCH', title: 'First lessons supported', iconKey: 'book' },
      { phase: 'SUSTAIN', title: 'Ongoing support', iconKey: 'support' },
      { phase: 'SUSTAIN', title: 'Monitor & measure', iconKey: 'chart' },
      { phase: 'SUSTAIN', title: 'Improve & grow', iconKey: 'search' },
    ],
  },
}

/**
 * Composable for fetching the Our Model page data.
 *
 * Data flow:
 *   1. Start with hardcoded defaults.
 *   2. Attempt to fetch CMS content for editorial sections.
 *   3. Merge live data over defaults where available.
 *
 * Once the backend is ready, add a dedicated endpoint that returns
 * the full OurModelData shape, or map from CMS page sections.
 */
export function useOurModel() {
  const { getPage } = useContent()

  const data = ref<OurModelData>({ ...DEFAULTS })
  const loading = ref(true)
  const error = ref<string | null>(null)

  async function load() {
    loading.value = true
    error.value = null

    try {
      const cmsPage = await getPage('our-model')

      if (cmsPage) {
        const res = cmsPage as any
        const page = Array.isArray(res?.data) ? res.data[0] : res?.data ?? res
        const sections = page?.sections ?? []

        for (const section of sections) {
          switch (section.type) {
            case 'hero':
              if (section.data) data.value.hero = { ...data.value.hero, ...section.data }
              break
            case 'overview':
              if (section.data) data.value.overview = { ...data.value.overview, ...section.data }
              break
            case 'readiness':
              if (section.data) data.value.readiness = { ...data.value.readiness, ...section.data }
              break
            case 'hub':
              if (section.data) data.value.hub = { ...data.value.hub, ...section.data }
              break
            case 'content':
              if (section.data) data.value.content = { ...data.value.content, ...section.data }
              break
            case 'teacher':
              if (section.data) data.value.teacher = { ...data.value.teacher, ...section.data }
              break
            case 'lesson':
              if (section.data) data.value.lesson = { ...data.value.lesson, ...section.data }
              break
            case 'timeline':
              if (section.data) data.value.timeline = { ...data.value.timeline, ...section.data }
              break
          }
        }
      }
    } catch (e: any) {
      error.value = e?.message ?? 'Failed to load model data'
      console.error('useOurModel error:', e)
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
