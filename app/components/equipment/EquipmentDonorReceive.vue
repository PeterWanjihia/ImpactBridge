<script setup lang="ts">
import { CircleCheck, ArrowRight } from '@lucide/vue'

/**
 * Stewardship benefits + partner quote (design-mirrored).
 *
 * TODO(backend): Benefits list and quote are CMS content (stories collection
 * has quote/transcript fields; partner attribution should stay generic).
 */
const benefits = [
  'Acknowledgement of your contribution',
  'Detailed acceptance summary',
  'Deployment updates and stories',
  'Photos and impact reporting (with consent)',
  'End-of-life or reassignment information',
]

const quote =
  'Knowing our devices are actively used by teachers and learners makes the partnership with Impact Bridge incredibly meaningful.'

const quoteAuthor = '— Technology Partner'

const quoteImage =
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=800&fit=crop&crop=center'
</script>

<template>
  <section class="receive-section">
    <LayoutContainer>
      <div class="receive-section__grid">
        <!-- Left: benefits -->
        <div class="receive-section__copy">
          <h2 class="receive-section__title">What equipment donors receive</h2>
          <p class="receive-section__subtitle">
            We provide stewardship and transparency throughout the equipment
            journey.
          </p>

          <ul class="receive-section__list">
            <li v-for="benefit in benefits" :key="benefit" class="receive-benefit">
              <CircleCheck class="receive-benefit__icon" />
              <span>{{ benefit }}</span>
            </li>
          </ul>

          <NuxtLink to="/stories" class="receive-section__link">
            See reporting examples
            <ArrowRight class="w-4 h-4" />
          </NuxtLink>
        </div>

        <!-- Right: classroom photo + quote panel -->
        <div class="receive-section__media">
          <div class="receive-section__photo">
            <img
              :src="quoteImage"
              alt="Teacher presenting to learners in a classroom"
              class="receive-section__image"
              loading="lazy"
            />
          </div>

          <figure class="receive-section__quote">
            <span class="receive-section__quote-mark" aria-hidden="true">&ldquo;</span>
            <blockquote class="receive-section__quote-text">
              {{ quote }}
            </blockquote>
            <figcaption class="receive-section__quote-author">
              {{ quoteAuthor }}
            </figcaption>
            <div class="receive-section__dots" aria-hidden="true">
              <span class="receive-section__dot receive-section__dot--active" />
              <span class="receive-section__dot" />
              <span class="receive-section__dot" />
              <span class="receive-section__dot" />
            </div>
          </figure>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.receive-section {
  @apply bg-white py-14 md:py-16 border-t border-slate-100;
}

.receive-section__grid {
  @apply grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8;
}

.receive-section__copy {
  @apply lg:col-span-4;
}

.receive-section__title {
  @apply text-2xl md:text-3xl font-serif font-bold text-slate-900;
}

.receive-section__subtitle {
  @apply mt-3 text-sm font-sans leading-relaxed text-slate-500 max-w-xs;
}

.receive-section__list {
  @apply mt-6 space-y-3;
}

.receive-benefit {
  @apply flex items-start gap-2.5 text-[13px] font-sans text-slate-700;
}

.receive-benefit__icon {
  @apply w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5;
}

.receive-section__link {
  @apply mt-7 inline-flex items-center gap-2 text-[13px] font-sans font-semibold text-cobalt-600 hover:text-cobalt-700;
}

.receive-section__media {
  @apply lg:col-span-8 rounded-2xl overflow-hidden bg-navy-900 grid grid-cols-1 md:grid-cols-2;
}

.receive-section__photo {
  @apply min-h-[260px] md:min-h-[320px];
}

.receive-section__image {
  @apply w-full h-full object-cover;
}

.receive-section__quote {
  @apply relative p-8 md:p-10 flex flex-col bg-navy-900;
}

.receive-section__quote-mark {
  @apply text-5xl leading-none font-serif text-blue-300;
}

.receive-section__quote-text {
  @apply mt-3 text-lg md:text-xl font-serif text-white leading-relaxed;
}

.receive-section__quote-author {
  @apply mt-5 text-[13px] font-sans text-slate-300;
}

.receive-section__dots {
  @apply mt-auto pt-8 flex items-center gap-1.5;
}

.receive-section__dot {
  @apply w-1.5 h-1.5 rounded-full bg-white/25;
}

.receive-section__dot--active {
  @apply bg-white;
}
</style>
