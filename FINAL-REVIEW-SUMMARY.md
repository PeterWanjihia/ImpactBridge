# Impact Bridge Frontend: Conversation Summary

## Scope

This conversation reviewed the frontend against `design-system-rules.md` and applied design-system, accessibility, media-delivery, and workflow fixes across the public pages.

## Page Reviews and Changes

### Homepage

- Confirmed use of the shared typography, color, spacing, radius, and elevation tokens.
- Removed nested `NuxtLink` elements inside `UiButton` controls.
- Made `UiButton` link-aware through a `to` prop.
- Updated `BridgeCTA` to use `LayoutContainer` and `UiButton`.
- Normalized prominent campaign, evidence, and giving cards to named card tokens.

### Impact page

- Removed nested links inside hero buttons.
- Migrated testimonial story actions to link-aware `UiButton` controls.
- Migrated the final impact CTA to shared buttons.
- Added a reusable `light` button variant for dark CTA bands.
- Normalized hero card styling with shared radius and spacing tokens.
- Replaced the non-functional testimonial media controls with native players: real `<audio>` for the learner quote and a real `<video>` for the teacher story.

### Our Story page

- Wired hero actions to real page anchors.
- Added stable `#reality` and `#question` anchors.
- Migrated final CTA and support actions to `UiButton`.
- Wired methodology, story, and installation actions to existing routes or anchors.
- Normalized prominent story card surfaces.
- Replaced the dead testimonial audio toggles in `EarlyResultsSection` with native `<audio>` players.

### Our Model page

- Removed nested links inside `ModelHero` buttons.
- Added accessible link-aware hero controls.
- Normalized hub, teacher video, champion card, and feature dock surfaces.
- Replaced the fake teacher video thumbnail and its no-op play button with a native `<video>` player.

### Stories listing page

- Removed nested links inside `StoriesHero` buttons.
- Migrated hero and story imagery to `NuxtImg`.
- Added responsive dimensions, `sizes`, lazy loading, and hero preloading.
- Normalized story card radius tokens.
- Replaced the new-tab video links in the hero card and story grid with inline native `<video>` players.
- Replaced the CSS waveform mock in `StoriesVoices` with a native `<audio>` player.

### Story detail page

- Updated shared `HeroOverlay` to use `NuxtImg`.
- Migrated the related-story donation CTA to `UiButton`.
- Normalized audio, quote, aside, and CTA card surfaces.
- Preserved lazy native audio/video behavior, SEO metadata, structured data, and transcript support.

### Transparency page

- Migrated hero, trustee, and newsletter imagery to `NuxtImg`.
- Migrated the hero contact action to `UiButton`.
- Normalized financial, governance, trustee, impact, and newsletter card surfaces.
- Preserved token-based chart colors and direct Go API newsletter submission.

### Corporate Partnerships page

- Migrated hero and receive-section imagery to `NuxtImg`.
- Replaced the non-functional partnership overview control with a working partnership-options anchor.
- Migrated the main hero conversation action to `UiButton`.
- Added the `#ways-to-partner` target.
- Normalized partnership card and quote surfaces.
- Preserved the enquiry form's direct Go API workflow.

### Donate page

- Fixed the custom donation amount workflow.
- Removed duplicate custom amount inputs.
- Changed `DonationAmount` to listen to `UiInput` model updates.
- Added native `min` support to `UiInput`.
- Migrated hero and closing CTA images to `NuxtImg`.
- Migrated closing actions to `UiButton`.
- Preserved stronger elevation for the main donation widget.
- Replaced the fake hero video pill (an anchor to `#how-it-works`) with a native inline `<video>` player.

### Donation completion page

- Made completion status-aware.
- Only shows confirmed success for `completed` donations.
- Added processing, unverified, failed, and refunded handling.
- Added donation references and amount details when available.
- Added return-to-donations and home actions.
- Kept the route `noindex`.

### Donate Equipment page

- Prevented false success when the equipment API does not return an offer ID.
- Required the complete create, update, and submit sequence before clearing the draft.
- Migrated hero imagery to `NuxtImg`.
- Migrated hero actions to `UiButton`.
- Normalized warning, trust bar, and form card surfaces.
- Preserved local draft persistence and direct Go API submission.

## Donation Contract Fixes

The donation workflow was corrected at the API contract boundary:

- Added `paymentMethod` to `DonationIntent`.
- Added donor `email` and `name` to the submitted payload.
- Passed the configured currency instead of hardcoding `GBP`.
- Passed payment method, currency, donor details, amount, fund, and recurring state to `createDonation`.
- Carried the opaque donation public ID through checkout as `donation_public_id`.
- Updated completion lookup to use `donation_public_id`, with compatibility for `public_id` and `publicId`.
- Made checkout URL handling work with both absolute and relative URLs.

## Newsletter and Shared Primitive Work

### Footer newsletter

- Added email validation.
- Added direct POST submission to `/v1/newsletter/subscriptions`.
- Added loading, error, disabled, and success states.
- Added newsletter form ARIA error/status attributes.

### Shared accessibility improvements

- `UiButton`: disabled/loading link behavior, `aria-disabled`, and keyboard-safe navigation.
- `UiInput`: `aria-invalid` and `aria-describedby` connections.
- `UiSelect`: `aria-invalid` and `aria-describedby` connections.
- `UiCheckbox`: `aria-invalid` and `aria-describedby` connections.
- `UiAccordion`: trigger/panel IDs, `aria-controls`, and labelled regions.
- `UiTabs`: tab/panel IDs, `aria-controls`, roving tabindex, and arrow/Home/End navigation.
- `UiModal`: initial focus, focus trapping, Escape handling, and focus restoration.

## NuxtImg Migration

Photographic and image content was migrated from native `<img>` to `NuxtImg` across shared marketing, layout, homepage, impact, model, story, partnership, transparency, donation, and equipment components.

The migration added:

- Stable width and height attributes.
- Responsive `sizes` values.
- Lazy loading for below-the-fold media.
- Preloading only for hero/LCP imagery.
- Optimized local branding and crypto asset images.

A workspace scan found no remaining native `<img>` elements under `app/`.

## Native Media Element Fixes

Mock media built from CSS — a poster image, a decorative play button, and animated waveform bars — was replaced with the real HTML media elements across the public pages. Every player now runs inline, and no media control opens a new tab.

Replaced:

- `marketing/VideoThumbnail.vue`: a CSS play overlay with no interaction at all → native `<video controls playsinline poster>`.
- `our-model/TeacherDevelopment.vue`: poster image, no-op play button, inline SVG triangle, duration badge, and `ClientOnly` placeholder → native `<video controls playsinline>`.
- `donations/DonationHero.vue`: `<a href="#how-it-works">` styled as a video pill → native inline `<video>` with a caption.
- `stories/StoriesVoices.vue`: fake play button plus animated CSS waveform bars and keyframes → native `<audio controls playsinline>`; the bars and keyframes were removed.
- `our-story/EarlyResultsSection.vue`: a `toggleAudio` handler that only flipped state, carrying an "In real app, would play actual audio" comment → native `<audio controls>` per testimonial.
- `impact/TestimonialQuotes.vue`: dead "Listen (0:20)" and "Watch teacher story" buttons → native `<audio>` for the learner quote and a native `<video>` (replacing the static still) for the teacher story.
- `stories/StoriesGrid.vue` and `stories/StoriesHero.vue`: `<a target="_blank">` wrapping the video URL → inline native `<video>` players.

New-tab playback removed:

- Dropped `target="_blank"` from the story hero and story grid video controls; both now play in place.
- The only remaining `target="_blank"` under `app/` is the PDF download in `ReportsExplore.vue`, which is correct for a document.

Data and type updates the real players required:

- `DonateHeroData` gained `videoSrc` and `videoPoster`; populated in `useDonatePage.ts`.
- `OurModelTeacher.videoUrl` was actually holding an image, so it was renamed to `posterUrl` alongside a separate `videoSrc`, and the now-unused `videoDuration` was dropped; populated in `useOurModel.ts`.
- Stories listing data: a YouTube watch-page URL, which can never play in a native player, was swapped for a direct media URL; voice `audioUrl: '#'` values became real sources and dead `storyUrl: '#'` values became real routes.
- Impact testimonial fallbacks: `mediaUrl: '#'` values became real sources in `impact/index.vue` and `TestimonialQuotes.vue`.

Placeholder media URLs use the sample hosts already present in the repository, matching the current mock-data approach.

Verified with `npm run typecheck`.

## Validation Completed

- `npm run typecheck` passes.
- `npm run build` passes after fixing a duplicate image `loading` attribute found by the production compiler.
- `git diff --check` passes.
- Targeted file diagnostics reported no errors.
- Targeted scans found no remaining nested button/link patterns in the reviewed surfaces.

## Remaining Follow-up Risks

These items were identified during the final review but were not fully refactored in this pass:

- Placeholder media sources (sample video and audio URLs) are still hardcoded in page data; real assets and poster frames should come from the CMS/API.
- Equipment draft data remains in browser `localStorage`; it should eventually use expiry, stronger minimization, explicit consent, or server-side draft storage.
- CMS and Go API composition is still handled by browser composables rather than a single Nuxt BFF payload.
- Some older components still contain arbitrary layout values and page-specific styling even though the main visual tokens are established.
- Automated unit, accessibility, and end-to-end test coverage is not yet configured.
