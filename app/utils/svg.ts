import { type VNode, h } from 'vue'
import type { Component } from 'vue'

/**
 * Convert a raw SVG string (imported via Vite ?raw) into a Vue component
 * that renders the SVG inline. Works in both SSR and client environments.
 */
export function svgToVNode(svgString: string): Component {
  // Extract attributes with regex — no DOM dependency, safe for SSR
  const viewBoxMatch = svgString.match(/viewBox=["']([^"']+)["']/)
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24'

  // Strip the opening <svg ...> and closing </svg> tags, keep inner content
  const inner = svgString
    .replace(/<svg[^>]*>/i, '')
    .replace(/<\/svg>/i, '')
    .trim()

  return {
    render(): VNode {
      return h('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox,
        width: '24',
        height: '24',
        fill: 'currentColor',
        'aria-hidden': 'true',
      }, inner)
    },
  }
}
