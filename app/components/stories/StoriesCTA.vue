<script setup lang="ts">
import { Users, Landmark, ArrowRight } from '@lucide/vue'
</script>

<template>
  <section class="bg-[#031B4E] text-white py-12 px-6 overflow-hidden relative">
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <!-- Left Headline & Watermark Section -->
        <div class="lg:col-span-5 flex items-center gap-6">
          <!-- Fingerprint Decorative Watermark (SVG) -->
          <div class="shrink-0 opacity-40 hidden sm:block">
            <svg class="w-24 h-24 text-blue-400 stroke-current fill-none" viewBox="0 0 100 100" stroke-width="1.5">
              <path d="M50,10 A40,40 0 0,1 90,50 A40,40 0 0,1 50,90 A40,40 0 0,1 10,50 A40,40 0 0,1 50,10 Z" stroke-dasharray="4 2" />
              <path d="M50,20 A30,30 0 0,1 80,50 A30,30 0 0,1 50,80 A30,30 0 0,1 20,50 A30,30 0 0,1 50,20 Z" />
              <path d="M50,30 A20,20 0 0,1 70,50 A20,20 0 0,1 50,70 A20,20 0 0,1 30,50 A20,20 0 0,1 50,30 Z" />
              <path d="M50,40 A10,10 0 0,1 60,50 A10,10 0 0,1 50,60 A10,10 0 0,1 40,50 A10,10 0 0,1 50,40 Z" />
            </svg>
          </div>

          <div class="space-y-2">
            <h2 class="text-3xl lg:text-4xl font-serif font-semibold leading-tight text-white">
              Help create the next story of change.
            </h2>
            <p class="text-xs sm:text-sm text-blue-100/80 leading-relaxed font-sans max-w-sm">
              Your support funds the tools, teacher preparation and ongoing support behind every classroom.
            </p>
          </div>
        </div>

        <!-- Right Options Section -->
        <div class="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 items-start relative">
          
          <!-- Card 1: Fund a classroom -->
          <div class="flex items-start gap-4">
            <div class="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
              <Users class="w-6 h-6 text-[#031B4E]" />
            </div>
            <div class="space-y-1.5">
              <h3 class="text-base font-semibold text-white">Fund a classroom</h3>
              <p class="text-xs text-blue-100/75 leading-relaxed">
                Give today and help more learners access meaningful learning.
              </p>
              <NuxtLink 
                to="/donate" 
                class="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-blue-200 transition-colors pt-1"
              >
                Fund now <ArrowRight class="w-3.5 h-3.5" />
              </NuxtLink>
            </div>
          </div>

          <!-- Vertical Divider (Visible on MD screens and up) -->
          <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/15 -translate-x-1/2"></div>

          <!-- Card 2: Start a partnership -->
          <div class="flex items-start gap-4 md:pl-4">
            <div class="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
              <Landmark class="w-6 h-6 text-[#031B4E]" />
            </div>
            <div class="space-y-1.5">
              <h3 class="text-base font-semibold text-white">Start a partnership</h3>
              <p class="text-xs text-blue-100/75 leading-relaxed">
                Work with us to equip schools, strengthen systems and document impact.
              </p>
              <NuxtLink 
                to="/corporate-partnerships" 
                class="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-blue-200 transition-colors pt-1"
              >
                Partner with us <ArrowRight class="w-3.5 h-3.5" />
              </NuxtLink>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>