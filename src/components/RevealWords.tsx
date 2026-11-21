import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {spr} from '../lib/motion';

type Props = {
  text: string;
  delay?: number;
  stagger?: number;
  style?: React.CSSProperties;
  wordStyle?: React.CSSProperties;
  by?: 'word' | 'char';
};

export const RevealWords: React.FC<Props> = ({
  text,
  delay = 0,
  stagger = 3,
  style,
  wordStyle,
  by = 'word',
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const parts = by === 'char' ? Array.from(text) : text.split(/(\s+)/);

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', ...style}}>
      {parts.map((part, i) => {
        if (by === 'word' && /^\s+$/.test(part)) {
          return <span key={i} style={{width: '0.35em'}} />;
        }
        const p = spring({frame: frame - delay - i * stagger, fps, config: spr.smooth});
        const y = interpolate(p, [0, 1], [28, 0]);
        const blur = interpolate(p, [0, 1], [10, 0]);
        return (
          <span
            key={i}
            style={{
              display: 'inline-block',
              opacity: p,
              transform: `translateY(${y}px)`,
              filter: `blur(${blur}px)`,
              whiteSpace: by === 'char' && part === ' ' ? 'pre' : undefined,
              ...wordStyle,
            }}
          >
            {part === ' ' ? '\u00A0' : part}
          </span>
        );
      })}
    </div>
  );
};
