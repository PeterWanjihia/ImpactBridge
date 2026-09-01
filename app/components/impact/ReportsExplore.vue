<script setup lang="ts">
import { Download } from '@lucide/vue'

interface ReportItem {
  title: string
  description: string
  pdfSize: string
  imageUrl: string
  imageAlt: string
  pdfUrl: string
}

interface Props {
  sectionNumber?: number
  reports?: ReportItem[]
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
            <span class="text-white text-xs font-bold">{{ sectionNumber }}</span>
          </div>
          <span class="reports-explore-label-text">REPORTS YOU CAN EXPLORE</span>
        </div>

        <!-- Reports Grid -->
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
                Download PDF
                <span class="report-card-download-size">({{ report.pdfSize }})</span>
                <Download class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </LayoutContainer>
  </LayoutSection>
</template>

<style scoped>
.reports-explore {
  @apply space-y-6;
}

.reports-explore-label {
  @apply flex items-center gap-2;
}

.reports-explore-label-icon {
  @apply w-6 h-6 rounded-full bg-cobalt flex items-center justify-center;
}

.reports-explore-label-text {
  @apply text-[11px] font-sans font-bold text-navy tracking-widest uppercase;
}

.reports-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 gap-5;
}

.report-card {
  @apply flex flex-row bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm;
}

.report-card-media {
  @apply relative w-36 flex-shrink-0;
}

.report-card-image {
  @apply w-full h-full object-cover;
}

.report-card-content {
  @apply flex-1 p-4 flex flex-col;
}

.report-card-title {
  @apply text-sm font-sans font-bold text-navy leading-snug mb-1;
}

.report-card-description {
  @apply text-[13px] font-sans text-gray-600 leading-snug mb-3;
}

.report-card-download {
  @apply mt-auto inline-flex items-center gap-1.5 text-[13px] font-sans font-semibold text-cobalt hover:underline;
}

.report-card-download-size {
  @apply text-gray-400 font-normal;
}
</style>
