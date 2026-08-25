<script setup lang="ts">
interface Props {
  title: string
  description?: string
  buttonText?: string
  buttonTo?: string
  variant?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary'
})
</script>

<template>
  <section :class="['cta-section', `cta-section--${variant}`]">
    <LayoutContainer>
      <div class="cta-section-content">
        <h2 class="cta-section-title">{{ title }}</h2>
        <p v-if="description" class="cta-section-description">{{ description }}</p>
        <div class="cta-section-actions">
          <slot name="actions">
            <UiButton v-if="buttonText" :variant="variant === 'primary' ? 'primary' : 'outline'" size="lg">
              <NuxtLink v-if="buttonTo" :to="buttonTo">{{ buttonText }}</NuxtLink>
              <span v-else>{{ buttonText }}</span>
            </UiButton>
          </slot>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.cta-section {
  @apply py-16 md:py-20;
}

.cta-section--primary {
  @apply bg-cobalt text-white;
}

.cta-section--secondary {
  @apply bg-navy text-white;
}

.cta-section-content {
  @apply max-w-2xl mx-auto text-center;
}

.cta-section-title {
  @apply text-3xl md:text-4xl font-serif font-bold;
}

.cta-section-description {
  @apply mt-4 text-lg opacity-90;
}

.cta-section-actions {
  @apply mt-8;
}
</style>
