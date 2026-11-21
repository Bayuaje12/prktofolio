import {interpolate, spring} from 'remotion';

export const clamp = {
  extrapolateLeft: 'clamp',
  extrapolateRight: 'clamp',
} as const;

export const EASE = {
  smooth: [0.22, 1, 0.36, 1] as const,
  soft: [0.16, 1, 0.3, 1] as const,
};

export const spr = {
  smooth: {damping: 200},
  snappy: {damping: 20, stiffness: 180, mass: 0.8},
  gentle: {damping: 30, stiffness: 120, mass: 1},
  bouncy: {damping: 14, stiffness: 160, mass: 0.9},
};

export const revealUp = (frame: number, fps: number, delay = 0, distance = 40) => {
  const p = spring({frame: frame - delay, fps, config: spr.smooth});
  return {
    opacity: p,
    transform: `translateY(${interpolate(p, [0, 1], [distance, 0])}px)`,
  };
};

export const revealBlur = (frame: number, fps: number, delay = 0, distance = 24) => {
  const p = spring({frame: frame - delay, fps, config: spr.smooth});
  return {
    opacity: p,
    transform: `translateY(${interpolate(p, [0, 1], [distance, 0])}px)`,
    filter: `blur(${interpolate(p, [0, 1], [12, 0])}px)`,
  };
};

export const scaleIn = (frame: number, fps: number, delay = 0, from = 0.92) => {
  const p = spring({frame: frame - delay, fps, config: spr.gentle});
  return {
    opacity: p,
    transform: `scale(${interpolate(p, [0, 1], [from, 1])})`,
  };
};
