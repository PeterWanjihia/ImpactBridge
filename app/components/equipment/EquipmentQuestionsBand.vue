<script setup lang="ts">
import { Mail, ArrowRight } from '@lucide/vue'
</script>

<template>
  <section class="questions-band">
    <LayoutContainer>
      <div class="questions-band__inner">
        <div class="questions-band__copy">
          <span class="questions-band__icon">
            <Mail class="w-6 h-6" />
          </span>
          <div>
            <h2 class="questions-band__title">Have questions before you offer?</h2>
            <p class="questions-band__subtitle">
              Our team is happy to help you understand the process.
            </p>
          </div>
        </div>

        <NuxtLink to="/corporate-partnerships#begin-the-conversation" class="questions-band__cta">
          Contact our team
          <ArrowRight class="w-4 h-4" />
        </NuxtLink>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.questions-band {
  @apply bg-navy-800 py-section-xs;
}

.questions-band__inner {
  @apply flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6;
}

.questions-band__copy {
  @apply flex items-center gap-4;
}

.questions-band__icon {
  @apply w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-white flex-shrink-0;
}

.questions-band__title {
  @apply text-lg md:text-xl font-display font-bold text-white;
}

.questions-band__subtitle {
  @apply mt-1 text-sm font-sans text-gray-300;
}

.questions-band__cta {
  @apply inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/40;
  @apply text-sm font-sans font-semibold text-white hover:bg-white hover:text-navy-800 transition-colors flex-shrink-0;
}
</style>
