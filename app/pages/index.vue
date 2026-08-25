<script setup lang="ts">
useHead({
  title: 'Impact Bridge - Offline Learning Hubs for Schools Without Connectivity',
  meta: [
    { name: 'description', content: 'We bring offline digital learning hubs, teacher training and resources to schools without reliable connectivity.' }
  ]
})
</script>

<template>
  <div class="page-home">
    <HeroOverlay
      title="The internet should not decide who gets to learn"
      subtitle="We bring offline digital learning hubs, teacher training and resources to schools without reliable connectivity."
    >
      <template #actions>
        <div class="flex gap-4">
          <UiButton variant="primary" size="lg">
            <NuxtLink to="/donate">Donate Now</NuxtLink>
          </UiButton>
          <UiButton variant="outline" size="lg">
            <NuxtLink to="/our-story">Learn More</NuxtLink>
          </UiButton>
        </div>
      </template>
    </HeroOverlay>

    <!-- Homepage sections will be built here -->
  </div>
</template>
