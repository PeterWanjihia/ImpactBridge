<script setup lang="ts">
const route = useRoute()

const navigation = [
  { label: 'Our Story', to: '/our-story' },
  { label: 'Our Model', to: '/our-model' },
  { label: 'Impact', to: '/impact' },
  { label: 'Stories', to: '/stories' },
  { label: 'Partnerships', to: '/corporate-partnerships' },
]

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="site-header">
    <div class="site-header-container">
      <NuxtLink to="/" class="site-header-logo" @click="closeMenu">
        <span class="site-header-logo-text">Impact Bridge</span>
      </NuxtLink>

      <nav class="site-header-nav" :class="{ 'site-header-nav--open': isMenuOpen }">
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="site-header-link"
          :class="{ 'site-header-link--active': route.path === item.to }"
          @click="closeMenu"
        >
          {{ item.label }}
        </NuxtLink>
        <UiButton variant="primary" size="sm" @click="closeMenu">
          <NuxtLink to="/donate">Donate</NuxtLink>
        </UiButton>
      </nav>

      <button
        type="button"
        class="site-header-menu-btn"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle menu"
        @click="toggleMenu"
      >
        <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  @apply sticky top-0 z-40 bg-white border-b border-gray-200;
}

.site-header-container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  @apply flex items-center justify-between h-16;
}

.site-header-logo {
  @apply flex items-center gap-2;
}

.site-header-logo-text {
  @apply text-xl font-serif font-bold text-navy;
}

.site-header-nav {
  @apply hidden md:flex items-center gap-6;
}

.site-header-nav--open {
  @apply fixed inset-0 top-16 bg-white flex flex-col p-4 gap-4 md:hidden;
}

.site-header-link {
  @apply text-sm font-sans font-medium text-gray-600 hover:text-navy transition-colors;
}

.site-header-link--active {
  @apply text-navy;
}

.site-header-menu-btn {
  @apply md:hidden p-2 text-gray-600 hover:text-navy rounded-md focus:outline-none focus:ring-2 focus:ring-cobalt;
}
</style>
