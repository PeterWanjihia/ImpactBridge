<script setup lang="ts">
import { 
  ArrowRight, 
  Heart, 
  Building2, 
  CheckCircle2, 
  MapPin 
} from '@lucide/vue'

const beliefs = [
  'Potential is universal.',
  'Access should not depend on connectivity.',
  'Teachers make technology meaningful.',
  'Communities should own the change.',
  'Evidence matters more than applause.',
  'Dignity is non-negotiable.'
]
</script>

<template>
  <section class="py-16 md:py-24 bg-white border-t border-slate-100">
    <LayoutContainer>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        
        <!-- Section 08: The People Behind The Work (Left Column) -->
        <div class="lg:col-span-4 flex flex-col justify-between pr-0 lg:pr-4 border-b lg:border-b-0 lg:border-r border-slate-200/80 pb-8 lg:pb-0">
          <div>
            <!-- Eyebrow -->
            <div class="flex items-center gap-2 mb-4">
              <span class="w-6 h-6 rounded-full border border-cobalt/30 text-cobalt text-xs font-bold flex items-center justify-center bg-white">
                08
              </span>
              <span class="text-xs font-bold tracking-wider text-cobalt uppercase">
                THE PEOPLE BEHIND THE WORK
              </span>
            </div>

            <!-- Team Image Preview -->
            <div class="rounded-2xl overflow-hidden bg-slate-100 aspect-[16/9] mb-4 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=350&fit=crop" 
                alt="Impact Bridge team members and school partners"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Headline -->
            <h3 class="text-lg font-bold text-slate-900 leading-snug">
              A distributed team. A locally carried mission.
            </h3>
          </div>

          <!-- CTA Link -->
          <div class="mt-6">
            <NuxtLink 
              to="/team" 
              class="inline-flex items-center gap-1.5 text-xs font-bold text-cobalt hover:underline group"
            >
              <span>Meet our team and partners</span>
              <ArrowRight class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </NuxtLink>
          </div>
        </div>

        <!-- Section 09: How Your Support Creates Change (Middle Column) -->
        <div class="lg:col-span-5 flex flex-col justify-between px-0 lg:px-4 border-b lg:border-b-0 lg:border-r border-slate-200/80 pb-8 lg:pb-0">
          <div>
            <!-- Eyebrow -->
            <div class="flex items-center gap-2 mb-4">
              <span class="w-6 h-6 rounded-full border border-cobalt/30 text-cobalt text-xs font-bold flex items-center justify-center bg-white">
                09
              </span>
              <span class="text-xs font-bold tracking-wider text-cobalt uppercase">
                HOW YOUR SUPPORT CREATES CHANGE
              </span>
            </div>

            <!-- Action Cards (Side-by-side inside middle column) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- For Individuals Card -->
              <div class="rounded-2xl border border-slate-200/80 p-5 flex flex-col justify-between bg-slate-50/50">
                <div>
                  <div class="w-9 h-9 rounded-full bg-blue-50 text-cobalt flex items-center justify-center mb-3">
                    <Heart class="w-4 h-4 text-cobalt" />
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 mb-1">
                    For Individuals
                  </h4>
                  <p class="text-[11px] text-slate-600 leading-relaxed font-sans mb-4">
                    Your contribution funds hubs, content, teacher training and local implementation.
                  </p>
                </div>
                
                <NuxtLink 
                  to="/get-involved" 
                  class="w-full py-2.5 px-3 bg-cobalt hover:bg-cobalt/90 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                >
                  <MapPin class="w-3.5 h-3.5" />
                  <span>Fund the next classroom</span>
                </NuxtLink>
              </div>

              <!-- For Organisations Card -->
              <div class="rounded-2xl border border-emerald-200/80 p-5 flex flex-col justify-between bg-emerald-50/20">
                <div>
                  <div class="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                    <Building2 class="w-4 h-4 text-emerald-600" />
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 mb-1">
                    For Organisations
                  </h4>
                  <p class="text-[11px] text-slate-600 leading-relaxed font-sans mb-4">
                    Your company can fund hubs, donate suitable technology or offer expertise.
                  </p>
                </div>

                <NuxtLink 
                  to="/partnerships" 
                  class="w-full py-2.5 px-3 border border-emerald-600/80 text-emerald-700 hover:bg-emerald-50/50 bg-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Start a corporate partnership</span>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- CTA Link -->
          <div class="mt-6">
            <NuxtLink 
              to="/our-model/journey" 
              class="inline-flex items-center gap-1.5 text-xs font-bold text-cobalt hover:underline group"
            >
              <span>See the journey of equipment to classroom</span>
              <ArrowRight class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </NuxtLink>
          </div>
        </div>

        <!-- Section 10: What We Believe (Right Column) -->
        <div class="lg:col-span-3 flex flex-col justify-between pl-0 lg:pl-4">
          <div>
            <!-- Eyebrow -->
            <div class="flex items-center gap-2 mb-4">
              <span class="w-6 h-6 rounded-full border border-cobalt/30 text-cobalt text-xs font-bold flex items-center justify-center bg-white">
                10
              </span>
              <span class="text-xs font-bold tracking-wider text-cobalt uppercase">
                WHAT WE BELIEVE
              </span>
            </div>

            <!-- Beliefs List -->
            <ul class="space-y-3">
              <li 
                v-for="(belief, index) in beliefs" 
                :key="index"
                class="flex items-start gap-2.5 text-xs font-medium text-slate-800 leading-snug"
              >
                <CheckCircle2 class="w-4 h-4 text-cobalt shrink-0 mt-0.5 fill-blue-50" />
                <span>{{ belief }}</span>
              </li>
            </ul>
          </div>

          <!-- CTA Link -->
          <div class="mt-6">
            <NuxtLink 
              to="/about/values" 
              class="inline-flex items-center gap-1.5 text-xs font-bold text-cobalt hover:underline group"
            >
              <span>Read our full beliefs</span>
              <ArrowRight class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </NuxtLink>
          </div>
        </div>

      </div>
    </LayoutContainer>
  </section>
</template>