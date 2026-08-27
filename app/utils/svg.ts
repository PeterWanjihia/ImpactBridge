import { h } from 'vue'
import type { Component } from 'vue'

export function svgToVNode(svgString: string): Component {
  const viewBoxMatch = svgString.match(/viewBox=["']([^"']+)["']/)
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24'

  let inner = svgString
    .replace(/<svg[^>]*>/i, '')
    .replace(/<\/svg>/i, '')
    // Remove XML tags & comments if present
    .replace(/<\?xml[^>]*\?>/g, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    // Replace explicit black/colored fills and strokes inside style attributes
    .replace(/fill\s*:\s*#(?:[0-9a-fA-F]{3}){1,2}/g, 'fill:currentColor')
    .replace(/stroke\s*:\s*#(?:[0-9a-fA-F]{3}){1,2}/g, 'stroke:currentColor')
    // Replace presentation attributes
    .replace(/fill="#[0-9a-fA-F]{3,6}"/g, 'fill="currentColor"')
    .replace(/stroke="#[0-9a-fA-F]{3,6}"/g, 'stroke="currentColor"')
    .trim()

  const markup = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="24" height="24" fill="currentColor" stroke="currentColor" aria-hidden="true">${inner}</svg>`

  return () =>
    h('span', {
      style: 'display:inline-flex;line-height:0',
      innerHTML: markup,
    })
}
