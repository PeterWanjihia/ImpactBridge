/**
 * Composable for fetching content from the CMS (Directus)
 */
export function useContent() {
  const config = useRuntimeConfig()

  /**
   * Fetch a page by route key
   */
  async function getPage(routeKey: string) {
    try {
      const data = await $fetch(`${config.public.cmsUrl}/items/pages`, {
        params: {
          filter: { route_key: routeKey },
          fields: ['*', 'sections.*']
        }
      })
      return data
    } catch (error) {
      console.error('Failed to fetch page:', error)
      return null
    }
  }

  /**
   * Fetch FAQ items
   */
  async function getFaqs(category?: string) {
    try {
      const params: Record<string, any> = {
        filter: { active: true },
        sort: ['order']
      }
      if (category) {
        params.filter.category = category
      }
      const data = await $fetch(`${config.public.cmsUrl}/items/faqs`, { params })
      return data
    } catch (error) {
      console.error('Failed to fetch FAQs:', error)
      return []
    }
  }

  /**
   * Fetch people/team members
   */
  async function getPeople() {
    try {
      const data = await $fetch(`${config.public.cmsUrl}/items/people`, {
        params: { sort: ['display_order'] }
      })
      return data
    } catch (error) {
      console.error('Failed to fetch people:', error)
      return []
    }
  }

  /**
   * Fetch policies
   */
  async function getPolicies() {
    try {
      const data = await $fetch(`${config.public.cmsUrl}/items/policies`)
      return data
    } catch (error) {
      console.error('Failed to fetch policies:', error)
      return []
    }
  }

  return {
    getPage,
    getFaqs,
    getPeople,
    getPolicies
  }
}
