import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {THEME} from '../data';

type Props = {
  variant?: 'dark' | 'light' | 'emerald';
  intensity?: number;
  animated?: boolean;
};

export const Background: React.FC<Props> = ({variant = 'dark', intensity = 1, animated = true}) => {
  const frame = useCurrentFrame();
  const t = animated ? frame : 0;
  const shiftA = Math.sin(t * 0.008) * 40;
  const shiftB = Math.cos(t * 0.006) * 35;
  const sweep = interpolate((t % 180), [0, 180], [-60, 160]);

  if (variant === 'light') {
    return (
      <AbsoluteFill style={{background: '#F5F8F7'}}>
        <AbsoluteFill
          style={{
            background:
              'radial-gradient(circle at 30% 20%, rgba(34,211,238,0.12), transparent 35%), radial-gradient(circle at 75% 75%, rgba(52,211,153,0.10), transparent 40%)',
          }}
        />
      </AbsoluteFill>
    );
  }

  const base = variant === 'emerald' ? '#071A14' : THEME.colors.bg;
  return (
    <AbsoluteFill style={{background: base, overflow: 'hidden'}}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse 80% 55% at ${50 + shiftA * 0.1}% ${30 + shiftB * 0.1}%, rgba(15,61,46,${0.95 * intensity}), transparent 70%)`,
        }}
      />
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse 60% 45% at ${70 - shiftA * 0.08}% ${70 + shiftB * 0.08}%, rgba(34,211,238,${0.18 * intensity}), transparent 68%)`,
        }}
      />
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse 50% 40% at ${25 + shiftB * 0.06}% ${80 - shiftA * 0.05}%, rgba(52,211,153,${0.14 * intensity}), transparent 65%)`,
        }}
      />
      <AbsoluteFill
        style={{
          background: `linear-gradient(${115 + Math.sin(t * 0.005) * 10}deg, transparent 20%, rgba(103,232,249,${0.06 * intensity}) ${sweep - 10}%, rgba(247,251,250,${0.08 * intensity}) ${sweep}%, rgba(52,211,153,${0.05 * intensity}) ${sweep + 10}%, transparent 80%)`,
          mixBlendMode: 'screen',
        }}
      />
      <AbsoluteFill
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 35%, rgba(0,0,0,0.45) 100%)',
        }}
      />
    </AbsoluteFill>
  );
};
