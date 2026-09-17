/**
 * Design tokens for values that cannot be expressed as Tailwind classes
 * (SVG strokes/fills, chart segments, inline styles).
 *
 * Every value mirrors `tailwind.config.ts`. Never hard-code a raw hex value
 * inside a component - import from here or use the matching utility class.
 */

/** Foundation and brand palette. */
export const palette = {
  navy: '#1e3a5f',
  ink: '#011438',
  inkDeep: '#030d1a',
  inkSoft: '#0a2540',
  cobalt: '#2563eb',
  cobaltLight: '#60a5fa',
  bridge: '#1450f5',
  teal: '#0d9488',
  tealDark: '#134e4a',
  aqua: '#00c4cc',
  success: '#059669',
  warning: '#f59e0b',
  danger: '#dc2626',
} as const

export type PaletteToken = keyof typeof palette

/**
 * Ordered series used by charts, progress rings and data accents.
 * Cobalt first (primary), teal/aqua for support, warning last.
 */
export const chartSeries: readonly string[] = [
  palette.cobalt,
  palette.teal,
  palette.cobaltLight,
  palette.warning,
]

/** Semantic status tones for charts/badges, keyed by meaning. */
export const chartSeriesByMeaning = {
  cobalt: palette.cobalt,
  teal: palette.teal,
  aqua: palette.aqua,
  warning: palette.warning,
} as const

/** Named spacing scale mirrored from `tailwind.config.ts` (rem values). */
export const space = {
  sectionXs: '2.5rem',
  sectionSm: '3rem',
  section: '4rem',
  sectionLg: '5rem',
  sectionXl: '6rem',
  gutterSm: '1rem',
  gutter: '1.5rem',
  gutterLg: '2rem',
} as const

/** Named elevation scale mirrored from `tailwind.config.ts`. */
export const elevation = {
  none: 'none',
  subtle: '0 1px 2px 0 rgb(1 20 56 / 0.06)',
  raised: '0 4px 10px -2px rgb(1 20 56 / 0.08)',
  strong: '0 16px 40px -12px rgb(1 20 56 / 0.24)',
} as const

/** Typography stacks - Georgia serif display, Arial sans interface. */
export const fontStack = {
  display: 'Georgia, "Times New Roman", serif',
  sans: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
} as const
