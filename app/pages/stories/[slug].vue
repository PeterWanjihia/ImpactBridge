<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

useHead({
  title: `Story - Impact Bridge`,
  meta: [
    { name: 'description', content: 'Read the full story.' }
  ]
})
</script>

<template>
  <div class="page-story-detail">
    <!-- Story detail content will be built here -->
    <p>Loading story: {{ slug }}</p>
  </div>
</template>
