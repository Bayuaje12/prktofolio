import React, {useMemo} from 'react';
import {AbsoluteFill, interpolate, random, useCurrentFrame} from 'remotion';
import {THEME} from '../data';

export const FloatingParticles: React.FC<{count?: number; seed?: string}> = ({count = 24, seed = 'p'}) => {
  const frame = useCurrentFrame();
  const particles = useMemo(
    () =>
      Array.from({length: count}).map((_, i) => ({
        x: random(`${seed}-x-${i}`) * 100,
        y: random(`${seed}-y-${i}`) * 100,
        size: 1.5 + random(`${seed}-s-${i}`) * 3.5,
        speed: 0.15 + random(`${seed}-sp-${i}`) * 0.45,
        drift: (random(`${seed}-d-${i}`) - 0.5) * 30,
        alpha: 0.15 + random(`${seed}-a-${i}`) * 0.45,
        cyan: random(`${seed}-c-${i}`) > 0.5,
      })),
    [count, seed],
  );

  return (
    <AbsoluteFill style={{pointerEvents: 'none'}}>
      {particles.map((p, i) => {
        const y = (p.y - frame * p.speed + 120) % 120 - 10;
        const x = p.x + Math.sin((frame + i * 20) * 0.015) * p.drift * 0.15;
        const o = interpolate(Math.sin((frame + i * 13) * 0.03), [-1, 1], [p.alpha * 0.3, p.alpha]);
        const color = p.cyan ? THEME.colors.cyan : THEME.colors.emeraldGlow;
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${x}%`,
              top: `${y}%`,
              width: p.size,
              height: p.size,
              borderRadius: '50%',
              background: color,
              opacity: o,
              boxShadow: `0 0 ${p.size * 4}px ${color}`,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
