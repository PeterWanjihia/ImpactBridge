<script setup lang="ts">
// ---------------------------------------------------------------------------
// SEO — shared composable (canonical, OG/Twitter cards, robots)
// Spec: /donate is SSR (transactional flow), metadata CMS-managed when live.
// ---------------------------------------------------------------------------
usePageSeo({
  title: 'Donate',
  description:
    'Fund the next classroom. Help bring offline learning resources, prepared teachers and ongoing support to schools where connectivity should not limit opportunity.',
  path: '/donate',
  type: 'website',
})

// ---------------------------------------------------------------------------
// Data layer — page composite composable
//   GET /v1/campaigns/active  → campaign panel (Go API)
//   GET /v1/donation-options  → funds/methods/presets/crypto (Go API)
//   CMS faqs (category=donate) → FAQ content
// ---------------------------------------------------------------------------
const { data, funds, paymentMethods, currency, presets, load } = useDonatePage()

// The widget owns its own step state; the page only arranges sections.
callOnce('donate-page', () => load())
</script>

<template>
  <div id="top" class="page-donate">
    <!-- Hero + donation widget (Choose / Details / Payment) -->
    <DonationHero
      :hero="data.hero"
      :funds="funds"
      :payment-methods="paymentMethods"
      :currency="currency"
      :presets="presets"
    />

    <!-- Reassurance strip -->
    <DonationAssuranceStrip :items="data.assurances" />

    <!-- Crypto giving -->
    <DonationCryptoSection :data="data.crypto" />

    <!-- Campaign progress + other ways to give -->
    <section class="page-donate__campaign-row">
      <LayoutContainer>
        <div class="page-donate__campaign-grid">
          <CampaignPanel :campaign="data.campaign" />
          <DonationOtherWays title="Other ways to give" :items="data.otherWays" />
        </div>
      </LayoutContainer>
    </section>

    <!-- FAQ -->
    <DonateFaq :faqs="data.faqs" />

    <!-- Closing CTA band -->
    <DonateCTA
      :title="data.cta.title"
      :title-accent="data.cta.titleAccent"
      :description="data.cta.description"
      :primary-text="data.cta.primaryText"
      :primary-to="data.cta.primaryTo"
      :secondary-text="data.cta.secondaryText"
      :secondary-to="data.cta.secondaryTo"
    />
  </div>
</template>

<style scoped>
.page-donate__campaign-row {
  @apply py-section-xs bg-gray-50/60;
}

.page-donate__campaign-grid {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch;
}
</style>
