import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
  ],
  theme: {
    extend: {
      /**
       * Colour tokens.
       *
       * `navy` is the foundation, `cobalt`/`bridge` are the action blues and
       * `teal`/`aqua` the secondary accents. `success`, `warning` and `danger`
       * are the only semantic status colours allowed (restrained use).
       *
       * Raw hex values (bg-[#0a2540], text-[#2563eb], inline `stroke="#..."`)
       * are not permitted inside components - map them to these tokens.
       */
      colors: {
        navy: {
          DEFAULT: '#1e3a5f',
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
          950: '#011438',
        },
        cobalt: {
          DEFAULT: '#2563eb',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        teal: {
          DEFAULT: '#0d9488',
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        /* Deep navy surfaces and dark bands (footer, hero, CTA panels). */
        ink: {
          DEFAULT: '#011438',
          deep: '#030d1a',
          soft: '#0a2540',
          mid: '#1a2b4c',
        },
        /* Bright bridge blue used for the highest-priority action. */
        bridge: {
          DEFAULT: '#1450f5',
          deep: '#0f43d4',
        },
        /* Cyan-leaning teal accent reserved for dark bands. */
        aqua: {
          DEFAULT: '#00c4cc',
          deep: '#00a896',
          darker: '#009182',
        },
        /* Restrained semantics only - no decorative colour families. */
        success: {
          DEFAULT: '#059669',
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        warning: {
          DEFAULT: '#d97706',
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        danger: {
          DEFAULT: '#dc2626',
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        /**
         * Neutral scale - the single source of grey for text, borders and
         * muted surfaces (`slate-*`, `zinc-*` etc. must not be used).
         */
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
      },
      /**
       * Typography tokens.
       * Georgia serif display for editorial headings; Arial sans for body,
       * controls, metrics and navigation.
       */
      fontFamily: {
        display: ['Georgia', '"Times New Roman"', 'serif'],
        serif: ['Georgia', '"Times New Roman"', 'serif'],
        sans: ['Arial', '"Helvetica Neue"', 'Helvetica', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.6875rem', // 11px - uppercase eyebrows / micro labels
        'label': '0.8125rem', // 13px - dense UI text
        'body': ['0.9375rem', { lineHeight: '1.6' }], // 15px - body copy
        'lead': ['1.0625rem', { lineHeight: '1.6' }], // 17px - intro copy
      },
      lineHeight: {
        display: '1.1',
        heading: '1.15',
        body: '1.6',
      },
      letterSpacing: {
        eyebrow: '0.14em',
        'eyebrow-wide': '0.16em',
      },
      maxWidth: {
        // Site shell width shared by header, footer, sections and pages.
        container: '1400px',
      },
      /**
       * Spacing tokens.
       * Vertical section rhythm, horizontal page gutters and component
       * rhythm. Arbitrary per-page margin/padding values are not allowed.
       */
      spacing: {
        // Vertical section rhythm
        'section-xs': '2.5rem', // 40px
        'section-sm': '3rem', // 48px
        'section-md': '3.5rem', // 56px
        'section': '4rem', // 64px
        'section-lg': '5rem', // 80px
        'section-xl': '6rem', // 96px
        // Horizontal page gutters
        'gutter-sm': '1rem', // 16px
        'gutter': '1.5rem', // 24px
        'gutter-lg': '2rem', // 32px
        // Component rhythm (cards, stacks, grid gaps)
        'card-sm': '1rem',
        'card': '1.5rem',
        'card-lg': '2rem',
        'stack-xs': '0.5rem',
        'stack-sm': '0.75rem',
        'stack': '1rem',
        'stack-lg': '1.5rem',
        'stack-xl': '2rem',
        'stack-2xl': '3rem',
      },
      /**
       * Radius tokens: `control` for buttons/inputs, `card`/`card-lg` for
       * panels and `pill` for chips, avatars and dots.
       */
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        'control': '0.75rem', // = xl
        'card': '1rem', // = 2xl
        'card-lg': '1.5rem', // = 3xl
        'pill': '9999px',
      },
      /**
       * Elevation tokens.
       * Borders carry the structure; shadow only reinforces it.
       * `elevation-3` is reserved for donation and key action cards.
       */
      boxShadow: {
        'elevation-0': 'none',
        'elevation-1': '0 1px 2px 0 rgb(1 20 56 / 0.06)',
        'elevation-2': '0 4px 10px -2px rgb(1 20 56 / 0.08)',
        'elevation-3': '0 16px 40px -12px rgb(1 20 56 / 0.24)',
      },
      /**
       * Drop-shadow mirrors of the elevation tokens, for media and
       * transparent PNGs where a box shadow cannot follow the silhouette.
       * `legibility` is the only non-elevation shadow: a tight halo for
       * icons and text sitting directly over photography.
       */
      dropShadow: {
        'elevation-1': '0 1px 2px rgb(1 20 56 / 0.06)',
        'elevation-2': '0 4px 10px -2px rgb(1 20 56 / 0.08)',
        'elevation-3': '0 16px 40px -12px rgb(1 20 56 / 0.24)',
        'legibility': '0 2px 8px rgb(1 20 56 / 0.55)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
