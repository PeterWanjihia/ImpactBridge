<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  bodyAttrs: {
    class: 'bg-white font-sans text-ink antialiased'
  }
})
</script>

<template>
  <div class="app">
    <NuxtRouteAnnouncer />
    <SiteHeader />
    <main>
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>

<style>
/* Global styles */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-white text-ink;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-display;
  }

  /* Focus styles for accessibility */
  *:focus-visible {
    @apply outline-2 outline-offset-2 outline-cobalt;
  }
}
</style>
