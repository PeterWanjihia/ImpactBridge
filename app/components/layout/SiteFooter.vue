<script setup lang="ts">
const currentYear = new Date().getFullYear()

const footerLinks = {
  about: [
    { label: 'Our Story', to: '/our-story' },
    { label: 'Our Model', to: '/our-model' },
    { label: 'Impact', to: '/impact' },
    { label: 'Stories', to: '/stories' },
  ],
  support: [
    { label: 'Donate', to: '/donate' },
    { label: 'Donate Equipment', to: '/donate-equipment' },
    { label: 'Corporate Partnerships', to: '/corporate-partnerships' },
  ],
  transparency: [
    { label: 'Transparency', to: '/transparency' },
    { label: 'Reports', to: '/transparency#reports' },
  ],
}
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer-container">
      <div class="site-footer-grid">
        <div class="site-footer-brand">
          <NuxtLink to="/" class="site-footer-logo">
            <span class="site-footer-logo-text">Impact Bridge</span>
          </NuxtLink>
          <p class="site-footer-tagline">
            We bring offline digital learning hubs, teacher training and resources to schools without reliable connectivity.
          </p>
        </div>

        <div class="site-footer-links">
          <h3 class="site-footer-heading">About</h3>
          <ul class="site-footer-list">
            <li v-for="link in footerLinks.about" :key="link.to">
              <NuxtLink :to="link.to" class="site-footer-link">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="site-footer-links">
          <h3 class="site-footer-heading">Support</h3>
          <ul class="site-footer-list">
            <li v-for="link in footerLinks.support" :key="link.to">
              <NuxtLink :to="link.to" class="site-footer-link">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="site-footer-links">
          <h3 class="site-footer-heading">Transparency</h3>
          <ul class="site-footer-list">
            <li v-for="link in footerLinks.transparency" :key="link.to">
              <NuxtLink :to="link.to" class="site-footer-link">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="site-footer-bottom">
        <p class="site-footer-copyright">
          &copy; {{ currentYear }} Impact Bridge. All rights reserved.
        </p>
        <div class="site-footer-legal">
          <NuxtLink to="/privacy" class="site-footer-legal-link">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" class="site-footer-legal-link">Terms of Service</NuxtLink>
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
  @apply grid grid-cols-2 md:grid-cols-4 gap-8;
}

.site-footer-brand {
  @apply col-span-2 md:col-span-1;
}

.site-footer-logo {
  @apply inline-block;
}

.site-footer-logo-text {
  @apply text-xl font-serif font-bold;
}

.site-footer-tagline {
  @apply mt-4 text-sm text-gray-300;
}

.site-footer-heading {
  @apply text-sm font-sans font-semibold uppercase tracking-wider text-gray-400;
}

.site-footer-list {
  @apply mt-4 space-y-2;
}

.site-footer-link {
  @apply text-sm text-gray-300 hover:text-white transition-colors;
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
