<script setup lang="ts">
import { ArrowRight, MapPin, Laptop, GraduationCap, CheckCircle2 } from '@lucide/vue'
import type { Component } from 'vue'
import type { Campaign, CampaignStat } from '~/types'
import { formatCurrency } from '~/utils/format'

/**
 * Campaign panel — "THE NEXT TEN HUBS" progress card fed by
 * GET /v1/campaigns/active. Reuses the CampaignProgress domain component.
 */
interface Props {
  campaign: Campaign
}

const props = defineProps<Props>()

const raised = computed(() =>
  formatCurrency(props.campaign.current, props.campaign.currency),
)
const goal = computed(() =>
  formatCurrency(props.campaign.goal, props.campaign.currency),
)
const percentage = computed(() =>
  props.campaign.goal > 0
    ? Math.min(100, Math.round((props.campaign.current / props.campaign.goal) * 100))
    : 0,
)

const statIcons: Record<CampaignStat['icon'], Component> = {
  hubs: MapPin,
  devices: Laptop,
  schools: GraduationCap,
  deployed: CheckCircle2,
}
</script>

<template>
  <div class="campaign-panel">
    <div class="campaign-panel__header">
      <span class="campaign-panel__name">{{ campaign.name }}</span>
      <UiBadge v-if="campaign.label" variant="success" size="sm">
        {{ campaign.label }}
      </UiBadge>
    </div>

    <p class="campaign-panel__amount">
      {{ raised }}
      <span class="campaign-panel__goal">raised of {{ goal }} goal</span>
    </p>

    <div class="campaign-panel__progress">
      <CampaignProgress
        :current="campaign.current"
        :goal="campaign.goal"
        currency="GBP"
        :show-labels="false"
      />
      <span class="campaign-panel__percent">{{ percentage }}%</span>
    </div>

    <div v-if="campaign.stats?.length" class="campaign-panel__stats">
      <div
        v-for="stat in campaign.stats"
        :key="stat.label"
        class="campaign-panel__stat"
      >
        <span class="campaign-panel__stat-icon">
          <component :is="statIcons[stat.icon]" class="w-5 h-5" />
        </span>
        <span class="campaign-panel__stat-value">{{ stat.value }}</span>
        <span class="campaign-panel__stat-label">{{ stat.label }}</span>
      </div>
    </div>

    <NuxtLink
      v-if="campaign.detailsTo"
      :to="campaign.detailsTo"
      class="campaign-panel__details-link"
    >
      {{ campaign.detailsText ?? 'See campaign details' }}
      <ArrowRight class="w-4 h-4" />
    </NuxtLink>
  </div>
</template>

<style scoped>
.campaign-panel {
  @apply rounded-card border border-gray-200 bg-white p-card md:p-card-lg shadow-elevation-1 h-full flex flex-col;
}

.campaign-panel__header {
  @apply flex items-center gap-3;
}

.campaign-panel__name {
  @apply text-2xs font-sans font-semibold tracking-eyebrow uppercase text-navy;
}

.campaign-panel__amount {
  @apply mt-4 text-3xl md:text-4xl font-sans font-bold text-navy;
}

.campaign-panel__goal {
  @apply text-sm font-sans font-medium text-gray-500;
}

.campaign-panel__progress {
  @apply mt-4 flex items-center gap-4;
}

.campaign-panel__progress :deep(.campaign-progress) {
  @apply flex-1;
}

.campaign-panel__progress :deep(.campaign-progress-bar) {
  @apply h-2;
}

.campaign-panel__percent {
  @apply text-sm font-sans font-bold text-navy flex-shrink-0;
}

.campaign-panel__stats {
  @apply mt-6 pt-6 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-4 gap-4;
}

.campaign-panel__stat {
  @apply flex flex-col gap-1.5;
}

.campaign-panel__stat-icon {
  @apply text-cobalt;
}

.campaign-panel__stat-value {
  @apply text-lg font-sans font-bold text-navy;
}

.campaign-panel__stat-label {
  @apply text-2xs font-sans text-gray-500 leading-tight;
}

.campaign-panel__details-link {
  @apply mt-6 pt-4 border-t border-gray-100 inline-flex items-center gap-2 text-sm font-sans font-semibold text-cobalt hover:text-cobalt-700;
}
</style>
