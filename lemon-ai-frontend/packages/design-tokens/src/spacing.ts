/**
 * Spacing design tokens for Lemon AI
 * Consistent spacing scale for padding, margins, gaps
 */

export const spacing = {
  // Base spacing scale (rem units)
  0: '0',
  1: '0.25rem', // 4px
  2: '0.5rem', // 8px
  3: '0.75rem', // 12px
  4: '1rem', // 16px
  5: '1.25rem', // 20px
  6: '1.5rem', // 24px
  8: '2rem', // 32px
  10: '2.5rem', // 40px
  12: '3rem', // 48px
  16: '4rem', // 64px
  20: '5rem', // 80px
  24: '6rem', // 96px
  32: '8rem', // 128px

  // Layout spacing
  layout: {
    xs: '0.5rem', // 8px - Compact spacing
    sm: '1rem', // 16px - Small spacing
    md: '1.5rem', // 24px - Medium spacing
    lg: '2rem', // 32px - Large spacing
    xl: '3rem', // 48px - Extra large spacing
  },

  // Component spacing
  component: {
    button: {
      paddingX: '1rem', // 16px horizontal padding
      paddingY: '0.5rem', // 8px vertical padding
      gap: '0.5rem', // 8px gap between icon and text
    },
    input: {
      paddingX: '0.75rem', // 12px horizontal padding
      paddingY: '0.5rem', // 8px vertical padding
    },
    card: {
      padding: '1.5rem', // 24px padding
      gap: '1rem', // 16px gap between elements
    },
    modal: {
      padding: '1.5rem', // 24px padding
      gap: '1rem', // 16px gap between elements
    },
  },

  // Border radius
  borderRadius: {
    none: '0',
    sm: '0.25rem', // 4px
    md: '0.5rem', // 8px
    lg: '0.75rem', // 12px
    xl: '1rem', // 16px
    '2xl': '1.5rem', // 24px
    full: '9999px',
  },
} as const;

export type SpacingToken = typeof spacing;
