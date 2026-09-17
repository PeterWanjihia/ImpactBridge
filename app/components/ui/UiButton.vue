<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-white' | 'light' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  to?: string
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  to: undefined,
  disabled: false,
  loading: false,
  type: 'button'
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

function handleClick(event: MouseEvent) {
  if (props.disabled || props.loading) {
    event.preventDefault()
    event.stopPropagation()
    return
  }
  emit('click', event)
}
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :aria-disabled="disabled || loading ? 'true' : undefined"
    :tabindex="disabled || loading ? -1 : undefined"
    :class="[
      'ui-button',
      `ui-button--${variant}`,
      `ui-button--${size}`,
      { 'ui-button--loading': loading }
    ]"
    @click="handleClick"
  >
    <span v-if="loading" class="ui-button__spinner" />
    <slot />
  </NuxtLink>
  <button
    v-else
    :type="type"
    :disabled="disabled || loading"
    :aria-disabled="disabled || loading ? 'true' : undefined"
    :tabindex="disabled || loading ? -1 : undefined"
    :class="[
      'ui-button',
      `ui-button--${variant}`,
      `ui-button--${size}`,
      { 'ui-button--loading': loading }
    ]"
    @click="handleClick"
  >
    <span v-if="loading" class="ui-button__spinner" />
    <slot />
  </button>
</template>

<style scoped>
.ui-button {
  @apply inline-flex items-center justify-center gap-2 font-sans font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2;
}

.ui-button--primary {
  @apply bg-cobalt text-white hover:bg-cobalt/90 focus:ring-cobalt;
}

.ui-button--secondary {
  @apply bg-navy text-white hover:bg-navy/90 focus:ring-navy;
}

.ui-button--outline {
  @apply border-2 border-navy text-navy hover:bg-navy hover:text-white focus:ring-navy;
}

.ui-button--outline-white {
  @apply border border-white text-white hover:bg-white hover:text-navy focus:ring-white;
}

.ui-button--light {
  @apply bg-white text-navy hover:bg-gray-100 focus:ring-white;
}

.ui-button--ghost {
  @apply text-navy hover:bg-navy/10 focus:ring-navy;
}

.ui-button--sm {
  @apply px-3 py-1.5 text-sm;
}

.ui-button--md {
  @apply px-4 py-2 text-base;
}

.ui-button--lg {
  @apply px-6 py-3 text-lg;
}

.ui-button:disabled {
  @apply opacity-50 cursor-not-allowed;
}

.ui-button__spinner {
  @apply w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin;
}
</style>
