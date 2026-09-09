<script setup lang="ts">
import { FileText, Download, ArrowRight } from '@lucide/vue'
import type { ImpactReportItem } from '~/types'

interface Props {
  sectionNumber?: number
  reports?: ImpactReportItem[]
}

const props = withDefaults(defineProps<Props>(), {
  sectionNumber: 7,
  reports: () => [
    {
      title: 'Pilot Impact Summary',
      description: 'What we observed, what it means and what comes next.',
      pdfSize: '2.1 MB',
      imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop&crop=center',
      imageAlt: 'Students working in classroom',
      pdfUrl: '/reports/pilot-impact-summary.pdf'
    },
    {
      title: 'Measurement Approach',
      description: 'How we collect, validate and use data responsibly.',
      pdfSize: '1.4 MB',
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=center',
      imageAlt: 'Document with charts and data',
      pdfUrl: '/reports/measurement-approach.pdf'
    },
    {
      title: 'Latest Programme Update',
      description: 'Recent activities, refinements and upcoming milestones.',
      pdfSize: '1.2 MB',
      imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop&crop=center',
      imageAlt: 'Teacher leading a lesson',
      pdfUrl: '/reports/latest-programme-update.pdf'
    }
  ]
})
</script>

<template>
  <LayoutSection background="gray">
    <LayoutContainer>
      <div class="reports-explore">
        <!-- Section Label -->
        <div class="reports-explore-label">
          <div class="reports-explore-label-icon">
            <span class="text-white text-sm font-bold">{{ sectionNumber }}</span>
          </div>
          <span class="reports-explore-label-text">REPORTS YOU CAN EXPLORE</span>
        </div>

        <!-- Reports Grid -->
        <div class="reports-explore-content">
          <!-- Report Cards -->
          <div class="reports-grid">
            <div
              v-for="(report, index) in reports"
              :key="index"
              class="report-card"
            >
              <div class="report-card-media">
                <img
                  :src="report.imageUrl"
                  :alt="report.imageAlt"
                  class="report-card-image"
                />
              </div>
              <div class="report-card-content">
                <h4 class="report-card-title">{{ report.title }}</h4>
                <p class="report-card-description">{{ report.description }}</p>
                <a
                  :href="report.pdfUrl"
                  class="report-card-download"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="report-card-download-text">Download PDF</span>
                  <span class="report-card-download-size">({{ report.pdfSize }})</span>
                  <Download class="w-4 h-4 text-cobalt" />
                </a>
              </div>
            </div>
          </div>

          <!-- CTA Card -->
          <div class="reports-cta">
            <div class="reports-cta-icon">
              <FileText class="w-8 h-8 text-cobalt" />
            </div>
            <h4 class="reports-cta-title">View all reports and documents</h4>
            <NuxtLink to="/transparency#reports" class="reports-cta-link">
              Go to reports library
              <ArrowRight class="w-4 h-4" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </LayoutContainer>
  </LayoutSection>
</template>

<style scoped>
.reports-explore {
  @apply space-y-8;
}

.reports-explore-label {
  @apply flex items-center gap-3;
}

.reports-explore-label-icon {
  @apply w-8 h-8 rounded-full bg-cobalt flex items-center justify-center;
}

.reports-explore-label-text {
  @apply text-sm font-sans font-bold text-navy tracking-widest uppercase;
}

.reports-explore-content {
  @apply flex flex-col lg:flex-row gap-6;
}

.reports-grid {
  @apply flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5;
}

.report-card {
  @apply bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm;
}

.report-card-media {
  @apply relative h-36 overflow-hidden;
}

.report-card-image {
  @apply w-full h-full object-cover;
}

.report-card-content {
  @apply p-5 space-y-3;
}

.report-card-title {
  @apply text-base font-sans font-bold text-navy leading-snug;
}

.report-card-description {
  @apply text-sm font-sans text-gray-600 leading-relaxed;
}

.report-card-download {
  @apply inline-flex items-center gap-1.5 text-sm font-sans font-semibold text-cobalt hover:underline;
}

.report-card-download-text {
  @apply text-cobalt;
}

.report-card-download-size {
  @apply text-gray-400 font-normal;
}

.reports-cta {
  @apply lg:w-56 flex-shrink-0 bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col items-center text-center justify-center;
}

.reports-cta-icon {
  @apply w-14 h-14 rounded-full bg-cobalt/10 flex items-center justify-center mb-4;
}

.reports-cta-title {
  @apply text-base font-sans font-bold text-navy leading-snug mb-4;
}

.reports-cta-link {
  @apply inline-flex items-center gap-1.5 text-sm font-sans font-semibold text-cobalt hover:underline;
}
</style>
