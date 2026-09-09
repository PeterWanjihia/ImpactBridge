<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'
import type { FaqItem } from '~/types'

/**
 * Donate FAQ — two-column accordion fed by the CMS `faqs` collection
 * (page/category = donate). Answers remain collapsed until visitors open them.
 */
interface Props {
  title?: string
  linkText?: string
  linkTo?: string
  faqs: FaqItem[]
}

withDefaults(defineProps<Props>(), {
  title: 'Frequently asked questions',
  linkText: 'See all answers',
  linkTo: '/transparency#faqs',
})
</script>

<template>
  <section class="donate-faq">
    <LayoutContainer>
      <div class="donate-faq__header">
        <h2 class="donate-faq__title">{{ title }}</h2>
        <NuxtLink :to="linkTo" class="donate-faq__link">
          {{ linkText }}
          <ArrowRight class="w-4 h-4" />
        </NuxtLink>
      </div>

      <div class="donate-faq__grid">
        <div
          v-for="(column, columnIndex) in [
            faqs.filter((_, i) => i % 2 === 0),
            faqs.filter((_, i) => i % 2 === 1),
          ]"
          :key="columnIndex"
          class="donate-faq__column"
        >
          <UiAccordion
            :items="column.map((faq) => ({
              id: faq.id,
              title: faq.question,
              content: faq.answer,
            }))"
            class="donate-faq__accordion"
          />
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.donate-faq {
  @apply py-10 md:py-12 bg-white;
}

.donate-faq__header {
  @apply flex items-center justify-between gap-4 mb-5;
}

.donate-faq__title {
  @apply text-xl md:text-2xl font-serif font-bold text-navy;
}

.donate-faq__link {
  @apply inline-flex items-center gap-2 text-sm font-sans font-semibold text-cobalt hover:text-cobalt-700 flex-shrink-0;
}

.donate-faq__grid {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-2 items-start;
}

.donate-faq__accordion {
  @apply border-0 divide-y-0 rounded-none gap-1.5;
}

.donate-faq__accordion :deep(.ui-accordion-item) {
  @apply border border-gray-200 rounded-md overflow-hidden;
}

.donate-faq__accordion :deep(.ui-accordion-trigger) {
  @apply px-3 py-2 text-xs md:text-[13px] text-gray-700;
}

.donate-faq__accordion :deep(.ui-accordion-content) {
  @apply px-3 pb-3 text-sm leading-relaxed;
}

.donate-faq__accordion :deep(.ui-accordion-icon) {
  @apply w-4 h-4 text-gray-500;
}
</style>
