/**
 * Design Tokens
 * Centralized design token exports for StormCom
 */

export * from './colors';
export * from './spacing';
export * from './typography';
export * from './shadows';
export * from './animations';

export const designTokens = {
  colors: require('./colors').colors,
  spacing: require('./spacing').spacing,
  fonts: require('./typography').fonts,
  shadows: require('./shadows').shadows,
  durations: require('./animations').durations,
} as const;
