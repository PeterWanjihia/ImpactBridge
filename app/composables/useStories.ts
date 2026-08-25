/**
 * Composable for fetching stories from the Go API
 */
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
  async function getStories(filters: StoryFilters = {}) {
    try {
      const params: Record<string, any> = {}
      if (filters.type) params.type = filters.type
      if (filters.cursor) params.cursor = filters.cursor
      if (filters.limit) params.limit = filters.limit

      const data = await $fetch(`${config.public.apiUrl}/v1/stories`, { params })
      return data
    } catch (error) {
      console.error('Failed to fetch stories:', error)
      return { stories: [], nextCursor: null }
    }
  }

  /**
   * Fetch a single story by slug
   */
  async function getStory(slug: string) {
    try {
      const data = await $fetch(`${config.public.apiUrl}/v1/stories/${slug}`)
      return data
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
