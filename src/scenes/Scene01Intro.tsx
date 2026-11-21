import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Background, FilmGrain, FloatingParticles, RevealWords} from '../components';
import {CONTENT, THEME} from '../data';
import {fontFamily} from '../fonts';
import {spr} from '../lib/motion';

export const Scene01Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const camScale = interpolate(frame, [0, 180], [1.08, 1], {extrapolateRight: 'clamp'});
  const camY = interpolate(frame, [0, 180], [24, 0], {extrapolateRight: 'clamp'});
  const titleP = spring({frame: frame - 28, fps, config: spr.smooth});
  const ctaP = spring({frame: frame - 72, fps, config: spr.gentle});
  const clickP = spring({frame: frame - 135, fps, config: {damping: 18, stiffness: 180}});
  const clickScale = frame > 135 ? interpolate(clickP, [0, 1], [1, 0.96]) + Math.sin(frame * 0.4) * 0.005 : 1;
  const exit = interpolate(frame, [160, 180], [1, 0.96], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const exitBlur = interpolate(frame, [165, 180], [0, 8], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill style={{color: THEME.colors.white}}>
      <AbsoluteFill style={{transform: `scale(${camScale * exit}) translateY(${camY}px)`, filter: `blur(${exitBlur}px)`}}>
        <Background variant="dark" intensity={1.1} />
        <FloatingParticles count={28} seed="intro" />

        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 90,
          }}
        >
          <div style={{textAlign: 'center', width: '100%'}}>
            <div
              style={{
                fontFamily: fontFamily.mono,
                fontSize: 22,
                letterSpacing: '0.45em',
                color: THEME.colors.cyanSoft,
                opacity: interpolate(frame, [12, 30], [0, 0.85], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
                marginBottom: 28,
              }}
            >
              {CONTENT.intro.subtext.toUpperCase()}
            </div>

            <div
              style={{
                fontFamily: fontFamily.display,
                fontWeight: 800,
                fontSize: 118,
                lineHeight: 0.92,
                letterSpacing: '-0.04em',
                opacity: titleP,
                transform: `translateY(${interpolate(titleP, [0, 1], [40, 0])}px) scale(${interpolate(titleP, [0, 1], [0.96, 1])})`,
                filter: `blur(${interpolate(titleP, [0, 1], [16, 0])}px)`,
              }}
            >
              <div>CREATIVE</div>
              <div
                style={{
                  background: `linear-gradient(90deg, ${THEME.colors.emeraldGlow}, ${THEME.colors.cyan})`,
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                PORTFOLIO
              </div>
            </div>

            <div style={{marginTop: 34, display: 'flex', justifyContent: 'center'}}>
              <RevealWords
                text={CONTENT.personal.tagline}
                delay={45}
                stagger={2}
                style={{justifyContent: 'center', gap: 0}}
                wordStyle={{
                  fontFamily: fontFamily.body,
                  fontSize: 28,
                  letterSpacing: '0.12em',
                  color: THEME.colors.whiteSoft,
                }}
              />
            </div>

            <div style={{marginTop: 90, display: 'flex', justifyContent: 'center', opacity: ctaP}}>
              <div
                style={{
                  position: 'relative',
                  transform: `scale(${clickScale})`,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: -18,
                    borderRadius: 999,
                    background: `radial-gradient(circle, ${THEME.colors.cyan}33, transparent 70%)`,
                    filter: 'blur(10px)',
                  }}
                />
                <div
                  style={{
                    padding: '24px 44px',
                    borderRadius: 999,
                    border: `1px solid rgba(103,232,249,0.45)`,
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03))',
                    boxShadow: `0 0 40px rgba(34,211,238,0.14), inset 0 1px 0 rgba(255,255,255,0.18)`,
                    fontFamily: fontFamily.mono,
                    fontSize: 24,
                    letterSpacing: '0.28em',
                    color: THEME.colors.white,
                  }}
                >
                  {CONTENT.intro.cta}
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: 18,
                    height: 18,
                    marginLeft: -9,
                    marginTop: -9,
                    borderRadius: '50%',
                    border: `2px solid ${THEME.colors.cyanSoft}`,
                    opacity: interpolate(frame, [135, 150, 170], [0, 0.7, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
                    transform: `scale(${interpolate(frame, [135, 170], [0.6, 3.2], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})})`,
                  }}
                />
              </div>
            </div>
          </div>
        </AbsoluteFill>
      </AbsoluteFill>
      <FilmGrain opacity={0.04} />
    </AbsoluteFill>
  );
};
