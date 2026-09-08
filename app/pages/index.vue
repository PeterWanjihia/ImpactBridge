<script setup lang="ts">
import {
  Heart,
  Building2,
  MapPin,
  Laptop,
  Monitor,
  Users,
  FileText,
  ArrowRight,
  ChevronRight,
  WifiOff,
  User,
  CheckCircle2,
  ShieldCheck,
  Check,
  GraduationCap,
  ClipboardList,
  PieChart,
  Shield,
  Box,
  ChartNoAxesColumnIncreasing,
} from '@lucide/vue'
import type { Component } from 'vue'

import IconUsers from '~icons/fa6-solid/users'

// ---------------------------------------------------------------------------
// Data layer — composables fetch from CMS + Go API with fallback defaults
// ---------------------------------------------------------------------------
const { data: homepage, loading, load } = useHomepage()

// Fetch homepage data once during SSR (cached), skip on client navigation.
callOnce('homepage', () => load())

// ---------------------------------------------------------------------------
// SEO — shared composable (canonical, OG/Twitter cards, robots)
// ---------------------------------------------------------------------------
usePageSeo({
  title: 'Offline Learning Hubs for Schools Without Connectivity',
  description: 'We bring offline digital learning hubs, teacher training and resources to schools without reliable connectivity—so every child can learn, no matter where they are.',
  path: '/',
  image: () => homepage.value?.hero?.imageUrl,
  type: 'website',
})

// ---------------------------------------------------------------------------
// Icon resolver — maps string keys from CMS/API to Vue components
// ---------------------------------------------------------------------------
const iconMap: Record<string, Component> = {
  offline: WifiOff,
  teacher: User,
  community: MapPin,
  measure: ChartNoAxesColumnIncreasing,
  school: GraduationCap,
  heart: Heart,
  building: Building2,
  check: Check,
  fileText: FileText,
  chevronRight: ChevronRight,
  laptop: Monitor,
  pieChart: PieChart,
  shield: Shield,
  shieldCheck: ShieldCheck,
  clipboard: ClipboardList,
  mapPin: MapPin,
  userGroup: IconUsers,
  users: Users,
  monitor: Monitor,
}
</script>

<template>
  <div class="page-home">
    <HeroSection :hero="homepage.hero" />

    <ValuePropsStrip :items="homepage.valueProps" :icon-map="iconMap" />

    <ChallengeSection :challenge="homepage.challenge" :icon-map="iconMap" />

    <ModelTimeline :steps="homepage.modelSteps" :icon-map="iconMap" />

    <EarlyEvidence :evidence="homepage.evidence" />

    <WaysToGive :ways-to-give="homepage.waysToGive" />

    <ImplementationLinks :links="homepage.implementationLinks" :icon-map="iconMap" />

    <BridgeCTA :cta="homepage.cta" />
  </div>
</template>
