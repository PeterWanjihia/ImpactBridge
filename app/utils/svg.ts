import { type VNode, h } from 'vue'
import type { Component } from 'vue'

/**
 * Convert a raw SVG string (imported via Vite ?raw) into a Vue component
 * that renders the SVG inline. Preserves the original viewBox and attributes.
 */
export function svgToVNode(svgString: string): Component {
  const parser = new DOMParser()
  const doc = parser.parseFromString(svgString, 'image/svg+xml')
  const svgEl = doc.querySelector('svg')

  if (!svgEl) {
    return { render: () => h('span') }
  }

  const viewBox = svgEl.getAttribute('viewBox') || '0 0 24 24'
  const width = svgEl.getAttribute('width') || '24'
  const height = svgEl.getAttribute('height') || '24'

  return {
    render(): VNode {
      return h('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox,
        width,
        height,
        fill: 'currentColor',
        'aria-hidden': 'true',
      }, svgEl.innerHTML)
    },
  }
}
