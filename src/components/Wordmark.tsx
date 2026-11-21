import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {THEME} from '../data';
import {fontFamily} from '../fonts';
import {spr} from '../lib/motion';

type Props = {
  text?: string;
  delay?: number;
  size?: number;
  color?: string;
  align?: 'left' | 'center' | 'right';
};

export const Wordmark: React.FC<Props> = ({
  text = 'IBOYY CREATIVE',
  delay = 0,
  size = 42,
  color = THEME.colors.white,
  align = 'center',
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const words = text.split(' ');
  return (
    <div style={{display: 'flex', gap: size * 0.28, justifyContent: align, alignItems: 'baseline'}}>
      {words.map((w, i) => {
        const p = spring({frame: frame - delay - i * 4, fps, config: spr.smooth});
        return (
          <span
            key={i}
            style={{
              fontFamily: fontFamily.display,
              fontWeight: i === 0 ? 800 : 600,
              fontSize: i === 0 ? size : size * 0.72,
              letterSpacing: i === 0 ? '0.08em' : '0.28em',
              color: i === 0 ? color : THEME.colors.cyanSoft,
              opacity: p,
              transform: `translateY(${interpolate(p, [0, 1], [18, 0])}px)`,
              filter: `blur(${interpolate(p, [0, 1], [8, 0])}px)`,
            }}
          >
            {w}
          </span>
        );
      })}
    </div>
  );
};
