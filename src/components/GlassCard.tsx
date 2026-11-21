import React from 'react';
import {THEME} from '../data';

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  padding?: number;
  glow?: string;
};

export const GlassCard: React.FC<Props> = ({children, style, padding = 32, glow = THEME.colors.cyan}) => {
  return (
    <div
      style={{
        position: 'relative',
        padding,
        borderRadius: THEME.radius.card,
        background: 'linear-gradient(145deg, rgba(255,255,255,0.09), rgba(255,255,255,0.03))',
        border: '1px solid rgba(255,255,255,0.12)',
        boxShadow: `0 24px 80px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.12), 0 0 0 1px rgba(103,232,249,0.04)`,
        overflow: 'hidden',
        ...style,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: -1,
          background: `radial-gradient(circle at 20% 0%, ${glow}22, transparent 45%)`,
          pointerEvents: 'none',
        }}
      />
      <div style={{position: 'relative'}}>{children}</div>
    </div>
  );
};
