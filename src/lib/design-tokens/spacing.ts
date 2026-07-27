/**
 * Design Tokens: Spacing
 * Consistent spacing scale based on 4px unit
 */

export const spacing = {
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '6': '1.5rem',
  '8': '2rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '32': '8rem',
} as const;

export type Spacing = typeof spacing;
export type SpacingKey = keyof Spacing;
