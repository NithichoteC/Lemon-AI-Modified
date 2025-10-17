/**
 * Color design tokens for Lemon AI
 * Based on @lobehub/ui and antd-style best practices
 */

export const colors = {
  // Primary brand colors - Lemon AI green
  primary: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#00b96b', // Main brand color
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  },

  // Neutral grays for dark mode
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#1f1f1f', // Main dark background
    950: '#0a0a0a',
  },

  // Semantic colors
  semantic: {
    success: '#52c41a',
    warning: '#faad14',
    error: '#ff4d4f',
    info: '#1890ff',
  },

  // Functional colors for dark theme
  dark: {
    background: {
      primary: '#0a0a0a',
      secondary: '#1f1f1f',
      tertiary: '#262626',
      elevated: '#404040',
    },
    text: {
      primary: '#ffffff',
      secondary: '#a3a3a3',
      tertiary: '#737373',
      disabled: '#525252',
    },
    border: {
      primary: '#262626',
      secondary: '#404040',
      tertiary: '#525252',
    },
  },

  // Functional colors for light theme
  light: {
    background: {
      primary: '#ffffff',
      secondary: '#fafafa',
      tertiary: '#f5f5f5',
      elevated: '#e5e5e5',
    },
    text: {
      primary: '#0a0a0a',
      secondary: '#525252',
      tertiary: '#737373',
      disabled: '#a3a3a3',
    },
    border: {
      primary: '#e5e5e5',
      secondary: '#d4d4d4',
      tertiary: '#a3a3a3',
    },
  },
} as const;

export type ColorToken = typeof colors;
