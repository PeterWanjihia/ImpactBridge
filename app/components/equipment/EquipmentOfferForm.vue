<script setup lang="ts">
import { ArrowRight, ArrowLeft, Lock, RefreshCw, CircleCheck, CircleAlert, Plus, Trash2 } from '@lucide/vue'
import { validateEmail, validatePhone, validateRequired } from '~/utils/validation'

/**
 * Equipment offer workflow — Organisation → Equipment details →
 * Logistics & transfer → Review & submit.
 *
 * Architecture alignment:
 * - Transactional writes go through the Go API via useEquipmentOffer()
 *   (POST /v1/equipment-offers → PATCH draft → POST .../submit), never CMS.
 * - Draft state persists to localStorage so users can leave and resume
 *   (spec: "Multi-step forms should persist draft state explicitly").
 * - The workflow owns its own domain state here; the page just composes it.
 */

interface OfferItem {
  category: string
  manufacturer: string
  model: string
  quantity: number
  condition: string
  specifications: string
}

const emptyItem = (): OfferItem => ({
  category: '',
  manufacturer: '',
  model: '',
  quantity: 1,
  condition: '',
  specifications: '',
})

const STORAGE_KEY = 'impact-bridge:equipment-offer-draft'

const { createOffer, updateOffer, submitOffer } = useEquipmentOffer()

const step = ref(1)
const steps = ['Organisation', 'Equipment details', 'Logistics & transfer', 'Review & submit']

const form = reactive({
  organisation: '',
  email: '',
  country: '',
  contactName: '',
  jobTitle: '',
  phone: '',
  items: [emptyItem()] as OfferItem[],
  logistics: '',
  transferNotes: '',
  ownershipConfirmed: false,
  dataErased: false,
})

const errors = reactive({
  organisation: '',
  email: '',
  country: '',
  contactName: '',
  jobTitle: '',
  phone: '',
  items: [] as string[],
  ownershipConfirmed: '',
  dataErased: '',
})

const submitting = ref(false)
const submitError = ref(false)
const submitted = ref(false)
const draftRestored = ref(false)
const draftDismissed = ref(false)

const countryOptions = [
  { value: 'GB', label: 'United Kingdom' },
  { value: 'US', label: 'United States' },
  { value: 'UG', label: 'Uganda' },
  { value: 'KE', label: 'Kenya' },
  { value: 'DE', label: 'Germany' },
  { value: 'NL', label: 'Netherlands' },
  { value: 'AE', label: 'United Arab Emirates' },
  { value: 'other', label: 'Other' },
]

const categoryOptions = [
  { value: 'laptop', label: 'Business-class laptop' },
  { value: 'mini-pc', label: 'Mini PC' },
  { value: 'projector', label: 'Portable projector' },
  { value: 'monitor', label: 'Monitor / display' },
  { value: 'networking', label: 'Networking equipment' },
  { value: 'other', label: 'Other' },
]

const conditionOptions = [
  { value: 'excellent', label: 'Excellent — as new' },
  { value: 'good', label: 'Good — fully working, light wear' },
  { value: 'fair', label: 'Fair — working with cosmetic damage' },
]

// ---------------------------------------------------------------------------
// Draft persistence (leave & resume)
// ---------------------------------------------------------------------------
onMounted(() => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const draft = JSON.parse(raw)
      if (draft && typeof draft === 'object' && (draft.organisation || draft.email)) {
        Object.assign(form, draft)
        draftRestored.value = true
      }
    }
  } catch {
    // Corrupt draft — ignore and start fresh
  }
})

watch(
  form,
  (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
    } catch {
      // Storage unavailable — continue without persistence
    }
  },
  { deep: true },
)

function clearDraft() {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // Ignore storage errors
  }
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------
function validateStep1(): boolean {
  errors.organisation = validateRequired(form.organisation, 'Organisation name').error ?? ''
  errors.email = validateEmail(form.email).error ?? ''
  errors.country = validateRequired(form.country, 'Country').error ?? ''
  errors.contactName = validateRequired(form.contactName, 'Your name').error ?? ''
  errors.jobTitle = form.jobTitle.trim() ? '' : '' // optional
  errors.phone = validatePhone(form.phone).error ?? ''
  return !errors.organisation && !errors.email && !errors.country && !errors.contactName && !errors.phone
}

function validateStep2(): boolean {
  errors.items = form.items.map((item) => {
    if (!item.category) return 'Please choose a category.'
    if (!item.condition) return 'Please choose a condition.'
    if (!item.quantity || item.quantity < 1) return 'Quantity must be at least 1.'
    return ''
  })
  return errors.items.every((error) => !error)
}

function validateStep3(): boolean {
  errors.ownershipConfirmed = form.ownershipConfirmed
    ? ''
    : 'Please confirm you have the authority to transfer this equipment.'
  errors.dataErased = form.dataErased
    ? ''
    : 'Please confirm data will be securely erased before transfer.'
  return !errors.ownershipConfirmed && !errors.dataErased
}

function nextStep() {
  const validators = [validateStep1, validateStep2, validateStep3]
  if (!validators[step.value - 1]()) return
  step.value += 1
}

function prevStep() {
  if (step.value > 1) step.value -= 1
}

function goToStep(target: number) {
  // Only allow going back or to already-validated steps
  if (target < step.value) step.value = target
}

// ---------------------------------------------------------------------------
// Submission — draft → update → submit (matches Go API contract)
// ---------------------------------------------------------------------------
async function handleSubmit() {
  submitError.value = false

  submitting.value = true
  try {
    const payload = {
      organisation: form.organisation.trim(),
      contactName: form.contactName.trim(),
      contactEmail: form.email.trim(),
      contactPhone: form.phone.trim() || undefined,
      country: form.country,
      jobTitle: form.jobTitle.trim() || undefined,
      items: form.items.map((item) => ({
        category: item.category,
        manufacturer: item.manufacturer.trim() || undefined,
        model: item.model.trim() || undefined,
        quantity: Number(item.quantity) || 1,
        condition: item.condition,
        specifications: item.specifications.trim() || undefined,
      })),
      logisticsNotes: [form.logistics.trim(), form.transferNotes.trim()]
        .filter(Boolean)
        .join(' — ') || undefined,
      ownershipConfirmed: form.ownershipConfirmed,
      dataErasureConfirmed: form.dataErased,
    }

    // POST creates the offer draft, PATCH stores details, POST submits it.
    const created = (await createOffer(payload as never)) as { id?: string } | null
    const offerId = created?.id
    if (offerId) {
      await updateOffer(offerId, payload as never)
      await submitOffer(offerId)
    }

    submitted.value = true
    clearDraft()
  } catch {
    submitError.value = true
  } finally {
    submitting.value = false
  }
}

function resetForm() {
  Object.assign(form, {
    organisation: '',
    email: '',
    country: '',
    contactName: '',
    jobTitle: '',
    phone: '',
    items: [emptyItem()],
    logistics: '',
    transferNotes: '',
    ownershipConfirmed: false,
    dataErased: false,
  })
  step.value = 1
  submitted.value = false
  submitError.value = false
  draftDismissed.value = true
}

const reassurances = [
  { icon: Lock, text: 'Secure form' },
  { icon: RefreshCw, text: 'You can save and return' },
  { icon: CircleCheck, text: 'No commitment until approved' },
]
</script>

<template>
  <section id="offer-equipment" class="offer-section">
    <LayoutContainer>
      <div class="offer-section__grid">
        <!-- Left: intro + reassurances -->
        <div class="offer-section__copy">
          <h2 class="offer-section__title">Offer equipment</h2>
          <p class="offer-section__subtitle">
            Share details about the equipment you would like to donate. We will
            review your submission and be in touch within 3 working days.
          </p>

          <ul class="offer-section__reassurances">
            <li v-for="item in reassurances" :key="item.text" class="offer-reassurance">
              <component :is="item.icon" class="offer-reassurance__icon" />
              <span>{{ item.text }}</span>
            </li>
          </ul>
        </div>

        <!-- Right: the workflow card -->
        <div class="offer-section__card">
          <!-- Success state -->
          <div v-if="submitted" class="offer-success" role="status">
            <CircleCheck class="offer-success__icon" />
            <h3 class="offer-success__title">Thank you — your offer has been received.</h3>
            <p class="offer-success__text">
              Our equipment team will review your submission and respond within
              3 working days. Please do not ship anything until you receive
              written approval.
            </p>
            <UiButton variant="outline" size="md" @click="resetForm">
              Submit another offer
            </UiButton>
          </div>

          <template v-else>
            <!-- Stepper -->
            <ol class="offer-stepper" aria-label="Offer steps">
              <li
                v-for="(label, index) in steps"
                :key="label"
                class="offer-stepper__item"
              >
                <button
                  type="button"
                  class="offer-stepper__button"
                  :class="{ 'offer-stepper__button--active': step === index + 1 }"
                  :disabled="index + 1 >= step"
                  :aria-current="step === index + 1 ? 'step' : undefined"
                  @click="goToStep(index + 1)"
                >
                  <span class="offer-stepper__circle" :class="{ 'offer-stepper__circle--active': step === index + 1 }">
                    {{ index + 1 }}
                  </span>
                  <span class="offer-stepper__label">{{ label }}</span>
                </button>
              </li>
            </ol>

            <!-- Draft restored notice -->
            <div v-if="draftRestored && !draftDismissed" class="offer-draft-notice" role="status">
              <CircleAlert class="w-4 h-4 flex-shrink-0" />
              <span>We restored your saved draft so you can continue where you left off.</span>
              <button type="button" class="offer-draft-notice__dismiss" @click="draftDismissed = true">
                Dismiss
              </button>
            </div>

            <!-- STEP 1: Organisation -->
            <form
              v-if="step === 1"
              class="offer-form"
              novalidate
              @submit.prevent="nextStep"
            >
              <div class="offer-form__row">
                <UiInput
                  v-model="form.organisation"
                  label="Organisation name *"
                  placeholder="Organisation name *"
                  :error="errors.organisation"
                  required
                />
                <UiInput
                  v-model="form.contactName"
                  label="Your name *"
                  placeholder="Your name *"
                  :error="errors.contactName"
                  required
                />
              </div>

              <div class="offer-form__row">
                <UiInput
                  v-model="form.email"
                  type="email"
                  label="Email address *"
                  placeholder="Email address *"
                  :error="errors.email"
                  required
                />
                <UiInput
                  v-model="form.jobTitle"
                  label="Job title"
                  placeholder="Job title"
                  :error="errors.jobTitle"
                />
              </div>

              <div class="offer-form__row">
                <UiSelect
                  v-model="form.country"
                  label="Country *"
                  :options="countryOptions"
                  placeholder="Country *"
                  :error="errors.country"
                  required
                />
                <UiInput
                  v-model="form.phone"
                  type="tel"
                  label="Phone number"
                  placeholder="Phone number"
                  :error="errors.phone"
                />
              </div>

              <div class="offer-form__actions">
                <span />
                <UiButton type="submit" size="lg" class="offer-form__next">
                  Save and continue
                  <ArrowRight class="w-4 h-4" />
                </UiButton>
              </div>
            </form>

            <!-- STEP 2: Equipment details -->
            <form
              v-else-if="step === 2"
              class="offer-form"
              novalidate
              @submit.prevent="nextStep"
            >
              <div
                v-for="(item, index) in form.items"
                :key="index"
                class="offer-item"
              >
                <div class="offer-item__header">
                  <span class="offer-item__number">Item {{ index + 1 }}</span>
                  <button
                    v-if="form.items.length > 1"
                    type="button"
                    class="offer-item__remove"
                    @click="form.items.splice(index, 1); errors.items.splice(index, 1)"
                  >
                    <Trash2 class="w-4 h-4" />
                    Remove
                  </button>
                </div>

                <div class="offer-form__row">
                  <UiSelect
                    v-model="item.category"
                    label="Category *"
                    :options="categoryOptions"
                    placeholder="Select category"
                    :error="errors.items[index]"
                    required
                  />
                  <UiSelect
                    v-model="item.condition"
                    label="Condition *"
                    :options="conditionOptions"
                    placeholder="Select condition"
                    required
                  />
                </div>

                <div class="offer-form__row offer-form__row--three">
                  <UiInput
                    v-model="item.manufacturer"
                    label="Manufacturer"
                    placeholder="Manufacturer"
                  />
                  <UiInput v-model="item.model" label="Model" placeholder="Model" />
                  <UiInput
                    v-model.number="item.quantity"
                    type="number"
                    label="Quantity *"
                    placeholder="Quantity"
                    :error="errors.items[index]"
                    required
                  />
                </div>

                <UiInput
                  v-model="item.specifications"
                  label="Specifications (optional)"
                  placeholder="e.g. CPU, RAM, screen size, age"
                />
              </div>

              <button
                type="button"
                class="offer-add-item"
                @click="form.items.push(emptyItem()); errors.items.push('')"
              >
                <Plus class="w-4 h-4" />
                Add another item
              </button>

              <div class="offer-form__actions">
                <UiButton variant="outline" size="lg" @click="prevStep">
                  <ArrowLeft class="w-4 h-4" />
                  Back
                </UiButton>
                <UiButton type="submit" size="lg" class="offer-form__next">
                  Continue
                  <ArrowRight class="w-4 h-4" />
                </UiButton>
              </div>
            </form>

            <!-- STEP 3: Logistics & transfer -->
            <form
              v-else-if="step === 3"
              class="offer-form"
              novalidate
              @submit.prevent="nextStep"
            >
              <UiSelect
                v-model="form.logistics"
                label="Preferred transfer arrangement"
                :options="[
                  { value: 'donor-delivery', label: 'We can deliver to your facility' },
                  { value: 'collection', label: 'Collection by Impact Bridge' },
                  { value: 'courier', label: 'Courier / freight (donor arranged)' },
                  { value: 'unsure', label: 'Not sure yet' },
                ]"
                placeholder="Select arrangement"
              />

              <textarea
                v-model="form.transferNotes"
                rows="4"
                placeholder="Anything else we should know about logistics, timing or location?"
                class="offer-form__textarea"
              />

              <div class="offer-form__checks">
                <UiCheckbox
                  v-model="form.ownershipConfirmed"
                  label="I confirm our organisation owns this equipment and has the authority to transfer it *"
                  :error="errors.ownershipConfirmed"
                />
                <UiCheckbox
                  v-model="form.dataErased"
                  label="All data will be securely erased before transfer (we verify again on receipt) *"
                  :error="errors.dataErased"
                />
              </div>

              <div class="offer-form__actions">
                <UiButton variant="outline" size="lg" @click="prevStep">
                  <ArrowLeft class="w-4 h-4" />
                  Back
                </UiButton>
                <UiButton type="submit" size="lg" class="offer-form__next">
                  Continue
                  <ArrowRight class="w-4 h-4" />
                </UiButton>
              </div>
            </form>

            <!-- STEP 4: Review & submit -->
            <form v-else class="offer-form" novalidate @submit.prevent="handleSubmit">
              <dl class="offer-review">
                <div class="offer-review__row">
                  <dt>Organisation</dt>
                  <dd>{{ form.organisation }}</dd>
                </div>
                <div class="offer-review__row">
                  <dt>Contact</dt>
                  <dd>{{ form.contactName }} · {{ form.email }}</dd>
                </div>
                <div class="offer-review__row">
                  <dt>Country</dt>
                  <dd>{{ countryOptions.find((c) => c.value === form.country)?.label ?? form.country }}</dd>
                </div>
                <div class="offer-review__row">
                  <dt>Items</dt>
                  <dd>
                    <span v-for="(item, index) in form.items" :key="index" class="offer-review__item">
                      {{ item.quantity }} ×
                      {{ categoryOptions.find((c) => c.value === item.category)?.label ?? item.category }}
                      ({{ conditionOptions.find((c) => c.value === item.condition)?.label ?? item.condition }})
                    </span>
                  </dd>
                </div>
                <div class="offer-review__row">
                  <dt>Logistics</dt>
                  <dd>{{ form.logistics ? form.logistics : 'Not specified' }}</dd>
                </div>
              </dl>

              <p v-if="submitError" class="offer-form__error" role="alert">
                Something went wrong submitting your offer. Please try again.
              </p>

              <div class="offer-form__actions">
                <UiButton variant="outline" size="lg" type="button" @click="prevStep">
                  <ArrowLeft class="w-4 h-4" />
                  Back
                </UiButton>
                <UiButton type="submit" size="lg" class="offer-form__next" :loading="submitting">
                  Submit offer
                  <ArrowRight v-if="!submitting" class="w-4 h-4" />
                </UiButton>
              </div>
            </form>
          </template>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.offer-section {
  @apply bg-white py-14 md:py-16 border-t border-slate-100;
}

.offer-section__grid {
  @apply grid grid-cols-1 lg:grid-cols-12 gap-10;
}

.offer-section__copy {
  @apply lg:col-span-4;
}

.offer-section__title {
  @apply text-2xl md:text-3xl font-serif font-bold text-slate-900;
}

.offer-section__subtitle {
  @apply mt-3 text-sm font-sans leading-relaxed text-slate-500 max-w-xs;
}

.offer-section__reassurances {
  @apply mt-6 space-y-3;
}

.offer-reassurance {
  @apply flex items-center gap-2.5 text-[13px] font-sans text-slate-600;
}

.offer-reassurance__icon {
  @apply w-4 h-4 text-cobalt-600 flex-shrink-0;
}

.offer-section__card {
  @apply lg:col-span-8 bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8;
}

/* Stepper */
.offer-stepper {
  @apply flex items-start justify-between gap-2;
}

.offer-stepper__item {
  @apply flex-1 min-w-0;
}

.offer-stepper__button {
  @apply flex items-center gap-2 w-full text-left disabled:cursor-default;
}

.offer-stepper__circle {
  @apply w-7 h-7 rounded-full border border-slate-300 bg-white text-[12px] font-sans font-bold text-slate-500;
  @apply flex items-center justify-center flex-shrink-0;
}

.offer-stepper__circle--active {
  @apply bg-cobalt-600 border-cobalt-600 text-white;
}

.offer-stepper__label {
  @apply text-[13px] font-sans font-medium text-slate-600 truncate;
}

.offer-stepper__button--active .offer-stepper__label {
  @apply text-slate-900 font-semibold;
}

/* Draft restored notice */
.offer-draft-notice {
  @apply mt-5 flex items-center gap-2 rounded-lg bg-blue-50 border border-blue-200 px-3.5 py-2.5;
  @apply text-[13px] font-sans text-blue-800;
}

.offer-draft-notice__dismiss {
  @apply ml-auto text-[13px] font-sans font-semibold text-blue-700 hover:text-blue-900 underline;
}

/* Forms */
.offer-form {
  @apply mt-6 flex flex-col gap-4;
}

.offer-form__row {
  @apply grid grid-cols-1 sm:grid-cols-2 gap-4;
}

.offer-form__row--three {
  @apply sm:grid-cols-3;
}

.offer-form__textarea {
  @apply w-full px-3 py-2.5 text-base font-sans border border-slate-300 rounded-md;
  @apply placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cobalt-500 focus:border-cobalt-500;
  @apply transition-shadow resize-y;
}

.offer-form__checks {
  @apply flex flex-col gap-3;
}

.offer-form__actions {
  @apply mt-2 flex items-center justify-between gap-4;
}

.offer-form__next {
  @apply ml-auto;
}

.offer-form__error {
  @apply text-sm font-sans text-red-600;
}

/* Item blocks */
.offer-item {
  @apply rounded-lg border border-slate-200 bg-white p-5;
}

.offer-item__header {
  @apply flex items-center justify-between mb-4;
}

.offer-item__number {
  @apply text-[13px] font-sans font-bold text-slate-900;
}

.offer-item__remove {
  @apply inline-flex items-center gap-1.5 text-[13px] font-sans font-medium text-red-500 hover:text-red-700;
}

.offer-add-item {
  @apply self-start inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-dashed border-slate-300;
  @apply text-[13px] font-sans font-semibold text-cobalt-600 hover:border-cobalt-400 hover:bg-blue-50/50 transition-colors;
}

/* Review */
.offer-review {
  @apply flex flex-col divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white px-5;
}

.offer-review__row {
  @apply grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1 sm:gap-4 py-3.5;
}

.offer-review__row dt {
  @apply text-[13px] font-sans font-semibold text-slate-500;
}

.offer-review__row dd {
  @apply text-sm font-sans text-slate-900;
}

.offer-review__item {
  @apply block;
}

/* Success */
.offer-success {
  @apply flex flex-col items-start gap-3 py-6;
}

.offer-success__icon {
  @apply w-10 h-10 text-emerald-600;
}

.offer-success__title {
  @apply text-lg font-sans font-bold text-slate-900;
}

.offer-success__text {
  @apply text-sm font-sans leading-relaxed text-slate-600 max-w-md;
}
</style>
