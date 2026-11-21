export const THEME = {
  colors: {
    bg: '#050807',
    bgDeep: '#020403',
    emerald: '#0F3D2E',
    emeraldBright: '#1C7A5A',
    emeraldGlow: '#34D399',
    cyan: '#22D3EE',
    cyanSoft: '#67E8F9',
    white: '#F7FBFA',
    whiteSoft: 'rgba(247,251,250,0.78)',
    whiteMuted: 'rgba(247,251,250,0.56)',
    line: 'rgba(247,251,250,0.12)',
    glass: 'rgba(255,255,255,0.06)',
    glassStrong: 'rgba(255,255,255,0.1)',
    shadow: 'rgba(0,0,0,0.35)',
  },
  fonts: {
    display: 'Sora, sans-serif',
    body: 'Inter, sans-serif',
    mono: 'JetBrains Mono, monospace',
  },
  radius: {
    card: 28,
    pill: 999,
  },
  layout: {
    safeX: 72,
    safeY: 96,
  },
} as const;

export type Theme = typeof THEME;
