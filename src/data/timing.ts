/**
 * TIMING CONFIG (frames at 30fps)
 * Adjust scene durations here; Root.tsx uses these values.
 */
export const FPS = 30;

export const TIMING = {
  intro: 6 * FPS,       // 180
  profile: 10 * FPS,    // 300
  skills: 6 * FPS,      // 180
  showcase: 14 * FPS,   // 420 (most important)
  search: 11 * FPS,     // 330
  outro: 8 * FPS,       // 240
} as const;

export const TRANSITION = 18; // frames, overlap between scenes

export const TOTAL_FRAMES =
  TIMING.intro +
  TIMING.profile +
  TIMING.skills +
  TIMING.showcase +
  TIMING.search +
  TIMING.outro -
  TRANSITION * 5;

export const TOTAL_SECONDS = TOTAL_FRAMES / FPS;
