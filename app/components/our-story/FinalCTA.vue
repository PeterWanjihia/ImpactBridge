<script setup lang="ts">
import { Heart, Building2 } from '@lucide/vue'
</script>

<template>
  <section class="py-section-sm md:py-section bg-white">
    <LayoutContainer>
      <div class="relative overflow-hidden rounded-card-lg bg-ink-deep text-white min-h-[320px] flex items-center shadow-elevation-3">
        
        <!-- Dark Overlay Gradient & Background Imagery -->
        <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-ink-deep/80 to-ink-deep/90 z-10" />
        
        <!-- Background Photo (Left Aligned Student Profile) -->
        <div class="absolute left-0 top-0 bottom-0 w-full sm:w-1/2 z-0 opacity-40 sm:opacity-60">
          <NuxtImg
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&h=600&fit=crop" 
            alt="Student looking forward" 
            class="w-full h-full object-cover object-left-top"
            width="800"
            height="600"
            loading="lazy"
            sizes="sm:100vw lg:50vw"
          />
        </div>

        <!-- Abstract Fingerprint Vector Accent (Right Side) -->
        <div class="absolute right-4 sm:right-12 bottom-0 top-0 w-48 sm:w-72 z-10 opacity-30 sm:opacity-50 pointer-events-none flex items-center justify-center">
          <svg 
            viewBox="0 0 200 200" 
            fill="none" 
            stroke="currentColor" 
            class="w-full h-full text-cobalt stroke-[1.5]"
          >
            <path d="M100 20 C60 20 30 50 30 90 C30 140 50 180 100 180 C150 180 170 140 170 90 C170 50 140 20 100 20 Z" />
            <path d="M100 40 C72 40 50 62 50 90 C50 130 65 160 100 160 C135 160 150 130 150 90 C150 62 128 40 100 40 Z" />
            <path d="M100 60 C82 60 68 74 68 90 C68 120 78 140 100 140 C122 140 132 120 132 90 C132 74 118 60 100 60 Z" />
            <path d="M100 80 C91 80 84 87 84 96 C84 110 90 120 100 120 C110 120 116 110 116 96 C116 87 109 80 100 80 Z" />
            <path d="M100 98 L100 102" />
          </svg>
        </div>

        <!-- Banner Content Grid -->
        <div class="relative z-20 w-full px-6 py-section-xs sm:px-12 md:px-16 text-center">
          <div class="max-w-3xl mx-auto space-y-6">
            
            <!-- Eyebrow -->
            <span class="text-2xs font-bold tracking-eyebrow text-cobalt-300 uppercase block">
              THE NEXT CHAPTER
            </span>

            <!-- Main Headline -->
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white leading-tight">
              One classroom showed what is possible.<br class="hidden sm:inline" />
              The next ten can show how far it can travel.
            </h2>

            <!-- Action Buttons Row -->
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              
              <!-- Primary CTA: Fund a classroom -->
              <UiButton to="/donate" variant="primary" size="md" class="w-full sm:w-auto shadow-elevation-2">
                <Heart class="w-4 h-4 fill-white" />
                <span>Fund a classroom</span>
              </UiButton>

              <!-- Secondary CTA: Partner with us -->
              <UiButton to="/partnerships" variant="outline-white" size="md" class="w-full sm:w-auto !h-auto flex-col border-aqua/40 bg-ink/80 text-aqua hover:bg-ink-soft">
                <div class="flex items-center gap-2">
                  <Building2 class="w-4 h-4 text-aqua" />
                  <span>Partner with us</span>
                </div>
                <span class="text-2xs text-gray-400 font-normal">
                  Funding, suitable technology, logistics or expertise.
                </span>
              </UiButton>

            </div>

          </div>
        </div>

      </div>
    </LayoutContainer>
  </section>
</template>