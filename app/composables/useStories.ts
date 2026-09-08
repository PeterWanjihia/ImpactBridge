/**
 * Composable for fetching stories from the Go API
 * (GET /v1/stories with type/cursor filters, GET /v1/stories/:slug detail)
 */
import type { Story, StoriesIndexResponse } from '~/types'

export function useStories() {
  const config = useRuntimeConfig()

  interface StoryFilters {
    type?: string
    cursor?: string
    limit?: number
  }

  /**
   * Fetch stories index with filters
   */
  async function getStories(filters: StoryFilters = {}): Promise<StoriesIndexResponse> {
    try {
      const params: Record<string, any> = {}
      if (filters.type) params.type = filters.type
      if (filters.cursor) params.cursor = filters.cursor
      if (filters.limit) params.limit = filters.limit

      const data = await $fetch<StoriesIndexResponse>(`${config.public.apiUrl}/v1/stories`, { params })
      return { stories: data?.stories ?? [], nextCursor: data?.nextCursor ?? null }
    } catch (error) {
      console.error('Failed to fetch stories:', error)
      return { stories: [], nextCursor: null }
    }
  }

  /**
   * Fetch a single story by slug
   */
  async function getStory(slug: string): Promise<Story | null> {
    try {
      return await $fetch<Story>(`${config.public.apiUrl}/v1/stories/${slug}`)
    } catch (error) {
      console.error('Failed to fetch story:', error)
      return null
    }
  }

  return {
    getStories,
    getStory
  }
}
