<script setup lang="ts">
const milestones = [
  {
    date: 'Aug 2023 — Jan 2025',
    title: 'The vision',
    description: 'We identified the gap, designed the offline hub concept and built early partnerships.'
  },
  {
    date: 'April 2025',
    title: 'Pilot launch',
    description: 'The first hub was installed at Our Lady Seat of Wisdom in Kansanga. Teachers and students encountered offline digital learning for the first time.'
  },
  {
    date: 'June 2025',
    title: 'Pilot review',
    description: 'We collected feedback, refined the hub\'s content, improved user experience and strengthened teacher support.'
  },
  {
    date: 'July 2025 — Beyond',
    title: 'The next chapter',
    description: 'Expanding subjects, launching new hubs, deepening teacher training and publishing an impact report.'
  }
]
</script>

<template>
  <section class="journey-section">
    <LayoutContainer>
      <div class="journey-header">
        <div class="journey-eyebrow">
          <span class="journey-eyebrow-number">07</span>
          <span class="journey-eyebrow-label">OUR JOURNEY SO FAR</span>
        </div>
      </div>

      <div class="journey-timeline">
        <div class="journey-timeline-line" />
        <div v-for="(milestone, index) in milestones" :key="index" class="journey-milestone">
          <div class="journey-milestone-dot" />
          <div class="journey-milestone-content">
            <span class="journey-milestone-date">{{ milestone.date }}</span>
            <h3 class="journey-milestone-title">{{ milestone.title }}</h3>
            <p class="journey-milestone-description">{{ milestone.description }}</p>
          </div>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.journey-section {
  @apply py-16 md:py-24 bg-white;
}
.journey-header {
  @apply max-w-3xl mb-12;
}
.journey-eyebrow {
  @apply flex items-center gap-2 mb-4;
}
.journey-eyebrow-number {
  @apply w-6 h-6 rounded-full border border-cobalt/30 text-cobalt text-xs font-semibold flex items-center justify-center;
}
.journey-eyebrow-label {
  @apply text-xs font-bold tracking-wider text-cobalt uppercase;
}

.journey-timeline {
  @apply relative;
}
.journey-timeline-line {
  @apply absolute top-4 left-0 right-0 h-[2px] bg-slate-200;
}
.journey-milestone {
  @apply relative flex flex-col md:flex-row gap-4 md:gap-8 pb-12 last:pb-0;
}
.journey-milestone-dot {
  @apply w-3 h-3 rounded-full bg-cobalt border-2 border-white ring-2 ring-cobalt/20 relative z-10 mt-1.5 shrink-0;
}
.journey-milestone-content {
  @apply flex-1;
}
.journey-milestone-date {
  @apply text-sm font-bold text-cobalt;
}
.journey-milestone-title {
  @apply text-xl font-bold text-slate-900 mt-2;
}
.journey-milestone-description {
  @apply text-sm text-slate-600 leading-relaxed mt-2;
}
</style>
