<script setup lang="ts">
import { Clock, Lock, CircleCheck, Send } from '@lucide/vue'

const { createEnquiry } = usePartnershipEnquiry()

const form = reactive({
  fullName: '',
  jobTitle: '',
  organisation: '',
  workEmail: '',
  contributionType: '',
  estimatedValue: '',
  goals: '',
})

const errors = reactive({
  fullName: '',
  jobTitle: '',
  organisation: '',
  workEmail: '',
})

const submitting = ref(false)
const submitted = ref(false)
const submitError = ref(false)

const contributionOptions = [
  { value: 'funding', label: 'Fund complete learning hubs' },
  { value: 'teacher-development', label: 'Support teacher development' },
  { value: 'technology', label: 'Donate suitable technology' },
  { value: 'expertise', label: 'Contribute expertise & services' },
  { value: 'employee-engagement', label: 'Mobilise your employees' },
  { value: 'other', label: 'Other' },
]

const valueOptions = [
  { value: 'under-5k', label: 'Under $5,000' },
  { value: '5k-25k', label: '$5,000 – $25,000' },
  { value: '25k-100k', label: '$25,000 – $100,000' },
  { value: '100k-plus', label: 'Over $100,000' },
]

function validate(): boolean {
  errors.fullName = form.fullName.trim() ? '' : 'Please enter your full name.'
  errors.jobTitle = form.jobTitle.trim() ? '' : 'Please enter your job title.'
  errors.organisation = form.organisation.trim()
    ? ''
    : 'Please enter your organisation.'
  errors.workEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.workEmail.trim())
    ? ''
    : 'Please enter a valid work email.'

  return !errors.fullName && !errors.jobTitle && !errors.organisation && !errors.workEmail
}

async function handleSubmit() {
  submitError.value = false
  if (!validate()) return

  submitting.value = true
  try {
    await createEnquiry({
      organisationName: form.organisation.trim(),
      contactName: form.fullName.trim(),
      contactEmail: form.workEmail.trim(),
      contributionType: form.contributionType,
      estimatedValue: form.estimatedValue,
      goals: form.goals.trim(),
      source: 'Corporate Partnerships page',
    })
    submitted.value = true
  } catch {
    submitError.value = true
  } finally {
    submitting.value = false
  }
}

const reassurances = [
  { icon: Clock, text: 'We respond within 3 working days' },
  { icon: Lock, text: 'Confidential and secure' },
  { icon: CircleCheck, text: 'No obligation to proceed' },
]
</script>

<template>
  <section id="begin-the-conversation" class="enquiry-section">
    <LayoutContainer>
      <h2 class="enquiry-section__title">Begin the conversation</h2>
      <p class="enquiry-section__subtitle">
        We would love to understand your goals and explore how we can work together.
      </p>

      <div class="enquiry-section__grid">
        <!-- Form -->
        <form id="partnership-enquiry-form" v-if="!submitted" class="enquiry-form" novalidate @submit.prevent="handleSubmit">
          <div class="enquiry-form__row">
            <UiInput
              v-model="form.fullName"
              placeholder="Your full name *"
              :error="errors.fullName"
              required
            />
            <UiInput
              v-model="form.jobTitle"
              placeholder="Job title *"
              :error="errors.jobTitle"
              required
            />
          </div>

          <div class="enquiry-form__row">
            <UiInput
              v-model="form.organisation"
              placeholder="Organisation *"
              :error="errors.organisation"
              required
            />
            <UiInput
              v-model="form.workEmail"
              type="email"
              placeholder="Work email *"
              :error="errors.workEmail"
              required
            />
          </div>

          <div class="enquiry-form__row">
            <UiSelect
              v-model="form.contributionType"
              :options="contributionOptions"
              placeholder="Type of contribution"
            />
            <UiSelect
              v-model="form.estimatedValue"
              :options="valueOptions"
              placeholder="Estimated value range"
            />
          </div>

          <textarea
            v-model="form.goals"
            rows="4"
            placeholder="Tell us about your goals and how you'd like to partner with Impact Bridge."
            class="enquiry-form__textarea"
          />

          <p v-if="submitError" class="enquiry-form__error" role="alert">
            Something went wrong sending your enquiry. Please try again.
          </p>
        </form>

        <!-- Success state -->
        <div v-else class="enquiry-success" role="status">
          <CircleCheck class="enquiry-success__icon" />
          <h3 class="enquiry-success__title">Thank you — we've received your enquiry.</h3>
          <p class="enquiry-success__text">
            Our partnerships team will respond within 3 working days.
          </p>
        </div>

        <!-- Right rail -->
        <div class="enquiry-aside">
          <ul class="enquiry-aside__list">
            <li v-for="item in reassurances" :key="item.text" class="enquiry-aside__item">
              <span class="enquiry-aside__icon">
                <component :is="item.icon" class="w-4 h-4" />
              </span>
              <span class="enquiry-aside__text">{{ item.text }}</span>
            </li>
          </ul>

          <UiButton
            v-if="!submitted"
            variant="primary"
            size="lg"
            class="enquiry-aside__submit"
            :loading="submitting"
            type="submit"
            form="partnership-enquiry-form"
          >
            Send enquiry
            <Send v-if="!submitting" class="w-4 h-4" />
          </UiButton>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.enquiry-section {
  @apply bg-white py-section-md md:py-section;
}

.enquiry-section__title {
  @apply text-2xl md:text-3xl font-display font-bold text-ink;
}

.enquiry-section__subtitle {
  @apply mt-2 text-sm font-sans text-gray-500;
}

.enquiry-section__grid {
  @apply mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10;
}

.enquiry-form {
  @apply lg:col-span-8 flex flex-col gap-4;
}

.enquiry-form__row {
  @apply grid grid-cols-1 sm:grid-cols-2 gap-4;
}

.enquiry-form__textarea {
  @apply w-full px-3 py-2.5 text-base font-sans border border-gray-300 rounded-md;
  @apply placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cobalt-500 focus:border-cobalt-500;
  @apply transition-shadow resize-y;
}

.enquiry-form__error {
  @apply text-sm font-sans text-danger-600;
}

.enquiry-success {
  @apply lg:col-span-8 flex flex-col items-start justify-center gap-2 rounded-xl border border-success-200 bg-success-50/50 p-8;
}

.enquiry-success__icon {
  @apply w-10 h-10 text-success-600;
}

.enquiry-success__title {
  @apply text-lg font-sans font-bold text-ink;
}

.enquiry-success__text {
  @apply text-sm font-sans text-gray-600;
}

.enquiry-aside {
  @apply lg:col-span-4 flex flex-col gap-6;
}

.enquiry-aside__list {
  @apply space-y-4;
}

.enquiry-aside__item {
  @apply flex items-center gap-3;
}

.enquiry-aside__icon {
  @apply w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-cobalt-600 flex-shrink-0;
}

.enquiry-aside__text {
  @apply text-sm font-sans text-gray-700;
}

.enquiry-aside__submit {
  @apply w-full sm:w-auto sm:self-start px-10;
}
</style>
