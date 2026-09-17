import type { MediaAsset, MediaRef } from '~/types'

/**
 * Media library — the single resolution seam for CMS media.
 *
 * The CMS `media` collection owns asset metadata (alt text, caption, credit,
 * consent status, classification) and stores only references to it; originals
 * live in R2/S3 and are delivered through the CDN (architecture Part 04 —
 * Media). Content records therefore carry a `MediaRef`, never a media URL.
 *
 * The records below are placeholder assets standing in for that collection
 * until the backend is live. They already use the delivered CMS/API shape, so
 * connecting the real source is a change to this file alone:
 *
 *   1. Replace the `LIBRARY` lookup in `resolveMedia()` with the CMS/API read,
 *      for example
 *      `$fetch<MediaAsset[]>(`${config.public.cmsUrl}/items/media`, { params })`.
 *   2. Preload the results once per request so `resolveMedia` can stay sync
 *      while page loaders assemble their payload.
 *
 * Page data keeps referencing the same asset ids and components keep reading
 * `media.url` / `media.poster`, so nothing outside this file changes.
 */

/** Delivered media assets, keyed by CMS asset id. */
const LIBRARY: Record<MediaRef, MediaAsset> = {
  'teacher-training-video': {
    id: 'teacher-training-video',
    kind: 'video',
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    poster: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    alt: 'Teacher leading a classroom training session',
    caption: 'Champion Teacher training session',
    credit: 'Impact Bridge',
    consentStatus: 'granted',
    classification: 'public',
    mimeType: 'video/mp4',
  },

  'reality-classroom-video': {
    id: 'reality-classroom-video',
    kind: 'video',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    poster: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop&crop=center',
    alt: 'Classroom learning environment',
    caption: 'A classroom before the hub arrived',
    credit: 'Impact Bridge',
    consentStatus: 'granted',
    classification: 'public',
    mimeType: 'video/mp4',
  },

  'donate-hero-video': {
    id: 'donate-hero-video',
    kind: 'video',
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    poster: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    alt: 'Learners working with offline learning resources',
    caption: 'See how your support changes lives',
    credit: 'Impact Bridge',
    consentStatus: 'granted',
    classification: 'public',
    mimeType: 'video/mp4',
  },

  'story-science-simulation-video': {
    id: 'story-science-simulation-video',
    kind: 'video',
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    poster: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80',
    alt: 'Students exploring a science simulation',
    caption: 'The lesson that made science feel visible',
    credit: 'Impact Bridge',
    consentStatus: 'granted',
    classification: 'public',
    mimeType: 'video/mp4',
  },

  'story-now-i-can-see-video': {
    id: 'story-now-i-can-see-video',
    kind: 'video',
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    poster: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    alt: 'Student in a classroom using digital lessons',
    caption: 'Now I can see what the teacher is explaining',
    credit: 'Impact Bridge',
    consentStatus: 'granted',
    classification: 'public',
    mimeType: 'video/mp4',
  },

  'story-demonstration-to-confidence-video': {
    id: 'story-demonstration-to-confidence-video',
    kind: 'video',
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    poster: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    alt: 'Champion Teacher during a training session',
    caption: 'From demonstration to confidence',
    credit: 'Impact Bridge',
    consentStatus: 'granted',
    classification: 'public',
    mimeType: 'video/mp4',
  },

  'story-donated-laptops-video': {
    id: 'story-donated-laptops-video',
    kind: 'video',
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    poster: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
    alt: 'Partner team preparing donated equipment',
    caption: 'From donated laptops to real learning',
    credit: 'Impact Bridge',
    consentStatus: 'granted',
    classification: 'public',
    mimeType: 'video/mp4',
  },

  'impact-teacher-testimonial-video': {
    id: 'impact-teacher-testimonial-video',
    kind: 'video',
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    poster: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=700&fit=crop&crop=face',
    alt: 'Champion Teacher in a classroom',
    caption: 'Teachers are leading the change',
    credit: 'Impact Bridge',
    consentStatus: 'granted',
    classification: 'public',
    mimeType: 'video/mp4',
  },

  'learner-namalwa-audio': {
    id: 'learner-namalwa-audio',
    kind: 'audio',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    alt: 'Namalwa describing how the hub changed her schooling',
    credit: 'Impact Bridge',
    consentStatus: 'granted',
    classification: 'public',
    mimeType: 'audio/mpeg',
  },

  'teacher-judith-audio': {
    id: 'teacher-judith-audio',
    kind: 'audio',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    alt: 'Teacher Judith describing how the hub changed her teaching',
    credit: 'Impact Bridge',
    consentStatus: 'granted',
    classification: 'public',
    mimeType: 'audio/mpeg',
  },

  'voice-sarah-audio': {
    id: 'voice-sarah-audio',
    kind: 'audio',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    alt: 'Sarah, Grade 6 learner, talking about a science simulation lesson',
    credit: 'Impact Bridge',
    consentStatus: 'granted',
    classification: 'public',
    mimeType: 'audio/mpeg',
  },

  'voice-james-audio': {
    id: 'voice-james-audio',
    kind: 'audio',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    alt: 'Mr. James, Champion Teacher, on preparing and delivering engaging lessons',
    credit: 'Impact Bridge',
    consentStatus: 'granted',
    classification: 'public',
    mimeType: 'audio/mpeg',
  },

  'impact-learner-testimonial-audio': {
    id: 'impact-learner-testimonial-audio',
    kind: 'audio',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    alt: 'Learner describing how digital lessons help her understand',
    credit: 'Impact Bridge',
    consentStatus: 'granted',
    classification: 'public',
    mimeType: 'audio/mpeg',
  },
}

/**
 * Resolve a media reference from a content record to its delivered asset.
 *
 * Returns `undefined` for an unknown reference so an unpublished or missing
 * asset degrades to an empty slot rather than breaking the page. Unknown
 * references are reported in development.
 */
export function resolveMedia(ref: MediaRef | undefined): MediaAsset | undefined {
  if (!ref) return undefined

  const asset = LIBRARY[ref]
  if (!asset) {
    if (import.meta.dev) {
      console.warn(`[media] Unknown media reference: ${ref}`)
    }
    return undefined
  }

  return asset
}
