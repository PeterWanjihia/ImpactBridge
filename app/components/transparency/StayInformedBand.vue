<script setup lang="ts">
import { Mail, CircleCheck, ArrowRight } from '@lucide/vue'
import { validateEmail } from '~/utils/validation'
import type { TransparencyNewsletter } from '~/types'

const props = defineProps<{
  newsletter: TransparencyNewsletter
}>()

const config = useRuntimeConfig()

const email = ref('')
const error = ref('')
const submitting = ref(false)
const subscribed = ref(false)

/**
 * Newsletter opt-in per the architecture spec:
 * POST /v1/newsletter/subscriptions (Go API — operational write).
 */
async function handleSubscribe() {
  const result = validateEmail(email.value)
  error.value = result.error ?? ''

  if (!result.valid) return

  submitting.value = true
  try {
    await $fetch(`${config.public.apiUrl}/v1/newsletter/subscriptions`, {
      method: 'POST',
      body: { email: email.value.trim() },
    })
    subscribed.value = true
    email.value = ''
  } catch {
    error.value = 'Subscription failed. Please try again.'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <section class="band">
    <LayoutContainer>
      <div class="band__card">
        <div class="band__content">
          <div class="band__heading">
            <span class="band__icon">
              <Mail class="w-6 h-6" />
            </span>
            <div>
              <h2 class="band__title">{{ newsletter.title }}</h2>
              <p class="band__description">{{ newsletter.description }}</p>
            </div>
          </div>

          <!-- Success state -->
          <p
            v-if="subscribed"
            class="band__success"
            role="status"
          >
            <CircleCheck class="w-5 h-5 flex-shrink-0" />
            {{ newsletter.successText }}
          </p>

          <!-- Subscribe form -->
          <form
            v-else
            class="band__form"
            novalidate
            @submit.prevent="handleSubscribe"
          >
            <div class="band__input-wrap">
              <input
                v-model="email"
                type="email"
                :placeholder="newsletter.placeholder"
                :aria-label="newsletter.placeholder"
                :aria-invalid="!!error || undefined"
                class="band__input"
              />
              <UiButton
                type="submit"
                variant="primary"
                size="md"
                :loading="submitting"
                class="band__submit"
              >
                {{ newsletter.buttonText }}
                <ArrowRight v-if="!submitting" class="w-4 h-4" />
              </UiButton>
            </div>

            <p v-if="error" class="band__error" role="alert">{{ error }}</p>
          </form>

          <p class="band__privacy">{{ newsletter.privacyNote }}</p>
        </div>

        <!-- Right image -->
        <div class="band__media">
          <img
            :src="newsletter.imageUrl"
            :alt="newsletter.imageAlt"
            class="band__image"
            loading="lazy"
          />
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.band {
  @apply bg-white py-section-md md:py-section;
}

.band__card {
  @apply flex flex-col lg:flex-row items-stretch rounded-2xl overflow-hidden bg-ink-soft shadow-elevation-3;
}

/* Content */
.band__content {
  @apply flex-1 p-8 md:p-10;
}

.band__heading {
  @apply flex items-center gap-4;
}

.band__icon {
  @apply w-12 h-12 rounded-full bg-teal-500 text-white;
  @apply flex items-center justify-center flex-shrink-0;
}

.band__title {
  @apply text-xl md:text-2xl font-display font-bold text-white;
}

.band__description {
  @apply mt-1 text-sm font-sans text-gray-300;
}

/* Form */
.band__form {
  @apply mt-6;
}

.band__input-wrap {
  @apply flex flex-col sm:flex-row gap-3 max-w-md;
}

.band__input {
  @apply flex-1 px-4 py-2.5 rounded-lg bg-white/10 border border-white/25;
  @apply text-sm font-sans text-white placeholder:text-gray-400;
  @apply focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent;
}

.band__submit {
  @apply sm:w-auto;
}

.band__error {
  @apply mt-2 text-sm font-sans text-danger-300;
}

.band__success {
  @apply mt-6 inline-flex items-center gap-2 text-sm font-sans font-medium text-success-300;
}

.band__privacy {
  @apply mt-3 text-2xs font-sans text-gray-400;
}

/* Media */
.band__media {
  @apply hidden lg:block w-[300px] flex-shrink-0;
}

.band__image {
  @apply w-full h-full object-cover;
}
</style>
