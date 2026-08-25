<script setup lang="ts">
import { Facebook, Instagram, Linkedin, Mail, Send } from '@lucide/vue'

const currentYear = new Date().getFullYear()

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
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Mail, label: 'Email', href: '#' },
]
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer-container">
      <div class="site-footer-grid">
        <!-- Brand Column -->
        <div class="site-footer-brand">
          <NuxtLink to="/" class="site-footer-logo">
            <img src="/logo.png" alt="Impact Bridge logo" class="site-footer-logo-icon" />
            <span class="site-footer-logo-text">Impact Bridge</span>
          </NuxtLink>
          <p class="site-footer-tagline">
            Bridging connectivity.<br />
            Building futures.
          </p>
          <div class="site-footer-social">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              :aria-label="social.label"
              class="site-footer-social-link"
            >
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>
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

        <!-- Stay Connected Column -->
        <div class="site-footer-newsletter">
          <h3 class="site-footer-heading">Stay Connected</h3>
          <p class="site-footer-newsletter-text">
            Sign up for our newsletter to receive impact stories and updates.
          </p>
          <form class="site-footer-newsletter-form" @submit.prevent>
            <input
              type="email"
              placeholder="Your email address"
              class="site-footer-newsletter-input"
              aria-label="Email address for newsletter"
            />
            <button type="submit" class="site-footer-newsletter-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div class="site-footer-bottom">
        <p class="site-footer-copyright">
          &copy; {{ currentYear }} Impact Bridge. All rights reserved.
        </p>
        <div class="site-footer-legal">
          <NuxtLink to="/privacy" class="site-footer-legal-link">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" class="site-footer-legal-link">Terms</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  @apply bg-navy text-white;
}

.site-footer-container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12;
}

.site-footer-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8;
}

.site-footer-brand {
  @apply lg:col-span-1;
}

.site-footer-logo {
  @apply inline-flex items-center gap-2;
}

.site-footer-logo-icon {
  @apply w-8 h-8 object-contain;
}

.site-footer-logo-text {
  @apply text-xl font-serif font-bold;
}

.site-footer-tagline {
  @apply mt-4 text-sm text-gray-300;
}

.site-footer-social {
  @apply mt-6 flex items-center gap-3;
}

.site-footer-social-link {
  @apply w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white transition-colors;
}

.site-footer-links {
  @apply lg:col-span-1;
}

.site-footer-heading {
  @apply text-sm font-sans font-semibold tracking-wider text-gray-400;
}

.site-footer-list {
  @apply mt-4 space-y-2;
}

.site-footer-link {
  @apply text-sm text-gray-300 hover:text-white transition-colors;
}

.site-footer-newsletter {
  @apply lg:col-span-1;
}

.site-footer-newsletter-text {
  @apply mt-4 text-sm text-gray-300;
}

.site-footer-newsletter-form {
  @apply mt-4 flex;
}

.site-footer-newsletter-input {
  @apply flex-1 min-w-0 px-3 py-2 text-sm text-white bg-white/10 border border-white/20 rounded-l-md;
  @apply placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-cobalt focus:border-cobalt;
}

.site-footer-newsletter-btn {
  @apply px-4 py-2 text-sm font-semibold text-white bg-cobalt rounded-r-md;
  @apply hover:bg-cobalt/80 transition-colors whitespace-nowrap;
}

.site-footer-bottom {
  @apply mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4;
}

.site-footer-copyright {
  @apply text-sm text-gray-400;
}

.site-footer-legal {
  @apply flex gap-4;
}

.site-footer-legal-link {
  @apply text-sm text-gray-400 hover:text-white transition-colors;
}
</style>
