/**
 * Design Tokens: Colors
 * Base and semantic color tokens for StormCom UI
 */

export const colors = {
  // Base colors
  primary: 'hsl(var(--primary))',
  secondary: 'hsl(var(--secondary))',
  destructive: 'hsl(var(--destructive))',
  muted: 'hsl(var(--muted))',
  accent: 'hsl(var(--accent))',
  
  // Backgrounds
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
  card: 'hsl(var(--card))',
  
  // Interactive
  input: 'hsl(var(--input))',
  border: 'hsl(var(--border))',
  ring: 'hsl(var(--ring))',
  
  // Semantic
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
} as const;

export type Colors = typeof colors;
export type ColorKey = keyof Colors;
