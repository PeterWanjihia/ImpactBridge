# Impact Bridge - Frontend Design System & UI Architecture Rules

This document outlines the design system tokens, component hierarchy, visual layout rules, and frontend implementation guidelines extracted from the **Impact Bridge System Architecture (2026)**.

---

## 1. Technical Stack & Core Principles

- **Framework**: Nuxt 4, Vue 3, TypeScript, Tailwind CSS.
- **Rendering Strategy**: SSR / Hybrid rendering (Cached SSR / ISR for editorial pages, Dynamic SSR for transactional flows).
- **Core Philosophy**: **Design system first, page composition second.**
  - Pages are views over content and operational workflows.
  - Reproduce designs with a shared visual system rather than page-specific custom styling.
  - Keep the frontend fast: use page-level caching for public content and static/ISR pre-rendering where applicable.

---

## 2. Design Tokens

### Typography
- **Editorial Headings**: Georgia / Serif display (`Georgia, serif`). Used for high-impact editorial headers, titles, and callouts to establish brand authority and narrative feel.
- **Body / Controls / Metrics / Navigation**: Arial / Sans-serif (`Arial, sans-serif`). Compact, readable, clean sans-serif for UI controls, navigation items, metrics, and body copy.

### Color Palette
- **Primary Foundation**: Navy (Deep Dark Navy for backgrounds, structural contrast, dark statement bands).
- **Primary Actions**: Cobalt / Bright Blue (Buttons, active tabs, interactive highlights).
- **Secondary Accent**: Teal (Badges, subtle secondary highlights, icon indicators).
- **Semantic Feedback**: Restrained Green (Success/Paid), Orange/Amber (Pending/Under Review), Red (Error/Failed).
- **Card Fills / Backgrounds**: Very light muted off-whites, cool slate tones, and light bordered containers.

### Spacing & Elevation
- **Spacing**: Use named section and component spacing scales (e.g., standard Tailwind scales like `py-12`, `py-16`, `gap-6`, `gap-8`). **Avoid arbitrary per-page margins/paddings.**
- **Elevation**: Rely primarily on borders (`border border-gray-200`) and subtle shadows (`shadow-sm`). Reserve stronger elevation/shadows (`shadow-lg`) for key action cards and interactive donation steppers.

---

## 3. Component Architecture & Layering Rules

The UI architecture follows a strict 5-layer hierarchy:

| Layer | Component Examples | Rules & Guidelines |
| :--- | :--- | :--- |
| **1. UI Primitives** | `Button`, `Badge`, `Input`, `Select`, `Checkbox`, `Modal`, `Tabs`, `Accordion`, `IconBadge` | **Zero business logic.** Reusable across any domain; purely controlled by props and emits. |
| **2. Layout** | `SiteHeader`, `Footer`, `SubNav`, `Container`, `Section`, `TwoColumn`, `CardGrid` | Owns grid alignment, section spacing, containment, and responsive breakpoints. |
| **3. Marketing Sections** | `HeroOverlay`, `HeroSplit`, `MetricStrip`, `QuotePanel`, `CTASection`, `MediaSplit` | Composite layout sections designed to be reused across multiple pages. |
| **4. Domain Components** | `DonationAmount`, `CampaignProgress`, `EquipmentNeedCard`, `ImpactMetric`, `StoryCard` | **Knows one domain, not one page.** Encapsulates single domain data formatting and interaction. |
| **5. Page Composition** | `HomePage`, `ImpactPage`, `DonatePage`, etc. | Arranges sections, wires composables, and loads page data. Keeps logic minimal. |

---

## 4. Visual Layout & Pattern Grammar

Consistently apply the following visual patterns across all public pages:

1. **Editorial Headers**: Large serif headings (`font-serif`) with split text colors (e.g., primary navy with bright blue accent words).
2. **Compact Metric Strips**: Stat grids featuring large numerical callouts, label text, and methodology/provenance source notes.
3. **Split Media Sections**: 2-column layouts with image/video on one side and structured content/bullet points on the other.
4. **Process Timelines**: Horizontal or vertical step sequences with numbered badges (`01`, `02`, `03`) for workflows and lifecycles.
5. **Light Bordered Cards**: Crisp, bordered containers (`border border-slate-200 rounded-lg p-6 bg-white`) for modular content cards.
6. **Dark Statement Bands**: High-contrast full-width navy sections with light typography for key organizational quotes or manifestos.
7. **Recurring CTA Bands**: Dual conversion banners (e.g., "Individual Giving" vs. "Corporate Partner") feeding primary workflows.

---

## 5. State Strategy & Data Flow Guidelines

- **No Global Store for Content**: Do not use global Pinia stores for static editorial content pages.
- **Composables First**: Use composables (`useContent`, `useImpact`, `useStories`, `useDonation`, `useEquipmentOffer`, `usePartnershipEnquiry`) for server data fetching and local form state.
- **Local Workflow State**: Keep form state local to the page unless draft persistence across routes is explicitly required.
- **Single Page Loaders / BFF**: For pages mixing content (CMS) and dynamic operational data (Go API), compose payloads in a Nuxt server route (`/server/api/...`) so the browser receives a single coherent payload.
- **Transactional Writes**: All forms (Donations, Equipment Offers, Corporate Enquiries) write directly to the **Go API**, never to Directus CMS.

---

## 6. Performance & Media Delivery Rules

- **Nuxt Image**: Use `<NuxtImg>` and responsive breakpoint sources for all photographic content.
- **Hero Optimization**: Preload hero imagery only when it is the LCP (Largest Contentful Paint) element.
- **Lazy Loading**: Lazy-load all below-the-fold image galleries, audio quote panels, and video embeds.
- **CDN Storage**: Serve asset originals via CDN (S3/Cloudflare R2); do not commit photographic libraries or large assets into the Nuxt Git repository.

---

## 7. Frontend Project Structure

```text
app/
├── pages/
│   ├── index.vue                  # Homepage
│   ├── our-story.vue              # Our Story
│   ├── our-model.vue              # Our Model
│   ├── impact/
│   │   └── index.vue              # Impact Overview
│   ├── stories/
│   │   ├── index.vue              # Stories List & Filters
│   │   └── [slug].vue             # Story Detail
│   ├── corporate-partnerships.vue # Corporate Partnerships & Lead Form
│   ├── donate/
│   │   ├── index.vue              # Donation Form & Stepper
│   │   └── complete.vue           # Post-Payment Verification
│   ├── donate-equipment.vue       # Equipment Donation Offer Form
│   └── transparency.vue           # Governance & Financials
├── components/
│   ├── ui/                        # Primitives (Button, Badge, Input)
│   ├── layout/                    # Spacing & Containers (Container, Section)
│   ├── marketing/                 # Reusable Sections (HeroSplit, QuotePanel)
│   ├── stories/                   # Story Cards, Audio Players
│   ├── impact/                    # Metric Display Cards, Methodology Blocks
│   ├── donations/                 # Stepper, Fund Selector, Amount Picker
│   ├── equipment/                 # Equipment Needs Grid, Item Batch Form
│   └── partnerships/              # Pipeline Lead Form Cards
├── composables/
│   ├── useContent.ts
│   ├── useImpact.ts
│   ├── useStories.ts
│   ├── useDonation.ts
│   ├── useEquipmentOffer.ts
│   └── usePartnershipEnquiry.ts
├── types/                         # TypeScript Domain Interfaces
├── utils/                         # Formatter & Currency Helpers
└── assets/                        # Design System CSS Tokens / Tailwind Config
```
