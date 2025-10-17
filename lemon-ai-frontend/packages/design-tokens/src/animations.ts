/**
 * Animation design tokens for Lemon AI
 * Durations, easings, and common animation patterns
 */

export const animations = {
  // Animation durations (ms)
  duration: {
    instant: 0,
    fast: 150, // Quick interactions
    normal: 250, // Standard transitions
    slow: 400, // Emphasized transitions
    slower: 600, // Page transitions
  },

  // Easing functions
  easing: {
    // Standard easings
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',

    // Custom easings for smooth animations
    smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    elastic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },

  // Transition presets
  transition: {
    fast: {
      duration: 150,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    normal: {
      duration: 250,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    slow: {
      duration: 400,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },

  // Motion variants for framer-motion
  variants: {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    slideUp: {
      initial: { y: 20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: -20, opacity: 0 },
    },
    slideDown: {
      initial: { y: -20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: 20, opacity: 0 },
    },
    slideLeft: {
      initial: { x: 20, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: -20, opacity: 0 },
    },
    slideRight: {
      initial: { x: -20, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: 20, opacity: 0 },
    },
    scale: {
      initial: { scale: 0.95, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 0.95, opacity: 0 },
    },
  },

  // Spring animations for framer-motion
  spring: {
    gentle: {
      type: 'spring' as const,
      stiffness: 300,
      damping: 30,
    },
    bouncy: {
      type: 'spring' as const,
      stiffness: 400,
      damping: 20,
    },
    stiff: {
      type: 'spring' as const,
      stiffness: 500,
      damping: 35,
    },
  },
} as const;

export type AnimationToken = typeof animations;
