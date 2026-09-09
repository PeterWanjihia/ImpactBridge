<script setup lang="ts">
// ---------------------------------------------------------------------------
// Data layer — composable fetches the transparency aggregate:
//   1. Go API: GET /v1/transparency/summary (governance module — published
//      financial summaries, trustees/policy references, approved metrics)
//   2. CMS editorial sections (hero copy, trustee bios, newsletter text)
//   3. Static defaults when neither is available yet
// ---------------------------------------------------------------------------
const { data: page, load } = useTransparency()
callOnce('transparency', () => load())

// ---------------------------------------------------------------------------
// SEO — shared composable (canonical, OG/Twitter cards, robots); reactive to
// CMS-managed metadata per the architecture spec.
// ---------------------------------------------------------------------------
usePageSeo({
  title: () => page.value.seo?.title || 'Accountability',
  description: () =>
    page.value.seo?.description ||
    'Clear about what we do. Accountable in how we do it. See how Impact Bridge is governed, how funds are used and how we stay accountable.',
  path: '/transparency',
  image: () => page.value.seo?.ogImage,
  type: 'website',
  noindex: () => page.value.seo?.noindex ?? false,
})
</script>

<template>
  <div class="page-transparency">
    <AccountabilityHero :hero="page.hero" />

    <FinancialSummary :financials="page.financials" />

    <TrusteesSection :trustees="page.trustees" />

    <GovernanceSection :governance="page.governance" />

    <ImpactGlance :impact="page.impact" />

    <StayInformedBand :newsletter="page.newsletter" />
  </div>
</template>
