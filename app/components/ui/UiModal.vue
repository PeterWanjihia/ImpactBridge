<script setup lang="ts">
interface Props {
  open: boolean
  title?: string
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md'
})

const emit = defineEmits<{
  close: []
}>()

const modalId = computed(() => `modal-${useId()}`)

function handleBackdropClick(event: MouseEvent) {
  if (event.target === event.currentTarget) {
    emit('close')
  }
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    emit('close')
  }
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="open"
      :id="modalId"
      class="ui-modal-backdrop"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="title ? `${modalId}-title` : undefined"
      @click="handleBackdropClick"
      @keydown="handleKeydown"
    >
      <div :class="['ui-modal', `ui-modal--${size}`]">
        <div v-if="title || $slots.header" class="ui-modal-header">
          <slot name="header">
            <h2 :id="`${modalId}-title`" class="ui-modal-title">{{ title }}</h2>
          </slot>
          <button
            type="button"
            class="ui-modal-close"
            aria-label="Close"
            @click="emit('close')"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="ui-modal-body">
          <slot />
        </div>
        <div v-if="$slots.footer" class="ui-modal-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.ui-modal-backdrop {
  @apply fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50;
}

.ui-modal {
  @apply bg-white rounded-lg shadow-xl max-h-[90vh] overflow-hidden;
}

.ui-modal--sm {
  @apply w-full max-w-md;
}

.ui-modal--md {
  @apply w-full max-w-lg;
}

.ui-modal--lg {
  @apply w-full max-w-2xl;
}

.ui-modal-header {
  @apply flex items-center justify-between px-6 py-4 border-b border-gray-200;
}

.ui-modal-title {
  @apply text-lg font-serif font-semibold text-navy;
}

.ui-modal-close {
  @apply p-1 text-gray-400 hover:text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cobalt;
}

.ui-modal-body {
  @apply px-6 py-4 overflow-y-auto;
}

.ui-modal-footer {
  @apply flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50;
}
</style>
