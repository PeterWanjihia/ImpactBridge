import { h } from 'vue'
import type { Component } from 'vue'

/**
 * Convert a raw SVG string (imported via Vite ?raw) into a Vue component.
 * Uses innerHTML so the SVG is injected as real DOM elements, not text.
 * Works in both SSR (Node.js) and client — no browser APIs needed.
 */
export function svgToVNode(svgString: string): Component {
  const viewBoxMatch = svgString.match(/viewBox=["']([^"']+)["']/)
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24'

  // Strip the opening <svg ...> and closing </svg> tags
  const inner = svgString
    .replace(/<svg[^>]*>/i, '')
    .replace(/<\/svg>/i, '')
    .trim()

  const markup = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="24" height="24" fill="currentColor" aria-hidden="true">${inner}</svg>`

  // A span wrapper with innerHTML — Vue will inject the parsed SVG DOM nodes
  return () =>
    h('span', {
      style: 'display:inline-flex;line-height:0',
      innerHTML: markup,
    })
}
