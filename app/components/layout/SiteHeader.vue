<script setup lang="ts">
import { Heart, Menu, X } from '@lucide/vue'

const route = useRoute()

const navigation = [
  { label: 'About', to: '/our-story' },
  { label: 'Our Model', to: '/our-model' },
  { label: 'Impact', to: '/impact' },
  { label: 'Stories', to: '/stories' },
  { label: 'Get Involved', to: '/donate' },
  { label: 'Corporate Partnerships', to: '/corporate-partnerships' },
  { label: 'Accountability', to: '/transparency' },
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
        <NuxtImg src="/logo.png" alt="Impact Bridge logo" class="site-header-logo-icon" width="36" height="36" />
        <div class="site-header-logo-text">
          <span>IMPACT</span>
          <span>BRIDGE</span>
        </div>
        <div class="site-header-logo-divider"></div>
        <span class="site-header-logo-tagline">
          Bridging connectivity.<br />Building futures.
        </span>
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
        <NuxtLink to="/our-story" class="site-header-btn-outline" @click="closeMenu">
          Who We Are
        </NuxtLink>
        <NuxtLink to="/donate" class="site-header-btn-donate" @click="closeMenu">
          <Heart class="w-4 h-4" fill="currentColor" />
          Donate
        </NuxtLink>
      </nav>

      <button
        type="button"
        class="site-header-menu-btn"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle menu"
        @click="toggleMenu"
      >
        <Menu v-if="!isMenuOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  @apply sticky top-0 z-50 bg-white border-b border-gray-100 shadow-elevation-1;
}

.site-header-container {
  @apply max-w-container mx-auto px-gutter-sm sm:px-gutter lg:px-gutter-lg;
  @apply flex items-center justify-between h-20;
}

.site-header-logo {
  @apply flex items-center gap-3 flex-shrink-0;
}

.site-header-logo-icon {
  @apply w-10 h-10 object-contain;
}

.site-header-logo-text {
  @apply flex flex-col text-body font-sans font-black text-black leading-none tracking-tight uppercase;
}

.site-header-logo-tagline {
  @apply text-2xs text-gray-600 leading-tight font-normal pl-2 border-l border-gray-300;
}

.site-header-nav {
  @apply hidden lg:flex items-center gap-6 ml-auto;
}

.site-header-nav--open {
  @apply fixed inset-0 top-20 bg-white flex flex-col p-6 gap-4 lg:hidden;
  z-index: 40;
}

.site-header-link {
  @apply text-sm font-sans font-semibold text-gray-800 hover:text-cobalt-600 transition-colors whitespace-nowrap;
}

.site-header-link--active {
  @apply text-cobalt-600 font-bold;
}

.site-header-btn-outline {
  @apply inline-flex items-center justify-center px-5 py-2.5 ml-2;
  @apply text-sm font-sans font-semibold text-gray-800;
  @apply border border-cobalt-400 rounded-xl;
  @apply hover:bg-cobalt-50 transition-colors whitespace-nowrap;
  @apply focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-cobalt-600;
}

.site-header-btn-donate {
  @apply inline-flex items-center justify-center gap-2 px-6 py-2.5;
  @apply text-sm font-sans font-semibold text-white;
  @apply bg-cobalt-700 rounded-xl;
  @apply hover:bg-cobalt-800 transition-colors whitespace-nowrap;
  @apply focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-cobalt-600;
}

.site-header-menu-btn {
  @apply lg:hidden p-2 text-gray-600 hover:text-ink rounded-md focus:outline-none;
}
</style>