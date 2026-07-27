/**
 * Design Tokens: Animations
 * Timing, easing functions, and animation definitions
 */

export const durations = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
} as const;

export const easings = {
  linear: 'linear',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

export type Durations = typeof durations;
export type Easings = typeof easings;
