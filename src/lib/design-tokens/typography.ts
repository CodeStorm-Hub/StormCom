/**
 * Design Tokens: Typography
 * Font families, sizes, weights, and line heights
 */

export const fonts = {
  sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  serif: '"Merriweather", Georgia, serif',
  mono: '"JetBrains Mono", "Courier New", monospace',
} as const;

export const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
} as const;

export const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const;

export const lineHeights = {
  tight: 1.2,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
} as const;

export type Fonts = typeof fonts;
export type FontSizes = typeof fontSizes;
export type FontWeights = typeof fontWeights;
export type LineHeights = typeof lineHeights;
