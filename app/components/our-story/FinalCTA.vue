<script setup lang="ts">
import { Heart, ArrowRight } from '@lucide/vue'
</script>

<template>
  <section class="final-cta">
    <LayoutContainer>
      <div class="final-cta-content">
        <h2 class="final-cta-title">
          One classroom showed what is possible.<br />
          The next ten can show how far it can travel.
        </h2>

        <div class="final-cta-actions">
          <UiButton variant="primary" size="lg">
            <Heart class="w-5 h-5" />
            Fund a classroom
          </UiButton>
          <UiButton variant="outline" size="lg" class="border-white/30 text-white hover:bg-white/10">
            Partner with us
            <ArrowRight class="w-4 h-4 ml-2" />
          </UiButton>
        </div>

        <p class="final-cta-note">
          Joining with us is more than giving money. It is supporting a classroom, teacher training and an evidence-driven model.
        </p>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.final-cta {
  @apply py-16 md:py-24 bg-gradient-to-br from-slate-800 to-slate-900 text-white;
}
.final-cta-content {
  @apply max-w-3xl mx-auto text-center;
}
.final-cta-title {
  @apply text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight;
}
.final-cta-actions {
  @apply flex flex-col sm:flex-row gap-4 mt-8 justify-center;
}
.final-cta-note {
  @apply mt-8 text-sm text-gray-400 max-w-xl mx-auto;
}
</style>
