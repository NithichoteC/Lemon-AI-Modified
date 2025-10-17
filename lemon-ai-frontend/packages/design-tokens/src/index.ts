/**
 * Design tokens for Lemon AI
 * Central export for all design tokens
 */

export * from './colors';
export * from './typography';
export * from './spacing';
export * from './animations';

// Re-export for convenience
export { colors } from './colors';
export { typography } from './typography';
export { spacing } from './spacing';
export { animations } from './animations';

// Combined design tokens object
import { colors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';
import { animations } from './animations';

export const designTokens = {
  colors,
  typography,
  spacing,
  animations,
} as const;

export type DesignTokens = typeof designTokens;
