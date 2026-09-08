/**
 * Shared SEO layer for content pages.
 *
 * Per the architecture spec, every content page receives CMS-managed
 * title, description, canonical URL, Open Graph image and optional noindex
 * control. Pages pass their (optionally reactive) values; this composable
 * renders the full head: <title>, canonical link, OG/Twitter cards and robots.
 */
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'

const DEFAULT_SITE_URL = 'https://www.impactbridge.org'

export interface PageSeoOptions {
  /** Page title — the global "| Impact Bridge" template is appended by app.head */
  title: MaybeRefOrGetter<string>
  description: MaybeRefOrGetter<string>
  /** Route path starting with "/", e.g. "/stories" or "/stories/my-slug" */
  path: MaybeRefOrGetter<string>
  /** Social card image (falls back to no og:image when omitted) */
  image?: MaybeRefOrGetter<string | undefined>
  /** Open Graph type; use 'article' for story detail pages */
  type?: 'website' | 'article'
  /** Hide the page from search engines (spec: optional noindex control) */
  noindex?: MaybeRefOrGetter<boolean | undefined>
  /** Article publish time — only rendered when type is 'article' */
  publishedTime?: MaybeRefOrGetter<string | undefined>
}

export function usePageSeo(options: PageSeoOptions) {
  const config = useRuntimeConfig()
  const siteUrl: string = config.public.siteUrl || DEFAULT_SITE_URL

  const title = computed(() => toValue(options.title))
  const description = computed(() => toValue(options.description))
  const canonicalUrl = computed(() => `${siteUrl}${toValue(options.path) || '/'}`)
  const image = computed(() => toValue(options.image))
  const robots = computed(() => (toValue(options.noindex) ? 'noindex, nofollow' : undefined))

  useHead({
    title,
    link: [{ rel: 'canonical', href: canonicalUrl }],
  })

  useSeoMeta({
    description,
    robots,
    ogType: options.type ?? 'website',
    ogUrl: canonicalUrl,
    ogTitle: title,
    ogDescription: description,
    ogImage: image,
    ogImageWidth: () => (image.value ? '1200' : undefined),
    ogImageHeight: () => (image.value ? '630' : undefined),
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image,
    ...(options.type === 'article'
      ? { articlePublishedTime: () => toValue(options.publishedTime) }
      : {}),
  })

  return { siteUrl, canonicalUrl, title, description, image }
}
