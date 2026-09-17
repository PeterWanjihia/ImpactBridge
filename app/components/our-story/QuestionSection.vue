<script setup lang="ts">
</script>

<template>
  <section class="question-section">
    <LayoutContainer>
      <div class="question-grid">
        <!-- Content Column -->
        <div class="question-content">
          <div class="question-eyebrow">
            <span class="question-eyebrow-number">02</span>
            <span class="question-eyebrow-label">THE QUESTION THAT CHANGED EVERYTHING</span>
          </div>

          <h2 class="question-title">
            What if learning didn't have to wait for the internet?
          </h2>

          <p class="question-description">
            That question became the beginning of Impact Bridge.
          </p>
        </div>

        <!-- Media Column -->
        <div class="question-media">
          <img
            src="~/assets/images/model-hub-equipment-img.png"
            alt="Impact Bridge device held in hands"
            class="question-image"
            loading="lazy"
          />
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.question-section {
  @apply py-section-sm md:py-section bg-navy text-white;
}
.question-grid {
  @apply grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center;
}
.question-content {
  @apply lg:col-span-6 flex flex-col justify-center;
}
.question-eyebrow {
  @apply flex items-center gap-2 mb-6;
}
.question-eyebrow-number {
  @apply w-6 h-6 rounded-full border border-white/30 text-white text-xs font-semibold flex items-center justify-center;
}
.question-eyebrow-label {
  @apply text-2xs font-bold tracking-eyebrow text-white/80 uppercase;
}
.question-title {
  @apply text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight;
}
.question-description {
  @apply mt-6 text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl;
}
.question-media {
  @apply lg:col-span-6 relative;
}
.question-image {
  @apply w-full h-auto rounded-2xl shadow-elevation-1 object-cover;
}
</style>
