<script setup lang="ts">
import { Heart, Building2, CheckCircle } from '@lucide/vue'

const beliefs = [
  'Potential is universal.',
  'Access should not depend on connectivity.',
  'Teachers make learning meaningful.',
  'Students deserve to explore, not just receive.',
  'Evidence matters more than assumptions.',
  'Dignity is non-negotiable.'
]
</script>

<template>
  <section class="support-section">
    <LayoutContainer>
      <div class="support-grid">

        <!-- How Your Support Creates Change -->
        <div class="support-column">
          <div class="support-eyebrow">
            <span class="support-eyebrow-label">HOW YOUR SUPPORT CREATES CHANGE</span>
          </div>

          <div class="support-cards">
            <div class="support-card">
              <div class="support-card-icon">
                <Heart class="w-5 h-5 text-cobalt" />
              </div>
              <h4 class="support-card-title">For Individuals</h4>
              <p class="support-card-description">
                Your support provides the hub, content, teacher training and local implementation.
              </p>
              <div class="support-card-cta">
                <UiButton variant="primary" size="sm">
                  Fund the next classroom
                </UiButton>
              </div>
            </div>

            <div class="support-card">
              <div class="support-card-icon">
                <Building2 class="w-5 h-5 text-cobalt" />
              </div>
              <h4 class="support-card-title">For Organisations</h4>
              <p class="support-card-description">
                Your organisation can co-fund, donate technology or offer expertise.
              </p>
              <div class="support-card-cta">
                <UiButton variant="outline" size="sm">
                  Start a corporate partnership
                </UiButton>
              </div>
            </div>
          </div>

          <div class="support-bottom-cta">
            <UiButton variant="ghost" class="text-cobalt hover:bg-cobalt/5">
              See the journey of equipment to classroom →
            </UiButton>
          </div>
        </div>

        <!-- What We Believe -->
        <div class="beliefs-column">
          <div class="beliefs-eyebrow">
            <span class="beliefs-eyebrow-label">WHAT WE BELIEVE</span>
          </div>

          <ul class="beliefs-list">
            <li v-for="(belief, index) in beliefs" :key="index" class="beliefs-item">
              <CheckCircle class="w-5 h-5 text-cobalt shrink-0" />
              <span class="beliefs-text">{{ belief }}</span>
            </li>
          </ul>

          <div class="beliefs-cta">
            <UiButton variant="ghost" class="text-cobalt hover:bg-cobalt/5">
              Read our full beliefs →
            </UiButton>
          </div>
        </div>

      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.support-section {
  @apply py-12 bg-slate-50;
}
.support-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12;
}

/* Support Column */
.support-column {
  @apply flex flex-col;
}
.support-eyebrow {
  @apply mb-6;
}
.support-eyebrow-label {
  @apply text-xs font-bold tracking-wider text-cobalt uppercase;
}
.support-cards {
  @apply space-y-4 flex-grow;
}
.support-card {
  @apply bg-white rounded-xl p-5 border border-slate-200 shadow-sm;
}
.support-card-icon {
  @apply w-10 h-10 rounded-full bg-blue-50/80 flex items-center justify-center mb-3;
}
.support-card-title {
  @apply text-lg font-bold text-slate-900 mb-2;
}
.support-card-description {
  @apply text-sm text-slate-600 leading-relaxed;
}
.support-card-cta {
  @apply mt-4;
}
.support-bottom-cta {
  @apply mt-6 pt-4 border-t border-slate-200;
}

/* Beliefs Column */
.beliefs-column {
  @apply flex flex-col;
}
.beliefs-eyebrow {
  @apply mb-6;
}
.beliefs-eyebrow-label {
  @apply text-xs font-bold tracking-wider text-cobalt uppercase;
}
.beliefs-list {
  @apply space-y-3 flex-grow;
}
.beliefs-item {
  @apply flex items-start gap-3;
}
.beliefs-text {
  @apply text-sm font-medium text-slate-700 leading-snug pt-0.5;
}
.beliefs-cta {
  @apply mt-6 pt-4 border-t border-slate-200;
}
</style>
