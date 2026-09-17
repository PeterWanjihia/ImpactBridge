<script setup lang="ts">
// fa brand
import FacebookIcon from '~icons/fa6-brands/facebook'
import InstagramIcon from '~icons/fa6-brands/instagram'
import LinkedinIcon from '~icons/fa6-brands/linkedin'
import YoutubeIcon from '~icons/fa6-brands/youtube'
import { validateEmail } from '~/utils/validation'

const config = useRuntimeConfig()

const currentYear = new Date().getFullYear()
const newsletterEmail = ref('')
const newsletterError = ref('')
const newsletterSubmitting = ref(false)
const newsletterSubscribed = ref(false)

async function subscribeToNewsletter() {
  const result = validateEmail(newsletterEmail.value)
  newsletterError.value = result.error ?? ''
  if (!result.valid) return

  newsletterSubmitting.value = true
  try {
    await $fetch(`${config.public.apiUrl}/v1/newsletter/subscriptions`, {
      method: 'POST',
      body: { email: newsletterEmail.value.trim() },
    })
    newsletterSubscribed.value = true
    newsletterEmail.value = ''
  } catch {
    newsletterError.value = 'Subscription failed. Please try again.'
  } finally {
    newsletterSubmitting.value = false
  }
}

const exploreLinks = [
  { label: 'About', to: '/our-story' },
  { label: 'Our Model', to: '/our-model' },
  { label: 'Impact', to: '/impact' },
  { label: 'Stories', to: '/stories' },
  { label: 'Get Involved', to: '/donate' },
]

const partnershipLinks = [
  { label: 'Partner With Us', to: '/corporate-partnerships' },
  { label: 'Corporate Partnership Pack', to: '/corporate-partnerships' },
  { label: 'Equipment Donation Guidelines', to: '/donate-equipment' },
]

const transparencyLinks = [
  { label: 'Financial Reports', to: '/transparency#reports' },
  { label: 'Governance', to: '/transparency' },
  { label: 'Safeguarding', to: '/transparency#safeguarding' },
  { label: 'Complaints Process', to: '/transparency#complaints' },
]

const socialLinks = [
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
  { icon: YoutubeIcon, label: 'YouTube', href: '#' },
]
</script>
<template>
  <footer class="site-footer">
    <div class="site-footer-container">
      <div class="site-footer-grid">
        <!-- Brand Column -->
        <div class="site-footer-brand">
          <NuxtLink to="/" class="site-footer-logo">
            <NuxtImg src="/logo.png" alt="Impact Bridge logo" class="site-footer-logo-icon" width="36" height="36" />
            <div class="site-footer-logo-text">
              <span>IMPACT</span>
              <span>BRIDGE</span>
            </div>
          </NuxtLink>

          <p class="site-footer-tagline">
            Bridging connectivity.<br />
            Building futures.
          </p>

          <div class="site-footer-social">
            <a v-for="social in socialLinks" :key="social.label" :href="social.href" :aria-label="social.label"
              class="site-footer-social-link">
              <component :is="social.icon" class="w-4 h-4" />
            </a>
          </div>

          <p class="site-footer-copyright">
            &copy; {{ currentYear }} Impact Bridge. All rights reserved.
          </p>
        </div>

        <!-- Explore Column -->
        <div class="site-footer-links">
          <h3 class="site-footer-heading">Explore</h3>
          <ul class="site-footer-list">
            <li v-for="link in exploreLinks" :key="link.to">
              <NuxtLink :to="link.to" class="site-footer-link">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Corporate Partnerships Column -->
        <div class="site-footer-links">
          <h3 class="site-footer-heading">Corporate Partnerships</h3>
          <ul class="site-footer-list">
            <li v-for="link in partnershipLinks" :key="link.to">
              <NuxtLink :to="link.to" class="site-footer-link">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Transparency Column -->
        <div class="site-footer-links">
          <h3 class="site-footer-heading">Transparency</h3>
          <ul class="site-footer-list">
            <li v-for="link in transparencyLinks" :key="link.to">
              <NuxtLink :to="link.to" class="site-footer-link">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Stay Connected & Legal Column -->
        <div class="site-footer-newsletter-col">
          <h3 class="site-footer-heading">Stay Connected</h3>
          <p class="site-footer-newsletter-text">
            Sign up for our newsletter to receive impact stories and updates.
          </p>

          <p v-if="newsletterSubscribed" class="site-footer-newsletter-success" role="status">
            You are subscribed. Thank you.
          </p>
          <form v-else class="site-footer-newsletter-form" @submit.prevent="subscribeToNewsletter">
            <input v-model="newsletterEmail" type="email" placeholder="Your email address" class="site-footer-newsletter-input"
              aria-label="Email address for newsletter" :aria-invalid="!!newsletterError || undefined" aria-describedby="footer-newsletter-error" />
            <button type="submit" class="site-footer-newsletter-btn" :disabled="newsletterSubmitting">
              {{ newsletterSubmitting ? 'Sending...' : 'Subscribe' }}
            </button>
          </form>
          <p v-if="newsletterError" id="footer-newsletter-error" class="site-footer-newsletter-error" role="alert">
            {{ newsletterError }}
          </p>

          <div class="site-footer-legal">
            <NuxtLink to="/privacy" class="site-footer-legal-link">Privacy Policy</NuxtLink>
            <NuxtLink to="/terms" class="site-footer-legal-link">Terms</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  @apply bg-ink text-white py-section-sm;
}

.site-footer-container {
  @apply max-w-container mx-auto px-gutter-sm sm:px-gutter lg:px-gutter-lg;
}

.site-footer-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 items-start;
}

.site-footer-brand {
  @apply lg:col-span-1 flex flex-col justify-between h-full;
}

.site-footer-logo {
  @apply inline-flex items-center gap-2.5;
}

.site-footer-logo-icon {
  @apply w-9 h-9 object-contain;
}

.site-footer-logo-text {
  @apply flex flex-col text-sm font-sans font-extrabold tracking-wider leading-none text-white;
}

.site-footer-tagline {
  @apply mt-4 text-label font-sans text-gray-300 leading-snug;
}

.site-footer-social {
  @apply mt-5 flex items-center gap-4;
}

.site-footer-social-link {
  @apply text-bridge hover:text-white transition-colors;
}

.site-footer-copyright {
  @apply mt-6 text-2xs font-sans text-gray-400 whitespace-nowrap;
}

.site-footer-heading {
  @apply text-sm font-sans font-bold text-white mb-4;
}

.site-footer-list {
  @apply space-y-2.5;
}

.site-footer-link {
  @apply text-label font-sans text-gray-300 hover:text-white transition-colors;
}

.site-footer-newsletter-col {
  @apply lg:col-span-1 flex flex-col justify-between h-full;
}

.site-footer-newsletter-text {
  @apply text-label font-sans text-gray-300 leading-snug mb-4;
}

.site-footer-newsletter-form {
  @apply relative flex items-center bg-white/5 border border-white/20 rounded-lg p-1 max-w-xs mb-8;
}

.site-footer-newsletter-input {
  @apply flex-1 bg-transparent px-3 py-1.5 text-xs text-white placeholder:text-gray-400 focus:outline-none;
}

.site-footer-newsletter-btn {
  @apply px-4 py-1.5 text-xs font-sans font-semibold text-white bg-bridge hover:bg-cobalt-600 rounded-md transition-colors whitespace-nowrap;
}

.site-footer-newsletter-btn:disabled {
  @apply opacity-60 cursor-not-allowed;
}

.site-footer-newsletter-error {
  @apply mt-2 text-2xs font-sans text-danger-300;
}

.site-footer-newsletter-success {
  @apply text-sm font-sans text-success-300;
}

.site-footer-legal {
  @apply flex items-center gap-6 mt-auto;
}

.site-footer-legal-link {
  @apply text-xs font-sans text-gray-400 hover:text-white transition-colors;
}
</style>
