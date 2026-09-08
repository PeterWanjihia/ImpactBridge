<script setup lang="ts">
import {
  WifiOff,
  MapPin,
  ArrowDown,
  ArrowRight,
  User2,
  BookOpen,
  Handshake,
  LineChart,
  ZapOff,
  Presentation,
  Wrench,
  Lock,
  Search,
} from '@lucide/vue'
import type { Component } from 'vue'
import { svgToVNode } from '~/utils/svg'
import bookOpenSvg from '~/assets/icons/book-open.svg?raw'
import barChartSvg from '~/assets/icons/bar-chart.svg?raw'
import serverSvg from '~/assets/icons/server.svg?raw'
import schoolSvg from '~/assets/icons/school.svg?raw'
import groupSvg from '~/assets/icons/group-of-people.svg?raw'
import handshakeSvg from '~/assets/icons/handshake.svg?raw'
import supportSvg from '~/assets/icons/support.svg?raw'
import searchSvg from '~/assets/icons/search.svg?raw'
import folderSvg from '~/assets/icons/folder.svg?raw'
import classroomSvg from '~/assets/icons/classroom.svg?raw'
import biometricSvg from '~/assets/icons/Biometric.svg?raw'

// ---------------------------------------------------------------------------
// Data layer — composable fetches from Go API (when ready) with CMS and static defaults
// ---------------------------------------------------------------------------
const { data: model, load } = useOurModel()
callOnce('our-model', () => load())

// ---------------------------------------------------------------------------
// SEO — shared composable (canonical, OG/Twitter cards, robots); reactive to CMS data
// ---------------------------------------------------------------------------
usePageSeo({
  title: () => model.value.seo?.title || 'Our Model',
  description: () => model.value.seo?.description || 'How we combine offline learning technology, curated resources, trained teachers and local ownership into one practical model—designed for schools with limited connectivity.',
  path: '/our-model',
  image: () => model.value.seo?.ogImage,
  type: 'website',
  noindex: () => model.value.seo?.noindex ?? false,
})

// ---------------------------------------------------------------------------
// Icon resolver — maps string keys from CMS/API to Vue components
// Custom SVG icons are converted via svgToVNode; Lucide icons used directly.
// ---------------------------------------------------------------------------
const iconMap: Record<string, Component> = {
  // Lucide icons
  offline: WifiOff,
  teacher: User2,
  book: BookOpen,
  community: MapPin,
  handshake: Handshake,
  chart: LineChart,
  zap: ZapOff,
  presentation: Presentation,
  wrench: Wrench,
  lock: Lock,
  search: Search,
  // Custom SVG icons (converted to renderable components)
  server: svgToVNode(serverSvg),
  school: svgToVNode(schoolSvg),
  group: svgToVNode(groupSvg),
  support: svgToVNode(supportSvg),
  folder: svgToVNode(folderSvg),
  classroom: svgToVNode(classroomSvg),
  barChart: svgToVNode(barChartSvg),
  bookOpen: svgToVNode(bookOpenSvg),
  biometric: svgToVNode(biometricSvg),
}
</script>

<template>
  <div class="page-our-model">
    <ModelHero :hero="model.hero" :icon-map="iconMap" />

    <ModelGlance :steps="model.overview.steps" :icon-map="iconMap" />

    <ReadinessAssessment :readiness="model.readiness" />

    <LearningHub :hub="model.hub" :icon-map="iconMap" />

    <ContentLibrary :content="model.content" />

    <TeacherDevelopment :teacher="model.teacher" />

    <LessonDeployment :lesson="model.lesson" />

    <DeploymentTimeline :timeline="model.timeline" :icon-map="iconMap" />
  </div>
</template>
