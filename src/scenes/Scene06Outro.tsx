import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Background, FilmGrain, Wordmark} from '../components';
import {CONTENT, THEME} from '../data';
import {fontFamily} from '../fonts';
import {spr} from '../lib/motion';

export const Scene06Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const thanksP = spring({frame: frame - 10, fps, config: spr.smooth});
  const lineP = spring({frame: frame - 45, fps, config: spr.smooth});
  const tagP = spring({frame: frame - 70, fps, config: spr.smooth});
  const handle = CONTENT.socials[0]?.username ?? '@your_handle';

  return (
    <AbsoluteFill style={{color: '#0A1411', overflow: 'hidden'}}>
      <Background variant="light" />
      <AbsoluteFill
        style={{
          background: 'radial-gradient(circle at 50% 45%, rgba(255,255,255,0.85), rgba(245,248,247,0.2) 55%, rgba(220,235,230,0.25) 100%)',
        }}
      />

      <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', padding: 80}}>
        <div style={{textAlign: 'center', width: '100%'}}>
          <div
            style={{
              fontFamily: fontFamily.display,
              fontWeight: 800,
              fontSize: 132,
              lineHeight: 0.88,
              letterSpacing: '-0.06em',
              opacity: thanksP,
              transform: `translateY(${interpolate(thanksP, [0, 1], [40, 0])}px) scale(${interpolate(thanksP, [0, 1], [0.97, 1])})`,
              filter: `blur(${interpolate(thanksP, [0, 1], [18, 0])}px)`,
              color: '#09120F',
            }}
          >
            {CONTENT.outro.thanks}
          </div>

          <div
            style={{
              marginTop: 34,
              fontFamily: fontFamily.display,
              fontSize: 46,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#143D31',
              opacity: lineP,
              transform: `translateY(${interpolate(lineP, [0, 1], [20, 0])}px)`,
              filter: `blur(${interpolate(lineP, [0, 1], [8, 0])}px)`,
            }}
          >
            {CONTENT.outro.line}
          </div>

          <div
            style={{
              marginTop: 18,
              fontFamily: fontFamily.mono,
              fontSize: 22,
              letterSpacing: '0.26em',
              color: 'rgba(10,20,17,0.58)',
              opacity: tagP,
              transform: `translateY(${interpolate(tagP, [0, 1], [16, 0])}px)`,
            }}
          >
            {CONTENT.personal.tagline}
          </div>

          <div style={{marginTop: 64, opacity: spring({frame: frame - 95, fps, config: spr.smooth})}}>
            <Wordmark text={CONTENT.personal.logoWordmark} delay={95} size={46} color="#09120F" align="center" />
          </div>

          <div
            style={{
              marginTop: 28,
              fontFamily: fontFamily.body,
              fontSize: 24,
              color: 'rgba(10,20,17,0.55)',
              opacity: interpolate(frame, [120, 140], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
            }}
          >
            {handle}
          </div>
        </div>
      </AbsoluteFill>

      <FilmGrain opacity={0.025} />
    </AbsoluteFill>
  );
};
