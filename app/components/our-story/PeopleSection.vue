<script setup lang="ts">
import { Users } from '@lucide/vue'
</script>

<template>
  <section class="people-section">
    <LayoutContainer>
      <div class="people-eyebrow">
        <span class="people-eyebrow-number">08</span>
        <span class="people-eyebrow-label">THE PEOPLE BEHIND THE WORK</span>
      </div>

      <div class="people-content">
        <div class="people-icon">
          <Users class="w-6 h-6 text-cobalt" />
        </div>
        <h3 class="people-title">A distributed team. A locally carried mission.</h3>
        <p class="people-description">
          Our team spans classrooms, labs and communities across Uganda. We work where
          learning happens.
        </p>
        <div class="people-cta">
          <UiButton variant="ghost" class="text-cobalt hover:bg-cobalt/5">
            Meet our team and partners →
          </UiButton>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.people-section {
  @apply py-12 bg-slate-50;
}
.people-eyebrow {
  @apply flex items-center gap-2 mb-8;
}
.people-eyebrow-number {
  @apply w-6 h-6 rounded-full border border-cobalt/30 text-cobalt text-xs font-semibold flex items-center justify-center;
}
.people-eyebrow-label {
  @apply text-xs font-bold tracking-wider text-cobalt uppercase;
}

.people-content {
  @apply max-w-md;
}
.people-icon {
  @apply w-12 h-12 rounded-full bg-blue-50/80 flex items-center justify-center mb-4;
}
.people-title {
  @apply text-xl font-bold text-slate-900;
}
.people-description {
  @apply text-sm text-slate-600 leading-relaxed mt-3;
}
.people-cta {
  @apply mt-6;
}
</style>
