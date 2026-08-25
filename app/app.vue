<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  bodyAttrs: {
    class: 'font-sans text-gray-900 antialiased'
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
  :root {
    /* Impact Bridge Design Tokens */
    --color-navy: #1e3a5f;
    --color-cobalt: #2563eb;
    --color-teal: #0d9488;
    
    /* Typography */
    --font-serif: Georgia, 'Times New Roman', serif;
    --font-sans: Arial, 'Helvetica Neue', sans-serif;
  }

  body {
    @apply bg-white text-gray-900;
    font-family: var(--font-sans);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-serif);
  }

  /* Focus styles for accessibility */
  *:focus-visible {
    @apply outline-2 outline-offset-2 outline-cobalt;
  }
}
</style>
