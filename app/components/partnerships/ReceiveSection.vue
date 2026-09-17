<script setup lang="ts">
import { CircleCheck } from '@lucide/vue'

interface Benefit {
  title: string
  description: string
}

const benefits: Benefit[] = [
  {
    title: 'Strategic alignment',
    description: 'A partnership aligned to your CSR/ESG priorities.',
  },
  {
    title: 'Evidence & stories',
    description: 'Verified data, stories and media with consent and safeguards.',
  },
  {
    title: 'Implementation plan',
    description: 'A clear plan with milestones and responsibilities.',
  },
  {
    title: 'Employee engagement',
    description:
      'Opportunities for involvement, volunteering and giving.',
  },
  {
    title: 'Impact reporting',
    description: 'Regular progress updates and impact reports.',
  },
  {
    title: 'Long-term impact',
    description:
      'Stronger schools, empowered teachers, and measurable change.',
  },
]
</script>

<template>
  <section class="receive-section">
    <LayoutContainer>
      <h2 class="receive-section__title">What partners receive</h2>

      <div class="receive-section__grid">
        <!-- Benefits checklist -->
        <ul class="receive-benefits">
          <li v-for="benefit in benefits" :key="benefit.title" class="receive-benefit">
            <CircleCheck class="receive-benefit__icon" />
            <div>
              <h3 class="receive-benefit__title">{{ benefit.title }}</h3>
              <p class="receive-benefit__description">{{ benefit.description }}</p>
            </div>
          </li>
        </ul>

        <!-- Testimonial -->
        <div class="receive-quote">
          <span class="receive-quote__mark">&ldquo;</span>
          <blockquote class="receive-quote__text">
            Impact Bridge gave us confidence that our contribution would be used
            effectively and with integrity. Seeing our devices in active
            classrooms&mdash;and the teachers leading with them&mdash;made all the
            difference.
          </blockquote>
          <p class="receive-quote__author">&mdash; Corporate Partner</p>
          <div class="receive-quote__dots" aria-hidden="true">
            <span class="receive-quote__dot receive-quote__dot--active" />
            <span class="receive-quote__dot" />
            <span class="receive-quote__dot" />
            <span class="receive-quote__dot" />
          </div>
        </div>

        <!-- Photo -->
        <div class="receive-photo">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=900&fit=crop&crop=center"
            alt="Two professionals discussing a partnership over documents"
            class="receive-photo__image"
            loading="lazy"
          />
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.receive-section {
  @apply bg-white py-section-md md:py-section border-t border-gray-100;
}

.receive-section__title {
  @apply text-2xl md:text-3xl font-display font-bold text-ink mb-10;
}

.receive-section__grid {
  @apply grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch;
}

.receive-benefits {
  @apply lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 content-start;
}

.receive-benefit {
  @apply flex items-start gap-3;
}

.receive-benefit__icon {
  @apply w-5 h-5 text-cobalt-600 flex-shrink-0 mt-0.5;
}

.receive-benefit__title {
  @apply text-body font-sans font-bold text-ink;
}

.receive-benefit__description {
  @apply mt-1 text-label font-sans leading-relaxed text-gray-500;
}

.receive-quote {
  @apply lg:col-span-4 relative rounded-2xl bg-cobalt-50 p-8 flex flex-col;
}

.receive-quote__mark {
  @apply text-5xl leading-none font-display text-navy-700;
}

.receive-quote__text {
  @apply mt-2 text-body font-sans leading-relaxed text-navy-800;
}

.receive-quote__author {
  @apply mt-4 text-xs font-sans text-gray-500;
}

.receive-quote__dots {
  @apply mt-auto pt-6 flex items-center gap-1.5;
}

.receive-quote__dot {
  @apply w-1.5 h-1.5 rounded-full bg-navy-200;
}

.receive-quote__dot--active {
  @apply bg-navy-600;
}

.receive-photo {
  @apply lg:col-span-3 rounded-2xl overflow-hidden bg-gray-100 min-h-[280px];
}

.receive-photo__image {
  @apply w-full h-full object-cover;
}
</style>
